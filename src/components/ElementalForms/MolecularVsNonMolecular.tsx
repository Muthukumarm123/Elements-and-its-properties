import React from 'react';
import { Layers, ShieldCheck, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';

export const MolecularVsNonMolecular: React.FC = () => {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400">
          <Layers className="w-4 h-4" />
          Structural Architectures of Pure Elements
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Molecular vs Non-Molecular Elements
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          One of the biggest misconceptions in introductory chemistry is assuming that every chemical formula represents a discrete, self-contained molecule. In reality, chemical elements divide fundamentally into <strong>molecular</strong> and <strong>non-molecular</strong> substances.
        </p>
      </div>

      {/* 4 Architectural Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
        {/* 1. Discrete Molecules */}
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-base text-slate-900 dark:text-white">
              1. Discrete Molecular Elements
            </span>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
              Molecular
            </span>
          </div>

          <div className="font-mono text-xs text-emerald-600 dark:text-emerald-400">
            H₂, N₂, O₂, O₃, F₂, Cl₂, Br₂, I₂, P₄, S₈, C₆₀
          </div>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
            Atoms join in fixed, discrete clusters via strong intramolecular covalent bonds. Individual molecules are attracted to neighboring molecules only by weak intermolecular forces (van der Waals / London dispersion).
          </p>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500">
            • <strong>Properties:</strong> Low melting and boiling points; volatile gases, liquids, or soft molecular solids; electrical insulators.
          </div>
        </div>

        {/* 2. Metallic Lattices */}
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-base text-slate-900 dark:text-white">
              2. Giant Metallic Crystalline Lattices
            </span>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
              Non-Molecular
            </span>
          </div>

          <div className="font-mono text-xs text-blue-600 dark:text-cyan-400">
            Na, Mg, Al, Fe, Cu, Ag, Au, Ti, W, Pt
          </div>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
            Over 80% of all elements on the periodic table are metals. They form continuous 3D crystalline arrays of positive metal cations held together by a shared, delocalized "sea of mobile conduction electrons".
          </p>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500">
            • <strong>Properties:</strong> High electrical and thermal conductivity; malleable, ductile, lustrous; generally high melting points.
          </div>
        </div>

        {/* 3. Giant Covalent Networks */}
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-base text-slate-900 dark:text-white">
              3. Giant Covalent Networks
            </span>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300">
              Non-Molecular
            </span>
          </div>

          <div className="font-mono text-xs text-indigo-600 dark:text-cyan-400">
            Carbon (Diamond & Graphite), Silicon, Boron, Germanium
          </div>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
            Atoms are interconnected in continuous 2D sheets (graphite) or 3D frameworks (diamond, silicon) by strong covalent bonds extending across the entire macroscopic crystal. There are no discrete small molecules.
          </p>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500">
            • <strong>Properties:</strong> Enormously high melting and sublimation points (Diamond &gt; 3800 K); extreme hardness; typically semiconductors or insulators.
          </div>
        </div>

        {/* 4. Monoatomic Gases */}
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-base text-slate-900 dark:text-white">
              4. Monoatomic Noble Gases
            </span>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300">
              Non-Molecular
            </span>
          </div>

          <div className="font-mono text-xs text-purple-600 dark:text-purple-400">
            He, Ne, Ar, Kr, Xe, Rn
          </div>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
            Individual, isolated, unbonded atoms moving independently through space. With completed valence shells, they form neither covalent bonds nor metallic networks under standard conditions.
          </p>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500">
            • <strong>Properties:</strong> Extremely low boiling points; non-reactive inert gases.
          </div>
        </div>
      </div>

      {/* The Sodium / Iron / Copper Misconception Callout */}
      <div className="p-6 rounded-3xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 space-y-3">
        <h3 className="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2 text-base">
          <AlertCircle className="w-5 h-5 text-blue-600" />
          Why We Write "Na", "Fe", and "Cu" Instead of "Na₂" or "Fe₂"
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          When writing balanced chemical equations, students sometimes ask: <em>"Why do we write O₂ for oxygen, but only Fe for iron or Na for sodium? Does sodium exist as single isolated atoms?"</em>
        </p>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong>The Answer:</strong> Solid sodium does <em>not</em> consist of isolated single Na atoms, nor does it consist of discrete Na₂ molecules. It forms an infinite 3D crystalline lattice where billions of sodium ions share delocalized electrons.
        </p>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          Because there is no fixed, discrete molecular boundary in a piece of metal, chemists write the <strong>empirical formula</strong> — simply the element’s symbol: <strong>Na</strong>, <strong>Fe</strong>, <strong>Cu</strong>, <strong>Al</strong>.
        </p>
      </div>
    </div>
  );
};
