export interface DiatomicSevenItem {
  symbol: string;
  name: string;
  formula: string;
  bondType: 'single' | 'double' | 'triple';
  bondNotation: string;
  bondLengthPm: number;
  bondEnergyKj: number;
  stateAtSTP: 'gas' | 'liquid' | 'solid';
  colorDescription: string;
  valenceElectrons: number;
  sharedPairs: number;
  electronDiagramSummary: string;
  scientificReason: string;
}

export const DIATOMIC_SEVEN_LIST: DiatomicSevenItem[] = [
  {
    symbol: 'H',
    name: 'Hydrogen',
    formula: 'H₂',
    bondType: 'single',
    bondNotation: 'H–H',
    bondLengthPm: 74,
    bondEnergyKj: 436,
    stateAtSTP: 'gas',
    colorDescription: 'Colorless, transparent gas',
    valenceElectrons: 1,
    sharedPairs: 1,
    electronDiagramSummary: 'Two 1s¹ atomic orbitals overlap head-on to form a σ (sigma) molecular orbital with 2 shared electrons, completing the duet rule (1s²) for each hydrogen atom.',
    scientificReason: 'Hydrogen needs exactly one additional electron to achieve the closed-shell configuration of helium (1s²). A single covalent bond between two H atoms completely satisfies both atoms with no excess electrons.'
  },
  {
    symbol: 'N',
    name: 'Nitrogen',
    formula: 'N₂',
    bondType: 'triple',
    bondNotation: 'N≡N',
    bondLengthPm: 110,
    bondEnergyKj: 945,
    stateAtSTP: 'gas',
    colorDescription: 'Colorless, odorless inert gas',
    valenceElectrons: 5,
    sharedPairs: 3,
    electronDiagramSummary: 'One head-on σ bond and two perpendicular π bonds share six electrons (:N≡N:), leaving one lone pair on each nitrogen atom to complete stable octets.',
    scientificReason: 'Each nitrogen atom has 5 valence electrons (2s² 2p³) and needs 3 more electrons for an octet. Sharing three electron pairs forms an extraordinarily short (1.10 Å) and immensely strong (945 kJ/mol) triple bond, conferring remarkable chemical stability.'
  },
  {
    symbol: 'O',
    name: 'Oxygen',
    formula: 'O₂',
    bondType: 'double',
    bondNotation: 'O=O',
    bondLengthPm: 121,
    bondEnergyKj: 498,
    stateAtSTP: 'gas',
    colorDescription: 'Colorless gas (pale blue liquid)',
    valenceElectrons: 6,
    sharedPairs: 2,
    electronDiagramSummary: 'Net formal double bond consisting of one σ bond, two 3-electron half-π bonds with two unpaired electrons in degenerate π* antibonding orbitals, producing a paramagnetic triplet ground state.',
    scientificReason: 'Each oxygen atom has 6 valence electrons (2s² 2p⁴) and requires 2 electrons to complete an octet. Sharing two pairs achieves the stable dioxygen molecule, though molecular orbital theory reveals its unique paramagnetic ground state.'
  },
  {
    symbol: 'F',
    name: 'Fluorine',
    formula: 'F₂',
    bondType: 'single',
    bondNotation: 'F–F',
    bondLengthPm: 142,
    bondEnergyKj: 158,
    stateAtSTP: 'gas',
    colorDescription: 'Pale greenish-yellow gas',
    valenceElectrons: 7,
    sharedPairs: 1,
    electronDiagramSummary: 'One single σ covalent bond sharing two electrons, surrounded by three non-bonding lone pairs on each fluorine atom (:F̈–F̈:).',
    scientificReason: 'Each fluorine atom has 7 valence electrons (2s² 2p⁵) and needs 1 electron. Due to the small atomic size of fluorine, the three lone pairs on each atom crowd together, creating intense electrostatic repulsion that makes the F–F bond unusually weak (158 kJ/mol) and the gas violently reactive.'
  },
  {
    symbol: 'Cl',
    name: 'Chlorine',
    formula: 'Cl₂',
    bondType: 'single',
    bondNotation: 'Cl–Cl',
    bondLengthPm: 199,
    bondEnergyKj: 242,
    stateAtSTP: 'gas',
    colorDescription: 'Yellowish-green dense gas',
    valenceElectrons: 7,
    sharedPairs: 1,
    electronDiagramSummary: 'Single σ bond between 3p orbitals sharing two electrons with three lone pairs on each atom (:C̈l–C̈l:).',
    scientificReason: 'With larger 3p orbitals, lone pair-lone pair electrostatic repulsion is much lower than in F₂, resulting in a significantly stronger single covalent bond (242 kJ/mol vs 158 kJ/mol).'
  },
  {
    symbol: 'Br',
    name: 'Bromine',
    formula: 'Br₂',
    bondType: 'single',
    bondNotation: 'Br–Br',
    bondLengthPm: 228,
    bondEnergyKj: 193,
    stateAtSTP: 'liquid',
    colorDescription: 'Dense reddish-brown fuming liquid',
    valenceElectrons: 7,
    sharedPairs: 1,
    electronDiagramSummary: 'Single σ bond between 4p orbitals sharing two electrons with three lone pairs per atom (:B̈r–B̈r:).',
    scientificReason: 'Bromine atoms contain 35 electrons each (70 total per Br₂ molecule). The massive, highly polarizable electron clouds generate London dispersion forces strong enough to hold discrete molecules together as a liquid at room temperature.'
  },
  {
    symbol: 'I',
    name: 'Iodine',
    formula: 'I₂',
    bondType: 'single',
    bondNotation: 'I–I',
    bondLengthPm: 267,
    bondEnergyKj: 151,
    stateAtSTP: 'solid',
    colorDescription: 'Dark purple-black lustrous crystalline plates',
    valenceElectrons: 7,
    sharedPairs: 1,
    electronDiagramSummary: 'Single σ bond between large 5p orbitals sharing two electrons (:Ï–Ï:).',
    scientificReason: 'With 106 total electrons per I₂ molecule, the polarizability is immense. Intermolecular London dispersion attractions are powerful enough to lock the diatomic molecules into an organized solid crystalline lattice at room temperature.'
  }
];

