import React, { useState } from 'react';
import { ElementData } from '../../types/chemistry';
import { TrendingUp, BarChart3, HelpCircle, ArrowRight } from 'lucide-react';

interface PeriodicTrendsProps {
  elements: ElementData[];
  onSelectElement: (element: ElementData) => void;
}

type TrendMetric = 'atomicRadius' | 'ionizationEnergy' | 'electronegativity' | 'meltingPoint';

export const PeriodicTrends: React.FC<PeriodicTrendsProps> = ({
  elements,
  onSelectElement
}) => {
  const [metric, setMetric] = useState<TrendMetric>('ionizationEnergy');
  const [selectedPeriod, setSelectedPeriod] = useState<number>(2);
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);

  // Filter elements by chosen Period or Group
  const activeElements = React.useMemo(() => {
    if (selectedGroup !== null) {
      return elements.filter((e) => e.group === selectedGroup);
    }
    return elements.filter((e) => e.period === selectedPeriod && e.group !== null);
  }, [elements, selectedPeriod, selectedGroup]);

  const metricInfo: { [key in TrendMetric]: { label: string; unit: string; desc: string; maxVal: number } } = {
    atomicRadius: {
      label: 'Atomic Radius',
      unit: 'pm',
      desc: 'Decreases across a period as nuclear charge pulls electrons closer; increases down a group with new electron shells.',
      maxVal: 270
    },
    ionizationEnergy: {
      label: '1st Ionization Energy',
      unit: 'kJ/mol',
      desc: 'Energy required to remove the outermost valence electron. Increases across a period, with dips at Boron (2p¹) and Oxygen (2p⁴).',
      maxVal: 2400
    },
    electronegativity: {
      label: 'Electronegativity (Pauling)',
      unit: '',
      desc: 'Tendency of an atom in a molecule to attract bonding electrons. Peaks at Fluorine (3.98).',
      maxVal: 4.0
    },
    meltingPoint: {
      label: 'Melting Point',
      unit: 'K',
      desc: 'Peaks in group 14 (Carbon/Diamond and Silicon) due to 3D giant covalent networks, then drops for molecular nonmetals.',
      maxVal: 3800
    }
  };

  const currentMetric = metricInfo[metric];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
          <TrendingUp className="w-6 h-6 text-indigo-500" />
          Interactive Periodic Trends Visualizer
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
          Examine how atomic properties shift systematically across periods and groups.
          Hover over data points to inspect real elements and discover the quantum mechanical reasons for each curve.
        </p>

        {/* Controls */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
          {/* Metric Selector */}
          <div>
            <label className="font-semibold text-slate-500 block mb-1">Select Property:</label>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'ionizationEnergy', label: 'Ionization Energy' },
                { id: 'atomicRadius', label: 'Atomic Radius' },
                { id: 'electronegativity', label: 'Electronegativity' },
                { id: 'meltingPoint', label: 'Melting Point' }
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMetric(m.id as TrendMetric)}
                  className={`px-2.5 py-1.5 rounded-lg font-medium transition-all ${
                    metric === m.id
                      ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Period Selector */}
          <div>
            <label className="font-semibold text-slate-500 block mb-1">Explore by Period (Rows 1–6):</label>
            <div className="flex flex-wrap gap-1">
              {[1, 2, 3, 4, 5, 6].map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    setSelectedPeriod(p);
                    setSelectedGroup(null);
                  }}
                  className={`px-3 py-1.5 rounded-lg font-mono font-medium transition-all ${
                    selectedGroup === null && selectedPeriod === p
                      ? 'bg-indigo-600 text-white shadow-xs font-bold'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  Period {p}
                </button>
              ))}
            </div>
          </div>

          {/* Group Selector */}
          <div>
            <label className="font-semibold text-slate-500 block mb-1">Explore by Group (Columns):</label>
            <div className="flex flex-wrap gap-1">
              {[
                { g: 1, name: 'Alkali (1)' },
                { g: 2, name: 'Alkaline (2)' },
                { g: 17, name: 'Halogens (17)' },
                { g: 18, name: 'Nobles (18)' }
              ].map((grp) => (
                <button
                  key={grp.g}
                  onClick={() => setSelectedGroup(grp.g)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedGroup === grp.g
                      ? 'bg-emerald-600 text-white shadow-xs font-bold'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {grp.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Trend Interactive Chart */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-indigo-500" />
              {currentMetric.label} across{' '}
              {selectedGroup !== null ? `Group ${selectedGroup}` : `Period ${selectedPeriod}`}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {currentMetric.desc}
            </p>
          </div>
        </div>

        {/* SVG / Bar Chart Representation */}
        <div className="pt-6 pb-2">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 items-end min-h-[260px]">
            {activeElements.map((el) => {
              const val = el[metric] as number | null;
              const hasVal = val !== null && val !== undefined;
              const heightPercent = hasVal ? Math.max(8, Math.min(100, (val / currentMetric.maxVal) * 100)) : 4;

              return (
                <div
                  key={el.number}
                  className="flex flex-col items-center justify-end h-full group cursor-pointer"
                  onClick={() => onSelectElement(el)}
                >
                  {/* Tooltip / Value on top */}
                  <div className="text-[11px] font-mono font-bold text-slate-700 dark:text-slate-200 mb-1 group-hover:scale-110 transition-transform">
                    {hasVal ? val : 'N/A'}
                  </div>

                  {/* Bar */}
                  <div className="w-full max-w-[48px] bg-slate-100 dark:bg-slate-800/80 rounded-t-xl overflow-hidden flex items-end justify-center p-1 border border-slate-200 dark:border-slate-700 group-hover:border-indigo-500 transition-colors">
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className="w-full rounded-t-lg bg-gradient-to-t from-indigo-600 via-cyan-500 to-emerald-400 group-hover:from-indigo-500 group-hover:to-cyan-300 transition-all shadow-xs"
                    />
                  </div>

                  {/* Element label */}
                  <div className="mt-2 text-center">
                    <div className="w-7 h-7 mx-auto rounded-lg bg-indigo-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-mono font-black text-xs text-slate-900 dark:text-white group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      {el.symbol}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5 truncate max-w-[64px]">
                      {el.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
