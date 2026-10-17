import React, { useState } from 'react';
import { Layers, TableProperties, Sparkles, Activity } from 'lucide-react';
import { ElementData } from '../../types/chemistry';

interface FormsByStateAndGroupProps {
  elements: ElementData[];
  onOpenElementModal: (symbol: string) => void;
}

export const FormsByStateAndGroup: React.FC<FormsByStateAndGroupProps> = ({
  elements,
  onOpenElementModal
}) => {
  const [viewMode, setViewMode] = useState<'state' | 'group' | 'period'>('state');

  // Groups summary
  const groupHighlights = [
    { group: 'Group 1 (Alkali Metals)', formula: 'M (Li, Na, K, Rb, Cs)', nature: 'Non-molecular metallic BCC lattice; delocalized 1s/2s/3s valence electron sea. Form no discrete molecules in bulk.' },
    { group: 'Group 14 (Carbon Family)', formula: 'C, Si, Ge, Sn, Pb', nature: 'Tremendous structural diversity! Carbon forms giant covalent networks (diamond, graphite) and molecular cages (C₆₀). Silicon and germanium form diamond cubic networks. Tin shows metallic/covalent allotropy (white vs grey tin). Lead is a metallic lattice.' },
    { group: 'Group 15 (Pnictogens)', formula: 'N₂, P₄, As, Sb, Bi', nature: 'Dramatic shift down the group: Nitrogen forms discrete N≡N triple-bonded diatomic gas. Phosphorus forms discrete P₄ tetrahedral molecules and polymeric networks. Arsenic, antimony, and bismuth form layered networks and semimetallic/metallic lattices.' },
    { group: 'Group 16 (Chalcogens)', formula: 'O₂, O₃, S₈, Se, Te, Po', nature: 'Oxygen forms diatomic O₂ and triatomic O₃ gas. Sulfur forms discrete crown-shaped S₈ rings and polymeric chains. Selenium forms Se₈ rings and helical chains. Tellurium forms helical chains; polonium is a metallic lattice.' },
    { group: 'Group 17 (Halogens)', formula: 'F₂, Cl₂, Br₂, I₂, At₂', nature: 'Classic homonuclear diatomic molecules (X₂). State shifts from gas (F₂, Cl₂) to liquid (Br₂) to solid (I₂) due to increasing London dispersion forces.' },
    { group: 'Group 18 (Noble Gases)', formula: 'He, Ne, Ar, Kr, Xe, Rn', nature: 'Monoatomic unbonded gases due to complete valence shells and bond order zero.' }
  ];

  const periodHighlights = [
    { period: 'Period 1', elements: 'H (diatomic gas H₂), He (monoatomic gas He)', note: 'Only two elements: the simplest diatomic molecule (H₂) and the simplest monoatomic gas (He).' },
    { period: 'Period 2', elements: 'Li, Be, B, C, N₂, O₂, F₂, Ne', note: 'Shifts from metallic lattices (Li, Be) to covalent network (B, C) to diatomic gases (N₂, O₂, F₂) to monoatomic gas (Ne).' },
    { period: 'Period 3', elements: 'Na, Mg, Al, Si, P₄, S₈, Cl₂, Ar', note: 'Metals (Na, Mg, Al) → Covalent network (Si) → Polyatomic molecular nonmetals (P₄, S₈) → Diatomic gas (Cl₂) → Monoatomic gas (Ar).' }
  ];

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          <TableProperties className="w-4 h-4" />
          Periodic Organization of Elemental Forms
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Elemental Forms by State, Group & Period
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          How an element exists as an elemental substance is not random: it follows deep periodic trends dictated by valence orbitals, electronegativity, and polarizability.
        </p>

        {/* View mode toggle */}
        <div className="flex items-center gap-2 pt-2 text-xs">
          <button
            onClick={() => setViewMode('state')}
            className={`px-3 py-1.5 rounded-xl font-semibold transition-all border ${
              viewMode === 'state'
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-xs'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
            }`}
          >
            By Physical State at STP
          </button>
          <button
            onClick={() => setViewMode('group')}
            className={`px-3 py-1.5 rounded-xl font-semibold transition-all border ${
              viewMode === 'group'
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-xs'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
            }`}
          >
            By Periodic Group
          </button>
          <button
            onClick={() => setViewMode('period')}
            className={`px-3 py-1.5 rounded-xl font-semibold transition-all border ${
              viewMode === 'period'
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-xs'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
            }`}
          >
            By Periodic Period
          </button>
        </div>
      </div>

      {/* STATE VIEW */}
      {viewMode === 'state' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Gases */}
            <div className="p-5 rounded-3xl bg-cyan-50/60 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-900/60 space-y-3">
              <span className="font-bold text-sm text-cyan-900 dark:text-cyan-300 block">
                11 Elemental Gases at STP
              </span>
              <div className="text-xs space-y-2 text-slate-700 dark:text-slate-300">
                <div>
                  <strong>5 Diatomic Gases:</strong>
                  <div className="font-mono font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                    H₂, N₂, O₂, F₂, Cl₂
                  </div>
                </div>
                <div>
                  <strong>6 Monoatomic Gases:</strong>
                  <div className="font-mono font-bold text-purple-600 dark:text-purple-400 mt-0.5">
                    He, Ne, Ar, Kr, Xe, Rn
                  </div>
                </div>
              </div>
            </div>

            {/* Liquids */}
            <div className="p-5 rounded-3xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/60 space-y-3">
              <span className="font-bold text-sm text-blue-900 dark:text-blue-300 block">
                Only 2 Elemental Liquids at STP
              </span>
              <div className="text-xs space-y-2 text-slate-700 dark:text-slate-300">
                <div>
                  <strong>1 Diatomic Nonmetal:</strong>
                  <div className="font-mono font-bold text-orange-600 dark:text-orange-400 mt-0.5">
                    Br₂ (Bromine)
                  </div>
                </div>
                <div>
                  <strong>1 Liquid Metal:</strong>
                  <div className="font-mono font-bold text-blue-600 dark:text-cyan-400 mt-0.5">
                    Hg (Mercury)
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 pt-1">
                  (Ga, Cs, and Fr melt just slightly above room temperature at 28–30 °C).
                </p>
              </div>
            </div>

            {/* Solids */}
            <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3">
              <span className="font-bold text-sm text-slate-900 dark:text-white block">
                105 Elemental Solids at STP
              </span>
              <div className="text-xs space-y-2 text-slate-700 dark:text-slate-300">
                <div>
                  <strong>Diatomic Solid:</strong> I₂ (Iodine)
                </div>
                <div>
                  <strong>Polyatomic Solids:</strong> P₄ (Phosphorus), S₈ (Sulfur), C₆₀
                </div>
                <div>
                  <strong>Giant Networks:</strong> C (Diamond/Graphite), Si, Ge, B
                </div>
                <div>
                  <strong>Metallic Lattices:</strong> Over 80 metals (Fe, Cu, Au, Na, Ti...)
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GROUP VIEW */}
      {viewMode === 'group' && (
        <div className="space-y-3">
          {groupHighlights.map((g) => (
            <div
              key={g.group}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-base text-slate-900 dark:text-white">{g.group}</span>
                <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">{g.formula}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {g.nature}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* PERIOD VIEW */}
      {viewMode === 'period' && (
        <div className="space-y-3">
          {periodHighlights.map((p) => (
            <div
              key={p.period}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2"
            >
              <div className="font-bold text-base text-slate-900 dark:text-white">{p.period}</div>
              <div className="font-mono text-xs text-indigo-600 dark:text-cyan-400">{p.elements}</div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {p.note}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
