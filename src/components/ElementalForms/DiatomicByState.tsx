import React from 'react';
import { Layers, Thermometer, AlertCircle, ArrowDown, Sparkles } from 'lucide-react';

export const DiatomicByState: React.FC = () => {
  const diatomicStates = [
    { name: 'Hydrogen', formula: 'H₂', state: 'gas', electrons: 2, color: 'Colorless', bp: '20.3 K (-252.9 °C)', note: 'Lightest molecule; minuscule London dispersion forces.' },
    { name: 'Nitrogen', formula: 'N₂', state: 'gas', electrons: 14, color: 'Colorless', bp: '77.4 K (-195.8 °C)', note: 'Inert diatomic gas; 78% of atmosphere.' },
    { name: 'Oxygen', formula: 'O₂', state: 'gas', electrons: 16, color: 'Colorless (pale blue liquid)', bp: '90.2 K (-183.0 °C)', note: 'Paramagnetic gas supporting aerobic life.' },
    { name: 'Fluorine', formula: 'F₂', state: 'gas', electrons: 18, color: 'Pale greenish-yellow', bp: '85.0 K (-188.1 °C)', note: 'First halogen; small 18-electron cloud.' },
    { name: 'Chlorine', formula: 'Cl₂', state: 'gas', electrons: 34, color: 'Yellowish-green', bp: '239.1 K (-34.0 °C)', note: 'Second halogen; denser gas.' },
    { name: 'Bromine', formula: 'Br₂', state: 'liquid', electrons: 70, color: 'Reddish-brown fuming liquid', bp: '332.0 K (58.8 °C)', note: 'Third halogen; only liquid nonmetal at STP!' },
    { name: 'Iodine', formula: 'I₂', state: 'solid', electrons: 106, color: 'Dark purple-black crystalline plates', bp: '457.4 K (184.3 °C)', note: 'Fourth halogen; solid crystal lattice.' }
  ];

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
          <Layers className="w-4 h-4" />
          Physical States of Diatomic Elements
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Diatomic Elements by State of Matter
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Students frequently assume that if a substance is a diatomic molecule, it must be a gas.
          In reality, the Diatomic 7 elements span <strong>all three classical states of matter</strong> at room temperature: five are gases, one is a liquid, and one is a solid!
        </p>
      </div>

      {/* Visual Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xs">
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <h2 className="font-bold text-base text-slate-900 dark:text-white">
            The 7 Diatomic Elements Organized by State at STP
          </h2>
          <span className="text-xs text-slate-500 font-mono">298.15 K (25 °C), 1 atm</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700 text-slate-500 font-bold uppercase text-[10px]">
                <th className="p-3.5">Element</th>
                <th className="p-3.5">Formula</th>
                <th className="p-3.5">State at Room Temp</th>
                <th className="p-3.5">Total Electron Cloud</th>
                <th className="p-3.5">Appearance / Color</th>
                <th className="p-3.5">Boiling Point</th>
                <th className="p-3.5">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {diatomicStates.map((item) => (
                <tr key={item.name} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                  <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </td>
                  <td className="p-3.5 font-mono font-extrabold text-indigo-600 dark:text-cyan-400 text-sm">
                    {item.formula}
                  </td>
                  <td className="p-3.5">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full font-bold text-xs uppercase tracking-wider ${
                        item.state === 'gas'
                          ? 'bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300'
                          : item.state === 'liquid'
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100'
                          : 'bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300'
                      }`}
                    >
                      {item.state}
                    </span>
                  </td>
                  <td className="p-3.5 font-mono font-bold text-slate-700 dark:text-slate-300">
                    {item.electrons} e⁻
                  </td>
                  <td className="p-3.5 text-slate-600 dark:text-slate-400">
                    {item.color}
                  </td>
                  <td className="p-3.5 font-mono text-slate-700 dark:text-slate-300">
                    {item.bp}
                  </td>
                  <td className="p-3.5 text-slate-500 text-[11px] leading-snug">
                    {item.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Halogen Group State Progression Deep Dive */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <ArrowDown className="w-5 h-5 text-indigo-500" />
          Why Does State Change Down Group 17 (F₂ → Cl₂ → Br₂ → I₂)?
        </h3>

        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-3 leading-relaxed">
          <p>
            Notice the striking progression down the halogen group:
            <br />
            <strong>F₂ (gas) → Cl₂ (gas) → Br₂ (liquid) → I₂ (solid)</strong>
          </p>
          <p>
            All four halogens are non-polar homonuclear diatomic molecules with single covalent bonds. Why is F₂ a gas boiling at −188 °C while I₂ is a solid melting at +114 °C?
          </p>
          <div className="space-y-1.5 pl-3 border-l-2 border-indigo-500 font-sans">
            <div>
              <strong>1. Electron Cloud Size:</strong> An F₂ molecule contains only 18 electrons, while an I₂ molecule contains 106 electrons.
            </div>
            <div>
              <strong>2. Polarizability:</strong> The outer 5p electrons of iodine are far from the nucleus and held loosely. The large electron cloud can easily distort, creating temporary induced dipoles.
            </div>
            <div>
              <strong>3. London Dispersion Forces:</strong> The strength of intermolecular London dispersion attractions scales with polarizability and electron count. In F₂ and Cl₂, thermal kinetic energy easily overcomes these weak attractions (gases). In Br₂, attractions are strong enough to condense the molecules into a liquid. In I₂, the dispersion attractions are so powerful that they lock the molecules into a rigid crystalline solid lattice!
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 text-xs text-rose-900 dark:text-rose-200 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <span>
            <strong>Fundamental Principle:</strong> The molecular formula alone does <em>not</em> determine the physical state! Intermolecular forces (van der Waals interactions) between molecules govern whether a substance is a gas, liquid, or solid at a given temperature.
          </span>
        </div>
      </div>
    </div>
  );
};
