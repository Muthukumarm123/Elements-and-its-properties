import React from 'react';
import { BookmarkCheck, Sparkles, HelpCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { DIATOMIC_SEVEN_LIST } from '../../data/elementalFormsData';

interface DiatomicSevenGuideProps {
  onOpenElementModal: (symbol: string) => void;
}

export const DiatomicSevenGuide: React.FC<DiatomicSevenGuideProps> = ({
  onOpenElementModal
}) => {
  const mnemonicPairs = [
    { word: 'Have', symbol: 'H', formula: 'H₂', name: 'Hydrogen' },
    { word: 'No', symbol: 'N', formula: 'N₂', name: 'Nitrogen' },
    { word: 'Fear', symbol: 'F', formula: 'F₂', name: 'Fluorine' },
    { word: 'Of', symbol: 'O', formula: 'O₂', name: 'Oxygen' },
    { word: 'Ice', symbol: 'I', formula: 'I₂', name: 'Iodine' },
    { word: 'Cold', symbol: 'Cl', formula: 'Cl₂', name: 'Chlorine' },
    { word: 'Beer', symbol: 'Br', formula: 'Br₂', name: 'Bromine' }
  ];

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          <BookmarkCheck className="w-4 h-4" />
          Dedicated Revision Guide
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          THE DIATOMIC 7
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          The 7 elements that naturally form homonuclear diatomic molecules under ordinary room conditions are universally required learning in secondary and collegiate chemistry.
        </p>
      </div>

      {/* The Visual "7 on the Periodic Table" Graphic Box */}
      <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-5 border border-indigo-800/50">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">
              Geometric Trick
            </span>
            <h2 className="text-xl sm:text-2xl font-bold">
              The "Figure-7" on the Periodic Table (+ Hydrogen)
            </h2>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-200 border border-cyan-400/30">
            Starts at Element 7 (Nitrogen)
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Look at the periodic table: find <strong>element 7 (Nitrogen)</strong>. Move right through Oxygen and Fluorine, then turn down through Group 17 (Chlorine, Bromine, Iodine).
          These 6 elements trace the literal shape of the number <strong>"7"</strong> on the periodic table! Add <strong>Hydrogen (H₂)</strong> in the top-left corner, and you have all 7 diatomic elements.
        </p>

        {/* Mini Table Visualizer of the "7" */}
        <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex flex-col items-center">
          <div className="grid grid-cols-5 gap-2 font-mono text-center text-xs font-bold w-full max-w-md">
            {/* Row 1: H alone */}
            <div className="p-2 rounded-xl bg-emerald-500 text-white shadow-md">
              H₂<br /><span className="text-[9px] font-normal">#1</span>
            </div>
            <div className="col-span-4" />

            {/* Row 2: N, O, F */}
            <div className="col-span-2" />
            <div className="p-2 rounded-xl bg-cyan-500 text-white shadow-md">
              N₂<br /><span className="text-[9px] font-normal">#7</span>
            </div>
            <div className="p-2 rounded-xl bg-cyan-500 text-white shadow-md">
              O₂<br /><span className="text-[9px] font-normal">#8</span>
            </div>
            <div className="p-2 rounded-xl bg-cyan-500 text-white shadow-md">
              F₂<br /><span className="text-[9px] font-normal">#9</span>
            </div>

            {/* Row 3: Cl */}
            <div className="col-span-4" />
            <div className="p-2 rounded-xl bg-cyan-500 text-white shadow-md">
              Cl₂<br /><span className="text-[9px] font-normal">#17</span>
            </div>

            {/* Row 4: Br */}
            <div className="col-span-4" />
            <div className="p-2 rounded-xl bg-cyan-500 text-white shadow-md">
              Br₂<br /><span className="text-[9px] font-normal">#35</span>
            </div>

            {/* Row 5: I */}
            <div className="col-span-4" />
            <div className="p-2 rounded-xl bg-cyan-500 text-white shadow-md">
              I₂<br /><span className="text-[9px] font-normal">#53</span>
            </div>
          </div>
          <div className="text-[11px] text-cyan-200 mt-3 font-medium">
            Notice how N, O, F, Cl, Br, I trace the outline of the number 7!
          </div>
        </div>
      </div>

      {/* The Mnemonic Guide */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          The Classic Mnemonic: "Have No Fear Of Ice Cold Beer"
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 pt-2">
          {mnemonicPairs.map((m) => (
            <div
              key={m.symbol}
              onClick={() => onOpenElementModal(m.symbol)}
              className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 hover:border-emerald-400 cursor-pointer transition-all text-center flex flex-col justify-between"
            >
              <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                "{m.word}"
              </div>
              <div className="font-mono text-2xl font-black text-slate-900 dark:text-white">
                {m.formula}
              </div>
              <div className="text-[11px] text-slate-500 mt-1">{m.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Memory Aid Disclaimer & Real Scientific Reasoning */}
      <div className="p-6 rounded-3xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-900/60 space-y-3 text-xs sm:text-sm">
        <h4 className="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2 text-base">
          <AlertCircle className="w-5 h-5 text-amber-600" />
          Critical Note: A Memory Aid is NOT a Chemical Law
        </h4>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          Mnemonics are cognitive tools to help human memory, but they do <strong>not</strong> explain chemical reality.
        </p>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          The <em>real scientific reason</em> these seven elements are diatomic is quantum mechanical orbital overlap and electronegativity:
          <br />
          • They are nonmetals with high electronegativities (2.20 to 3.98) that lack the loose electrons needed for metallic bonding.
          <br />
          • Their compact valence orbitals (1s in H, 2p in N, O, F, 3p in Cl, 4p in Br, 5p in I) allow efficient head-on (σ) and sideways (π) overlap, lowering the total electronic potential energy when pairing up.
          <br />
          • Heavier elements in these groups (like Bismuth, Tellurium, Polonium) form extended metallic or network lattices instead of volatile diatomic molecules due to metallic character and inert pair effects.
        </p>
      </div>
    </div>
  );
};
