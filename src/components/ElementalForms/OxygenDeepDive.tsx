import React from 'react';
import { Atom, Sparkles, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';

interface OxygenDeepDiveProps {
  onOpenOxygenReference: () => void;
}

export const OxygenDeepDive: React.FC<OxygenDeepDiveProps> = ({
  onOpenOxygenReference
}) => {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <Atom className="w-4 h-4" />
          Special Educational Case Study
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Oxygen as an Example: O vs O₂ vs O₃ vs H₂O
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Oxygen provides the ideal real-world textbook example to permanently master the differences between an <strong>atom</strong>, a <strong>homonuclear molecule</strong>, an <strong>allotrope</strong>, an <strong>element</strong>, and a <strong>compound</strong>.
        </p>

        <button
          onClick={onOpenOxygenReference}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-slate-800 hover:bg-indigo-100 text-indigo-700 dark:text-cyan-300 font-semibold text-xs border border-indigo-200 dark:border-indigo-800 transition-colors"
        >
          View Oxygen’s Full 118-Element Reference Profile
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 4-Way Comprehensive Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* O (Atom) */}
        <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-3xl font-black text-slate-900 dark:text-white">O</span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
              Free Atom / Radical
            </span>
          </div>

          <h3 className="font-bold text-base text-slate-900 dark:text-white">
            Atomic Oxygen
          </h3>

          <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
            <li>• <strong>What it is:</strong> A single isolated oxygen atom (8 protons, 8 neutrons, 8 electrons).</li>
            <li>• <strong>Electron Configuration:</strong> 1s² 2s² 2p⁴ with two unpaired electrons.</li>
            <li>• <strong>Stability:</strong> Highly unstable and intensely reactive free radical at room temperature.</li>
            <li>• <strong>Occurrence:</strong> Found only in upper atmosphere (thermosphere) and transient combustion flames; immediately pairs up in bulk air.</li>
          </ul>
        </div>

        {/* O₂ (Dioxygen) */}
        <div className="p-5 rounded-3xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-3xl font-black text-emerald-700 dark:text-emerald-300">O₂</span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200">
              Diatomic Elemental Substance
            </span>
          </div>

          <h3 className="font-bold text-base text-emerald-950 dark:text-emerald-200">
            Molecular Oxygen (Dioxygen)
          </h3>

          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 leading-relaxed">
            <li>• <strong>What it is:</strong> A diatomic molecule of two oxygen atoms joined by a covalent double bond (:O=O:).</li>
            <li>• <strong>Classification:</strong> The standard <em>elemental substance</em> of oxygen at standard conditions.</li>
            <li>• <strong>Properties:</strong> Colorless, odorless, non-toxic gas; essential for aerobic cellular respiration; constitutes 20.95% of air.</li>
            <li>• <strong>Paramagnetism:</strong> Has two unpaired electrons in degenerate π* antibonding molecular orbitals.</li>
          </ul>
        </div>

        {/* O₃ (Ozone) */}
        <div className="p-5 rounded-3xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-300 dark:border-teal-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-3xl font-black text-teal-700 dark:text-teal-300">O₃</span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-200 dark:bg-teal-900 text-teal-900 dark:text-teal-200">
              Polyatomic Allotrope
            </span>
          </div>

          <h3 className="font-bold text-base text-teal-950 dark:text-teal-200">
            Ozone (Trioxygen)
          </h3>

          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 leading-relaxed">
            <li>• <strong>What it is:</strong> A bent triatomic molecule (bond angle 116.8°) with resonance bonding.</li>
            <li>• <strong>Relationship to O₂:</strong> An <strong>allotrope</strong> of oxygen. Both are made of 100% oxygen atoms, but with completely different structures.</li>
            <li>• <strong>Properties:</strong> Pale blue, sharp pungent gas; powerful oxidizer and toxic pulmonary irritant.</li>
            <li>• <strong>Biological Role:</strong> Absorbs lethal solar UV-B radiation in the stratosphere, shielding the biosphere.</li>
          </ul>
        </div>

        {/* H₂O (Water) */}
        <div className="p-5 rounded-3xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-300 dark:border-blue-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-3xl font-black text-blue-700 dark:text-blue-300">H₂O</span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-200">
              Chemical Compound
            </span>
          </div>

          <h3 className="font-bold text-base text-blue-950 dark:text-blue-200">
            Water (Dihydrogen Monoxide)
          </h3>

          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 leading-relaxed">
            <li>• <strong>What it is:</strong> A chemical compound of two hydrogen atoms covalently bonded to one oxygen atom.</li>
            <li>• <strong>Why NOT an Element:</strong> It contains <strong>two DIFFERENT elements</strong> (H and O) in fixed stoichiometry.</li>
            <li>• <strong>Properties:</strong> Polar liquid at STP with strong hydrogen bonding; universal biochemical solvent.</li>
            <li>• <strong>Difference from O₂/O₃:</strong> O₂ and O₃ are elemental substances. H₂O is a compound.</li>
          </ul>
        </div>
      </div>

      {/* Summary Definition Box */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-3 shadow-xs text-xs sm:text-sm">
        <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          The Final Golden Rule of Chemical Classifications
        </h3>
        <div className="space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
          <p>
            • <strong>O</strong> is an <em>atom</em> of the element oxygen.
          </p>
          <p>
            • <strong>O₂</strong> and <strong>O₃</strong> are <em>allotropes</em> of the element oxygen. Both are <em>elemental substances</em> because they consist only of oxygen atoms.
          </p>
          <p>
            • <strong>H₂O</strong> is a <em>chemical compound</em> because it contains two different elements: hydrogen and oxygen.
          </p>
        </div>
      </div>
    </div>
  );
};
