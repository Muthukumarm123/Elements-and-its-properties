import React from 'react';
import { Activity, Zap, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, Atom } from 'lucide-react';
import { DIATOMIC_SEVEN_LIST } from '../../data/elementalFormsData';

interface WhyDiatomicSectionProps {
  onOpenElementModal: (symbol: string) => void;
  onNavigateToTopic: (topic: string) => void;
}

export const WhyDiatomicSection: React.FC<WhyDiatomicSectionProps> = ({
  onOpenElementModal,
  onNavigateToTopic
}) => {
  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          <Activity className="w-4 h-4" />
          Quantum Mechanical & Electronic Origin
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Why Are Exactly These 7 Elements Diatomic?
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Why do only <strong>Hydrogen, Nitrogen, Oxygen, Fluorine, Chlorine, Bromine, and Iodine</strong> form stable homonuclear diatomic molecules under room temperature conditions, while elements like Carbon, Silicon, Phosphorus, and Sulfur do not?
        </p>
      </div>

      {/* Core Rules for Diatomic Stability */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
          The Two Essential Thermodynamic Criteria
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 space-y-2">
            <div className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              1. Octet (or Duet) Completion in 2-Atom Pairing
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
              When two atoms of these elements share 1, 2, or 3 electron pairs, <strong>both atoms achieve completely filled valence shells simultaneously</strong>. No unbonded radical electrons remain to attack additional neighboring atoms.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800/50 space-y-2">
            <div className="font-bold text-teal-800 dark:text-teal-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              2. Effective Orbital Overlap (2p & 3p Overlap)
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
              Compact 1s and 2p orbitals permit exceptionally strong sigma (σ) and pi (π) sideways overlaps. For instance, N₂ forms an ultra-stable triple bond (945 kJ/mol) that makes a giant network energetically unfavorable.
            </p>
          </div>
        </div>
      </div>

      {/* Individual Breakdown for the 7 */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
          Element-by-Element Electronic Rationale
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DIATOMIC_SEVEN_LIST.map((item) => (
            <div
              key={item.symbol}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-black flex items-center justify-center text-xs">
                    {item.formula}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.name} ({item.formula})
                    </h3>
                    <span className="text-[10px] text-slate-500 capitalize">
                      {item.bondType} bond ({item.bondNotation})
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenElementModal(item.symbol)}
                  className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  Element Profile →
                </button>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.scientificReason}
              </p>

              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-[11px] text-slate-500 dark:text-slate-400">
                <strong>Bond Energy:</strong> {item.bondEnergyKj} kJ/mol • <strong>Length:</strong> {item.bondLengthPm} pm
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why other elements don't form diatomic gases */}
      <div className="p-6 rounded-3xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 space-y-4 text-xs sm:text-sm">
        <div className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-300 text-sm">
          <AlertCircle className="w-4 h-4 text-amber-600" />
          Why Don't Carbon or Silicon Form Diatomic Gases at Room Temperature?
        </div>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          If Carbon formed a hypothetical diatomic molecule "C₂", it would require sharing four electron pairs (a quadruple bond) to satisfy octets. However, four-fold orbital overlap between two carbon atoms creates immense electronic strain. Instead, carbon forms single or double bonds with <em>three or four neighbors</em> in infinite 3D crystalline networks (diamond, graphite). The energy released by forming multiple single bonds in a lattice far exceeds the energy of a localized C₂ molecule!
        </p>
      </div>
    </div>
  );
};