export interface PolyatomicExample {
  formula: string;
  elementName: string;
  atomsPerMolecule: number;
  structureType: string;
  bondAngles: string;
  stabilityNotes: string;
  whyPolyatomic: string;
}

export const POLYATOMIC_MOLECULES: PolyatomicExample[] = [
  {
    formula: 'O₃',
    elementName: 'Oxygen (Ozone)',
    atomsPerMolecule: 3,
    structureType: 'Bent triatomic molecule with resonance',
    bondAngles: '116.8°',
    stabilityNotes: 'Thermodynamically unstable with respect to O₂ (ΔG°f = +163 kJ/mol); powerful oxidizing agent and UV-B shield.',
    whyPolyatomic: 'Formed when high-energy ultraviolet radiation or electrical discharge splits O₂ into atomic oxygen radicals (O•), which then coordinate with another O₂ molecule to form the resonant triatomic species.'
  },
  {
    formula: 'P₄',
    elementName: 'Phosphorus (White Phosphorus)',
    atomsPerMolecule: 4,
    structureType: 'Discrete regular tetrahedron (cage)',
    bondAngles: '60° (high angle strain)',
    stabilityNotes: 'Extremely reactive and pyrophoric (spontaneously ignites in air at 30 °C); highly strained single P–P bonds.',
    whyPolyatomic: 'Phosphorus 3p orbitals are too diffuse to form stable pπ–pπ double or triple bonds (unlike nitrogen). Therefore, phosphorus favors forming three single sigma bonds, closing into a tetrahedral P₄ cage.'
  },
  {
    formula: 'S₈',
    elementName: 'Sulfur (Cyclooctasulfur)',
    atomsPerMolecule: 8,
    structureType: 'Puckered eight-membered crown ring',
    bondAngles: '108° (nearly ideal tetrahedral angle)',
    stabilityNotes: 'Thermodynamically most stable allotrope of sulfur at room temperature (α-sulfur); bright yellow crystals.',
    whyPolyatomic: 'Like phosphorus, sulfur 3p orbitals are too large to form stable pπ–pπ double bonds (unlike O=O). Sulfur achieves full octets by forming two single S–S bonds in a relaxed, strain-free puckered 8-membered crown ring.'
  },
  {
    formula: 'Se₈',
    elementName: 'Selenium (Cyclooctaselenium)',
    atomsPerMolecule: 8,
    structureType: 'Puckered eight-membered crown ring (red selenium)',
    bondAngles: '106°',
    stabilityNotes: 'Metastable molecular crystal; slowly converts to polymeric gray hexagonal selenium chains.',
    whyPolyatomic: 'Parallels sulfur by forming strain-free puckered octatomic rings bound by single covalent Se–Se bonds in red selenium.'
  },
  {
    formula: 'As₄',
    elementName: 'Arsenic (Yellow Arsenic)',
    atomsPerMolecule: 4,
    structureType: 'Tetrahedral molecular cage',
    bondAngles: '60°',
    stabilityNotes: 'Metastable, volatile, and light-sensitive; readily transforms into polymeric metallic gray arsenic.',
    whyPolyatomic: 'Condensation of hot arsenic vapor traps discrete tetrahedral As₄ molecules analogous to white phosphorus.'
  },
  {
    formula: 'C₆₀',
    elementName: 'Carbon (Buckminsterfullerene)',
    atomsPerMolecule: 60,
    structureType: 'Truncated icosahedral hollow cage (soccer ball: 20 hexagons, 12 pentagons)',
    bondAngles: 'Mixed sp² curved conjugation',
    stabilityNotes: 'Stable discrete molecular allotrope; dissolves in non-polar organic solvents like toluene to produce a deep magenta solution.',
    whyPolyatomic: 'Carbon atoms can assemble into hollow spherical conjugated networks satisfying Euler’s polyhedron formula, isolating pentagonal rings to minimize curvature strain.'
  }
];

