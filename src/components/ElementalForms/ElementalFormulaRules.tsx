import React from 'react';
import { FileText, CheckCircle2, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';

export const ElementalFormulaRules: React.FC = () => {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          <FileText className="w-4 h-4" />
          Practical Chemical Writing Guide
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          How to Write the Chemical Formula for an Element
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          When writing balanced chemical equations, students often struggle to know whether to write a single letter (like <strong>H</strong>, <strong>Fe</strong>, <strong>Na</strong>) or a subscripted formula (like <strong>H₂</strong>, <strong>O₂</strong>, <strong>Cl₂</strong>).
          Follow these authoritative IUPAC rules to write flawless formulas every time.
        </p>
      </div>

      {/* Decision Tree / Rules */}
      <div className="space-y-4 text-xs sm:text-sm">
        {/* Rule 1: Diatomic 7 */}
        <div className="p-5 rounded-3xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/80 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-base text-emerald-950 dark:text-emerald-200 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Rule 1: Is it one of the "Diatomic 7"? → Write with subscript "2"
            </span>
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200">
              Subscript 2
            </span>
          </div>

          <div className="font-mono font-black text-base text-emerald-700 dark:text-emerald-300 py-1">
            H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂
          </div>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
            Whenever hydrogen, nitrogen, oxygen, fluorine, chlorine, bromine, or iodine appear as pure uncombined elemental substances in chemical reactions, you MUST write them as diatomic molecules with subscript 2.
          </p>

          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 font-mono text-xs text-slate-800 dark:text-slate-200">
            ✓ Correct: 2 <strong>H₂</strong> + <strong>O₂</strong> → 2 H₂O
            <br />
            ✗ Wrong: 2 H + O → H₂O
          </div>
        </div>

        {/* Rule 2: Noble Gases */}
        <div className="p-5 rounded-3xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/80 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-base text-purple-950 dark:text-purple-200 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-600" />
              Rule 2: Is it a Noble Gas (Group 18)? → Write as a single atom
            </span>
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-purple-200 dark:bg-purple-900 text-purple-900 dark:text-purple-200">
              No Subscript
            </span>
          </div>

          <div className="font-mono font-black text-base text-purple-700 dark:text-purple-300 py-1">
            He, Ne, Ar, Kr, Xe, Rn
          </div>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
            Noble gases are monoatomic. Never write He₂, Ne₂, or Ar₂ for pure noble gas substances.
          </p>

          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800 font-mono text-xs text-slate-800 dark:text-slate-200">
            ✓ Correct: <strong>He</strong>(g) or <strong>Ar</strong>(g)
            <br />
            ✗ Wrong: He₂(g) or Ar₂(g)
          </div>
        </div>

        {/* Rule 3: Metals */}
        <div className="p-5 rounded-3xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/80 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-base text-blue-950 dark:text-blue-200 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              Rule 3: Is it a Metal? → Write its single element symbol
            </span>
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-200">
              Empirical Symbol
            </span>
          </div>

          <div className="font-mono font-black text-base text-blue-700 dark:text-cyan-300 py-1">
            Na, Mg, Al, K, Ca, Fe, Cu, Zn, Ag, Au, Pb
          </div>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
            Metals form giant non-molecular crystalline lattices. We represent them using their empirical symbol. Never write subscripts for bulk elemental metals.
          </p>

          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800 font-mono text-xs text-slate-800 dark:text-slate-200">
            ✓ Correct: 2 <strong>Na</strong> + <strong>Cl₂</strong> → 2 NaCl
            <br />
            ✗ Wrong: Na₂ + Cl₂ → 2 NaCl
          </div>
        </div>

        {/* Rule 4: Giant Covalent Networks & Polyatomic Nonmetals */}
        <div className="p-5 rounded-3xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/80 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-base text-amber-950 dark:text-amber-200 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-600" />
              Rule 4: Giant Networks & Polyatomics (C, Si, P, S)
            </span>
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200">
              Contextual
            </span>
          </div>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
            • <strong>Carbon & Silicon:</strong> Form giant covalent networks (diamond, graphite). Always write simply as <strong>C</strong> and <strong>Si</strong>.
            <br />
            • <strong>Phosphorus & Sulfur:</strong> In high-level chemistry, white phosphorus is written as <strong>P₄</strong> and sulfur as <strong>S₈</strong>. However, in introductory equations, textbooks often simplify them to empirical <strong>P</strong> and <strong>S</strong> for balancing ease.
          </p>
        </div>
      </div>

      {/* Explicit Correction of Myth: All Gases Are Diatomic */}
      <div className="p-6 rounded-3xl bg-rose-50 dark:bg-rose-950/30 border border-rose-300 dark:border-rose-900/60 space-y-2">
        <h3 className="font-bold text-rose-950 dark:text-rose-200 flex items-center gap-2 text-base">
          <AlertTriangle className="w-5 h-5 text-rose-600" />
          Explicit Correction: "All Gases Are Diatomic" is FALSE!
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          Never teach or follow the oversimplified myth that "all gases are diatomic".
          Out of the 11 elements that are gases under standard conditions:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800">
            <span className="font-bold text-emerald-600 block mb-1">5 Diatomic Gases:</span>
            <span className="font-mono font-bold text-sm">H₂, N₂, O₂, F₂, Cl₂</span>
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800">
            <span className="font-bold text-purple-600 block mb-1">6 Monoatomic Gases:</span>
            <span className="font-mono font-bold text-sm">He, Ne, Ar, Kr, Xe, Rn</span>
          </div>
        </div>
      </div>
    </div>
  );
};
