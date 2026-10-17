import React, { useState, useMemo } from 'react';
import { ElementData, ElementalFormType, StateAtSTP } from '../../types/chemistry';
import { Sliders, Filter, Search, ArrowRight, Sparkles } from 'lucide-react';

interface ElementalFormExplorerProps {
  elements: ElementData[];
  onOpenElementModal: (element: ElementData) => void;
}

export const ElementalFormExplorer: React.FC<ElementalFormExplorerProps> = ({
  elements,
  onOpenElementModal
}) => {
  const [filterType, setFilterType] = useState<string>('all');
  const [stateFilter, setStateFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredElements = useMemo(() => {
    return elements.filter((el) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        el.name.toLowerCase().includes(q) ||
        el.symbol.toLowerCase().includes(q) ||
        el.elementalForm.standardFormula.toLowerCase().includes(q);

      const matchesState = stateFilter === 'all' || el.state === stateFilter;

      let matchesType = true;
      if (filterType === 'monoatomic') {
        matchesType = el.elementalForm.atomsPerUnit === 1;
      } else if (filterType === 'diatomic') {
        matchesType = el.elementalForm.atomsPerUnit === 2;
      } else if (filterType === 'polyatomic') {
        matchesType = typeof el.elementalForm.atomsPerUnit === 'number' && el.elementalForm.atomsPerUnit > 2;
      } else if (filterType === 'molecular') {
        matchesType = el.elementalForm.molecularOrNonMolecular === 'molecular';
      } else if (filterType === 'metallic') {
        matchesType = el.elementalForm.formType === 'metallic-lattice';
      } else if (filterType === 'network') {
        matchesType = el.elementalForm.formType === 'covalent-network';
      } else if (filterType === 'allotrope') {
        matchesType = (el.allotropes && el.allotropes.length > 0) || false;
      }

      return matchesSearch && matchesState && matchesType;
    });
  }, [elements, filterType, stateFilter, searchQuery]);

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          <Sliders className="w-4 h-4" />
          Interactive Substance Database
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Elemental Form Explorer & Table
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Filter and explore all 118 chemical elements specifically by their real-world elemental substance structures.
          Click any element to jump directly to its complete 118-element reference profile.
        </p>

        {/* Filter Controls */}
        <div className="space-y-3 pt-2">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search elements by formula or name (e.g. H₂, S₈, Oxygen, Fe)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Quick Category Buttons */}
          <div className="flex flex-wrap gap-1.5 text-xs">
            {[
              { id: 'all', label: 'All Elements (118)' },
              { id: 'monoatomic', label: 'Monoatomic (He, Ne...)' },
              { id: 'diatomic', label: 'Diatomic (H₂, N₂, O₂...)' },
              { id: 'polyatomic', label: 'Polyatomic (P₄, S₈...)' },
              { id: 'molecular', label: 'All Molecular' },
              { id: 'metallic', label: 'Metallic Lattices (Na, Fe...)' },
              { id: 'network', label: 'Covalent Networks (C, Si)' },
              { id: 'allotrope', label: 'Allotrope-Forming' }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilterType(btn.id)}
                className={`px-2.5 py-1.5 rounded-lg font-medium transition-all ${
                  filterType === btn.id
                    ? 'bg-emerald-600 text-white font-semibold shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* State Filter */}
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Filter State:</span>
            {['all', 'gas', 'liquid', 'solid'].map((s) => (
              <button
                key={s}
                onClick={() => setStateFilter(s)}
                className={`capitalize px-2 py-0.5 rounded-md ${
                  stateFilter === s
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold'
                    : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {s}
              </button>
            ))}
            <span className="ml-auto font-mono text-[11px]">
              Showing {filteredElements.length} elements
            </span>
          </div>
        </div>
      </div>

      {/* Explorer Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700 text-slate-500 font-bold uppercase text-[10px]">
                <th className="p-3.5">Element</th>
                <th className="p-3.5">Symbol</th>
                <th className="p-3.5">Elemental Formula</th>
                <th className="p-3.5">Atoms / Unit</th>
                <th className="p-3.5">Molecular / Non-Molecular</th>
                <th className="p-3.5">State at Room Temp</th>
                <th className="p-3.5">Bond Type & Structure</th>
                <th className="p-3.5 text-right">Reference</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredElements.map((el) => (
                <tr
                  key={el.number}
                  className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
                  onClick={() => onOpenElementModal(el)}
                >
                  <td className="p-3.5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="font-mono text-[10px] text-slate-400">#{el.number}</span>
                    <span>{el.name}</span>
                  </td>

                  <td className="p-3.5 font-mono font-black text-indigo-600 dark:text-cyan-400">
                    {el.symbol}
                  </td>

                  <td className="p-3.5">
                    <span className="font-mono font-bold text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                      {el.elementalForm.standardFormula}
                    </span>
                  </td>

                  <td className="p-3.5 font-mono text-slate-700 dark:text-slate-300">
                    {el.elementalForm.atomsPerUnit === 'lattice' ? 'Extended Lattice' : `${el.elementalForm.atomsPerUnit} atoms`}
                  </td>

                  <td className="p-3.5 capitalize font-medium text-slate-700 dark:text-slate-300">
                    {el.elementalForm.molecularOrNonMolecular}
                  </td>

                  <td className="p-3.5">
                    <span
                      className={`capitalize px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                        el.state === 'gas'
                          ? 'bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300'
                          : el.state === 'liquid'
                          ? 'bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {el.state}
                    </span>
                  </td>

                  <td className="p-3.5 text-[11px] text-slate-600 dark:text-slate-400 max-w-xs truncate">
                    {el.elementalForm.bondingDescription}
                  </td>

                  <td className="p-3.5 text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 dark:text-cyan-400 group-hover:underline">
                      Inspect <ArrowRight className="w-3 h-3" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
