import React, { useState, useEffect, useRef } from 'react';
import { ElementData } from '../../types/chemistry';
import { Search, X, Sparkles, ArrowRight } from 'lucide-react';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  elements: ElementData[];
  onSelectElement: (element: ElementData) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  elements,
  onSelectElement
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // open search trigger
        }
      }
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = query.trim()
    ? elements.filter((e) => {
        const q = query.toLowerCase().trim();
        return (
          e.name.toLowerCase().includes(q) ||
          e.symbol.toLowerCase().includes(q) ||
          e.number.toString() === q ||
          e.elementalForm.standardFormula.toLowerCase().includes(q) ||
          e.category.toLowerCase().includes(q)
        );
      }).slice(0, 8)
    : elements.slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 border-b border-slate-100 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400 shrink-0 ml-1" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search all 118 elements by name, symbol, number (e.g. Oxygen, O₂, Fe, 79)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-3.5 py-4 text-sm bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none font-medium"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results list */}
        <div className="p-3 max-h-80 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/60">
          {results.length > 0 ? (
            results.map((el) => (
              <button
                key={el.number}
                onClick={() => {
                  onSelectElement(el);
                  onClose();
                }}
                className="w-full p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 flex items-center justify-between text-left transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-11 rounded-lg bg-indigo-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col justify-between p-1 font-mono text-center shrink-0">
                    <span className="text-[9px] text-slate-400 font-bold">{el.number}</span>
                    <span className="text-xs font-black text-slate-900 dark:text-white">
                      {el.symbol}
                    </span>
                  </div>

                  <div>
                    <div className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                      <span>{el.name}</span>
                      <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.2 rounded border border-emerald-200 dark:border-emerald-800">
                        {el.elementalForm.standardFormula}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 capitalize">
                      {el.category.replace('-', ' ')} • Period {el.period}, {el.state}
                    </div>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
              </button>
            ))
          ) : (
            <div className="p-8 text-center text-xs text-slate-500">
              No matching elements found for "{query}".
            </div>
          )}
        </div>

        {/* Footer tip */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Press ESC to close</span>
          <span>118 chemical elements available offline</span>
        </div>
      </div>
    </div>
  );
};
