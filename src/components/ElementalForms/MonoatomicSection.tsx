import React from 'react';
import { CircleDot, ShieldCheck, AlertTriangle, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { ElementData } from '../../types/chemistry';

interface MonoatomicSectionProps {
  onSelectElementModal: (symbol: string) => void;
}

export const MonoatomicSection: React.FC<MonoatomicSectionProps> = ({
  onSelectElementModal
}) => {
  const nobleGases = [
    {
      num: 2,
      symbol: 'He',
      name: 'Helium',
      config: '1s²',
      desc: 'Complete 1s² duet shell. Weakest interatomic dispersion forces of any known substance; remains liquid down to absolute zero at ambient pressure.'
    },
    {
      num: 10,
      symbol: 'Ne',
      name: 'Neon',
      config: '[He] 2s² 2p⁶',
      desc: 'Complete octet with no accessible low-lying d-orbitals. Chemically the least reactive of all elements; forms no neutral ground-state molecules.'
    },
    {
      num: 18,
      symbol: 'Ar',
      name: 'Argon',
      config: '[Ne] 3s² 3p⁶',
      desc: 'Abundant atmospheric monoatomic gas (~0.93% of air). Only metastable cryogenic compounds like HArF are known below 27 K.'
    },
    {
      num: 36,
      symbol: 'Kr',
      name: 'Krypton',
      config: '[Ar] 3d¹⁰ 4s² 4p⁶',
      desc: 'Heavier polarizable noble gas. Reacts with elemental fluorine under UV irradiation to yield white crystalline krypton difluoride (KrF₂).'
    },
    {
      num: 54,
      symbol: 'Xe',
      name: 'Xenon',
      config: '[Kr] 4d¹⁰ 5s² 5p⁶',
      desc: 'Large, easily polarized electron cloud. Readily forms stable, real crystalline compounds with fluorine and oxygen: XeF₂, XeF₄, XeF₆, XeO₃.'
    },
    {
      num: 86,
      symbol: 'Rn',
      name: 'Radon',
      config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶',
      desc: 'Heaviest natural noble gas; intensely radioactive alpha emitter. Forms RnF₂ solid in laboratory micro-tracer experiments.'
    },
    {
      num: 118,
      symbol: 'Og',
      name: 'Oganesson',
      config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶',
      desc: 'Synthetic superheavy element. Strong relativistic spin-orbit effects dissolve discrete shell structure, predicting it may be a semiconductor solid rather than a gas!'
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Hero Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
          <CircleDot className="w-4 h-4" />
          Monoatomic Elemental Substances
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          What is a Monoatomic Element?
        </h1>

        <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 text-xs sm:text-sm text-purple-900 dark:text-purple-200 leading-relaxed">
          <p>
            <strong>Definition:</strong> A <strong>monoatomic elemental substance</strong> consists of isolated, unbonded individual atoms rather than molecules containing multiple atoms of the same element.
          </p>
          <div className="mt-2 text-xs font-mono">
            <strong>Etymology:</strong> <em>mono</em> = one • <em>atomic</em> = atom
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Under ordinary standard ambient temperature and pressure (STP), the chemical elements that naturally exist as monoatomic substances are the <strong>noble gases</strong> of Group 18.
        </p>
      </div>

      {/* The Noble Gases Cards */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center justify-between">
          <span>The Naturally Occurring Monoatomic Elements</span>
          <span className="text-xs font-normal text-slate-500">Group 18 (Noble Gases)</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {nobleGases.map((gas) => (
            <div
              key={gas.num}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-400 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-slate-400">#{gas.num}</span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                    Monoatomic {gas.symbol}
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-mono font-black text-slate-900 dark:text-white">
                    {gas.symbol}
                  </span>
                  <span className="font-bold text-sm text-slate-800 dark:text-slate-200">
                    {gas.name}
                  </span>
                </div>

                <div className="font-mono text-[11px] text-indigo-600 dark:text-cyan-400 mb-2">
                  {gas.config}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {gas.desc}
                </p>
              </div>

              <button
                onClick={() => onSelectElementModal(gas.symbol)}
                className="mt-4 pt-2.5 border-t border-slate-100 dark:border-slate-800 w-full flex items-center justify-between text-xs font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700"
              >
                <span>View {gas.name} Reference</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Why Noble Gases Are Monoatomic */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-indigo-500" />
          Why Are Noble Gases Generally Monoatomic?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <h4 className="font-bold text-slate-900 dark:text-white">
              1. Completely Filled Valence Shells
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Helium has a full 1s² duet shell, while Neon through Radon possess completely filled s²p⁶ octets. They have zero unpaired valence electrons in their ground states, leaving no energetically favorable drive to share electrons.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <h4 className="font-bold text-slate-900 dark:text-white">
              2. Why Noble Gases Do Not Form Diatomic Molecules (Like O₂)
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              In Molecular Orbital (MO) theory, if two helium atoms attempt to form He₂, two electrons enter the bonding σ orbital, but two electrons are forced into the antibonding σ* orbital:
              <br />
              <span className="font-mono font-bold text-indigo-600 dark:text-cyan-400">
                Bond Order = (2 - 2) / 2 = 0
              </span>
              <br />
              With a net bond order of zero, He₂ has no net chemical bonding stability!
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <h4 className="font-bold text-slate-900 dark:text-white">
              3. Extremely Weak Interatomic Forces
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Because monoatomic gas atoms are non-polar and spherically symmetric, the only forces attracting them to one another are extremely faint London dispersion forces (instantaneous induced dipoles). This is why Helium has the lowest boiling point of any substance in the universe (4.2 K).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <h4 className="font-bold text-slate-900 dark:text-white">
              4. Oganesson (Element 118) Exception
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              For superheavy Oganesson (Og), extreme relativistic effects and spin-orbit splitting cause the 7p electrons to delocalize into a uniform electron gas. Quantum calculations indicate pure oganesson at room temperature would likely be a semiconductor solid or liquid, not a classical monoatomic gas!
            </p>
          </div>
        </div>
      </div>

      {/* Debunking the Myth: Noble Gases Can Form Compounds */}
      <div className="p-6 rounded-3xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-900/60 space-y-3">
        <h3 className="text-lg font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          Major Student Misconception: "Noble Gases Never Form Compounds"
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          Do <strong>NOT</strong> teach or assume that noble gases can never form compounds! In 1962, Neil Bartlett famously isolated the first real noble gas compound, xenon hexafluoroplatinate (XePtF₆).
        </p>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          In heavier noble gases like Xenon and Krypton, the outermost valence electrons are far from the nucleus and heavily shielded by inner electron shells. When exposed to highly electronegative elements (such as Fluorine or Oxygen), real covalent and coordination bonds form easily.
        </p>
        <div className="flex flex-wrap gap-2 text-xs font-mono font-bold text-amber-800 dark:text-amber-300 pt-1">
          <span className="bg-white dark:bg-slate-900 px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-800">XeF₂ (Xenon difluoride)</span>
          <span className="bg-white dark:bg-slate-900 px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-800">XeF₄ (Xenon tetrafluoride)</span>
          <span className="bg-white dark:bg-slate-900 px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-800">XeO₃ (Xenon trioxide)</span>
          <span className="bg-white dark:bg-slate-900 px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-800">KrF₂ (Krypton difluoride)</span>
        </div>
      </div>
    </div>
  );
};
