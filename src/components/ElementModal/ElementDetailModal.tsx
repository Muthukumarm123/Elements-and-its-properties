import React, { useState, useEffect } from 'react';
import { ElementData } from '../../types/chemistry';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Atom,
  Flame,
  Activity,
  Layers,
  Thermometer,
  Zap,
  Radio,
  BookOpen,
  Info,
  Calendar,
  User,
  FlaskConical,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

interface ElementDetailModalProps {
  element: ElementData | null;
  onClose: () => void;
  onPrevElement: () => void;
  onNextElement: () => void;
  onExploreElementalForm: (element: ElementData) => void;
}

type TabType =
  | 'overview'
  | 'atomic'
  | 'physical'
  | 'chemical'
  | 'compounds'
  | 'uses'
  | 'history';

export const ElementDetailModal: React.FC<ElementDetailModalProps> = ({
  element,
  onClose,
  onPrevElement,
  onNextElement,
  onExploreElementalForm
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrevElement();
      if (e.key === 'ArrowRight') onNextElement();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrevElement, onNextElement]);

  if (!element) return null;

  const kelvinToCelsius = (k: number | null) => {
    if (k === null) return 'N/A';
    return `${(k - 273.15).toFixed(1)} °C (${k} K)`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Header Bar */}
        <div className="relative p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 bg-gradient-to-r from-slate-50 via-indigo-50/20 to-cyan-50/20 dark:from-slate-900 dark:via-indigo-950/20 dark:to-cyan-950/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Element Big Badge */}
            <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-600 text-white p-2 flex flex-col justify-between shadow-lg shadow-indigo-500/25 shrink-0">
              <div className="flex justify-between items-start text-xs font-mono font-bold opacity-80">
                <span>{element.number}</span>
                <span className="text-[10px] font-mono bg-white/20 px-1 rounded">
                  {element.block}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-center tracking-tight">
                {element.symbol}
              </div>
              <div className="text-[10px] font-mono text-center opacity-85 truncate">
                {typeof element.atomicWeight === 'number'
                  ? element.atomicWeight.toFixed(2)
                  : element.atomicWeight}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                  {element.name}
                </h2>
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-cyan-300 border border-indigo-200 dark:border-indigo-800">
                  {element.category.replace('-', ' ')}
                </span>
                <span className="text-xs font-semibold capitalize px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {element.state}
                </span>
                {element.radioactive && (
                  <span className="flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
                    <Radio className="w-3 h-3" />
                    Radioactive
                  </span>
                )}
              </div>

              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-3">
                <span>Standard Elemental Formula:</span>
                <span className="font-mono font-bold text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                  {element.elementalForm.standardFormula}
                </span>
                <span className="text-slate-400">•</span>
                <span className="capitalize">{element.elementalForm.molecularOrNonMolecular}</span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={onPrevElement}
              disabled={element.number <= 1}
              aria-label="Previous element"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors border border-slate-200 dark:border-slate-700"
              title="Previous Element (Left Arrow)"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={onNextElement}
              disabled={element.number >= 118}
              aria-label="Next element"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors border border-slate-200 dark:border-slate-700"
              title="Next Element (Right Arrow)"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* System 2 Cross-Link Banner */}
        <div className="px-6 py-2.5 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-indigo-500/10 border-b border-emerald-200/50 dark:border-emerald-900/40 flex items-center justify-between flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
            <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>
              <strong>Elemental Substance:</strong> {element.name} exists as{' '}
              <strong className="font-mono text-emerald-700 dark:text-emerald-300">
                {element.elementalForm.standardFormula}
              </strong>{' '}
              ({element.elementalForm.formType.replace('-', ' ')}).
            </span>
          </div>

          <button
            onClick={() => onExploreElementalForm(element)}
            className="flex items-center gap-1.5 font-bold text-emerald-700 dark:text-emerald-300 hover:underline"
          >
            Explore {element.name} in Elemental Forms Guide
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2 overflow-x-auto text-xs font-semibold py-2">
          {[
            { id: 'overview', label: 'Overview & Facts', icon: <Info className="w-3.5 h-3.5" /> },
            { id: 'atomic', label: 'Atomic Structure & Shells', icon: <Atom className="w-3.5 h-3.5" /> },
            { id: 'physical', label: 'Physical Properties', icon: <Thermometer className="w-3.5 h-3.5" /> },
            { id: 'chemical', label: 'Chemical Properties', icon: <Zap className="w-3.5 h-3.5" /> },
            { id: 'compounds', label: 'Compounds & Allotropes', icon: <FlaskConical className="w-3.5 h-3.5" /> },
            { id: 'uses', label: 'Uses & Biological Role', icon: <Activity className="w-3.5 h-3.5" /> },
            { id: 'history', label: 'History & Discovery', icon: <Calendar className="w-3.5 h-3.5" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800 dark:text-slate-200 text-xs sm:text-sm">
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Quick Facts Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                  <div className="text-[11px] text-slate-500 mb-0.5">Atomic Number</div>
                  <div className="font-mono font-bold text-base text-slate-900 dark:text-white">
                    {element.number}
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                  <div className="text-[11px] text-slate-500 mb-0.5">Standard Atomic Weight</div>
                  <div className="font-mono font-bold text-base text-slate-900 dark:text-white">
                    {typeof element.atomicWeight === 'number'
                      ? element.atomicWeight.toFixed(4)
                      : element.atomicWeight}{' '}
                    <span className="text-[11px] font-normal text-slate-400">u</span>
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                  <div className="text-[11px] text-slate-500 mb-0.5">Periodic Position</div>
                  <div className="font-semibold text-sm text-slate-900 dark:text-white">
                    Group {element.group ?? '—'}, Period {element.period} ({element.block}-block)
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                  <div className="text-[11px] text-slate-500 mb-0.5">Valence Electrons</div>
                  <div className="font-mono font-bold text-base text-slate-900 dark:text-white">
                    {element.valenceElectrons}
                  </div>
                </div>
              </div>

              {/* Appearance & Description */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Info className="w-4 h-4 text-indigo-500" />
                  Appearance & General Character
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {element.appearance}
                </p>
              </div>

              {/* Elemental Form Card */}
              <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/60 space-y-2">
                <h4 className="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  How {element.name} Exists as an Elemental Substance
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2 text-xs">
                  <div className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-emerald-200/60 dark:border-emerald-800/40">
                    <span className="text-slate-400 block">Formula:</span>
                    <span className="font-mono font-bold text-emerald-700 dark:text-emerald-300 text-sm">
                      {element.elementalForm.standardFormula}
                    </span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-emerald-200/60 dark:border-emerald-800/40">
                    <span className="text-slate-400 block">Classification:</span>
                    <span className="font-semibold capitalize text-slate-800 dark:text-slate-200">
                      {element.elementalForm.formType.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-emerald-200/60 dark:border-emerald-800/40">
                    <span className="text-slate-400 block">Molecular / Lattice:</span>
                    <span className="font-semibold capitalize text-slate-800 dark:text-slate-200">
                      {element.elementalForm.molecularOrNonMolecular}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {element.elementalForm.description}
                </p>
                <p className="text-xs font-mono text-emerald-800 dark:text-emerald-400">
                  {element.elementalForm.bondingDescription}
                </p>
              </div>

              {/* Interesting Facts */}
              {element.interestingFacts.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    Notable Scientific Facts
                  </h4>
                  <ul className="space-y-2">
                    {element.interestingFacts.map((fact, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 leading-relaxed text-xs"
                      >
                        <span className="font-bold text-indigo-500 shrink-0">•</span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* ATOMIC STRUCTURE TAB */}
          {activeTab === 'atomic' && (
            <div className="space-y-6">
              {/* Bohr Shells Interactive Visualizer */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 flex flex-col sm:flex-row items-center gap-6">
                {/* SVG Concentric Rings */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    {/* Concentric Shell Rings */}
                    {element.shells.map((count, idx) => {
                      const radius = 25 + idx * 11;
                      return (
                        <circle
                          key={idx}
                          cx="100"
                          cy="100"
                          r={radius}
                          fill="none"
                          stroke="currentColor"
                          strokeDasharray="2 3"
                          className="text-slate-300 dark:text-slate-700"
                          strokeWidth="1"
                        />
                      );
                    })}

                    {/* Nucleus */}
                    <circle cx="100" cy="100" r="16" fill="url(#nucleusGrad)" />
                    <text
                      x="100"
                      y="104"
                      textAnchor="middle"
                      fill="white"
                      fontSize="10"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      {element.symbol}
                    </text>

                    {/* Gradient def */}
                    <defs>
                      <linearGradient id="nucleusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>

                    {/* Electrons on each shell */}
                    {element.shells.map((count, shellIdx) => {
                      const radius = 25 + shellIdx * 11;
                      const dots = [];
                      for (let i = 0; i < count; i++) {
                        const angle = (i * 2 * Math.PI) / count;
                        const ex = 100 + radius * Math.cos(angle);
                        const ey = 100 + radius * Math.sin(angle);
                        dots.push(
                          <circle
                            key={`${shellIdx}-${i}`}
                            cx={ex}
                            cy={ey}
                            r="2.5"
                            className="fill-indigo-600 dark:fill-cyan-400"
                          />
                        );
                      }
                      return <g key={shellIdx}>{dots}</g>;
                    })}
                  </svg>
                </div>

                {/* Shell Breakdown Table */}
                <div className="flex-1 space-y-3 w-full">
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Electron Shell Distribution (Bohr Model)
                  </h4>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 text-center text-xs">
                    {['K (n=1)', 'L (n=2)', 'M (n=3)', 'N (n=4)', 'O (n=5)', 'P (n=6)', 'Q (n=7)']
                      .slice(0, element.shells.length)
                      .map((label, idx) => (
                        <div
                          key={idx}
                          className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                        >
                          <div className="text-[10px] text-slate-400 mb-0.5">{label.split(' ')[0]}</div>
                          <div className="font-mono font-bold text-base text-indigo-600 dark:text-cyan-400">
                            {element.shells[idx]}
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Total Electrons: <strong>{element.number}</strong> • Valence Shell:{' '}
                    <strong>{element.shells[element.shells.length - 1]} valence electrons</strong>
                  </div>
                </div>
              </div>

              {/* Configurations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
                  <span className="text-xs text-slate-500 font-medium">
                    Condensed Electron Configuration
                  </span>
                  <div className="font-mono font-bold text-base text-indigo-700 dark:text-cyan-300">
                    {element.condensedElectronConfig}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
                  <span className="text-xs text-slate-500 font-medium">
                    Full Electron Configuration
                  </span>
                  <div className="font-mono font-semibold text-sm text-slate-800 dark:text-slate-200">
                    {element.electronConfiguration}
                  </div>
                </div>
              </div>

              {/* Radii */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-center">
                  <span className="text-xs text-slate-400">Atomic Radius</span>
                  <div className="font-mono font-bold text-base text-slate-900 dark:text-white mt-1">
                    {element.atomicRadius ? `${element.atomicRadius} pm` : 'N/A'}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-center">
                  <span className="text-xs text-slate-400">Covalent Radius</span>
                  <div className="font-mono font-bold text-base text-slate-900 dark:text-white mt-1">
                    {element.covalentRadius ? `${element.covalentRadius} pm` : 'N/A'}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-center">
                  <span className="text-xs text-slate-400">Van der Waals</span>
                  <div className="font-mono font-bold text-base text-slate-900 dark:text-white mt-1">
                    {element.vanDerWaalsRadius ? `${element.vanDerWaalsRadius} pm` : 'N/A'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PHYSICAL PROPERTIES TAB */}
          {activeTab === 'physical' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                  <div className="text-xs text-slate-500 mb-1">State at Room Temp (STP)</div>
                  <div className="font-bold text-base capitalize text-slate-900 dark:text-white">
                    {element.state}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                  <div className="text-xs text-slate-500 mb-1">Melting Point</div>
                  <div className="font-mono font-bold text-sm text-slate-900 dark:text-white">
                    {kelvinToCelsius(element.meltingPoint)}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                  <div className="text-xs text-slate-500 mb-1">Boiling Point</div>
                  <div className="font-mono font-bold text-sm text-slate-900 dark:text-white">
                    {kelvinToCelsius(element.boilingPoint)}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                  <div className="text-xs text-slate-500 mb-1">Density</div>
                  <div className="font-mono font-bold text-sm text-slate-900 dark:text-white">
                    {element.density !== null
                      ? `${element.density} ${element.state === 'gas' ? 'g/L' : 'g/cm³'}`
                      : 'N/A'}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                  <div className="text-xs text-slate-500 mb-1">Crystal Structure</div>
                  <div className="font-semibold text-sm text-slate-900 dark:text-white">
                    {element.crystalStructure || 'N/A'}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                  <div className="text-xs text-slate-500 mb-1">Thermal Conductivity</div>
                  <div className="font-mono font-bold text-sm text-slate-900 dark:text-white">
                    {element.thermalConductivity !== null
                      ? `${element.thermalConductivity} W/(m·K)`
                      : 'N/A'}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="text-xs text-slate-500 font-medium">Electrical Resistivity:</span>
                <div className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {typeof element.electricalResistivity === 'number'
                    ? `${element.electricalResistivity} nΩ·m`
                    : element.electricalResistivity || 'N/A'}
                </div>
              </div>
            </div>
          )}

          {/* CHEMICAL PROPERTIES TAB */}
          {activeTab === 'chemical' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-center">
                  <span className="text-xs text-slate-500">Electronegativity (Pauling)</span>
                  <div className="text-2xl font-mono font-extrabold text-indigo-600 dark:text-cyan-400 mt-1">
                    {element.electronegativity ?? 'N/A'}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-center">
                  <span className="text-xs text-slate-500">1st Ionization Energy</span>
                  <div className="text-2xl font-mono font-extrabold text-indigo-600 dark:text-cyan-400 mt-1">
                    {element.ionizationEnergy ? `${element.ionizationEnergy}` : 'N/A'}{' '}
                    <span className="text-xs font-normal text-slate-400">kJ/mol</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-center">
                  <span className="text-xs text-slate-500">Electron Affinity</span>
                  <div className="text-2xl font-mono font-extrabold text-indigo-600 dark:text-cyan-400 mt-1">
                    {element.electronAffinity !== null ? `${element.electronAffinity}` : 'N/A'}{' '}
                    <span className="text-xs font-normal text-slate-400">kJ/mol</span>
                  </div>
                </div>
              </div>

              {/* Oxidation States & Ions */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3">
                <div>
                  <span className="text-xs text-slate-500 font-medium block mb-1.5">
                    Oxidation States:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {element.oxidationStates.map((st) => (
                      <span
                        key={st}
                        className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                      >
                        {st > 0 ? `+${st}` : st}
                      </span>
                    ))}
                  </div>
                </div>

                {element.commonIons.length > 0 && (
                  <div>
                    <span className="text-xs text-slate-500 font-medium block mb-1.5">
                      Common Ions & Complex Ions:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {element.commonIons.map((ion, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-xs font-semibold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-indigo-800 dark:text-cyan-300"
                        >
                          {ion}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Chemical Reactivity summary */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <h4 className="font-bold text-slate-900 dark:text-white">Chemical Reactivity</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                  {element.reactivity}
                </p>
              </div>
            </div>
          )}

          {/* COMPOUNDS & ALLOTROPES TAB */}
          {activeTab === 'compounds' && (
            <div className="space-y-6">
              {/* Common Compounds */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-indigo-500" />
                  Key Chemical Compounds
                </h4>

                {element.compounds.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {element.compounds.map((cmp, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono font-bold text-sm text-indigo-600 dark:text-cyan-400">
                            {cmp.formula}
                          </span>
                          <span className="text-xs font-medium text-slate-500">{cmp.name}</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                          {cmp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-500 italic">
                    Forms no conventional ground-state chemical compounds under ordinary conditions.
                  </p>
                )}
              </div>

              {/* Allotropes if applicable */}
              {element.allotropes && element.allotropes.length > 0 && (
                <div className="space-y-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-500" />
                    Elemental Allotropes
                  </h4>
                  <div className="space-y-2">
                    {element.allotropes.map((alt, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 space-y-1 text-xs"
                      >
                        <div className="font-bold text-emerald-900 dark:text-emerald-300 text-sm">
                          {alt.name}
                        </div>
                        <div className="text-slate-600 dark:text-slate-300">
                          <strong>Structure:</strong> {alt.structure}
                        </div>
                        <div className="text-slate-500 dark:text-slate-400">{alt.properties}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* USES & BIOLOGY TAB */}
          {activeTab === 'uses' && (
            <div className="space-y-6">
              {/* Uses */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500" />
                  Primary Real-World Applications & Technologies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {element.uses.map((use, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex items-start gap-2 text-xs"
                    >
                      <span className="font-bold text-indigo-500">✓</span>
                      <span>{use}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Biological Role */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-500" />
                  Biological Role & Physiology
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {element.biologicalRole}
                </p>
              </div>

              {/* Hazards */}
              <div className="p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 space-y-1.5">
                <h4 className="font-bold text-rose-900 dark:text-rose-300 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-rose-600" />
                  Hazards & Safety
                </h4>
                <p className="text-xs text-rose-800 dark:text-rose-300 leading-relaxed">
                  {element.hazards}
                </p>
              </div>
            </div>
          )}

          {/* HISTORY & DISCOVERY TAB */}
          {activeTab === 'history' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-xs text-slate-500 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Year Discovered
                  </span>
                  <div className="font-bold text-base text-slate-900 dark:text-white">
                    {element.yearDiscovered}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-xs text-slate-500 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    Discoverer
                  </span>
                  <div className="font-bold text-base text-slate-900 dark:text-white">
                    {element.discoverer}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <h4 className="font-bold text-slate-900 dark:text-white">Name Etymology & Origin</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {element.nameOrigin}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Bar */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/70 flex items-center justify-between text-xs">
          <button
            onClick={onPrevElement}
            disabled={element.number <= 1}
            className="flex items-center gap-1 font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous Element
          </button>

          <span className="font-mono text-slate-400">
            Element {element.number} of 118
          </span>

          <button
            onClick={onNextElement}
            disabled={element.number >= 118}
            className="flex items-center gap-1 font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 disabled:opacity-30 disabled:pointer-events-none"
          >
            Next Element
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
