import React from 'react';
import {
  Home,
  Grid3X3,
  ListFilter,
  ArrowLeftRight,
  Sliders,
  TrendingUp,
  GraduationCap,
  Sparkles,
  Info
} from 'lucide-react';
import { MainNavSection } from '../../types/chemistry';

interface MainSidebarProps {
  currentSection: MainNavSection;
  onNavigate: (section: MainNavSection) => void;
  onCloseMobileMenu?: () => void;
}

export const MainSidebar: React.FC<MainSidebarProps> = ({
  currentSection,
  onNavigate,
  onCloseMobileMenu
}) => {
  const navItems: { id: MainNavSection; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'table', label: 'Periodic Table', icon: <Grid3X3 className="w-4 h-4" /> },
    { id: 'elements', label: 'Elements Directory', icon: <ListFilter className="w-4 h-4" />, badge: '118' },
    { id: 'compare', label: 'Compare Elements', icon: <ArrowLeftRight className="w-4 h-4" /> },
    { id: 'properties', label: 'Properties Guide', icon: <Sliders className="w-4 h-4" /> },
    { id: 'trends', label: 'Periodic Trends', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'concepts', label: 'Chemistry Concepts', icon: <GraduationCap className="w-4 h-4" /> },
    {
      id: 'elemental-forms',
      label: 'Elemental Forms',
      icon: <Sparkles className="w-4 h-4 text-emerald-500 animate-bounce" />,
      badge: 'System 2'
    },
    { id: 'about', label: 'About', icon: <Info className="w-4 h-4" /> }
  ];

  const handleSelect = (id: MainNavSection) => {
    onNavigate(id);
    if (onCloseMobileMenu) onCloseMobileMenu();
  };

  return (
    <aside className="w-64 shrink-0 flex flex-col h-[calc(100vh-4rem)] sticky top-16 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 overflow-y-auto">
      {/* Sidebar header info */}
      <div className="p-4 border-b border-slate-100 dark:border-slate-800">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
          System 1 Navigation
        </div>
        <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
          Complete 118-Element Reference
        </div>
      </div>

      {/* Main Nav Items */}
      <nav className="p-3 space-y-1.5 flex-1">
        {navItems.map((item) => {
          const isActive = currentSection === item.id;
          const isSpecial = item.id === 'elemental-forms';

          return (
            <button
              key={item.id}
              onClick={() => handleSelect(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all group ${
                isActive
                  ? isSpecial
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold shadow-md shadow-emerald-500/20'
                    : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-cyan-300 font-semibold border border-indigo-200/60 dark:border-indigo-800/60'
                  : isSpecial
                  ? 'bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-800/40'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`${
                    isActive
                      ? isSpecial
                        ? 'text-white'
                        : 'text-indigo-600 dark:text-cyan-400'
                      : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200'
                  }`}
                >
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </div>

              {item.badge && (
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isActive && isSpecial
                      ? 'bg-emerald-800 text-emerald-100'
                      : isSpecial
                      ? 'bg-emerald-200/80 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200'
                      : isActive
                      ? 'bg-indigo-200 dark:bg-indigo-900 text-indigo-800 dark:text-cyan-200'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Featured Callout inside sidebar */}
      <div className="p-3.5 m-3 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-cyan-500/10 to-emerald-500/10 border border-indigo-200/50 dark:border-indigo-800/40 text-xs">
        <div className="font-semibold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5 mb-1">
          <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
          Dedicated Learning Area
        </div>
        <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed mb-2.5">
          Dive into monoatomic noble gases, the Diatomic 7, polyatomic allotropes, and molecular bonding rules.
        </p>
        <button
          onClick={() => handleSelect('elemental-forms')}
          className="w-full py-1.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-center transition-colors shadow-xs"
        >
          Open Elemental Forms Guide →
        </button>
      </div>
    </aside>
  );
};
