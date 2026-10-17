import React from 'react';
import { ElementData } from '../../types/chemistry';

export type TableColorMode =
  | 'category'
  | 'state'
  | 'block'
  | 'electronegativity'
  | 'atomicRadius'
  | 'ionizationEnergy'
  | 'density';

interface ElementTileProps {
  element: ElementData;
  colorMode: TableColorMode;
  isSelected?: boolean;
  isHovered?: boolean;
  highlightDiatomic7?: boolean;
  highlightMonoatomic?: boolean;
  dimmed?: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const ElementTile: React.FC<ElementTileProps> = ({
  element,
  colorMode,
  isSelected,
  highlightDiatomic7,
  highlightMonoatomic,
  dimmed,
  onClick,
  onMouseEnter,
  onMouseLeave
}) => {
  const isDiatomic7 = ['H', 'N', 'O', 'F', 'Cl', 'Br', 'I'].includes(element.symbol);
  const isNoble = ['He', 'Ne', 'Ar', 'Kr', 'Xe', 'Rn', 'Og'].includes(element.symbol);

  // Compute background and border based on colorMode
  let bgClass = '';
  let borderClass = 'border-slate-300 dark:border-slate-700/60';
  let textClass = 'text-slate-900 dark:text-slate-100';

  if (colorMode === 'category') {
    switch (element.category) {
      case 'alkali-metal':
        bgClass = 'bg-red-100 dark:bg-red-950/70 border-red-300 dark:border-red-800 text-red-900 dark:text-red-200';
        break;
      case 'alkaline-earth':
        bgClass = 'bg-orange-100 dark:bg-orange-950/70 border-orange-300 dark:border-orange-800 text-orange-900 dark:text-orange-200';
        break;
      case 'transition-metal':
        bgClass = 'bg-blue-100 dark:bg-blue-950/70 border-blue-300 dark:border-blue-800 text-blue-900 dark:text-blue-200';
        break;
      case 'post-transition-metal':
        bgClass = 'bg-emerald-100 dark:bg-emerald-950/70 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200';
        break;
      case 'metalloid':
        bgClass = 'bg-teal-100 dark:bg-teal-950/70 border-teal-300 dark:border-teal-800 text-teal-900 dark:text-teal-200';
        break;
      case 'reactive-nonmetal':
        bgClass = 'bg-sky-100 dark:bg-sky-950/70 border-sky-300 dark:border-sky-800 text-sky-900 dark:text-sky-200';
        break;
      case 'noble-gas':
        bgClass = 'bg-purple-100 dark:bg-purple-950/70 border-purple-300 dark:border-purple-800 text-purple-900 dark:text-purple-200';
        break;
      case 'lanthanide':
        bgClass = 'bg-amber-100 dark:bg-amber-950/70 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200';
        break;
      case 'actinide':
        bgClass = 'bg-rose-100 dark:bg-rose-950/70 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200';
        break;
      default:
        bgClass = 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100';
    }
  } else if (colorMode === 'state') {
    switch (element.state) {
      case 'gas':
        bgClass = 'bg-cyan-100 dark:bg-cyan-950/70 border-cyan-300 dark:border-cyan-800 text-cyan-950 dark:text-cyan-200';
        break;
      case 'liquid':
        bgClass = 'bg-blue-200 dark:bg-blue-900/80 border-blue-400 dark:border-blue-700 text-blue-950 dark:text-blue-100 font-bold';
        break;
      case 'solid':
        bgClass = 'bg-slate-100 dark:bg-slate-800/80 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200';
        break;
      default:
        bgClass = 'bg-purple-100 dark:bg-purple-950 border-purple-300 dark:border-purple-800';
    }
  } else if (colorMode === 'block') {
    switch (element.block) {
      case 's':
        bgClass = 'bg-rose-100 dark:bg-rose-950/70 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-200';
        break;
      case 'p':
        bgClass = 'bg-sky-100 dark:bg-sky-950/70 border-sky-300 dark:border-sky-800 text-sky-950 dark:text-sky-200';
        break;
      case 'd':
        bgClass = 'bg-indigo-100 dark:bg-indigo-950/70 border-indigo-300 dark:border-indigo-800 text-indigo-950 dark:text-indigo-200';
        break;
      case 'f':
        bgClass = 'bg-amber-100 dark:bg-amber-950/70 border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-200';
        break;
    }
  } else {
    // Heatmap mode
    let val: number | null = null;
    let min = 0;
    let max = 1;

    if (colorMode === 'electronegativity') {
      val = element.electronegativity;
      min = 0.7;
      max = 4.0;
    } else if (colorMode === 'atomicRadius') {
      val = element.atomicRadius;
      min = 30;
      max = 270;
    } else if (colorMode === 'ionizationEnergy') {
      val = element.ionizationEnergy;
      min = 375;
      max = 2372;
    } else if (colorMode === 'density') {
      val = element.density;
      min = 0;
      max = 22.6;
    }

    if (val !== null && val !== undefined) {
      const ratio = Math.max(0, Math.min(1, (val - min) / (max - min)));
      // Interpolate colors: low = cyan/blue, mid = emerald/yellow, high = red/purple
      if (ratio < 0.25) {
        bgClass = 'bg-blue-100 dark:bg-blue-950/80 border-blue-300 dark:border-blue-800 text-blue-900 dark:text-blue-200';
      } else if (ratio < 0.5) {
        bgClass = 'bg-teal-100 dark:bg-teal-950/80 border-teal-300 dark:border-teal-800 text-teal-900 dark:text-teal-200';
      } else if (ratio < 0.75) {
        bgClass = 'bg-amber-100 dark:bg-amber-950/80 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200';
      } else {
        bgClass = 'bg-rose-200 dark:bg-rose-900/90 border-rose-400 dark:border-rose-700 text-rose-950 dark:text-rose-100 font-bold';
      }
    } else {
      bgClass = 'bg-slate-100/50 dark:bg-slate-800/40 border-dashed border-slate-300 dark:border-slate-700 text-slate-400';
    }
  }

  // Highlight overlays
  let highlightBorder = '';
  if (highlightDiatomic7 && isDiatomic7) {
    highlightBorder = 'ring-2 ring-emerald-500 shadow-md shadow-emerald-500/30 scale-105 z-10';
  } else if (highlightMonoatomic && isNoble) {
    highlightBorder = 'ring-2 ring-purple-500 shadow-md shadow-purple-500/30 scale-105 z-10';
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative w-full h-full min-h-[52px] sm:min-h-[58px] p-1 rounded-lg border text-left flex flex-col justify-between transition-all duration-150 cursor-pointer select-none group ${bgClass} ${borderClass} ${highlightBorder} ${
        dimmed ? 'opacity-25 grayscale' : 'opacity-100'
      } ${isSelected ? 'ring-2 ring-indigo-600 dark:ring-cyan-400 shadow-md scale-105 z-20' : 'hover:scale-105 hover:shadow-md hover:z-20'}`}
      title={`${element.number}: ${element.name} (${element.symbol}) — Form: ${element.elementalForm.standardFormula}`}
    >
      {/* Top row: atomic number & elemental formula badge */}
      <div className="flex items-center justify-between w-full text-[9px] sm:text-[10px] leading-none">
        <span className="font-mono font-medium text-slate-600 dark:text-slate-300">
          {element.number}
        </span>
        <span
          className={`font-mono text-[8px] font-bold px-1 rounded ${
            element.elementalForm.atomsPerUnit === 2
              ? 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-300'
              : element.elementalForm.atomsPerUnit === 1
              ? 'bg-purple-500/20 text-purple-800 dark:text-purple-300'
              : 'text-slate-400 dark:text-slate-500'
          }`}
        >
          {element.elementalForm.standardFormula}
        </span>
      </div>

      {/* Center: Symbol */}
      <div className="text-center my-0.5">
        <div className="text-sm sm:text-base font-extrabold tracking-tight font-mono leading-none">
          {element.symbol}
        </div>
      </div>

      {/* Bottom row: Name & atomic weight */}
      <div className="w-full text-center overflow-hidden">
        <div className="text-[9px] truncate font-medium leading-none mb-0.5">
          {element.name}
        </div>
        <div className="text-[8px] font-mono text-slate-500 dark:text-slate-400 leading-none truncate">
          {typeof element.atomicWeight === 'number'
            ? element.atomicWeight.toFixed(2)
            : element.atomicWeight}
        </div>
      </div>
    </button>
  );
};
