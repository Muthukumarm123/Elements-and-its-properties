import React from 'react';
import { Sparkles, Atom, Link2, Info } from 'lucide-react';

export const CommonMoleculesGallery: React.FC = () => {
  const molecules = [
    {
      formula: 'H₂',
      name: 'Dihydrogen',
      type: 'Diatomic',
      geometry: 'Linear',
      bond: 'H–H single σ bond (74 pm, 436 kJ/mol)',
      state: 'Gas at STP',
      color: '#6366f1',
      desc: 'Simplest neutral molecule in the universe; two 1s orbitals overlap into a sigma bonding orbital.'
    },
    {
      formula: 'N₂',
      name: 'Dinitrogen',
      type: 'Diatomic',
      geometry: 'Linear',
      bond: 'N≡N triple bond (110 pm, 945 kJ/mol)',
      state: 'Gas at STP',
      color: '#10b981',
      desc: 'One σ bond and two π bonds share 6 electrons; exceptionally inert due to huge 945 kJ/mol bond strength.'
    },
    {
      formula: 'O₂',
      name: 'Dioxygen',
      type: 'Diatomic',
      geometry: 'Linear',
      bond: 'O=O net double bond (121 pm, 498 kJ/mol)',
      state: 'Gas at STP',
      color: '#06b6d4',
      desc: 'Formal double bond with two unpaired electrons in π* antibonding orbitals; ground state is paramagnetic.'
    },
    {
      formula: 'O₃',
      name: 'Ozone',
      type: 'Polyatomic',
      geometry: 'Bent (116.8° angle)',
      bond: 'Resonance delocalized 3-atom π system (128 pm)',
      state: 'Gas at STP',
      color: '#0ea5e9',
      desc: 'Allotrope of oxygen formed by UV photolysis of O₂ in stratosphere; absorbs lethal UV-B radiation.'
    },
    {
      formula: 'F₂',
      name: 'Difluorine',
      type: 'Diatomic',
      geometry: 'Linear',
      bond: 'F–F single σ bond (142 pm, 158 kJ/mol)',
      state: 'Gas at STP',
      color: '#14b8a6',
      desc: 'Unusually weak bond due to intense lone-pair repulsion in compact 2p orbitals; violently reactive.'
    },
    {
      formula: 'Cl₂',
      name: 'Dichlorine',
      type: 'Diatomic',
      geometry: 'Linear',
      bond: 'Cl–Cl single σ bond (199 pm, 242 kJ/mol)',
      state: 'Gas at STP',
      color: '#84cc16',
      desc: 'Single σ bond between 3p orbitals; yellow-green suffocating gas.'
    },
    {
      formula: 'Br₂',
      name: 'Dibromine',
      type: 'Diatomic',
      geometry: 'Linear',
      bond: 'Br–Br single σ bond (228 pm, 193 kJ/mol)',
      state: 'Liquid at STP',
      color: '#f97316',
      desc: 'Dense reddish-brown fuming liquid; London dispersion forces from 70 electrons condense it at room temp.'
    },
    {
      formula: 'I₂',
      name: 'Diiodine',
      type: 'Diatomic',
      geometry: 'Linear',
      bond: 'I–I single σ bond (267 pm, 151 kJ/mol)',
      state: 'Solid at STP',
      color: '#8b5cf6',
      desc: 'Solid purple-black crystal; massive 106-electron cloud generates strong dispersion forces.'
    },
    {
      formula: 'P₄',
      name: 'White Phosphorus',
      type: 'Polyatomic',
      geometry: 'Regular Tetrahedron (cage, 60° angles)',
      bond: 'Six single P–P σ bonds (221 pm, strained)',
      state: 'Solid at STP',
      color: '#f59e0b',
      desc: 'Cage molecule with acute 60° bond angles causing high angle strain; pyrophoric waxy solid.'
    },
    {
      formula: 'S₈',
      name: 'Cyclooctasulfur',
      type: 'Polyatomic',
      geometry: 'Puckered 8-Membered Crown Ring',
      bond: 'Eight single S–S σ bonds (205 pm, 108° angles)',
      state: 'Solid at STP',
      color: '#eab308',
      desc: 'Puckered crown ring with relaxed near-tetrahedral angles; bright yellow orthorhombic crystals.'
    },
    {
      formula: 'C₆₀',
      name: 'Buckminsterfullerene',
      type: 'Polyatomic',
      geometry: 'Truncated Icosahedron (soccer ball)',
      bond: '60 carbon atoms, 20 hexagons, 12 pentagons',
      state: 'Solid at STP',
      color: '#64748b',
      desc: 'Hollow molecular cage discovered in 1985 (Curl, Kroto, Smalley; Nobel Prize 1996); dissolves in toluene.'
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400">
          <Sparkles className="w-4 h-4" />
          Molecular Structures Gallery
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Common Elemental Molecules Gallery
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Explore the discrete molecular structures that pure elements form.
          Unlike continuous giant lattices, each of these molecules has a finite, fixed number of atoms governed by covalent orbital overlap.
        </p>
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {molecules.map((m) => (
          <div
            key={m.formula}
            className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-3xl font-black" style={{ color: m.color }}>
                    {m.formula}
                  </span>
                  <div className="font-bold text-base text-slate-900 dark:text-white mt-0.5">
                    {m.name}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {m.type}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {m.state}
                  </span>
                </div>
              </div>

              <div className="pt-2 mt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <div>
                  <strong className="text-slate-900 dark:text-white">Geometry:</strong> {m.geometry}
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white">Bonding:</strong> {m.bond}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-1 leading-snug">
                  {m.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
