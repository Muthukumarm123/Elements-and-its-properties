import React, { useState } from 'react';
import {
  Sparkles,
  Layers,
  ArrowRight,
  BookOpen,
  Atom,
  TrendingUp,
  Award,
  CircleDot,
  Minimize2,
  Maximize2,
  Shuffle,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { ElementData, MainNavSection, ElementalFormsSubTopic } from '../../types/chemistry';

interface HomeHeroProps {
  elements: ElementData[];
  onNavigateSection: (section: MainNavSection) => void;
  onNavigateElementalForm: (topic: ElementalFormsSubTopic) => void;
  onSelectElementModal: (symbol: string) => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  elements,
  onNavigateSection,
  onNavigateElementalForm,
  onSelectElementModal
}) => {
  // Random element spotlight
  const [spotlightSymbol, setSpotlightSymbol] = useState('O'); // Oxygen default
  const spotlightElement = elements.find(e => e.symbol === spotlightSymbol) || elements[0];

  const handleRandomizeSpotlight = () => {
    const randomIdx = Math.floor(Math.random() * elements.length);
    setSpotlightSymbol(elements[randomIdx].symbol);
  };

  const featuredElements = [
    { symbol: 'H', desc: 'Lightest element, diatomic gas (H₂)' },
    { symbol: 'C', desc: 'Basis of life, allotropes: diamond, graphite' },
    { symbol: 'O', desc: 'Respiration (O₂), UV shield (O₃)' },
    { symbol: 'Fe', desc: 'Magnetic transition metal, bulk lattice' },
    { symbol: 'Au', desc: 'Noble metal, highest malleability' },
    { symbol: 'U', desc: 'Actinide, primordial nuclear fuel' }
  ];

  return (
    <div className="space-y-10 max-w-6xl mx-auto">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-semibold text-indigo-200">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Modern Educational Chemistry Reference
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Element Atlas
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-teal-300 to-emerald-400 text-2xl sm:text-4xl mt-1">
              Periodic Table & Elemental Forms System
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A comprehensive, rigorous chemistry encyclopedia for <strong>all 118 elements</strong>, their atomic structures, properties, and periodic trends — coupled with a <strong>dedicated learning system</strong> exploring how chemical elements actually exist as physical substances in monoatomic, diatomic, and polyatomic forms.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              type="button"
              onClick={() => onNavigateSection('table')}
              className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Atom className="w-4 h-4" />
              Explore 118-Element Table
            </button>

            <button
              type="button"
              onClick={() => {
                onNavigateSection('elemental-forms');
                onNavigateElementalForm('overview');
              }}
              className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Layers className="w-4 h-4" />
              Enter Elemental Forms Guide
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-800/80">
          <div className="space-y-0.5">
            <span className="text-2xl sm:text-3xl font-black text-indigo-400">118</span>
            <p className="text-xs text-slate-400 font-medium">Complete Chemical Elements</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-2xl sm:text-3xl font-black text-emerald-400">7</span>
            <p className="text-xs text-slate-400 font-medium">Homonuclear Diatomic Elements</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-2xl sm:text-3xl font-black text-teal-400">6</span>
            <p className="text-xs text-slate-400 font-medium">Monoatomic Noble Gases</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-2xl sm:text-3xl font-black text-amber-400">100%</span>
            <p className="text-xs text-slate-400 font-medium">Offline In-Memory Chemistry Data</p>
          </div>
        </div>
      </div>

      {/* Two Core Systems Highlight Cards */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
          Two Separate Educational Systems
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* System 1 Card */}
          <div className="bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-950/80 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Atom className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                System 1
              </span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                Complete 118-Element Reference
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                The authoritative atomic database covering all 118 IUPAC elements from Hydrogen (1) to Oganesson (118). Includes physical constants, electron configurations, Bohr models, oxidation states, isotopes, discovery history, and periodic trends.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span>Interactive 18-column standard periodic table layout</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span>Side-by-side element comparison tool (up to 4 elements)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span>Periodic trend charts (atomic radius, electronegativity, ionization)</span>
              </li>
            </ul>

            <button
              type="button"
              onClick={() => onNavigateSection('table')}
              className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 pt-2"
            >
              Open Periodic Table <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* System 2 Card */}
          <div className="bg-white dark:bg-slate-900 border border-emerald-100 dark:border-emerald-950/80 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                System 2
              </span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                Elemental Forms & Substance Guide
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Dedicated learning area built specifically to master how elements exist as real physical substances — explaining why single atoms bond into molecules (H₂, N₂, O₂), form polyatomic allotropes (O₃, P₄, S₈), or create giant metallic lattices.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>The Diatomic 7 mnemonic and bond dissociation analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Allotropes deep dives (Diamond vs Graphite, Red vs White P)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Interactive form explorer and self-test quiz with explanations</span>
              </li>
            </ul>

            <button
              type="button"
              onClick={() => {
                onNavigateSection('elemental-forms');
                onNavigateElementalForm('overview');
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 pt-2"
            >
              Enter Elemental Forms Guide <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Element Spotlight + Quick Jump */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Spotlight Card */}
        <div className="lg:col-span-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Element Spotlight
            </span>
            <button
              type="button"
              onClick={handleRandomizeSpotlight}
              className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Pick random element"
            >
              <Shuffle className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex flex-col items-center justify-center text-indigo-700 dark:text-indigo-300">
              <span className="text-[10px] font-bold text-slate-500">{spotlightElement.number}</span>
              <span className="text-xl font-black">{spotlightElement.symbol}</span>
            </div>
            <div>
              <h4 className="text-lg font-black text-slate-900 dark:text-white">
                {spotlightElement.name}
              </h4>
              <p className="text-xs text-slate-500 capitalize">
                {spotlightElement.category.replace('-', ' ')} • {spotlightElement.state}
              </p>
            </div>
          </div>

          <div className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60 line-clamp-3">
            {spotlightElement.appearance || spotlightElement.reactivity}
          </div>

          <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100 dark:border-slate-800">
            <span className="text-slate-500">Natural Form:</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400">
              {spotlightElement.elementalForm.standardFormula} ({spotlightElement.elementalForm.molecularOrNonMolecular})
            </span>
          </div>

          <button
            type="button"
            onClick={() => onSelectElementModal(spotlightElement.symbol)}
            className="w-full py-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold hover:opacity-90 transition-all text-center"
          >
            View Full {spotlightElement.name} Profile
          </button>
        </div>

        {/* Featured Elements Grid */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Quick Reference Benchmarks
            </h3>
            <span className="text-xs text-slate-500">Frequently Studied</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {featuredElements.map(item => {
              const el = elements.find(e => e.symbol === item.symbol);
              if (!el) return null;
              return (
                <button
                  key={item.symbol}
                  type="button"
                  onClick={() => onSelectElementModal(item.symbol)}
                  className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 bg-slate-50/50 dark:bg-slate-800/40 text-left transition-all hover:scale-[1.02] flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center shrink-0">
                    <span className="text-[9px] text-slate-400 font-bold">{el.number}</span>
                    <span className="text-sm font-black text-indigo-600 dark:text-indigo-400">{el.symbol}</span>
                  </div>
                  <div className="space-y-0.5 overflow-hidden">
                    <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      {el.name}
                    </div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-tight">
                      {item.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick shortcuts to Elemental Forms topics */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2 items-center text-xs">
            <span className="text-slate-500 font-medium">Elemental Forms Shortcuts:</span>
            <button
              type="button"
              onClick={() => {
                onNavigateSection('elemental-forms');
                onNavigateElementalForm('diatomic-seven');
              }}
              className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-semibold hover:bg-emerald-100"
            >
              The Diatomic 7
            </button>
            <button
              type="button"
              onClick={() => {
                onNavigateSection('elemental-forms');
                onNavigateElementalForm('allotropes');
              }}
              className="px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 font-semibold hover:bg-teal-100"
            >
              Allotropes
            </button>
            <button
              type="button"
              onClick={() => {
                onNavigateSection('elemental-forms');
                onNavigateElementalForm('common-mistakes');
              }}
              className="px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 font-semibold hover:bg-amber-100"
            >
              Common Mistakes
            </button>
            <button
              type="button"
              onClick={() => {
                onNavigateSection('elemental-forms');
                onNavigateElementalForm('quick-revision');
              }}
              className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-semibold hover:bg-indigo-100"
            >
              Self-Test Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