export interface MisconceptionItem {
  id: string;
  wrongIdea: string;
  correctIdea: string;
  scientificExplanation: string;
  concreteExample: string;
}

export const COMMON_MISCONCEPTIONS: MisconceptionItem[] = [
  {
    id: 'all-gases-diatomic',
    wrongIdea: 'All elemental gases are diatomic.',
    correctIdea: 'Only 5 elements exist as diatomic gases at standard room conditions (H₂, N₂, O₂, F₂, Cl₂). The six noble gases (He, Ne, Ar, Kr, Xe, Rn) are completely monoatomic gases.',
    scientificExplanation: 'A noble gas atom has a filled valence shell (duet in He, octet in others). Sharing electrons to form a diatomic molecule (such as He₂ or Ne₂) would place electrons into high-energy antibonding molecular orbitals, resulting in a bond order of zero and no net energetic stabilization.',
    concreteExample: 'Helium (He) and Argon (Ar) are unbonded monoatomic gases. Writing "He₂" or "Ar₂" for ambient gas is completely incorrect.'
  },
  {
    id: 'h2-is-compound',
    wrongIdea: 'H₂ (hydrogen gas) is a chemical compound because it has a subscript "2".',
    correctIdea: 'H₂ is an ELEMENTAL SUBSTANCE (a homonuclear diatomic molecule), NOT a compound.',
    scientificExplanation: 'By definition, a compound consists of two or more DIFFERENT chemical elements chemically combined in fixed proportions (e.g. H₂O). H₂ contains ONLY hydrogen atoms; therefore, it is an elemental substance existing in molecular form.',
    concreteExample: 'H₂ is an element in molecular form. H₂O is a compound because it contains both hydrogen and oxygen.'
  },
  {
    id: 'all-elements-monoatomic',
    wrongIdea: 'All elements exist in nature as individual single atoms (monoatomic).',
    correctIdea: 'Very few elements exist naturally as isolated unbonded atoms under standard conditions. Almost all elements form chemical bonds — either discrete molecules (H₂, O₂, P₄, S₈) or giant extended crystalline lattices (metals like Fe, covalent networks like diamond).',
    scientificExplanation: 'Isolated atoms of most elements have incomplete valence shells with high potential energy. Bonding lowers their electronic potential energy and fulfills the octet rule.',
    concreteExample: 'Only the noble gases (group 18) exist naturally as isolated monoatomic gas particles under standard ambient conditions.'
  },
  {
    id: 'metals-exist-as-discrete-molecules',
    wrongIdea: 'Solid iron is made of "Fe₂" molecules, and sodium is made of "Na₂" molecules.',
    correctIdea: 'Metals do NOT form discrete small molecules in solid bulk form. They form giant 3D metallic crystalline lattices (represented simply by their empirical elemental symbols: Fe, Na, Cu, Al).',
    scientificExplanation: 'In bulk metal, positive metal ion cores are embedded in a continuous, delocalized sea of conduction valence electrons spanning millions of atoms. Writing "Fe₂" or "Na₂" is fundamentally incorrect for bulk metallic substances.',
    concreteExample: 'A piece of copper wire is written as Cu, not Cu₂ or Cu₄. The formula Cu represents an empirical non-molecular metallic lattice.'
  },
  {
    id: 'allotropes-are-different-elements',
    wrongIdea: 'Oxygen gas (O₂) and ozone (O₃) are different elements.',
    correctIdea: 'O₂ and O₃ are different ALLOTROPES of the EXACT SAME chemical element: oxygen.',
    scientificExplanation: 'Allotropes are different structural modifications of the same element in the same physical state. Both O₂ and O₃ consist exclusively of oxygen atoms (atomic number 8), but their molecular geometries, bonding arrangements, and physical/chemical properties differ profoundly.',
    concreteExample: 'Diamond and graphite are both 100% pure carbon. Breathing O₂ sustains life, while breathing O₃ is toxic and irritates lungs, yet both are elemental oxygen.'
  },
  {
    id: 'noble-gases-never-form-compounds',
    wrongIdea: 'Noble gases can NEVER form any chemical compounds under any conditions.',
    correctIdea: 'The heavier noble gases (especially Xenon and Krypton) CAN and DO form stable, real chemical compounds with highly electronegative elements like fluorine and oxygen.',
    scientificExplanation: 'Heavier noble gases have valence electrons far from the positive nucleus, shielded by inner electron shells. Under reaction with fluorine or oxygen, the ionization energy is low enough that covalent and coordination bonds can form.',
    concreteExample: 'Xenon difluoride (XeF₂), xenon tetrafluoride (XeF₄), xenon trioxide (XeO₃), and krypton difluoride (KrF₂) are well-characterized, crystalline compounds synthesized routinely in laboratories.'
  },
  {
    id: 'formula-dictates-state',
    wrongIdea: 'If a substance is diatomic, it must always be a gas.',
    correctIdea: 'Diatomic elements span ALL THREE classical states of matter at room temperature: gases (H₂, N₂, O₂, F₂, Cl₂), liquid (Br₂), and solid (I₂).',
    scientificExplanation: 'The physical state at room temperature is governed by the strength of intermolecular forces versus thermal kinetic energy. Moving down the halogens from F₂ to I₂, the electron cloud size expands from 18 to 106 electrons, dramatically increasing polarizability and London dispersion attractions until molecules lock into a solid lattice.',
    concreteExample: 'Bromine (Br₂) is a fuming liquid at room temperature, and Iodine (I₂) is a dark crystalline solid, despite both being homonuclear diatomic molecules.'
  },
  {
    id: 'atom-symbol-equals-substance-formula',
    wrongIdea: 'The symbol of an element from the periodic table is always its correct chemical formula in balanced equations.',
    correctIdea: 'The symbol (e.g. O, N, Cl) represents an atom or the abstract chemical element. In real balanced chemical reactions at standard conditions, you MUST write the formula of the substance as it actually exists (e.g. O₂, N₂, Cl₂).',
    scientificExplanation: 'Writing 2 H + O → H₂O in a room-temperature reaction equation is chemically wrong because atomic H and atomic O do not exist as reagents in ambient containers. The correct balanced chemical equation is 2 H₂ + O₂ → 2 H₂O.',
    concreteExample: 'Hydrogen gas burning in oxygen must always be written as 2 H₂ + O₂ → 2 H₂O, never 2 H + O → H₂O.'
  }
];

