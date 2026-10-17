import React from 'react';
import { Link2, Sparkles, Activity, Layers, ArrowRight } from 'lucide-react';
import { DIATOMIC_SEVEN_LIST } from '../../data/elementalFormsData';

export const DiatomicBondTypes: React.FC = () => {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400">
          <Link2 className="w-4 h-4" />
          Chemical Bond Orders in Diatomic Molecules
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Diatomic Bond Types & Energies
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          The bonds holding diatomic molecules together represent three distinct <strong>bond orders</strong>: single, double, and triple covalent bonds.
          As bond order increases, bond length contracts and bond dissociation energy surges dramatically.
        </p>
      </div>

      {/* Bond Order Comparison Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xs">
        <div className="p-5 border-b border-slate-100 dark:border-slate-800">
          <h2 className="font-bold text-base text-slate-900 dark:text-white">
            Comparative Bond Metrics of the Diatomic 7
          </h2>
          <p className="text-xs text-slate-500">
            Measured bond lengths in picometers (pm) and dissociation energies in kilojoules per mole (kJ/mol).
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700 text-slate-500 font-bold uppercase text-[10px]">
                <th className="p-3.5">Molecule</th>
                <th className="p-3.5">Bond Notation</th>
                <th className="p-3.5">Bond Order</th>
                <th className="p-3.5">Bond Length (pm)</th>
                <th className="p-3.5">Bond Energy (kJ/mol)</th>
                <th className="p-3.5">Shared Pairs</th>
                <th className="p-3.5">State at STP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono">
              {DIATOMIC_SEVEN_LIST.map((d) => (
                <tr key={d.symbol} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                  <td className="p-3.5 font-bold font-sans text-slate-900 dark:text-white text-sm">
                    {d.name} ({d.formula})
                  </td>
                  <td className="p-3.5 font-bold text-indigo-600 dark:text-cyan-400 text-sm">
                    {d.bondNotation}
                  </td>
                  <td className="p-3.5 font-bold capitalize font-sans">
                    {d.bondType} (order {d.sharedPairs})
                  </td>
                  <td className="p-3.5 text-slate-700 dark:text-slate-300">
                    {d.bondLengthPm} pm
                  </td>
                  <td className="p-3.5 font-bold text-emerald-600 dark:text-emerald-400">
                    {d.bondEnergyKj} kJ/mol
                  </td>
                  <td className="p-3.5 text-slate-600 dark:text-slate-400">
                    {d.sharedPairs} pair ({d.sharedPairs * 2} e⁻)
                  </td>
                  <td className="p-3.5 font-sans capitalize font-medium">
                    {d.stateAtSTP}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Deep Dive on the Triple vs Double vs Single */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-xs">
          <div className="font-mono text-xs font-bold text-indigo-600 dark:text-cyan-400">
            Bond Order 1 • Single Bond
          </div>
          <h3 className="font-bold text-base text-slate-900 dark:text-white">
            H–H, F–F, Cl–Cl, Br–Br, I–I
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
            Formed by a single head-on overlap of orbitals (sigma bond, σ). Allows free rotation around the internuclear axis.
            The F–F bond is uniquely weak (158 kJ/mol) due to severe electrostatic lone-pair repulsion in its tiny 2p cloud.
          </p>
        </div>

        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-xs">
          <div className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400">
            Bond Order 2 • Double Bond
          </div>
          <h3 className="font-bold text-base text-slate-900 dark:text-white">
            O=O (Dioxygen)
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
            Consists of one cylindrical σ bond and two 3-electron half-π bonds.
            Shorter (121 pm) and significantly stronger (498 kJ/mol) than a single bond, with two unpaired electrons in degenerate π* orbitals.
          </p>
        </div>

        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-xs">
          <div className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
            Bond Order 3 • Triple Bond
          </div>
          <h3 className="font-bold text-base text-slate-900 dark:text-white">
            N≡N (Dinitrogen)
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
            One strong σ bond and two mutually perpendicular π bonds share six electrons between the two nitrogen nuclei.
            Extraordinarily short (110 pm) and practically unbreakable at room temperature (945 kJ/mol).
          </p>
        </div>
      </div>
    </div>
  );
};
