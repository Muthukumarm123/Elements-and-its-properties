import React from 'react';
import { Info, Atom, Sparkles, BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
            <Atom className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Element Atlas
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Complete 118-Element Encyclopedia & Elemental Forms Guide
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong>Element Atlas</strong> was built as an uncompromising, authoritative educational reference for students, educators, and working scientists.
          Unlike superficial periodic tables that offer only atomic numbers and atomic masses, Element Atlas provides full physical, electronic, chemical, structural, and historical context for all 118 chemical elements.
        </p>

        {/* Dual System Architecture Callout */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-50/70 via-cyan-50/70 to-emerald-50/70 dark:from-slate-800 dark:via-indigo-950/40 dark:to-emerald-950/40 border border-indigo-200/60 dark:border-indigo-800/60 space-y-3">
          <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            The Dual-System Architecture
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200/50 dark:border-slate-700">
              <span className="font-bold text-indigo-700 dark:text-cyan-300 block mb-1">
                System 1: The Complete 118-Element Reference
              </span>
              <p className="text-slate-600 dark:text-slate-400 leading-snug">
                All 118 elements from Hydrogen (1) to Oganesson (118) with complete property data, electronic configurations, crystal lattices, isotopes, and real compounds.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200/50 dark:border-slate-700">
              <span className="font-bold text-emerald-700 dark:text-emerald-300 block mb-1">
                System 2: Elemental Forms & Substance Guide
              </span>
              <p className="text-slate-600 dark:text-slate-400 leading-snug">
                Dedicated learning section with its own sidebar exploring how elements actually exist in nature: monoatomic noble gases, the Diatomic 7, polyatomic allotropes (O₃, P₄, S₈), and metallic lattices.
              </p>
            </div>
          </div>
        </div>

        {/* Scientific Sources & Methodology */}
        <div className="space-y-2 pt-2">
          <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm">
            <ShieldCheck className="w-4 h-4 text-indigo-500" />
            Scientific Accuracy & Data Standards
          </h3>
          <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Standard atomic weights adhere to the IUPAC Commission on Isotopic Abundances and Atomic Weights (CIAAW).</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Ionization energies and spectroscopic levels cross-referenced with the National Institute of Standards and Technology (NIST) Atomic Spectra Database.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>All superheavy elements (104–118) updated to IUPAC recognized names, symbols, and relativistic quantum calculations.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
