import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, XCircle, ArrowRight, BookOpen, Sparkles, Filter } from 'lucide-react';
import { COMMON_MISCONCEPTIONS } from '../../data/elementalFormsData';

interface CommonMistakesSectionProps {
  onNavigateToTopic?: (topic: string) => void;
  onSelectElementModal?: (symbol: string) => void;
}

export const CommonMistakesSection: React.FC<CommonMistakesSectionProps> = ({
  onNavigateToTopic,
  onSelectElementModal
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(COMMON_MISCONCEPTIONS[0].id);
  const [searchFilter, setSearchFilter] = useState('');

  const filtered = COMMON_MISCONCEPTIONS.filter(item =>
    item.wrongIdea.toLowerCase().includes(searchFilter.toLowerCase()) ||
    item.correctIdea.toLowerCase().includes(searchFilter.toLowerCase()) ||
    item.concreteExample.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          <AlertTriangle className="w-4 h-4" />
          Critical Chemistry Concepts
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Common Mistakes & Misconceptions in Elemental Forms
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Students and teachers frequently encounter subtle misunderstandings when transitioning from the periodic table to actual laboratory substances. Here are the 7 most widespread misconceptions, paired with precise physical and chemical explanations.
        </p>

        <div className="relative pt-2">
          <input
            type="text"
            placeholder="Search misconceptions (e.g., compound, noble gases, Fe₂)..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="w-full px-4 py-2.5 pl-10 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <Filter className="w-4 h-4 text-slate-400 absolute left-3 top-5" />
        </div>
      </div>

      {/* Cards list */}
      <div className="space-y-5">
        {filtered.map((item, idx) => {
          const isExpanded = selectedId === item.id;
          return (
            <div
              key={item.id}
              className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                isExpanded
                  ? 'bg-white dark:bg-slate-900 border-amber-300 dark:border-amber-700/60 shadow-md ring-1 ring-amber-400/30'
                  : 'bg-white/70 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {/* Card Title Header */}
              <button
                type="button"
                onClick={() => setSelectedId(isExpanded ? null : item.id)}
                className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-black">
                      #{idx + 1}
                    </span>
                    <span className="text-[11px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider flex items-center gap-1">
                      <XCircle className="w-3.5 h-3.5 inline" /> Misconception
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                    "{item.wrongIdea}"
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0">
                  {isExpanded ? 'Hide Details' : 'Expand'}
                </span>
              </button>

              {/* Expanded content */}
              {isExpanded && (
                <div className="px-5 pb-6 sm:px-6 space-y-4 border-t border-slate-100 dark:border-slate-800/80 pt-4">
                  {/* Correct Concept */}
                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                      <CheckCircle2 className="w-4 h-4" /> Scientifically Accurate Reality
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-950 dark:text-emerald-100 leading-relaxed">
                      {item.correctIdea}
                    </p>
                  </div>

                  {/* Scientific Explanation */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300">
                      <BookOpen className="w-3.5 h-3.5" /> Physical & Chemical Mechanism
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.scientificExplanation}
                    </p>
                  </div>

                  {/* Concrete Laboratory Example */}
                  <div className="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/50 flex items-start gap-2.5 text-xs text-indigo-900 dark:text-indigo-200">
                    <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold">Concrete Example: </strong>
                      {item.concreteExample}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
