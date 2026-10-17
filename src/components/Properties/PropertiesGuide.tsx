import React, { useState } from 'react';
import {
  Sliders,
  Zap,
  Atom,
  Flame,
  Layers,
  Thermometer,
  ShieldCheck,
  Compass,
  CheckCircle2,
  BookOpen
} from 'lucide-react';

export const PropertiesGuide: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<string>('electronegativity');

  const properties = [
    {
      id: 'electronegativity',
      title: 'Electronegativity (Pauling Scale)',
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      tagline: 'The relative tendency of an atom to attract shared bonding electrons toward itself.',
      explanation: `Electronegativity is a dimensionless chemical property originally formulated by Linus Pauling in 1932. Rather than being a property of an isolated gaseous atom, electronegativity describes how strongly an atom pulls shared electron density toward its nucleus within a covalent chemical bond.

The most widely used scale is the Pauling scale, where Fluorine is assigned the highest value of 3.98 (often rounded to 4.0), and Caesium/Francium exhibit the lowest values (~0.7).

Bond Polarity Guidelines:
• Difference < 0.4: Non-polar covalent bond (e.g. C–H, or homonuclear diatomic bonds like H–H, Cl–Cl where ΔEN = 0).
• Difference between 0.4 and 1.7: Polar covalent bond (e.g. H–O in water, H–Cl).
• Difference > 1.7 to 2.0: Predominantly ionic bond (e.g. Na–Cl where chlorine completely attracts the valence electron).`,
      trend: 'Increases across a period (left to right) due to increasing effective nuclear charge (Z_eff) pulling bonding electrons closer. Decreases down a group (top to bottom) as additional inner electron shells shield the nucleus and increase atomic distance.',
      importance: 'Determines whether molecules are polar, governs hydrogen bonding in DNA and water, dictates chemical reaction pathways, and explains why oxygen and halogens are powerful oxidizing agents.'
    },
    {
      id: 'ionization-energy',
      title: 'First Ionization Energy (kJ/mol)',
      icon: <Flame className="w-5 h-5 text-rose-500" />,
      tagline: 'The minimum energy required to remove the most loosely bound electron from an isolated gaseous atom.',
      explanation: `First ionization energy measures how tightly an atom holds onto its valence electrons:
X(g) + Energy → X⁺(g) + e⁻

A high ionization energy means the atom holds its electrons tenaciously (e.g. Helium = 2372 kJ/mol, Neon = 2081 kJ/mol). A low ionization energy means the atom easily loses its outermost electron to form a positive cation (e.g. Caesium = 376 kJ/mol, Sodium = 496 kJ/mol).

Notable Anomalous Dips in Periodic Trends:
1. Beryllium vs Boron (Period 2): Boron’s 1st IE (801 kJ/mol) is slightly lower than Beryllium’s (900 kJ/mol) because Boron’s lone 2p electron is higher in energy and shielded by the complete 2s² subshell.
2. Nitrogen vs Oxygen (Period 2): Oxygen’s 1st IE (1314 kJ/mol) is lower than Nitrogen’s (1402 kJ/mol) because Oxygen contains a doubly occupied 2p orbital (2p⁴), where electron-electron spin repulsion facilitates ionization compared to Nitrogen’s half-filled, exchange-stabilized 2p³ subshell.`,
      trend: 'Generally increases across a period due to stronger nuclear attraction; decreases down a group as principal quantum number n increases and valence electrons are further from the nucleus.',
      importance: 'Dictates metallic character. Elements with low ionization energy are metals that readily form positive cations; elements with high ionization energy are nonmetals.'
    },
    {
      id: 'atomic-radius',
      title: 'Atomic & Covalent Radii (pm)',
      icon: <Atom className="w-5 h-5 text-cyan-500" />,
      tagline: 'The typical distance from the center of the atomic nucleus to the outermost boundary of the electron cloud.',
      explanation: `Because quantum mechanics dictates that electrons exist as probabilistic wavefunctions without sharp physical boundaries, an atom’s radius depends on how it is measured:

• Covalent Radius: Half the distance between the nuclei of two identical atoms joined by a single covalent bond (e.g. half the Cl–Cl bond length in Cl₂ = 99 pm).
• Van der Waals Radius: Half the distance of closest approach between two non-bonded atoms in a crystal lattice (e.g. 175 pm for chlorine).
• Metallic Radius: Half the interatomic distance between nearest neighbors in a metallic crystal lattice.

The Lanthanide Contraction:
A remarkable phenomenon occurs in period 6: elements after the 14 lanthanides (like hafnium and tantalum) have virtually the exact same atomic radii as their period 5 congeners (zirconium and niobium). This happens because 4f electrons have poor nuclear shielding ability, allowing the increasing nuclear charge (+14 protons) to pull the outer 5d and 6s electrons inwards.`,
      trend: 'Decreases across a period (left to right) as protons are added to the nucleus, increasing effective nuclear charge and pulling electrons inward. Increases down a group as new electron shells (n) are added.',
      importance: 'Controls bond lengths, coordination numbers, lattice energy, and molecular geometry.'
    },
    {
      id: 'electron-affinity',
      title: 'Electron Affinity (kJ/mol)',
      icon: <Layers className="w-5 h-5 text-emerald-500" />,
      tagline: 'The quantity of energy released when an electron is added to a neutral gaseous atom to form a negative anion.',
      explanation: `Electron affinity measures an atom’s willingness to accept an incoming electron:
X(g) + e⁻ → X⁻(g) + Energy

A positive value indicates that energy is released (exothermic process), meaning the anion is more stable than the neutral atom.

The Chlorine vs Fluorine Paradox:
Chemists might expect Fluorine (highest electronegativity) to have the highest electron affinity. In reality, Chlorine has the highest electron affinity on the entire periodic table (349 kJ/mol vs Fluorine’s 328 kJ/mol)!
Why? Fluorine’s 2p orbitals are extremely compact. Adding an extra electron into such a tiny volume causes substantial electrostatic electron-electron repulsion, reducing the net energy released. In chlorine’s larger 3p subshell, the electron enters with less crowding.`,
      trend: 'Becomes generally more exothermic across a period (highest in group 17 halogens). Noble gases and alkaline earth metals have negative or near-zero affinities due to closed subshell stability.',
      importance: 'Crucial for understanding lattice energies in Born-Haber thermodynamic cycles and the formation of ionic salts.'
    },
    {
      id: 'oxidation-states',
      title: 'Oxidation States & Valency',
      icon: <Thermometer className="w-5 h-5 text-indigo-500" />,
      tagline: 'The formal electrical charge an atom would have if all bonds were completely ionic.',
      explanation: `Oxidation state is an essential bookkeeping formalism in chemistry. It indicates the degree of oxidation (loss of electrons) or reduction (gain of electrons) of an atom in a chemical compound.

Fundamental Rules:
1. Pure uncombined elemental substances (H₂, O₂, S₈, Fe, He) ALWAYS have an oxidation state of 0.
2. In simple monoatomic ions, the oxidation state equals the ionic charge (e.g. Na⁺ is +1, Cl⁻ is -1).
3. Fluorine is always -1 in all compounds.
4. Oxygen is almost always -2 (exceptions: peroxides like H₂O₂ where it is -1, and OF₂ where it is +2).
5. Hydrogen is +1 with nonmetals (H₂O, HCl) and -1 in metallic hydrides (NaH).

Transition Metals & Inert Pair Effect:
Transition metals have multiple oxidation states because 3d and 4s electrons are close in energy (e.g. Manganese spans from +2 to +7).
In heavy p-block elements (Thallium, Lead, Bismuth), relativistic contraction makes the 6s² electrons inert, causing lower oxidation states to be more stable (e.g. Pb²⁺ is much more stable than Pb⁴⁺).`,
      trend: 'Maximum positive oxidation state generally tracks the group valence electron count (up to RuO₄ and OsO₄ reaching +8).',
      importance: 'Fundamental to balancing redox reactions, electrochemistry, battery chemistry, and biological electron transport chains.'
    }
  ];

  const currentProp = properties.find((p) => p.id === selectedProperty) || properties[0];

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
          <Sliders className="w-6 h-6 text-indigo-500" />
          Properties & Scientific Principles Guide
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
          Every physical and chemical property in Element Atlas is grounded in atomic physics and quantum mechanics.
          Explore what these metrics actually mean, why their periodic trends arise, and the fascinating exceptions that illuminate chemical bonding.
        </p>
      </div>

      {/* Property Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        {properties.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelectedProperty(p.id)}
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-semibold whitespace-nowrap transition-all border ${
              selectedProperty === p.id
                ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            {p.icon}
            <span>{p.title.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Main Content Article */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800">
            {currentProp.icon}
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {currentProp.title}
            </h3>
            <p className="text-sm font-medium text-indigo-600 dark:text-cyan-400 mt-1">
              {currentProp.tagline}
            </p>
          </div>
        </div>

        {/* Detailed Explanation */}
        <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line bg-slate-50/70 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/60">
          {currentProp.explanation}
        </div>

        {/* Periodic Trend Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-cyan-50/60 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-900/60 space-y-1.5">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-300 flex items-center gap-2 text-xs sm:text-sm">
              <Compass className="w-4 h-4 text-cyan-600" />
              Periodic Table Trend & Driving Physics
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentProp.trend}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/60 space-y-1.5">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2 text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Real-World Chemical Significance
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentProp.importance}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
