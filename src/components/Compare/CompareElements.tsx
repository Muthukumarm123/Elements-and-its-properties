import React, { useState } from 'react';
import { ElementData } from '../../types/chemistry';
import {
  ArrowLeftRight,
  Plus,
  Trash2,
  Sparkles,
  Info
} from 'lucide-react';

interface CompareElementsProps {
  elements: ElementData[];
  onSelectElementModal: (element: ElementData) => void;
  onExploreElementalForm: (element: ElementData) => void;
}

export const CompareElements: React.FC<CompareElementsProps> = ({
  elements,
  onSelectElementModal,
  onExploreElementalForm
}) => {
  // Default compare Hydrogen, Helium, Oxygen, Iron
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([1, 2, 8, 26]);

  const selectedElements = selectedNumbers
    .map((num) => elements.find((e) => e.number === num))
    .filter((e): e is ElementData => e !== undefined);

  const handleAddElement = (num: number) => {
    if (selectedNumbers.length < 4 && !selectedNumbers.includes(num)) {
      setSelectedNumbers([...selectedNumbers, num]);
    }
  };

  const handleRemoveElement = (num: number) => {
    if (selectedNumbers.length > 2) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== num));
    }
  };

  const applyPreset = (nums: number[]) => {
    setSelectedNumbers(nums);
  };

  const presets = [
    { label: 'H₂ vs He (Diatomic vs Monoatomic)', nums: [1, 2] },
    { label: 'The Halogens (F₂, Cl₂, Br₂, I₂)', nums: [9, 17, 35, 53] },
    { label: 'Oxygen vs Nitrogen vs Carbon', nums: [8, 7, 6] },
    { label: 'Alkali Metals (Li, Na, K, Rb)', nums: [3, 11, 19, 37] },
    { label: 'Coinage Metals (Cu, Ag, Au)', nums: [29, 47, 79] }
  ];

  return (
    <div className="space-y-6">
      {/* Header & Presets */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ArrowLeftRight className="w-5 h-5 text-indigo-500" />
              Side-by-Side Element Comparison
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Compare atomic metrics, elemental substance forms, bonding types, and periodic properties.
            </p>
          </div>

          {/* Add element dropdown */}
          {selectedNumbers.length < 4 && (
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500">Add element:</span>
              <select
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (val) handleAddElement(val);
                  e.target.value = '';
                }}
                defaultValue=""
                aria-label="Add element to comparison"
                className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              >
                <option value="" disabled>
                  Select element...
                </option>
                {elements
                  .filter((e) => !selectedNumbers.includes(e.number))
                  .map((e) => (
                    <option key={e.number} value={e.number}>
                      {e.number}. {e.name} ({e.symbol})
                    </option>
                  ))}
              </select>
            </div>
          )}
        </div>

        {/* Quick presets */}
        <div className="flex items-center flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <span className="font-semibold text-slate-500 mr-1">Quick Presets:</span>
          {presets.map((p, idx) => (
            <button
              key={idx}
              onClick={() => applyPreset(p.nums)}
              className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 hover:text-indigo-600 dark:hover:text-cyan-300 text-slate-700 dark:text-slate-300 transition-colors"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Matrix Table */}
      <div className="overflow-x-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60">
              <th className="p-4 w-48 text-slate-500 font-bold uppercase tracking-wider text-[11px]">
                Property / Metric
              </th>
              {selectedElements.map((el) => (
                <th key={el.number} className="p-4 min-w-[200px]">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-600 text-white flex flex-col justify-between p-1.5 text-center font-mono shrink-0">
                        <span className="text-[9px] font-bold">{el.number}</span>
                        <span className="text-sm font-black">{el.symbol}</span>
                      </div>
                      <div>
                        <div className="font-bold text-sm text-slate-900 dark:text-white">
                          {el.name}
                        </div>
                        <div className="text-[11px] text-slate-500 capitalize">
                          {el.category.replace('-', ' ')}
                        </div>
                      </div>
                    </div>

                    {selectedNumbers.length > 2 && (
                      <button
                        onClick={() => handleRemoveElement(el.number)}
                        aria-label={`Remove ${el.name} from comparison`}
                        className="p-1 rounded-md text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                        title="Remove from comparison"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {/* Elemental Substance Standard Formula */}
            <tr className="bg-emerald-50/40 dark:bg-emerald-950/20 font-semibold">
              <td className="p-3.5 text-emerald-900 dark:text-emerald-300 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Elemental Form Formula
              </td>
              {selectedElements.map((el) => (
                <td key={el.number} className="p-3.5">
                  <span className="font-mono text-base font-extrabold text-emerald-700 dark:text-emerald-300">
                    {el.elementalForm.standardFormula}
                  </span>
                  <div className="text-[11px] text-slate-500 capitalize mt-0.5">
                    {el.elementalForm.formType.replace('-', ' ')}
                  </div>
                </td>
              ))}
            </tr>

            {/* Molecular vs Non-Molecular */}
            <tr>
              <td className="p-3.5 text-slate-500 font-medium">Molecular vs Lattice</td>
              {selectedElements.map((el) => (
                <td key={el.number} className="p-3.5 capitalize font-semibold">
                  {el.elementalForm.molecularOrNonMolecular}
                </td>
              ))}
            </tr>

            {/* Standard Atomic Weight */}
            <tr>
              <td className="p-3.5 text-slate-500 font-medium">Atomic Weight (u)</td>
              {selectedElements.map((el) => (
                <td key={el.number} className="p-3.5 font-mono font-bold">
                  {typeof el.atomicWeight === 'number' ? el.atomicWeight.toFixed(4) : el.atomicWeight}
                </td>
              ))}
            </tr>

            {/* State at STP */}
            <tr>
              <td className="p-3.5 text-slate-500 font-medium">State at STP</td>
              {selectedElements.map((el) => (
                <td key={el.number} className="p-3.5 capitalize font-medium">
                  {el.state}
                </td>
              ))}
            </tr>

            {/* Electron Configuration */}
            <tr>
              <td className="p-3.5 text-slate-500 font-medium">Condensed Configuration</td>
              {selectedElements.map((el) => (
                <td key={el.number} className="p-3.5 font-mono font-semibold text-indigo-600 dark:text-cyan-300">
                  {el.condensedElectronConfig}
                </td>
              ))}
            </tr>

            {/* Valence Electrons */}
            <tr>
              <td className="p-3.5 text-slate-500 font-medium">Valence Electrons</td>
              {selectedElements.map((el) => (
                <td key={el.number} className="p-3.5 font-mono font-bold">
                  {el.valenceElectrons}
                </td>
              ))}
            </tr>

            {/* Electronegativity */}
            <tr>
              <td className="p-3.5 text-slate-500 font-medium">Electronegativity (Pauling)</td>
              {selectedElements.map((el) => (
                <td key={el.number} className="p-3.5 font-mono font-bold text-sm">
                  {el.electronegativity !== null ? el.electronegativity : '—'}
                </td>
              ))}
            </tr>

            {/* 1st Ionization Energy */}
            <tr>
              <td className="p-3.5 text-slate-500 font-medium">1st Ionization Energy</td>
              {selectedElements.map((el) => (
                <td key={el.number} className="p-3.5 font-mono">
                  {el.ionizationEnergy ? `${el.ionizationEnergy} kJ/mol` : '—'}
                </td>
              ))}
            </tr>

            {/* Atomic Radius */}
            <tr>
              <td className="p-3.5 text-slate-500 font-medium">Atomic Radius</td>
              {selectedElements.map((el) => (
                <td key={el.number} className="p-3.5 font-mono">
                  {el.atomicRadius ? `${el.atomicRadius} pm` : '—'}
                </td>
              ))}
            </tr>

            {/* Melting Point */}
            <tr>
              <td className="p-3.5 text-slate-500 font-medium">Melting Point</td>
              {selectedElements.map((el) => (
                <td key={el.number} className="p-3.5 font-mono">
                  {el.meltingPoint !== null ? `${(el.meltingPoint - 273.15).toFixed(1)} °C` : '—'}
                </td>
              ))}
            </tr>

            {/* Boiling Point */}
            <tr>
              <td className="p-3.5 text-slate-500 font-medium">Boiling Point</td>
              {selectedElements.map((el) => (
                <td key={el.number} className="p-3.5 font-mono">
                  {el.boilingPoint !== null ? `${(el.boilingPoint - 273.15).toFixed(1)} °C` : '—'}
                </td>
              ))}
            </tr>

            {/* Density */}
            <tr>
              <td className="p-3.5 text-slate-500 font-medium">Density</td>
              {selectedElements.map((el) => (
                <td key={el.number} className="p-3.5 font-mono">
                  {el.density !== null ? `${el.density} g/cm³` : '—'}
                </td>
              ))}
            </tr>

            {/* Bonding Description */}
            <tr className="bg-slate-50/40 dark:bg-slate-800/40">
              <td className="p-3.5 text-slate-500 font-medium">Substance Bonding Nature</td>
              {selectedElements.map((el) => (
                <td key={el.number} className="p-3.5 text-xs text-slate-600 dark:text-slate-300 leading-snug">
                  {el.elementalForm.bondingDescription}
                </td>
              ))}
            </tr>

            {/* Action Row */}
            <tr className="bg-slate-50/80 dark:bg-slate-800/80">
              <td className="p-3.5 text-slate-500 font-medium">Deep Dive</td>
              {selectedElements.map((el) => (
                <td key={el.number} className="p-3.5 space-y-1.5">
                  <button
                    onClick={() => onSelectElementModal(el)}
                    className="w-full py-1 px-2.5 rounded-lg bg-indigo-600 text-white font-semibold text-xs hover:bg-indigo-700 transition-colors"
                  >
                    View Full Profile
                  </button>
                  <button
                    onClick={() => onExploreElementalForm(el)}
                    className="w-full py-1 px-2.5 rounded-lg border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-semibold text-xs hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-colors"
                  >
                    Explore Forms
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
