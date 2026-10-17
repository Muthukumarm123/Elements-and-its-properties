import React, { useState } from 'react';
import { Link2, ArrowLeftRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface ComparisonPair {
  id: string;
  title: string;
  left: {
    name: string;
    formula: string;
    atomsPerUnit: string;
    structure: string;
    bonding: string;
    state: string;
    properties: string;
    stability: string;
    allotropy: string;
  };
  right: {
    name: string;
    formula: string;
    atomsPerUnit: string;
    structure: string;
    bonding: string;
    state: string;
    properties: string;
    stability: string;
    allotropy: string;
  };
  keyTakeaway: string;
}

export const ElementalFormComparison: React.FC = () => {
  const pairs: ComparisonPair[] = [
    {
      id: 'h2-vs-he',
      title: 'H₂ vs He (Diatomic vs Monoatomic Gas)',
      left: {
        name: 'Dihydrogen (Hydrogen Gas)',
        formula: 'H₂',
        atomsPerUnit: '2 atoms per molecule',
        structure: 'Linear homonuclear diatomic molecule',
        bonding: 'Single covalent σ bond (1s–1s overlap, 436 kJ/mol)',
        state: 'Gas at STP (bp: 20.3 K)',
        properties: 'Extremely flammable; reducing agent; lightest gas in universe',
        stability: 'Stable molecule; decomposes into atomic H at &gt; 2000 °C',
        allotropy: 'Orthohydrogen vs Parahydrogen (nuclear spin isomers)'
      },
      right: {
        name: 'Helium Gas',
        formula: 'He',
        atomsPerUnit: '1 atom (monoatomic)',
        structure: 'Isolated unbonded spherical atoms',
        bonding: 'No covalent chemical bond; only weak London dispersion forces',
        state: 'Gas at STP (bp: 4.2 K)',
        properties: 'Completely inert non-flammable noble gas; superfluid liquid phase',
        stability: 'Exceptionally stable due to complete 1s² duet shell',
        allotropy: 'None (no allotropes)'
      },
      keyTakeaway: 'Both are period 1 gases, but Hydrogen forms diatomic H₂ to satisfy its duet, while Helium already has a complete 1s² shell and has bond order zero.'
    },
    {
      id: 'o2-vs-o3',
      title: 'O₂ vs O₃ (Dioxygen vs Ozone)',
      left: {
        name: 'Dioxygen (Molecular Oxygen)',
        formula: 'O₂',
        atomsPerUnit: '2 atoms per molecule',
        structure: 'Linear diatomic molecule',
        bonding: 'Covalent net double bond with 2 unpaired π* electrons (498 kJ/mol)',
        state: 'Colorless gas at STP (pale blue liquid)',
        properties: 'Paramagnetic gas; supports combustion; essential for respiration',
        stability: 'Thermodynamically stable form of oxygen under ambient conditions',
        allotropy: 'Standard allotrope of oxygen (20.95% of atmosphere)'
      },
      right: {
        name: 'Ozone (Trioxygen)',
        formula: 'O₃',
        atomsPerUnit: '3 atoms per molecule',
        structure: 'Bent triatomic molecule (116.8° angle)',
        bonding: 'Resonance-stabilized delocalized 3-atom π system',
        state: 'Pale blue gas with sharp pungent odor',
        properties: 'Diamagnetic; powerful toxic oxidizing agent; absorbs UV-B',
        stability: 'Metastable; thermodynamically decomposes exothermically into O₂',
        allotropy: 'Allotrope formed by UV photolysis of O₂'
      },
      keyTakeaway: 'O₂ and O₃ are allotropes of the exact same element (oxygen), but differ completely in geometry, electronic magnetism, and biological toxicity.'
    },
    {
      id: 'cl2-vs-br2',
      title: 'Cl₂ vs Br₂ (Gas vs Liquid Halogen)',
      left: {
        name: 'Dichlorine',
        formula: 'Cl₂',
        atomsPerUnit: '2 atoms per molecule',
        structure: 'Linear diatomic molecule',
        bonding: 'Single covalent σ bond (199 pm, 242 kJ/mol)',
        state: 'Yellowish-green gas at STP (bp: −34.0 °C)',
        properties: 'Dense toxic gas; powerful bleaching and disinfecting oxidizer',
        stability: 'Stable diatomic gas at room temperature',
        allotropy: 'None'
      },
      right: {
        name: 'Dibromine',
        formula: 'Br₂',
        atomsPerUnit: '2 atoms per molecule',
        structure: 'Linear diatomic molecule',
        bonding: 'Single covalent σ bond (228 pm, 193 kJ/mol)',
        state: 'Reddish-brown fuming liquid at STP (bp: +58.8 °C)',
        properties: 'Dense fuming liquid causing severe chemical skin burns',
        stability: 'Stable diatomic liquid at room temperature',
        allotropy: 'None'
      },
      keyTakeaway: 'Both are homonuclear diatomic halogens with single covalent bonds. Br₂ is a liquid because its 70 electrons create much stronger London dispersion forces than Cl₂ (34 electrons).'
    },
    {
      id: 'p4-vs-s8',
      title: 'P₄ vs S₈ (Tetrahedron vs Crown Ring)',
      left: {
        name: 'White Phosphorus',
        formula: 'P₄',
        atomsPerUnit: '4 atoms per molecule',
        structure: 'Regular tetrahedron cage (60° bond angles)',
        bonding: 'Six single P–P σ bonds (high angle strain)',
        state: 'Waxy translucent solid at STP',
        properties: 'Pyrophoric (ignites at 30 °C in air); highly poisonous; chemiluminescent',
        stability: 'Thermodynamically unstable with respect to red/black phosphorus',
        allotropy: 'Allotrope of phosphorus (converts to polymeric red P)'
      },
      right: {
        name: 'Cyclooctasulfur',
        formula: 'S₈',
        atomsPerUnit: '8 atoms per molecule',
        structure: 'Puckered eight-membered crown ring (108° bond angles)',
        bonding: 'Eight single S–S σ bonds in a relaxed ring',
        state: 'Bright yellow crystalline solid at STP',
        properties: 'Brittle yellow crystals; non-toxic; electrical insulator',
        stability: 'Thermodynamically most stable allotrope of sulfur at STP',
        allotropy: 'Allotrope of sulfur (α-orthorhombic sulfur)'
      },
      keyTakeaway: 'Both are Period 3 polyatomic molecular nonmetals. P forms strained P₄ cages because 3p orbitals cannot easily form P≡P triple bonds; S forms relaxed S₈ crown rings.'
    },
    {
      id: 'diamond-vs-graphite',
      title: 'Diamond vs Graphite (sp³ 3D Network vs sp² Sheets)',
      left: {
        name: 'Diamond',
        formula: 'C (empirical)',
        atomsPerUnit: 'Infinite 3D covalent network',
        structure: 'Tetrahedral 3D network of carbon atoms',
        bonding: 'Pure sp³ covalent sigma bonds (109.5° angles)',
        state: 'Transparent solid crystal',
        properties: 'Hardest bulk natural material (10 Mohs); electrical insulator; superb thermal conductor',
        stability: 'Metastable at STP (theoretically converts to graphite over billions of years)',
        allotropy: 'High-pressure allotrope of elemental carbon'
      },
      right: {
        name: 'Graphite',
        formula: 'C (empirical)',
        atomsPerUnit: 'Infinite 2D covalent sheets',
        structure: 'Planar hexagonal honeycomb sheets stacked in layers',
        bonding: 'Planar sp² σ bonds within sheets; delocalized π electrons; weak interlayer van der Waals',
        state: 'Opaque black-gray solid with metallic sheen',
        properties: 'Soft, slippery solid lubricant; excellent electrical conductor along sheets',
        stability: 'Thermodynamically MOST stable form of carbon at standard conditions',
        allotropy: 'Standard thermodynamic allotrope of carbon at STP'
      },
      keyTakeaway: 'Both are 100% pure elemental carbon, but tetrahedral sp³ bonding produces the hardest transparent insulator, while planar sp² bonding produces a soft black electrical conductor.'
    },
    {
      id: 'white-sn-vs-grey-sn',
      title: 'White Tin (β) vs Grey Tin (α) & Tin Pest',
      left: {
        name: 'White Tin (β-Tin)',
        formula: 'Sn (empirical)',
        atomsPerUnit: 'Metallic crystalline lattice',
        structure: 'Body-centered tetragonal metallic crystal',
        bonding: 'Delocalized metallic bonding with conduction electrons',
        state: 'Silvery-white malleable metal (density 7.31 g/cm³)',
        properties: 'Ductile, machinable metal; conducts electricity; stable above 13.2 °C',
        stability: 'Stable above 13.2 °C; metastable down to cold temperatures',
        allotropy: 'Metallic allotrope of elemental tin'
      },
      right: {
        name: 'Grey Tin (α-Tin)',
        formula: 'Sn (empirical)',
        atomsPerUnit: 'Covalent network crystal',
        structure: 'Diamond cubic giant covalent network',
        bonding: 'Directional sp³ covalent bonds (no free electrons)',
        state: 'Brittle grey crumbling powder (density 5.77 g/cm³)',
        properties: 'Non-metallic semiconductor; crumbles easily; stable below 13.2 °C',
        stability: 'Thermodynamically stable below 13.2 °C ("tin pest")',
        allotropy: 'Covalent non-metallic allotrope of tin'
      },
      keyTakeaway: 'An element transitioning between metallic bonding (white tin) and a diamond-like covalent network (grey tin) at a comfortable temperature (13.2 °C), causing catastrophic structural crumble (tin pest).'
    }
  ];

  const [activePairId, setActivePairId] = useState<string>('h2-vs-he');
  const activePair = pairs.find((p) => p.id === activePairId) || pairs[0];

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          <ArrowLeftRight className="w-4 h-4" />
          Head-to-Head Comparison Tool
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Elemental Form Comparative Analysis
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Compare contrasting elemental forms side by side across structure, bonding, physical state, and thermodynamic stability.
        </p>

        {/* Pair selector pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {pairs.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePairId(p.id)}
              className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-all border ${
                activePairId === p.id
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
              }`}
            >
              {p.title.split('(')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison View Table / Cards */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          {activePair.title}
        </h2>

        {/* 2-Column Side by Side Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Left Item */}
          <div className="p-5 rounded-2xl bg-indigo-50/50 dark:bg-slate-800/60 border border-indigo-200/80 dark:border-slate-700 space-y-3 text-xs">
            <div className="border-b border-indigo-100 dark:border-slate-700 pb-2">
              <span className="font-mono text-2xl font-black text-indigo-700 dark:text-cyan-300">
                {activePair.left.formula}
              </span>
              <div className="font-bold text-sm text-slate-900 dark:text-white mt-0.5">
                {activePair.left.name}
              </div>
            </div>

            <div>
              <strong className="text-slate-500 block">Unit Size:</strong>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{activePair.left.atomsPerUnit}</span>
            </div>
            <div>
              <strong className="text-slate-500 block">Structure:</strong>
              <span className="text-slate-700 dark:text-slate-300">{activePair.left.structure}</span>
            </div>
            <div>
              <strong className="text-slate-500 block">Bonding:</strong>
              <span className="text-slate-700 dark:text-slate-300">{activePair.left.bonding}</span>
            </div>
            <div>
              <strong className="text-slate-500 block">State:</strong>
              <span className="text-slate-700 dark:text-slate-300">{activePair.left.state}</span>
            </div>
            <div>
              <strong className="text-slate-500 block">Properties:</strong>
              <span className="text-slate-700 dark:text-slate-300">{activePair.left.properties}</span>
            </div>
            <div>
              <strong className="text-slate-500 block">Thermodynamic Stability:</strong>
              <span className="text-slate-700 dark:text-slate-300">{activePair.left.stability}</span>
            </div>
          </div>

          {/* Right Item */}
          <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-slate-800/60 border border-emerald-200/80 dark:border-slate-700 space-y-3 text-xs">
            <div className="border-b border-emerald-100 dark:border-slate-700 pb-2">
              <span className="font-mono text-2xl font-black text-emerald-700 dark:text-emerald-300">
                {activePair.right.formula}
              </span>
              <div className="font-bold text-sm text-slate-900 dark:text-white mt-0.5">
                {activePair.right.name}
              </div>
            </div>

            <div>
              <strong className="text-slate-500 block">Unit Size:</strong>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{activePair.right.atomsPerUnit}</span>
            </div>
            <div>
              <strong className="text-slate-500 block">Structure:</strong>
              <span className="text-slate-700 dark:text-slate-300">{activePair.right.structure}</span>
            </div>
            <div>
              <strong className="text-slate-500 block">Bonding:</strong>
              <span className="text-slate-700 dark:text-slate-300">{activePair.right.bonding}</span>
            </div>
            <div>
              <strong className="text-slate-500 block">State:</strong>
              <span className="text-slate-700 dark:text-slate-300">{activePair.right.state}</span>
            </div>
            <div>
              <strong className="text-slate-500 block">Properties:</strong>
              <span className="text-slate-700 dark:text-slate-300">{activePair.right.properties}</span>
            </div>
            <div>
              <strong className="text-slate-500 block">Thermodynamic Stability:</strong>
              <span className="text-slate-700 dark:text-slate-300">{activePair.right.stability}</span>
            </div>
          </div>
        </div>

        {/* Key Takeaway Callout */}
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-xs sm:text-sm text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
          <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>Key Chemical Insight:</strong> {activePair.keyTakeaway}
          </div>
        </div>
      </div>
    </div>
  );
};
