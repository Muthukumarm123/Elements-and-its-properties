import React from 'react';
import { Activity, Zap, ShieldCheck, ArrowRight, TrendingDown } from 'lucide-react';

export const WhyMoleculesForm: React.FC = () => {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400">
          <Activity className="w-4 h-4" />
          Chemical Thermodynamics & Quantum Mechanics
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Why Do Chemical Elements Form Molecules?
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Nature operates on a fundamental thermodynamic principle: systems spontaneously evolve toward states of <strong>minimum potential energy</strong> and <strong>maximum energetic stability</strong>.
          Isolated atoms with incomplete valence shells have high potential energy; forming covalent bonds releases that energy into the surroundings.
        </p>
      </div>

      {/* The Potential Energy Curve Graphic & Explanation */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <TrendingDown className="w-5 h-5 text-emerald-500" />
          The Lennard-Jones Potential Energy Curve of Bond Formation
        </h2>

        {/* SVG Potential Energy Well Diagram */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 flex flex-col items-center">
          <svg className="w-full max-w-lg h-56" viewBox="0 0 500 220">
            {/* Zero energy reference line */}
            <line x1="40" y1="90" x2="480" y2="90" stroke="currentColor" strokeDasharray="4 4" className="text-slate-400" strokeWidth="1" />
            <text x="485" y="94" fontSize="10" fill="currentColor" className="text-slate-400 font-mono">E = 0</text>

            {/* Axes */}
            <line x1="60" y1="20" x2="60" y2="200" stroke="currentColor" className="text-slate-400" strokeWidth="1.5" />
            <line x1="60" y1="200" x2="480" y2="200" stroke="currentColor" className="text-slate-400" strokeWidth="1.5" />
            <text x="270" y="215" textAnchor="middle" fontSize="10" fill="currentColor" className="text-slate-500 font-medium">Internuclear Distance (r)</text>
            <text x="25" y="110" textAnchor="middle" fontSize="10" fill="currentColor" className="text-slate-500 font-medium" transform="rotate(-90 25 110)">Potential Energy (V)</text>

            {/* Potential curve: starts high on left, dips to minimum well, levels at zero on right */}
            <path
              d="M 80 25 C 90 90, 110 180, 150 180 C 190 180, 260 95, 460 90"
              fill="none"
              stroke="#6366f1"
              strokeWidth="3"
            />

            {/* Equilibrium bond length line */}
            <line x1="150" y1="90" x2="150" y2="180" stroke="#10b981" strokeWidth="1.5" strokeDasharray="2 2" />
            <circle cx="150" cy="180" r="4" fill="#10b981" />
            <text x="150" y="195" textAnchor="middle" fontSize="10" fill="#10b981" fontWeight="bold" fontFamily="monospace">r₀ (Equilibrium)</text>
            <text x="175" y="140" textAnchor="start" fontSize="9" fill="#10b981" fontWeight="bold">Bond Energy (De)</text>

            {/* Atoms visual top right (separated) */}
            <circle cx="410" cy="65" r="7" fill="#06b6d4" />
            <circle cx="440" cy="65" r="7" fill="#06b6d4" />
            <text x="425" y="50" textAnchor="middle" fontSize="9" fill="currentColor" className="text-slate-400">Separated Atoms (No interaction)</text>

            {/* Bonded atoms at well bottom */}
            <circle cx="143" cy="120" r="9" fill="#6366f1" opacity="0.8" />
            <circle cx="157" cy="120" r="9" fill="#6366f1" opacity="0.8" />
            <text x="150" y="105" textAnchor="middle" fontSize="9" fill="#6366f1" fontWeight="bold">Stable Bonded Molecule</text>
          </svg>
        </div>

        {/* 3 Physical Stages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <h4 className="font-bold text-slate-900 dark:text-white">
              1. Far Apart: Zero Interaction
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
              When two atoms are far apart, they do not feel each other’s presence. The potential energy is defined as zero.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-1.5">
            <h4 className="font-bold text-emerald-950 dark:text-emerald-200">
              2. Approach: Electrostatic Attraction
            </h4>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
              As they approach, the positive nucleus of each atom attracts the negative electron cloud of the other atom. Potential energy drops into an energetic "well" until reaching the minimum at equilibrium bond distance <strong>r₀</strong>.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 space-y-1.5">
            <h4 className="font-bold text-rose-950 dark:text-rose-200">
              3. Too Close: Nuclear Repulsion
            </h4>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
              If pushed closer than r₀, the positive nuclei repel each other violently, and inner electron shells overlap (Pauli repulsion), causing the potential energy curve to skyrocket upwards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
