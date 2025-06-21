"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Link, useRouter } from '@/i18n/navigation';
import LanguageSwitch from './language-switch';
import ThemeSwitch from './theme-switch';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleHashClick = (hash: string) => {
    closeMenu();
    
    // If we're not on the home page, redirect to home with hash
    if (pathname !== '/') {
      router.push(`/#${hash}`);
    } else {
      // If we're already on home page, just scroll to the section
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
            Nicolas Bispo
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleHashClick('about')}
              className="hover:text-primary transition-colors"
            >
              {t('about')}
            </button>
            <button 
              onClick={() => handleHashClick('skills')}
              className="hover:text-primary transition-colors"
            >
              {t('skills')}
            </button>
            <Link href="/projects" className="hover:text-primary transition-colors">{t('projects')}</Link>
            <button 
              onClick={() => handleHashClick('contact')}
              className="hover:text-primary transition-colors"
            >
              {t('contact')}
            </button>
            <div className="flex items-center gap-2">
              <ThemeSwitch />
              <LanguageSwitch />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeSwitch />
            <LanguageSwitch />
            <button
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleHashClick('about')}
                className="hover:text-primary transition-colors py-2 text-left"
              >
                {t('about')}
              </button>
              <button 
                onClick={() => handleHashClick('skills')}
                className="hover:text-primary transition-colors py-2 text-left"
              >
                {t('skills')}
              </button>
              <Link 
                href="/projects" 
                className="hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                {t('projects')}
              </Link>
              <button 
                onClick={() => handleHashClick('contact')}
                className="hover:text-primary transition-colors py-2 text-left"
              >
                {t('contact')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
