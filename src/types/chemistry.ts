export type ElementCategory =
  | 'alkali-metal'
  | 'alkaline-earth'
  | 'transition-metal'
  | 'post-transition-metal'
  | 'metalloid'
  | 'reactive-nonmetal'
  | 'noble-gas'
  | 'lanthanide'
  | 'actinide'
  | 'unknown';

export type StateAtSTP = 'gas' | 'liquid' | 'solid' | 'unknown';

export type ElementBlock = 's' | 'p' | 'd' | 'f';

export type ElementalFormType =
  | 'monoatomic-gas'
  | 'diatomic-gas'
  | 'diatomic-liquid'
  | 'diatomic-solid'
  | 'polyatomic-molecular'
  | 'metallic-lattice'
  | 'covalent-network'
  | 'synthetic-unknown';

export interface IsotopeInfo {
  massNumber: number;
  abundance?: string;
  isStable: boolean;
  halfLife?: string;
  decayMode?: string;
}

export interface CompoundInfo {
  formula: string;
  name: string;
  description: string;
}

export interface AllotropeInfo {
  name: string;
  formula?: string;
  structure: string;
  properties: string;
}

export interface ElementData {
  number: number;
  symbol: string;
  name: string;
  atomicWeight: number | string;
  group: number | null; // null for lanthanides/actinides or 3
  period: number;
  block: ElementBlock;
  category: ElementCategory;
  state: StateAtSTP;
  appearance: string;
  density: number | null; // g/cm³ or g/L for gases
  meltingPoint: number | null; // Kelvin
  boilingPoint: number | null; // Kelvin
  atomicRadius: number | null; // pm
  covalentRadius: number | null; // pm
  vanDerWaalsRadius: number | null; // pm
  electronConfiguration: string;
  condensedElectronConfig: string;
  valenceElectrons: number;
  shells: number[]; // e.g. [2, 8, 1]
  ionizationEnergy: number | null; // kJ/mol (1st)
  electronAffinity: number | null; // kJ/mol
  electronegativity: number | null; // Pauling
  oxidationStates: number[];
  commonIons: string[];
  crystalStructure: string;
  thermalConductivity: number | null; // W/(m·K)
  electricalResistivity: number | string | null; // nΩ·m or description
  radioactive: boolean;
  yearDiscovered: number | string;
  discoverer: string;
  nameOrigin: string;
  uses: string[];
  biologicalRole: string;
  hazards: string;
  reactivity: string;
  compounds: CompoundInfo[];
  allotropes?: AllotropeInfo[];
  interestingFacts: string[];
  // Elemental form specific data:
  elementalForm: {
    formType: ElementalFormType;
    standardFormula: string;
    atomsPerUnit: number | 'lattice';
    molecularOrNonMolecular: 'molecular' | 'non-molecular';
    bondingDescription: string;
    description: string;
    otherForms?: string[];
  };
}

export type MainNavSection =
  | 'home'
  | 'table'
  | 'elements'
  | 'compare'
  | 'properties'
  | 'trends'
  | 'concepts'
  | 'elemental-forms'
  | 'about';

export type ElementalFormsSubTopic =
  | 'overview'
  | 'monoatomic'
  | 'diatomic'
  | 'why-diatomic'
  | 'bond-types'
  | 'diatomic-by-state'
  | 'polyatomic'
  | 'oxygen-example'
  | 'allotropes'
  | 'molecular-vs-nonmolecular'
  | 'formula-rules'
  | 'diatomic-seven'
  | 'common-molecules'
  | 'why-molecules-form'
  | 'by-state'
  | 'by-group'
  | 'by-period'
  | 'explorer'
  | 'comparison'
  | 'common-mistakes'
  | 'quick-revision';
