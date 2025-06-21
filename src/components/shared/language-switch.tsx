"use client";

import { useLanguage } from '@/contexts/language-context';
import { Globe } from 'lucide-react';

export default function LanguageSwitch() {
  const { currentLocale, setLanguage, availableLocales } = useLanguage();

  const getLanguageLabel = (locale: string) => {
    switch (locale) {
      case 'en':
        return 'EN';
      case 'pt':
        return 'PT';
      default:
        return locale.toUpperCase();
    }
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent transition-colors">
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{getLanguageLabel(currentLocale)}</span>
      </button>
      
      <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-1">
          {availableLocales.map((locale) => (
            <button
              key={locale}
              onClick={() => setLanguage(locale)}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-accent transition-colors ${
                currentLocale === locale ? 'bg-accent text-accent-foreground' : ''
              }`}
            >
              {getLanguageLabel(locale)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 