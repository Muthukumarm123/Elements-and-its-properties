import React from 'react';
import {
  Atom,
  Search,
  Moon,
  Sun,
  Layers,
  BookOpen,
  Menu,
  X,
  Compass
} from 'lucide-react';
import { MainNavSection } from '../../types/chemistry';

interface NavbarProps {
  currentSection: MainNavSection;
  onNavigate: (section: MainNavSection) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenSearch: () => void;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onOpenElement: (num: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSection,
  onNavigate,
  isDarkMode,
  onToggleDarkMode,
  onOpenSearch,
  isMobileMenuOpen,
  onToggleMobileMenu
}) => {
  const isElementalForms = currentSection === 'elemental-forms';

  return (
    <header className="sticky top-0 z-40 w-full border-b backdrop-blur-md transition-colors bg-white/90 dark:bg-slate-900/90 border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between h-16 px-4 md:px-6 max-w-7xl mx-auto">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMobileMenu}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Atom className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="font-bold text-lg leading-tight tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                Element Atlas
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800">
                  118 Ref
                </span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Comprehensive Chemistry Encyclopedia
              </div>
            </div>
          </button>
        </div>

        {/* Center Quick System Selector */}
        <div className="hidden lg:flex items-center bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200 dark:border-slate-700/60">
          <button
            onClick={() => onNavigate('table')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              !isElementalForms
                ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-cyan-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            System 1: 118-Element Reference
          </button>

          <button
            onClick={() => onNavigate('elemental-forms')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isElementalForms
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Compass className="w-4 h-4" />
            System 2: Elemental Forms Guide
          </button>
        </div>

        {/* Right Tools */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 rounded-xl hover:border-indigo-400 dark:hover:border-cyan-500 transition-colors"
          >
            <Search className="w-4 h-4 text-slate-400" />
            <span className="hidden sm:inline">Search elements...</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded shadow-xs">
              ⌘K
            </kbd>
          </button>

          {/* Elemental Forms Quick Jump (on mobile or smaller screen) */}
          <button
            onClick={() => onNavigate(isElementalForms ? 'table' : 'elemental-forms')}
            className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium flex items-center gap-1.5"
            title={isElementalForms ? 'Switch to Periodic Table' : 'Switch to Elemental Forms'}
          >
            {isElementalForms ? (
              <Layers className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
            ) : (
              <Compass className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            )}
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
