import express from 'express';
import path from 'path';
import fs from 'fs';

const ROOT_DIR = process.cwd();
const DATA_DIR = path.join(ROOT_DIR, 'data');
const STORE_FILE = path.join(DATA_DIR, 'portfolio-store.json');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const UPLOADS_DIR = path.join(PUBLIC_DIR, 'uploads');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const PORTFOLIO_DATA_TS = path.join(ROOT_DIR, 'src', 'data', 'portfolioData.ts');

// Ensure directories exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Helper to safely update DEFAULT_AVATAR in src/data/portfolioData.ts
function updateAvatarInSourceFile(newAvatarUrl: string) {
  try {
    if (!fs.existsSync(PORTFOLIO_DATA_TS)) return;
    const content = fs.readFileSync(PORTFOLIO_DATA_TS, 'utf-8');
    const regex = /export const DEFAULT_AVATAR = (['"`])(.*)(['"`]);?/;
    if (regex.test(content)) {
      const updated = content.replace(regex, `export const DEFAULT_AVATAR = '${newAvatarUrl.replace(/'/g, "\\'")}';`);
      fs.writeFileSync(PORTFOLIO_DATA_TS, updated, 'utf-8');
      console.log('✅ Updated DEFAULT_AVATAR in src/data/portfolioData.ts to:', newAvatarUrl);
    }
  } catch (err) {
    console.error('⚠️ Could not update portfolioData.ts:', err);
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Increase payload limit for base64 image uploads and rich portfolio state
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));

  // Serve static public and uploads directory
  app.use(express.static(PUBLIC_DIR));
  app.use('/uploads', express.static(UPLOADS_DIR));

  // -------------------------------------------------------------
  // API ROUTES
  // -------------------------------------------------------------
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // GET current portfolio state from server store
  app.get('/api/portfolio', (req, res) => {
    try {
      if (fs.existsSync(STORE_FILE)) {
        const raw = fs.readFileSync(STORE_FILE, 'utf-8');
        const data = JSON.parse(raw);
        return res.json({ success: true, data });
      }
      return res.json({ success: true, data: null });
    } catch (error) {
      console.error('Error reading portfolio store:', error);
      res.status(500).json({ success: false, error: 'Failed to read portfolio store' });
    }
  });

  // SAVE full portfolio state to server store
  app.post('/api/portfolio', (req, res) => {
    try {
      const payload = req.body;
      if (!payload || typeof payload !== 'object') {
        return res.status(400).json({ success: false, error: 'Invalid payload' });
      }

      fs.writeFileSync(STORE_FILE, JSON.stringify(payload, null, 2), 'utf-8');

      // If globalAvatar is specified, also bake it into DEFAULT_AVATAR in portfolioData.ts for GitHub exports
      if (payload.globalAvatar && typeof payload.globalAvatar === 'string' && payload.globalAvatar.trim()) {
        updateAvatarInSourceFile(payload.globalAvatar.trim());
      }

      console.log('✅ Persisted portfolio state to server filesystem.');
      return res.json({ success: true, message: 'Portfolio saved successfully across live links!' });
    } catch (error) {
      console.error('Error saving portfolio store:', error);
      return res.status(500).json({ success: false, error: 'Failed to save portfolio data' });
    }
  });

  // Dedicated Avatar Upload & Save API (supports base64 data URLs or direct links)
  app.post('/api/portfolio/avatar', (req, res) => {
    try {
      const { avatarData } = req.body;
      if (!avatarData || typeof avatarData !== 'string') {
        return res.status(400).json({ success: false, error: 'Missing avatarData' });
      }

      let publicUrl = avatarData;

      // Handle Base64 Data URL upload
      if (avatarData.startsWith('data:image/')) {
        const match = avatarData.match(/^data:image\/([a-zA-Z0-9+]+);base64,(.+)$/);
        if (match) {
          const ext = match[1] === 'jpeg' ? 'jpg' : match[1];
          const base64Data = match[2];
          const buffer = Buffer.from(base64Data, 'base64');
          const filename = `avatar-${Date.now()}.${ext}`;
          const filePath = path.join(UPLOADS_DIR, filename);

          fs.writeFileSync(filePath, buffer);
          publicUrl = `/uploads/${filename}`;
        }
      }

      // Update store file if exists
      let storeData: any = {};
      if (fs.existsSync(STORE_FILE)) {
        try {
          storeData = JSON.parse(fs.readFileSync(STORE_FILE, 'utf-8'));
        } catch {
          storeData = {};
        }
      }
      storeData.globalAvatar = publicUrl;
      if (storeData.hero) storeData.hero.avatarUrl = publicUrl;
      if (storeData.about) storeData.about.avatarUrl = publicUrl;
      fs.writeFileSync(STORE_FILE, JSON.stringify(storeData, null, 2), 'utf-8');

      // Also update src/data/portfolioData.ts
      updateAvatarInSourceFile(publicUrl);

      console.log('✅ Global avatar updated and saved as:', publicUrl);
      return res.json({ success: true, url: publicUrl });
    } catch (error) {
      console.error('Error handling avatar upload:', error);
      return res.status(500).json({ success: false, error: 'Failed to update avatar' });
    }
  });

  // Generic Media Upload API
  app.post('/api/upload', (req, res) => {
    try {
      const { fileData, originalName } = req.body;
      if (!fileData || typeof fileData !== 'string') {
        return res.status(400).json({ success: false, error: 'Missing fileData' });
      }

      let publicUrl = fileData;
      if (fileData.startsWith('data:image/')) {
        const match = fileData.match(/^data:image\/([a-zA-Z0-9+]+);base64,(.+)$/);
        if (match) {
          const ext = match[1] === 'jpeg' ? 'jpg' : match[1];
          const base64Data = match[2];
          const buffer = Buffer.from(base64Data, 'base64');
          const cleanName = (originalName || 'upload')
            .replace(/[^a-zA-Z0-9_-]/g, '_')
            .substring(0, 30);
          const filename = `${cleanName}-${Date.now()}.${ext}`;
          const filePath = path.join(UPLOADS_DIR, filename);

          fs.writeFileSync(filePath, buffer);
          publicUrl = `/uploads/${filename}`;
        }
      }

      return res.json({ success: true, url: publicUrl });
    } catch (error) {
      console.error('Upload failed:', error);
      return res.status(500).json({ success: false, error: 'Upload failed' });
    }
  });

  // RESET API
  app.post('/api/portfolio/reset', (req, res) => {
    try {
      if (fs.existsSync(STORE_FILE)) {
        fs.unlinkSync(STORE_FILE);
      }
      return res.json({ success: true, message: 'Reset server store successfully' });
    } catch (error) {
      console.error('Error resetting store:', error);
      return res.status(500).json({ success: false, error: 'Failed to reset store' });
    }
  });

  // -------------------------------------------------------------
  // VITE DEV MIDDLEWARE / PRODUCTION STATIC SERVING
  // -------------------------------------------------------------
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Full-stack Portfolio Server running on port ${PORT}`);
  });
}

startServer();
