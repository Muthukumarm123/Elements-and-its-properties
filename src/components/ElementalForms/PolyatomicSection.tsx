import React from 'react';
import { Maximize2, Sparkles, Shapes, ArrowRight, CheckCircle2 } from 'lucide-react';
import { POLYATOMIC_MOLECULES } from '../../data/elementalFormsData';

interface PolyatomicSectionProps {
  onSelectTopic: (topic: string) => void;
  onOpenElementModal: (symbol: string) => void;
}

export const PolyatomicSection: React.FC<PolyatomicSectionProps> = ({
  onSelectTopic,
  onOpenElementModal
}) => {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
          <Maximize2 className="w-4 h-4" />
          Multi-Atom Molecular Elements
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Polyatomic Elemental Substances
        </h1>

        <div className="p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/60 text-xs sm:text-sm text-teal-950 dark:text-teal-200 leading-relaxed">
          <p>
            <strong>Definition:</strong> A <strong>polyatomic elemental substance</strong> is an elemental substance that consists of discrete molecules containing <strong>more than two atoms</strong> of the same chemical element.
          </p>
          <p className="mt-1.5 text-xs text-teal-800 dark:text-teal-300">
            <em>Poly</em> = many • <em>atomic</em> = atoms.
            Examples include <strong>O₃</strong> (ozone), <strong>P₄</strong> (white phosphorus), and <strong>S₈</strong> (cyclooctasulfur).
          </p>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Even though these molecules contain 3, 4, 8, or even 60 atoms, they are <strong>100% elemental substances</strong> because each molecule contains exclusively <em>one</em> type of chemical element.
        </p>
      </div>

      {/* Polyatomic Molecule Cards */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Major Naturally Occurring Polyatomic Elements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {POLYATOMIC_MOLECULES.map((item) => (
            <div
              key={item.formula}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-2xl font-black text-teal-600 dark:text-teal-400">
                    {item.formula}
                  </span>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">
                    {item.elementName}
                  </div>
                </div>

                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {item.atomsPerMolecule} atoms/unit
                </span>
              </div>

              <div className="text-xs space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300">
                <div>
                  <strong className="text-slate-900 dark:text-white">Molecular Geometry:</strong>{' '}
                  {item.structureType} ({item.bondAngles})
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white">Why It Forms:</strong>{' '}
                  {item.whyPolyatomic}
                </div>
                <div className="text-slate-500 dark:text-slate-400">
                  <strong className="text-slate-700 dark:text-slate-300">Stability:</strong>{' '}
                  {item.stabilityNotes}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison: O₂ vs O₃ vs P₄ vs S₈ */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-500" />
          Comparing O₂, O₃, P₄, and S₈
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse font-sans">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700 text-slate-500 font-bold uppercase text-[10px]">
                <th className="p-3">Formula</th>
                <th className="p-3">Element</th>
                <th className="p-3">Atoms / Molecule</th>
                <th className="p-3">Classification</th>
                <th className="p-3">State at STP</th>
                <th className="p-3">Why Not Diatomic?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                <td className="p-3 font-mono font-bold text-indigo-600 dark:text-cyan-400 text-sm">O₂</td>
                <td className="p-3 font-semibold">Oxygen</td>
                <td className="p-3 font-mono">2</td>
                <td className="p-3 font-semibold text-emerald-600">Diatomic Element</td>
                <td className="p-3">Gas</td>
                <td className="p-3 text-slate-500">2p orbitals form stable double bonds (:O=O:)</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                <td className="p-3 font-mono font-bold text-teal-600 dark:text-teal-400 text-sm">O₃</td>
                <td className="p-3 font-semibold">Oxygen (Ozone)</td>
                <td className="p-3 font-mono">3</td>
                <td className="p-3 font-semibold text-teal-600">Polyatomic Element</td>
                <td className="p-3">Gas</td>
                <td className="p-3 text-slate-500">Allotrope formed by UV radical addition (O• + O₂ → O₃)</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                <td className="p-3 font-mono font-bold text-amber-600 dark:text-amber-400 text-sm">P₄</td>
                <td className="p-3 font-semibold">Phosphorus</td>
                <td className="p-3 font-mono">4</td>
                <td className="p-3 font-semibold text-teal-600">Polyatomic Element</td>
                <td className="p-3">Solid</td>
                <td className="p-3 text-slate-500">Larger 3p orbitals favor 3 single σ-bonds in a tetrahedron over P≡P</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                <td className="p-3 font-mono font-bold text-yellow-600 dark:text-yellow-400 text-sm">S₈</td>
                <td className="p-3 font-semibold">Sulfur</td>
                <td className="p-3 font-mono">8</td>
                <td className="p-3 font-semibold text-teal-600">Polyatomic Element</td>
                <td className="p-3">Solid</td>
                <td className="p-3 text-slate-500">Large 3p orbitals favor single S–S bonds in a relaxed crown ring over S=S</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 text-xs text-indigo-900 dark:text-indigo-200 flex items-start gap-2.5 mt-2">
          <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
          <span>
            <strong>Key Chemical Concept:</strong> O₂, O₃, P₄, and S₈ have completely different numbers of atoms per molecular unit, yet all four are 100% elemental substances because each consists purely of one single element!
          </span>
        </div>
      </div>
    </div>
  );
};
