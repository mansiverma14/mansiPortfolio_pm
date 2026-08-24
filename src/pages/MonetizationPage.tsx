import React from 'react';
import { PageRoute } from '../types';
import { HDVideoDownloaderPage } from './HDVideoDownloaderPage';

interface MonetizationPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const MonetizationPage: React.FC<MonetizationPageProps> = ({ onNavigate }) => {
  return <HDVideoDownloaderPage onNavigate={onNavigate} />;
};
