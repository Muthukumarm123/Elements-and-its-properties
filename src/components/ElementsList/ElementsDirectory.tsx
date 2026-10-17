import React, { useState, useMemo } from 'react';
import { ElementData, ElementCategory, StateAtSTP, ElementalFormType } from '../../types/chemistry';
import {
  Search,
  Filter,
  ArrowUpDown,
  Sparkles,
  Layers,
  CircleDot,
  Minimize2,
  Maximize2
} from 'lucide-react';

interface ElementsDirectoryProps {
  elements: ElementData[];
  onSelectElement: (element: ElementData) => void;
  onExploreElementalForm: (element: ElementData) => void;
}

type SortField = 'number' | 'name' | 'symbol' | 'atomicWeight' | 'electronegativity' | 'meltingPoint';

export const ElementsDirectory: React.FC<ElementsDirectoryProps> = ({
  elements,
  onSelectElement,
  onExploreElementalForm
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedState, setSelectedState] = useState<string>('all');
  const [selectedFormType, setSelectedFormType] = useState<string>('all');
  const [sortField, setSortField] = useState<SortField>('number');
  const [sortAscending, setSortAscending] = useState(true);

  const filteredElements = useMemo(() => {
    return elements
      .filter((el) => {
        const q = searchQuery.toLowerCase().trim();
        const matchesQuery =
          !q ||
          el.name.toLowerCase().includes(q) ||
          el.symbol.toLowerCase().includes(q) ||
          el.number.toString() === q ||
          el.elementalForm.standardFormula.toLowerCase().includes(q);

        const matchesCat = selectedCategory === 'all' || el.category === selectedCategory;
        const matchesState = selectedState === 'all' || el.state === selectedState;
        const matchesForm = selectedFormType === 'all' || el.elementalForm.formType === selectedFormType;

        return matchesQuery && matchesCat && matchesState && matchesForm;
      })
      .sort((a, b) => {
        let valA: any = a[sortField];
        let valB: any = b[sortField];

        if (valA === null || valA === undefined) valA = sortAscending ? Infinity : -Infinity;
        if (valB === null || valB === undefined) valB = sortAscending ? Infinity : -Infinity;

        if (typeof valA === 'string') {
          return sortAscending ? valA.localeCompare(valB) : valB.localeCompare(valA);
        }
        return sortAscending ? valA - valB : valB - valA;
      });
  }, [elements, searchQuery, selectedCategory, selectedState, selectedFormType, sortField, sortAscending]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortAscending(!sortAscending);
    } else {
      setSortField(field);
      setSortAscending(true);
    }
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, symbol, number, formula (e.g. H₂, Fe, 26)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Showing <strong>{filteredElements.length}</strong> of <strong>{elements.length}</strong> elements
          </div>
        </div>

        {/* Filter chips */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          {/* Category Filter */}
          <div>
            <label className="text-[11px] font-semibold text-slate-500 mb-1 block">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="Filter by chemical category"
              className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              <option value="all">All Categories</option>
              <option value="alkali-metal">Alkali Metals</option>
              <option value="alkaline-earth">Alkaline Earth</option>
              <option value="transition-metal">Transition Metals</option>
              <option value="post-transition-metal">Post-Transition Metals</option>
              <option value="metalloid">Metalloids</option>
              <option value="reactive-nonmetal">Reactive Nonmetals</option>
              <option value="noble-gas">Noble Gases</option>
              <option value="lanthanide">Lanthanides</option>
              <option value="actinide">Actinides</option>
            </select>
          </div>

          {/* State Filter */}
          <div>
            <label className="text-[11px] font-semibold text-slate-500 mb-1 block">State at STP</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              aria-label="Filter by state of matter"
              className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              <option value="all">All States</option>
              <option value="gas">Gas</option>
              <option value="liquid">Liquid</option>
              <option value="solid">Solid</option>
            </select>
          </div>

          {/* Elemental Form Filter */}
          <div>
            <label className="text-[11px] font-semibold text-slate-500 mb-1 block">Elemental Form Type</label>
            <select
              value={selectedFormType}
              onChange={(e) => setSelectedFormType(e.target.value)}
              aria-label="Filter by elemental substance form type"
              className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              <option value="all">All Elemental Forms</option>
              <option value="monoatomic-gas">Monoatomic Gas (He, Ne, Ar...)</option>
              <option value="diatomic-gas">Diatomic Gas (H₂, N₂, O₂, F₂, Cl₂)</option>
              <option value="diatomic-liquid">Diatomic Liquid (Br₂)</option>
              <option value="diatomic-solid">Diatomic Solid (I₂)</option>
              <option value="polyatomic-molecular">Polyatomic Molecular (P₄, S₈)</option>
              <option value="metallic-lattice">Metallic Lattice (Na, Fe, Cu...)</option>
              <option value="covalent-network">Covalent Network (C, Si, B)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Directory Grid of Element Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
        {filteredElements.map((el) => {
          const isDiatomic = ['H', 'N', 'O', 'F', 'Cl', 'Br', 'I'].includes(el.symbol);
          const isNoble = ['He', 'Ne', 'Ar', 'Kr', 'Xe', 'Rn', 'Og'].includes(el.symbol);

          return (
            <div
              key={el.number}
              className="group p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-cyan-500/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Card Top: Number, State, Formula badge */}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">
                    #{el.number}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <span
                      className={`font-mono text-xs font-extrabold px-1.5 py-0.5 rounded ${
                        isDiatomic
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                          : isNoble
                          ? 'bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {el.elementalForm.standardFormula}
                    </span>
                    <span className="text-[10px] capitalize font-medium text-slate-400">
                      {el.state}
                    </span>
                  </div>
                </div>

                {/* Main Identity: Symbol & Name */}
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-mono font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                    {el.symbol}
                  </span>
                  <span className="font-bold text-sm text-slate-800 dark:text-slate-200 truncate">
                    {el.name}
                  </span>
                </div>

                <div className="text-[11px] text-slate-500 dark:text-slate-400 capitalize mb-3">
                  {el.category.replace('-', ' ')} • {el.block}-block
                </div>

                {/* Micro Stats */}
                <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Weight:</span>
                    <span className="font-mono font-medium">
                      {typeof el.atomicWeight === 'number'
                        ? el.atomicWeight.toFixed(2)
                        : el.atomicWeight}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Config:</span>
                    <span className="font-mono font-medium truncate block">
                      {el.condensedElectronConfig}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectElement(el)}
                  className="flex-1 py-1.5 px-2 rounded-lg bg-indigo-50 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white text-indigo-700 dark:text-cyan-300 font-semibold text-xs transition-colors text-center"
                >
                  Full Profile
                </button>

                <button
                  onClick={() => onExploreElementalForm(el)}
                  title={`Explore ${el.name}'s elemental form (${el.elementalForm.standardFormula})`}
                  className="p-1.5 rounded-lg border border-emerald-300 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
