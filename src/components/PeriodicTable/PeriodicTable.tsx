import React, { useState, useMemo } from 'react';
import { ElementData, ElementCategory, StateAtSTP } from '../../types/chemistry';
import { ElementTile, TableColorMode } from './ElementTile';
import {
  SlidersHorizontal,
  Sparkles,
  Info,
  Maximize2,
  Filter,
  Layers,
  ArrowRight
} from 'lucide-react';

interface PeriodicTableProps {
  elements: ElementData[];
  onSelectElement: (element: ElementData) => void;
  onNavigateToElementalForms: () => void;
}

export const PeriodicTable: React.FC<PeriodicTableProps> = ({
  elements,
  onSelectElement,
  onNavigateToElementalForms
}) => {
  const [colorMode, setColorMode] = useState<TableColorMode>('category');
  const [selectedStateFilter, setSelectedStateFilter] = useState<string>('all');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [highlightDiatomic7, setHighlightDiatomic7] = useState<boolean>(false);
  const [highlightMonoatomic, setHighlightMonoatomic] = useState<boolean>(false);
  const [hoveredElement, setHoveredElement] = useState<ElementData | null>(elements[0] || null);

  // Periodic table coordinate matrix:
  // standard 18 columns, periods 1 to 7
  // Lanthanides (57-71) in period 8 (cols 3-17)
  // Actinides (89-103) in period 9 (cols 3-17)
  const elementGrid = useMemo(() => {
    const grid: { [key: string]: ElementData } = {};
    elements.forEach((el) => {
      if (el.number >= 57 && el.number <= 71) {
        // Lanthanide row
        const col = el.number - 57 + 3;
        grid[`8-${col}`] = el;
      } else if (el.number >= 89 && el.number <= 103) {
        // Actinide row
        const col = el.number - 89 + 3;
        grid[`9-${col}`] = el;
      } else if (el.group !== null) {
        grid[`${el.period}-${el.group}`] = el;
      }
    });
    return grid;
  }, [elements]);

  const isDimmed = (el: ElementData): boolean => {
    if (selectedStateFilter !== 'all' && el.state !== selectedStateFilter) return true;
    if (selectedCategoryFilter !== 'all' && el.category !== selectedCategoryFilter) return true;
    return false;
  };

  const groupLabels = [
    { num: 1, label: '1 (IA)', family: 'Alkali Metals' },
    { num: 2, label: '2 (IIA)', family: 'Alkaline Earth' },
    { num: 3, label: '3 (IIIB)', family: 'Scandium Group' },
    { num: 4, label: '4 (IVB)', family: 'Titanium Group' },
    { num: 5, label: '5 (VB)', family: 'Vanadium Group' },
    { num: 6, label: '6 (VIB)', family: 'Chromium Group' },
    { num: 7, label: '7 (VIIB)', family: 'Manganese Group' },
    { num: 8, label: '8 (VIII)', family: 'Iron Group' },
    { num: 9, label: '9 (VIII)', family: 'Cobalt Group' },
    { num: 10, label: '10 (VIII)', family: 'Nickel Group' },
    { num: 11, label: '11 (IB)', family: 'Coinage Metals' },
    { num: 12, label: '12 (IIB)', family: 'Zinc Group' },
    { num: 13, label: '13 (IIIA)', family: 'Boron Group' },
    { num: 14, label: '14 (IVA)', family: 'Carbon Group' },
    { num: 15, label: '15 (VA)', family: 'Pnictogens' },
    { num: 16, label: '16 (VIA)', family: 'Chalcogens' },
    { num: 17, label: '17 (VIIA)', family: 'Halogens' },
    { num: 18, label: '18 (VIIIA)', family: 'Noble Gases' }
  ];

  const categoriesList: { id: ElementCategory; label: string; color: string }[] = [
    { id: 'alkali-metal', label: 'Alkali Metals', color: 'bg-red-400' },
    { id: 'alkaline-earth', label: 'Alkaline Earth', color: 'bg-orange-400' },
    { id: 'transition-metal', label: 'Transition Metals', color: 'bg-blue-400' },
    { id: 'post-transition-metal', label: 'Post-Transition Metals', color: 'bg-emerald-400' },
    { id: 'metalloid', label: 'Metalloids', color: 'bg-teal-400' },
    { id: 'reactive-nonmetal', label: 'Reactive Nonmetals', color: 'bg-sky-400' },
    { id: 'noble-gas', label: 'Noble Gases', color: 'bg-purple-400' },
    { id: 'lanthanide', label: 'Lanthanides', color: 'bg-amber-400' },
    { id: 'actinide', label: 'Actinides', color: 'bg-rose-400' }
  ];

  return (
    <div className="space-y-6">
      {/* Top Controls Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Color Mode Selector */}
          <div className="flex items-center flex-wrap gap-2 text-xs">
            <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mr-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-500" />
              Color Mode:
            </span>
            {[
              { id: 'category', label: 'Chemical Category' },
              { id: 'state', label: 'State at STP' },
              { id: 'block', label: 'Orbital Block (s,p,d,f)' },
              { id: 'electronegativity', label: 'Electronegativity' },
              { id: 'atomicRadius', label: 'Atomic Radius' },
              { id: 'ionizationEnergy', label: 'Ionization Energy' },
              { id: 'density', label: 'Density' }
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setColorMode(m.id as TableColorMode)}
                className={`px-2.5 py-1.5 rounded-lg font-medium transition-all ${
                  colorMode === m.id
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* Quick Highlight Toggles */}
          <div className="flex items-center flex-wrap gap-2">
            <button
              onClick={() => {
                setHighlightDiatomic7(!highlightDiatomic7);
                if (highlightMonoatomic) setHighlightMonoatomic(false);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                highlightDiatomic7
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                  : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800 hover:bg-emerald-100'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Highlight The Diatomic 7 (H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂)
            </button>

            <button
              onClick={() => {
                setHighlightMonoatomic(!highlightMonoatomic);
                if (highlightDiatomic7) setHighlightDiatomic7(false);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                highlightMonoatomic
                  ? 'bg-purple-600 text-white border-purple-500 shadow-sm'
                  : 'bg-purple-50 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 border-purple-300 dark:border-purple-800 hover:bg-purple-100'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Highlight Monoatomic Noble Gases
            </button>
          </div>
        </div>

        {/* Second Filter Row */}
        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between flex-wrap gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-medium text-slate-500">Filter State:</span>
            {['all', 'gas', 'liquid', 'solid'].map((s) => (
              <button
                key={s}
                onClick={() => setSelectedStateFilter(s)}
                className={`capitalize px-2.5 py-1 rounded-md transition-colors ${
                  selectedStateFilter === s
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-slate-500">
            <span>Tip: Click any element to open its comprehensive 118-element profile.</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Table Grid */}
      <div className="overflow-x-auto pb-4">
        <div className="min-w-[1020px] max-w-[1240px] mx-auto space-y-2">
          {/* Group Column Header Numbers (1 to 18) */}
          <div className="grid grid-cols-[36px_repeat(18,1fr)] gap-1 text-center font-mono text-[10px] font-bold text-slate-400 dark:text-slate-500">
            <div></div>
            {groupLabels.map((g) => (
              <div key={g.num} className="truncate" title={`${g.label}: ${g.family}`}>
                {g.num}
              </div>
            ))}
          </div>

          {/* Periods 1 to 7 */}
          {[1, 2, 3, 4, 5, 6, 7].map((period) => (
            <div
              key={period}
              className="grid grid-cols-[36px_repeat(18,1fr)] gap-1 items-stretch"
            >
              {/* Period side row number */}
              <div className="flex items-center justify-center font-mono font-bold text-xs text-slate-400 dark:text-slate-500 select-none">
                {period}
              </div>

              {/* 18 Columns for this Period */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((col) => {
                const el = elementGrid[`${period}-${col}`];

                // Lanthanide placeholder in Period 6, Col 3
                if (period === 6 && col === 3) {
                  return (
                    <div
                      key={`${period}-${col}`}
                      className="p-1 rounded-lg border border-amber-300 dark:border-amber-800/80 bg-amber-50/70 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 text-center flex flex-col justify-center text-[10px] font-semibold"
                    >
                      <span className="font-mono text-[9px]">57–71</span>
                      <span className="text-[9px] font-bold leading-tight">La–Lu</span>
                      <span className="text-[7px] text-amber-700 dark:text-amber-300">Lanthanides</span>
                    </div>
                  );
                }

                // Actinide placeholder in Period 7, Col 3
                if (period === 7 && col === 3) {
                  return (
                    <div
                      key={`${period}-${col}`}
                      className="p-1 rounded-lg border border-rose-300 dark:border-rose-800/80 bg-rose-50/70 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 text-center flex flex-col justify-center text-[10px] font-semibold"
                    >
                      <span className="font-mono text-[9px]">89–103</span>
                      <span className="text-[9px] font-bold leading-tight">Ac–Lr</span>
                      <span className="text-[7px] text-rose-700 dark:text-rose-300">Actinides</span>
                    </div>
                  );
                }

                // Empty cell
                if (!el) {
                  return <div key={`${period}-${col}`} className="min-h-[52px]" />;
                }

                return (
                  <div key={el.number} className="h-full">
                    <ElementTile
                      element={el}
                      colorMode={colorMode}
                      isSelected={hoveredElement?.number === el.number}
                      highlightDiatomic7={highlightDiatomic7}
                      highlightMonoatomic={highlightMonoatomic}
                      dimmed={isDimmed(el)}
                      onClick={() => onSelectElement(el)}
                      onMouseEnter={() => setHoveredElement(el)}
                      onMouseLeave={() => {}}
                    />
                  </div>
                );
              })}
            </div>
          ))}

          {/* Spacer between main table and f-block */}
          <div className="h-4" />

          {/* Lanthanides row (Period 8, cols 3-17) */}
          <div className="grid grid-cols-[36px_repeat(18,1fr)] gap-1 items-stretch">
            <div className="flex items-center justify-center font-mono font-bold text-[10px] text-amber-500 dark:text-amber-400 select-none">
              La*
            </div>
            {/* Cols 1 and 2 empty */}
            <div />
            <div />
            {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((col) => {
              const el = elementGrid[`8-${col}`];
              if (!el) return <div key={`8-${col}`} />;
              return (
                <div key={el.number} className="h-full">
                  <ElementTile
                    element={el}
                    colorMode={colorMode}
                    isSelected={hoveredElement?.number === el.number}
                    highlightDiatomic7={highlightDiatomic7}
                    highlightMonoatomic={highlightMonoatomic}
                    dimmed={isDimmed(el)}
                    onClick={() => onSelectElement(el)}
                    onMouseEnter={() => setHoveredElement(el)}
                    onMouseLeave={() => {}}
                  />
                </div>
              );
            })}
            <div />
          </div>

          {/* Actinides row (Period 9, cols 3-17) */}
          <div className="grid grid-cols-[36px_repeat(18,1fr)] gap-1 items-stretch">
            <div className="flex items-center justify-center font-mono font-bold text-[10px] text-rose-500 dark:text-rose-400 select-none">
              Ac**
            </div>
            {/* Cols 1 and 2 empty */}
            <div />
            <div />
            {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((col) => {
              const el = elementGrid[`9-${col}`];
              if (!el) return <div key={`9-${col}`} />;
              return (
                <div key={el.number} className="h-full">
                  <ElementTile
                    element={el}
                    colorMode={colorMode}
                    isSelected={hoveredElement?.number === el.number}
                    highlightDiatomic7={highlightDiatomic7}
                    highlightMonoatomic={highlightMonoatomic}
                    dimmed={isDimmed(el)}
                    onClick={() => onSelectElement(el)}
                    onMouseEnter={() => setHoveredElement(el)}
                    onMouseLeave={() => {}}
                  />
                </div>
              );
            })}
            <div />
          </div>
        </div>
      </div>

      {/* Hovered Element Quick Inspector & Legend */}
      {hoveredElement && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          {/* Left: Element identity */}
          <div className="flex items-start gap-4">
            <div className="w-20 h-24 rounded-xl border-2 border-indigo-500 dark:border-cyan-400 bg-indigo-50 dark:bg-slate-800 p-2 flex flex-col justify-between shrink-0 shadow-sm">
              <div className="flex justify-between items-center text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                <span>{hoveredElement.number}</span>
                <span className="text-[10px] text-indigo-600 dark:text-cyan-300 font-bold">
                  {hoveredElement.elementalForm.standardFormula}
                </span>
              </div>
              <div className="text-2xl font-mono font-extrabold text-center text-slate-900 dark:text-white">
                {hoveredElement.symbol}
              </div>
              <div className="text-[10px] font-mono text-center text-slate-600 dark:text-slate-300 truncate">
                {typeof hoveredElement.atomicWeight === 'number'
                  ? hoveredElement.atomicWeight.toFixed(3)
                  : hoveredElement.atomicWeight}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {hoveredElement.name}
                </h3>
                <span className="text-xs px-2 py-0.5 rounded-full capitalize font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {hoveredElement.state}
                </span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                Group {hoveredElement.group ?? 'N/A'}, Period {hoveredElement.period}, Block {hoveredElement.block} • {hoveredElement.category.replace('-', ' ')}
              </div>
              <div className="text-xs text-slate-700 dark:text-slate-300 line-clamp-2">
                {hoveredElement.appearance}
              </div>
            </div>
          </div>

          {/* Center: Electronic & Elemental Form overview */}
          <div className="space-y-2 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-800 md:pl-4 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Electron Configuration:</span>
              <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">
                {hoveredElement.condensedElectronConfig}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Standard Elemental Substance:</span>
              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                {hoveredElement.elementalForm.standardFormula} ({hoveredElement.elementalForm.formType.replace('-', ' ')})
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Molecular vs Lattice:</span>
              <span className="capitalize font-medium text-slate-700 dark:text-slate-300">
                {hoveredElement.elementalForm.molecularOrNonMolecular}
              </span>
            </div>
            <div className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug line-clamp-2">
              {hoveredElement.elementalForm.description}
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-col justify-center gap-2 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-800 md:pl-4">
            <button
              onClick={() => onSelectElement(hoveredElement)}
              className="w-full py-2 px-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              Open Full {hoveredElement.name} Profile
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onNavigateToElementalForms}
              className="w-full py-2 px-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Explore {hoveredElement.name}’s Elemental Forms Guide
            </button>
          </div>
        </div>
      )}

      {/* Category Legend Bar */}
      <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
          Chemical Classifications
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {categoriesList.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategoryFilter(selectedCategoryFilter === c.id ? 'all' : c.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all ${
                selectedCategoryFilter === c.id
                  ? 'bg-white dark:bg-slate-800 border-indigo-500 dark:border-cyan-400 shadow-xs font-semibold'
                  : 'bg-white/70 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/60 hover:bg-white dark:hover:bg-slate-800'
              }`}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${c.color}`} />
              <span className="text-slate-700 dark:text-slate-300">{c.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
