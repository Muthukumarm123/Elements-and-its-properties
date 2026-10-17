import React from 'react';
import { BookOpen, Sparkles, CheckCircle2, ArrowRight, Layers, Atom, HelpCircle } from 'lucide-react';

interface ElementalFormsOverviewProps {
  onSelectTopic: (topic: any) => void;
  onOpenElementByName: (symbol: string) => void;
}

export const ElementalFormsOverview: React.FC<ElementalFormsOverviewProps> = ({
  onSelectTopic,
  onOpenElementByName
}) => {
  return (
    <div className="space-y-8 max-w-4xl">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-indigo-500/10 border border-emerald-200/80 dark:border-emerald-900/60 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
          <Sparkles className="w-4 h-4" />
          System 2 • Chemistry Reference & Learning System
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          How Chemical Elements Exist as Elemental Substances
        </h1>

        <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          In chemistry, elements do not simply exist as isolated abstract symbols on paper. Under real-world conditions, atoms join together in specific structural arrangements: individual unbonded atoms (monoatomic), paired molecules (diatomic), molecular clusters (polyatomic), or infinite crystalline lattices (metallic and network solids).
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => onSelectTopic('monoatomic')}
            className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition-colors"
          >
            1. Monoatomic (He, Ne, Ar...)
          </button>
          <button
            onClick={() => onSelectTopic('diatomic')}
            className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition-colors"
          >
            2. Diatomic (H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂)
          </button>
          <button
            onClick={() => onSelectTopic('polyatomic')}
            className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition-colors"
          >
            3. Polyatomic (O₃, P₄, S₈)
          </button>
          <button
            onClick={() => onSelectTopic('allotropes')}
            className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition-colors"
          >
            4. Allotropes (Diamond, Graphite...)
          </button>
        </div>
      </div>

      {/* Fundamental Question: What is an Elemental Substance? */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
          <HelpCircle className="w-6 h-6 text-emerald-500" />
          What is an Elemental Substance?
        </h2>

        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          An <strong>elemental substance</strong> (sometimes called a "simple substance" or "elemental matter") is a pure chemical substance that is composed exclusively of atoms of the <strong>same single chemical element</strong>.
        </p>

        {/* 6-Way Comparative Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <span className="font-bold text-indigo-700 dark:text-cyan-300 text-sm block">
              1. An Element (Abstract Concept)
            </span>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              A specific species of atom characterized by its atomic number (number of protons). For example, <em>Hydrogen</em> is the element with 1 proton.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <span className="font-bold text-indigo-700 dark:text-cyan-300 text-sm block">
              2. An Atom of an Element
            </span>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              A single microscopic particle consisting of one nucleus and its electron cloud. Symbolized simply as <strong>H</strong>.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 space-y-1.5">
            <span className="font-bold text-emerald-800 dark:text-emerald-300 text-sm block">
              3. An Elemental Substance
            </span>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              The bulk physical substance containing only atoms of that element. Dihydrogen gas (<strong>H₂</strong>) is an elemental substance because it contains <em>only</em> hydrogen atoms!
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <span className="font-bold text-indigo-700 dark:text-cyan-300 text-sm block">
              4. A Molecule
            </span>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Two or more atoms covalently bound together. Molecules can be elemental (<strong>H₂</strong>, <strong>O₂</strong>, <strong>S₈</strong>) or compound molecules (<strong>H₂O</strong>, <strong>CO₂</strong>).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 space-y-1.5">
            <span className="font-bold text-rose-800 dark:text-rose-300 text-sm block">
              5. A Compound
            </span>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              A pure substance composed of two or more <strong>different</strong> chemical elements chemically combined. Water (<strong>H₂O</strong>) is a compound because it contains both H and O.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <span className="font-bold text-indigo-700 dark:text-cyan-300 text-sm block">
              6. An Ion
            </span>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              An atom or molecule that has gained or lost one or more electrons, acquiring a net electrical charge (e.g. <strong>H⁺</strong> proton, <strong>H⁻</strong> hydride).
            </p>
          </div>
        </div>
      </div>

      {/* The Famous Hydrogen Example Breakdown */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Atom className="w-5 h-5 text-indigo-500" />
          The Hydrogen Example: Clear Chemical Distinction
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center text-xs">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
            <span className="text-2xl font-mono font-black text-indigo-600 dark:text-cyan-400">H</span>
            <div className="font-bold text-slate-800 dark:text-slate-200">Hydrogen Atom</div>
            <p className="text-[11px] text-slate-500 leading-snug">
              A single isolated hydrogen atom with 1 proton and 1 electron. Unstable at room temp.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 space-y-2">
            <span className="text-2xl font-mono font-black text-emerald-600 dark:text-emerald-400">H₂</span>
            <div className="font-bold text-emerald-900 dark:text-emerald-300">Hydrogen Molecule</div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
              Two hydrogen atoms sharing a single covalent bond. Still an <strong>elemental substance</strong>!
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 space-y-2">
            <span className="text-2xl font-mono font-black text-blue-600 dark:text-blue-400">H₂O</span>
            <div className="font-bold text-blue-900 dark:text-blue-300">Water Molecule</div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
              A <strong>chemical compound</strong> because it contains hydrogen and oxygen combined.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 space-y-2">
            <span className="text-2xl font-mono font-black text-purple-600 dark:text-purple-400">H⁺</span>
            <div className="font-bold text-purple-900 dark:text-purple-300">Hydrogen Ion</div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
              A bare proton with no electrons, formed by ionization in acidic aqueous solutions.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-xs text-amber-900 dark:text-amber-300 flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <span>
            <strong>Crucial Student Takeaway:</strong> H₂ is a molecule, but it is <em>not</em> a compound. H₂ is an elemental substance. Water (H₂O) is both a molecule and a compound.
          </span>
        </div>
      </div>
    </div>
  );
};
