import React from 'react';
import { Minimize2, Sparkles, Activity, ShieldCheck, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { DIATOMIC_SEVEN_LIST } from '../../data/elementalFormsData';

interface DiatomicSectionProps {
  onSelectElementModal: (symbol: string) => void;
  onNavigateToTopic: (topic: string) => void;
}

export const DiatomicSection: React.FC<DiatomicSectionProps> = ({
  onSelectElementModal,
  onNavigateToTopic
}) => {
  return (
    <div className="space-y-8 max-w-4xl">
      {/* Hero Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          <Minimize2 className="w-4 h-4" />
          Homonuclear Diatomic Molecules
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          What is a Diatomic Element?
        </h1>

        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 leading-relaxed">
          <p>
            <strong>Definition:</strong> A <strong>diatomic molecule</strong> is a chemical molecule that contains <strong>exactly two atoms</strong> chemically bonded together.
          </p>
          <p className="mt-1.5 text-xs text-emerald-800 dark:text-emerald-300">
            When both atoms are of the same chemical element, it is called a <em>homonuclear diatomic elemental substance</em>.
          </p>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Under ordinary standard ambient conditions, exactly <strong>seven chemical elements</strong> naturally exist as homonuclear diatomic molecules. These seven elements are commonly taught worldwide as <strong>The Diatomic 7</strong>.
        </p>
      </div>

      {/* Highly Visible Learning Card: The 7 Diatomic Elements */}
      <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-5">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-200 block">
              Core Chemistry Reference
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              THE 7 DIATOMIC ELEMENTS
            </h2>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md">
            H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂
          </span>
        </div>

        {/* 7 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {DIATOMIC_SEVEN_LIST.map((d) => (
            <div
              key={d.symbol}
              onClick={() => onSelectElementModal(d.symbol)}
              className="p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 cursor-pointer transition-all hover:scale-105 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-mono text-emerald-200 font-bold">{d.symbol}</span>
                  <span className="capitalize text-[10px] bg-black/20 px-1.5 py-0.5 rounded">
                    {d.stateAtSTP}
                  </span>
                </div>
                <div className="font-mono font-black text-2xl tracking-tight mb-0.5">
                  {d.formula}
                </div>
                <div className="font-bold text-sm text-emerald-100">{d.name}</div>
              </div>

              <div className="mt-3 pt-2 border-t border-white/15 flex items-center justify-between text-[11px] font-mono">
                <span>{d.bondNotation}</span>
                <span className="text-emerald-200 font-semibold">{d.bondType}</span>
              </div>
            </div>
          ))}

          {/* Quick Mnemonic teaser box */}
          <div
            onClick={() => onNavigateToTopic('diatomic-seven')}
            className="p-3.5 rounded-2xl bg-white text-slate-900 border border-white cursor-pointer transition-all hover:scale-105 flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">
                Memory Aid
              </span>
              <div className="font-black text-base mt-1 text-slate-900">
                "Have No Fear Of Ice Cold Beer"
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                H₂ • N₂ • F₂ • O₂ • I₂ • Cl₂ • Br₂
              </p>
            </div>
            <div className="mt-2 text-xs font-bold text-emerald-600 flex items-center gap-1">
              <span>View Memory Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Why Are These Elements Diatomic? */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-indigo-500" />
            Why Are These Elements Diatomic?
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            The fundamental physics of covalent bonding, valence electron sharing, and energetic stability.
          </p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm">
          {/* Hydrogen */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                1. Dihydrogen (H₂) — The 1s Duet Octet Mimic
              </h4>
              <span className="font-mono text-xs font-bold text-indigo-600 dark:text-cyan-400">
                H–H (Single Bond, 436 kJ/mol)
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              An isolated hydrogen atom has only one electron in its 1s orbital. It needs exactly one additional electron to achieve the closed-shell configuration of helium (1s²). By overlapping their spherical 1s orbitals head-on, two hydrogen atoms share a pair of electrons in a sigma (σ) bond. Forming H₂ releases 436 kJ/mol of energy, making the molecule vastly more stable than separated H atoms.
            </p>
          </div>

          {/* Nitrogen */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                2. Dinitrogen (N₂) — The Formidable Triple Bond
              </h4>
              <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                N≡N (Triple Bond, 945 kJ/mol)
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              A nitrogen atom has 5 valence electrons (2s² 2p³) and needs 3 more electrons for an octet. When two nitrogen atoms combine, they share three pairs of electrons (six electrons in total: one σ bond and two mutually perpendicular π bonds). This creates an exceptionally short bond (1.10 Å) and an immense bond dissociation energy of <strong>945 kJ/mol</strong>, explaining why nitrogen gas constitutes 78% of Earth’s atmosphere and is chemically inert at standard conditions.
            </p>
          </div>

          {/* Oxygen */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                3. Dioxygen (O₂) — The Double Bond & Paramagnetism
              </h4>
              <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400">
                O=O (Double Bond, 498 kJ/mol)
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              An oxygen atom has 6 valence electrons (2s² 2p⁴) and requires 2 electrons to complete an octet. Sharing two pairs forms a net double bond (one σ bond and two half-π bonds). Interestingly, molecular orbital theory reveals that the two highest-energy electrons occupy separate degenerate π* antibonding orbitals with parallel spins, rendering ground-state O₂ <strong>paramagnetic</strong> (liquid oxygen is drawn into magnetic fields).
            </p>
          </div>

          {/* Halogens */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                4. The Halogens (F₂, Cl₂, Br₂, I₂) — Single Sigma Bonds
              </h4>
              <span className="font-mono text-xs font-bold text-purple-600 dark:text-purple-400">
                X–X (Single Bond)
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Each halogen atom has 7 valence electrons (s²p⁵) and requires only 1 electron to complete its octet. Sharing one pair of p-electrons creates a single covalent σ bond (:Ẍ–Ẍ:), leaving each halogen atom surrounded by three non-bonding lone pairs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
