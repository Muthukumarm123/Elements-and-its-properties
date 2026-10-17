import React, { useState } from 'react';
import { GraduationCap, Atom, Link2, Sparkles, ShieldCheck, BookOpen } from 'lucide-react';

export const ChemistryConcepts: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState('element-atom-compound');

  const concepts = [
    {
      id: 'element-atom-compound',
      title: 'Elements, Atoms, Molecules & Compounds',
      tagline: 'The foundational definitions of chemical matter and substance classifications.',
      content: `The distinction between an element, an atom, an elemental substance, a molecule, and a compound is one of the most critical fundamentals in chemistry:

1. What is an Element?
An element is a pure chemical substance consisting of atoms that all have the exact same number of protons in their atomic nuclei (same atomic number Z). For example, every atom with 6 protons is carbon.

2. What is an Atom?
An atom is the smallest discrete particle of an element that retains the chemical properties of that element. It consists of a dense central nucleus (protons and neutrons) surrounded by an electron cloud. "H" represents a single hydrogen atom.

3. What is an Elemental Substance?
An elemental substance is a bulk chemical substance that consists of only ONE chemical element.
Crucially: an elemental substance can be composed of individual atoms (e.g. Helium gas, He) or homonuclear molecules (e.g. Hydrogen gas, H₂; Oxygen gas, O₂; Sulfur crystals, S₈). Even though H₂ contains two atoms, it is 100% an elemental substance because all atoms are identical.

4. What is a Molecule?
A molecule is an electrically neutral group of two or more atoms held together by chemical covalent bonds. Molecules can be elemental (H₂, N₂, O₃, P₄, S₈) or compound molecules (H₂O, CO₂, CH₄).

5. What is a Compound?
A compound is a pure substance composed of two or more DIFFERENT chemical elements chemically combined in a fixed stoichiometric ratio. Water (H₂O) is a compound because it contains both hydrogen and oxygen chemically bound together.`
    },
    {
      id: 'orbitals-quantum',
      title: 'Atomic Orbitals & Quantum Mechanics',
      tagline: 'How the wave nature of electrons dictates the structure of the periodic table.',
      content: `Electrons in atoms do not orbit the nucleus in miniature planetary paths. Instead, quantum mechanics treats electrons as wave-particle entities described by mathematical wavefunctions (ψ), whose square (|ψ|²) defines an atomic orbital — a 3D probability map of finding an electron.

The Four Quantum Numbers:
• Principal Quantum Number (n = 1, 2, 3...): Dictates orbital energy and size (electron shell).
• Angular Momentum Quantum Number (l = 0, 1, 2... n-1): Dictates orbital shape:
  - l = 0: s orbital (spherical)
  - l = 1: p orbital (dumbbell-shaped, three orientations: px, py, pz)
  - l = 2: d orbital (cloverleaf-shaped, five orientations)
  - l = 3: f orbital (complex geometries, seven orientations)
• Magnetic Quantum Number (ml): Dictates spatial orientation (-l to +l).
• Spin Quantum Number (ms = +½ or -½): Intrinsic electron angular momentum.

The Rules for Electronic Ground States:
1. Aufbau Principle: Electrons fill lower-energy orbitals first (1s < 2s < 2p < 3s < 3p < 4s < 3d...).
2. Pauli Exclusion Principle: No two electrons in an atom can share the identical set of four quantum numbers (an orbital holds a maximum of two electrons with opposite spins).
3. Hund’s Rule: Within a degenerate subshell (like 2p or 3d), electrons occupy orbitals singly with parallel spins before pairing up, minimizing electrostatic electron repulsion.`
    },
    {
      id: 'bonding-types',
      title: 'Covalent, Ionic & Metallic Bonding',
      tagline: 'The three principal modes by which chemical elements achieve energetic stability.',
      content: `Chemical bonds form because the bonded state represents a lower electronic potential energy than isolated separate atoms.

1. Covalent Bonding (Shared Electron Pairs):
Occurs typically between nonmetal atoms with high, similar electronegativities.
Atoms achieve complete valence shells by sharing electron pairs.
• Single Bond (σ): 1 shared pair (e.g. H–H, F–F).
• Double Bond (σ + π): 2 shared pairs (e.g. O=O).
• Triple Bond (σ + 2π): 3 shared pairs (e.g. N≡N, bond energy 945 kJ/mol).

2. Metallic Bonding ("Electron Sea Model"):
Occurs in elemental metals (Na, Mg, Fe, Cu, Au) and alloys.
Metal atoms have low ionization energies and easily release valence electrons.
The solid forms a regular 3D crystalline lattice of positive metal cations immersed in a continuous, delocalized "sea" of conduction electrons. This explains why bulk metals are malleable, ductile, and conduct heat and electricity with ease.

3. Ionic Bonding (Electrostatic Attraction):
Occurs when elements with widely differing electronegativities react (typically active metal + nonmetal, e.g. Na + Cl → NaCl).
One or more valence electrons are completely transferred, creating positively charged cations (Na⁺) and negatively charged anions (Cl⁻) held together by non-directional Coulombic electrostatic attraction.`
    },
    {
      id: 'octet-rule',
      title: 'The Octet Rule & Its Exceptions',
      tagline: 'Why atoms strive for eight valence electrons, and the chemical exceptions.',
      content: `The Octet Rule, formulated by Gilbert N. Lewis in 1916, states that main-group atoms tend to bond in such a way that each atom has eight electrons in its valence shell, mimicking the closed electron configuration of a noble gas (s²p⁶).

Exceptions to the Octet Rule:
1. Incomplete Octets / Duet Rule:
• Hydrogen and Helium only require 2 electrons (1s² duet).
• Boron and Beryllium often form stable electron-deficient molecules with fewer than 8 electrons (e.g. BF₃ has only 6 valence electrons around boron and acts as a powerful Lewis acid; BeCl₂ gas has 4 electrons).

2. Odd-Electron Radicals:
Molecules with an odd total number of valence electrons cannot pair all electrons, leaving a paramagnetic free radical (e.g. Nitric oxide •NO with 11 valence electrons; Nitrogen dioxide •NO₂ with 17 valence electrons).

3. Expanded Valence Shells (Hypervalency):
Elements in Period 3 and below (Phosphorus, Sulfur, Chlorine, Xenon) have accessible d-orbitals and larger atomic radii, allowing them to accommodate 10, 12, or even 14 electrons around a central atom (e.g. PCl₅ has 10 valence electrons; SF₆ has 12 electrons in an octahedral geometry; XeF₄ has 12 electrons in square planar geometry).`
    }
  ];

  const current = concepts.find((c) => c.id === selectedConcept) || concepts[0];

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
          <GraduationCap className="w-6 h-6 text-indigo-500" />
          Core Chemistry Concepts
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
          In-depth educational modules covering atomic theory, quantum numbers, orbital physics, and chemical bonding principles.
        </p>
      </div>

      {/* Concept Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        {concepts.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedConcept(c.id)}
            className={`px-3.5 py-2.5 rounded-xl font-semibold whitespace-nowrap transition-all border ${
              selectedConcept === c.id
                ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      {/* Main Concept Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
        <div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white">
            {current.title}
          </h3>
          <p className="text-sm font-medium text-indigo-600 dark:text-cyan-400 mt-1">
            {current.tagline}
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line bg-slate-50/70 dark:bg-slate-800/40 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 font-sans">
          {current.content}
        </div>
      </div>
    </div>
  );
};
