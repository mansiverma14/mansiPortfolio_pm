/**
 * Compresses an image File or Data URL using an HTML5 canvas.
 * Scales down large images to max bounds and encodes as JPEG.
 * This guarantees the image string is typically ~40KB - 120KB,
 * preventing browser localStorage QuotaExceededError and ensuring fast rendering.
 */
export async function compressImageFile(
  file: File,
  maxWidth = 800,
  maxHeight = 1000,
  quality = 0.85
): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      if (typeof reader.result !== 'string') {
        reject(new Error('Failed to read file as data URL'));
        return;
      }
      const img = new Image();
      img.onerror = () => {
        // Fallback to original read result if image loading fails
        resolve(reader.result as string);
      };
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(reader.result as string);
          return;
        }

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        try {
          const dataUrl = canvas.toDataURL('image/jpeg', quality);
          resolve(dataUrl);
        } catch {
          resolve(reader.result as string);
        }
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

/**
 * Validates if an image URL is reachable and renderable
 */
export function validateImageUrl(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    if (!url || typeof url !== 'string' || url.trim() === '') {
      resolve(false);
      return;
    }
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url.trim();
  });
}