export interface RevisionQuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const REVISION_QUIZ_QUESTIONS: RevisionQuizQuestion[] = [
  {
    id: 1,
    question: 'Which of the following elements naturally exists as a diatomic liquid at standard room temperature and pressure?',
    options: ['Chlorine (Cl₂)', 'Mercury (Hg)', 'Bromine (Br₂)', 'Gallium (Ga)'],
    correctIndex: 2,
    explanation: 'Bromine (Br₂) is the ONLY nonmetallic element that is a liquid at room temperature, and it exists as discrete homonuclear diatomic molecules.'
  },
  {
    id: 2,
    question: 'Why does nitrogen (N₂) possess an exceptionally high bond dissociation energy of 945 kJ/mol?',
    options: [
      'It contains a non-polar single ionic bond.',
      'It has a triple covalent bond sharing six electrons (one σ and two π bonds).',
      'It contains strong hydrogen bonding between nitrogen atoms.',
      'It forms a giant metallic lattice.'
    ],
    correctIndex: 1,
    explanation: 'Each nitrogen atom has 5 valence electrons and requires 3 more to complete an octet, resulting in an exceptionally strong N≡N triple bond.'
  },
  {
    id: 3,
    question: 'How should you write the chemical formula for bulk metallic sodium at room temperature in a chemical equation?',
    options: ['Na₂', 'Na', 'Na₄', 'Na₈'],
    correctIndex: 1,
    explanation: 'Bulk metals form extended metallic crystalline lattices rather than discrete molecules. They are always represented by their empirical element symbol: Na.'
  },
  {
    id: 4,
    question: 'Which list contains ALL SEVEN elements that exist naturally as diatomic molecules under standard conditions ("The Diatomic 7")?',
    options: [
      'H, He, Li, Be, B, C, N',
      'H, N, O, F, Cl, Br, I',
      'F, Cl, Br, I, At, Ts, Og',
      'He, Ne, Ar, Kr, Xe, Rn, Og'
    ],
    correctIndex: 1,
    explanation: 'The classic Diatomic 7 are Hydrogen (H₂), Nitrogen (N₂), Oxygen (O₂), Fluorine (F₂), Chlorine (Cl₂), Bromine (Br₂), and Iodine (I₂).'
  },
  {
    id: 5,
    question: 'What is the key scientific difference between dioxygen (O₂) and ozone (O₃)?',
    options: [
      'They are different chemical elements with different atomic numbers.',
      'O₃ is a compound because it contains three atoms.',
      'They are allotropes of the same element, differing in molecular geometry and properties.',
      'O₂ is a gas while O₃ is always a solid.'
    ],
    correctIndex: 2,
    explanation: 'Both O₂ and O₃ are composed entirely of oxygen atoms (element 8), making them allotropes of the same element.'
  },
  {
    id: 6,
    question: 'Which of the following elements naturally exists under ordinary conditions as discrete octatomic crown-shaped molecules?',
    options: ['Phosphorus (P₄)', 'Sulfur (S₈)', 'Carbon (C₆₀)', 'Oxygen (O₃)'],
    correctIndex: 1,
    explanation: 'Elemental sulfur under standard conditions forms cyclooctasulfur (S₈), consisting of puckered eight-membered crown rings held by single S–S covalent bonds.'
  },
  {
    id: 7,
    question: 'Why do the noble gases (He, Ne, Ar, Kr, Xe, Rn) naturally exist as monoatomic gases rather than forming diatomic molecules?',
    options: [
      'They are too heavy to move through the air.',
      'Their completed valence shells make electron sharing energetically unfavorable (bond order = 0).',
      'They have high electronegativity that repels other atoms.',
      'They only form ionic bonds.'
    ],
    correctIndex: 1,
    explanation: 'With complete valence shells, forming a diatomic molecule would require placing electrons into high-energy antibonding molecular orbitals, resulting in zero net bond order.'
  },
  {
    id: 8,
    question: 'What is "tin pest"?',
    options: [
      'An insect that eats metallic tin.',
      'The spontaneous allotropic phase transformation of malleable white β-tin into brittle gray α-tin powder below 13.2 °C.',
      'The corrosion of tin cans by acidic food.',
      'The melting of tin at low temperatures.'
    ],
    correctIndex: 1,
    explanation: 'Below 13.2 °C, metallic white β-tin converts to the diamond cubic covalent network of gray α-tin, causing solid metal objects to crumble into powder.'
  },
  {
    id: 9,
    question: 'Is it scientifically accurate to state that "noble gases can never form chemical compounds"?',
    options: [
      'Yes, noble gases are completely inert in all conditions forever.',
      'No, heavier noble gases like Xenon readily form real compounds (e.g. XeF₂, XeF₄, XeO₃) with electronegative elements.',
      'Yes, the octet rule forbids any noble gas from reacting.',
      'No, but only Helium can form compounds.'
    ],
    correctIndex: 1,
    explanation: 'Xenon and krypton have large, polarizable electron clouds and readily form real, stable compounds such as XeF₂, XeF₄, and XeO₃.'
  },
  {
    id: 10,
    question: 'Why does white phosphorus exist as P₄ rather than diatomic P₂ at room temperature, while nitrogen exists as N₂?',
    options: [
      'Phosphorus has more valence electrons than nitrogen.',
      'Larger 3p orbitals on phosphorus do not form stable multiple π-bonds, favoring single σ-bonds in a tetrahedral P₄ cage.',
      'Phosphorus is a metal.',
      'Nitrogen is radioactive.'
    ],
    correctIndex: 1,
    explanation: 'Diffuse 3p orbitals on phosphorus have poor sideways overlap for π-bonding, so phosphorus forms three single σ-bonds in a P₄ tetrahedron instead of a P≡P triple bond.'
  }
];
