"use client";

import { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Monitor, ChevronDown } from 'lucide-react';
import { useTheme } from '@/contexts/theme-context';
import { useTranslations } from 'next-intl';

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('theme');

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-4 h-4" />;
      case 'dark':
        return <Moon className="w-4 h-4" />;
      case 'system':
        return <Monitor className="w-4 h-4" />;
      default:
        return <Monitor className="w-4 h-4" />;
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return t('light');
      case 'dark':
        return t('dark');
      case 'system':
        return t('system');
      default:
        return t('system');
    }
  };

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-accent transition-colors"
        aria-label={t('toggleTheme')}
      >
        {getThemeIcon()}
        <span className="hidden sm:inline text-sm">{getThemeLabel()}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-card border border-border rounded-lg shadow-lg z-50">
          <div className="py-1">
            <button
              onClick={() => handleThemeChange('light')}
              className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-accent transition-colors ${
                theme === 'light' ? 'bg-accent text-accent-foreground' : ''
              }`}
            >
              <Sun className="w-4 h-4" />
              <span className="text-sm">{t('light')}</span>
            </button>
            <button
              onClick={() => handleThemeChange('dark')}
              className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-accent transition-colors ${
                theme === 'dark' ? 'bg-accent text-accent-foreground' : ''
              }`}
            >
              <Moon className="w-4 h-4" />
              <span className="text-sm">{t('dark')}</span>
            </button>
            <button
              onClick={() => handleThemeChange('system')}
              className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-accent transition-colors ${
                theme === 'system' ? 'bg-accent text-accent-foreground' : ''
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span className="text-sm">{t('system')}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 