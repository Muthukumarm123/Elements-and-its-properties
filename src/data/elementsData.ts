import { ElementData } from '../types/chemistry';
import { ELEMENTS_1_TO_36 } from './elements_1_to_36';
import { ELEMENTS_37_TO_71 } from './elements_37_to_71';
import { ELEMENTS_72_TO_118 } from './elements_72_to_118';

export const ELEMENTS_DATA: ElementData[] = [
  ...ELEMENTS_1_TO_36,
  ...ELEMENTS_37_TO_71,
  ...ELEMENTS_72_TO_118
];

export const DIATOMIC_7_SYMBOLS = ['H', 'N', 'O', 'F', 'Cl', 'Br', 'I'] as const;

export const NOBLE_GAS_SYMBOLS = ['He', 'Ne', 'Ar', 'Kr', 'Xe', 'Rn', 'Og'] as const;

export const POLYATOMIC_EXAMPLES = ['O', 'P', 'S', 'Se', 'As', 'B', 'C'] as const;

export function getElementByNumber(num: number): ElementData | undefined {
  return ELEMENTS_DATA.find((e) => e.number === num);
}

export function getElementBySymbol(symbol: string): ElementData | undefined {
  return ELEMENTS_DATA.find((e) => e.symbol.toLowerCase() === symbol.toLowerCase());
}

export function searchElements(query: string): ElementData[] {
  const q = query.trim().toLowerCase();
  if (!q) return ELEMENTS_DATA;

  return ELEMENTS_DATA.filter((e) => {
    return (
      e.name.toLowerCase().includes(q) ||
      e.symbol.toLowerCase().includes(q) ||
      e.number.toString() === q ||
      e.category.toLowerCase().includes(q) ||
      e.state.toLowerCase().includes(q) ||
      e.elementalForm.standardFormula.toLowerCase().includes(q)
    );
  });
}
