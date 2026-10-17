import React from 'react';
import {
  ArrowLeft,
  BookOpen,
  CircleDot,
  Minimize2,
  Maximize2,
  Link2,
  Activity,
  Flame,
  Layers,
  HelpCircle,
  FileText,
  BookmarkCheck,
  Shapes,
  Atom,
  TableProperties,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Sparkles
} from 'lucide-react';
import { ElementalFormsSubTopic } from '../../types/chemistry';

interface ElementalFormsSidebarProps {
  currentSubTopic: ElementalFormsSubTopic;
  onSelectSubTopic: (topic: ElementalFormsSubTopic) => void;
  onReturnToMain: () => void;
  onCloseMobileMenu?: () => void;
}

interface TopicGroup {
  groupName: string;
  items: {
    id: ElementalFormsSubTopic;
    label: string;
    icon: React.ReactNode;
    badge?: string;
  }[];
}

export const ElementalFormsSidebar: React.FC<ElementalFormsSidebarProps> = ({
  currentSubTopic,
  onSelectSubTopic,
  onReturnToMain,
  onCloseMobileMenu
}) => {
  const topicGroups: TopicGroup[] = [
    {
      groupName: 'Foundations',
      items: [
        { id: 'overview', label: 'Overview: What is an Elemental Substance?', icon: <BookOpen className="w-3.5 h-3.5" /> },
        { id: 'formula-rules', label: 'Elemental Formula Rules', icon: <FileText className="w-3.5 h-3.5" />, badge: 'Rules' },
        { id: 'why-molecules-form', label: 'Why Elements Form Molecules', icon: <Lightbulb className="w-3.5 h-3.5" /> }
      ]
    },
    {
      groupName: 'Atomic Classifications',
      items: [
        { id: 'monoatomic', label: 'Monoatomic Elements', icon: <CircleDot className="w-3.5 h-3.5" />, badge: 'He, Ne...' },
        { id: 'diatomic', label: 'Diatomic Elements', icon: <Minimize2 className="w-3.5 h-3.5" />, badge: '7 Elements' },
        { id: 'why-diatomic', label: 'Why Are These Elements Diatomic?', icon: <Activity className="w-3.5 h-3.5" /> },
        { id: 'bond-types', label: 'Diatomic Bond Types (Single, Double, Triple)', icon: <Link2 className="w-3.5 h-3.5" /> },
        { id: 'diatomic-by-state', label: 'Diatomic Elements by State', icon: <Layers className="w-3.5 h-3.5" /> },
        { id: 'diatomic-seven', label: 'The Diatomic 7 Memory Guide', icon: <BookmarkCheck className="w-3.5 h-3.5" />, badge: 'Mnemonic' },
        { id: 'polyatomic', label: 'Polyatomic Elements (O₃, P₄, S₈)', icon: <Maximize2 className="w-3.5 h-3.5" /> },
        { id: 'oxygen-example', label: 'Oxygen Deep Dive (O, O₂, O₃ vs H₂O)', icon: <Atom className="w-3.5 h-3.5" />, badge: 'Case Study' }
      ]
    },
    {
      groupName: 'Structures & Bonding',
      items: [
        { id: 'allotropes', label: 'Allotropes (C, P, S, Sn, O)', icon: <Shapes className="w-3.5 h-3.5" />, badge: 'Structural' },
        { id: 'molecular-vs-nonmolecular', label: 'Molecular vs Non-Molecular Elements', icon: <Layers className="w-3.5 h-3.5" /> },
        { id: 'common-molecules', label: 'Common Elemental Molecules Gallery', icon: <Sparkles className="w-3.5 h-3.5" /> }
      ]
    },
    {
      groupName: 'Periodic Organization',
      items: [
        { id: 'by-state', label: 'Elemental Forms by State (Gas, Liq, Solid)', icon: <Activity className="w-3.5 h-3.5" /> },
        { id: 'by-group', label: 'Elemental Forms by Group', icon: <TableProperties className="w-3.5 h-3.5" /> },
        { id: 'by-period', label: 'Elemental Forms by Period', icon: <TableProperties className="w-3.5 h-3.5" /> }
      ]
    },
    {
      groupName: 'Interactive Tools & Revision',
      items: [
        { id: 'explorer', label: 'Elemental Form Explorer', icon: <Sliders className="w-3.5 h-3.5" />, badge: 'Interactive' },
        { id: 'comparison', label: 'Elemental Form Comparison Tool', icon: <Link2 className="w-3.5 h-3.5" /> },
        { id: 'common-mistakes', label: 'Common Mistakes & Misconceptions', icon: <AlertTriangle className="w-3.5 h-3.5" />, badge: 'Must Read' },
        { id: 'quick-revision', label: 'Quick Revision & Self-Test', icon: <CheckCircle2 className="w-3.5 h-3.5" />, badge: 'Quiz' }
      ]
    }
  ];

  const handleSelect = (id: ElementalFormsSubTopic) => {
    onSelectSubTopic(id);
    if (onCloseMobileMenu) onCloseMobileMenu();
  };

  return (
    <aside className="w-72 shrink-0 flex flex-col h-[calc(100vh-4rem)] sticky top-16 bg-slate-50 dark:bg-slate-900/95 border-r border-emerald-200/70 dark:border-emerald-900/50 overflow-y-auto">
      {/* Return to System 1 Header Button */}
      <div className="p-3 border-b border-emerald-100 dark:border-emerald-900/40 bg-emerald-500/10 dark:bg-emerald-950/40">
        <button
          onClick={onReturnToMain}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 shadow-xs transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:-translate-x-0.5 transition-transform" />
          <span>Return to 118-Element Reference</span>
        </button>

        <div className="mt-2.5 px-1 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            System 2: Elemental Forms
          </span>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-200/70 dark:bg-emerald-900/80 text-emerald-900 dark:text-emerald-200">
            21 Topics
          </span>
        </div>
      </div>

      {/* Topics list */}
      <nav className="p-3 space-y-4 flex-1">
        {topicGroups.map((group, groupIdx) => (
          <div key={groupIdx} className="space-y-1">
            <div className="px-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
              {group.groupName}
            </div>

            {group.items.map((item) => {
              const isActive = currentSubTopic === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all text-left group ${
                    isActive
                      ? 'bg-emerald-600 text-white font-semibold shadow-xs shadow-emerald-600/30'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-emerald-100/60 dark:hover:bg-emerald-950/40 hover:text-emerald-950 dark:hover:text-emerald-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0 pr-1">
                    <span
                      className={`shrink-0 ${
                        isActive
                          ? 'text-white'
                          : 'text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700'
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span className="truncate">{item.label}</span>
                  </div>

                  {item.badge && (
                    <span
                      className={`shrink-0 text-[9px] font-bold px-1.5 py-0.5 rounded ${
                        isActive
                          ? 'bg-emerald-800 text-emerald-100'
                          : 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
};
