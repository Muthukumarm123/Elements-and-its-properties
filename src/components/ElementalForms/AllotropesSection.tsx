import React, { useState } from 'react';
import { Shapes, Sparkles, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

interface AllotropesSectionProps {
  onOpenElementModal: (symbol: string) => void;
}

export const AllotropesSection: React.FC<AllotropesSectionProps> = ({
  onOpenElementModal
}) => {
  const [activeAllotropeGroup, setActiveAllotropeGroup] = useState<string>('carbon');

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          <Shapes className="w-4 h-4" />
          Structural Modifications of Elemental Substances
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Allotropes of Chemical Elements
        </h1>

        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed">
          <p>
            <strong>Definition:</strong> <strong>Allotropes</strong> are two or more different structural forms of the <strong>same chemical element</strong> in the same physical state.
          </p>
          <p className="mt-1.5 text-xs text-amber-800 dark:text-amber-300">
            Because their atoms are bonded in completely different geometric configurations, allotropes exhibit profoundly different physical and chemical properties (e.g. electrical conductivity, hardness, color, and chemical reactivity).
          </p>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <strong>Crucial Distinction:</strong> Forming an allotrope is completely different from forming a compound. A compound combines two or more <em>different</em> elements. An allotrope consists of 100% pure atoms of a <em>single</em> element arranged in a different structural architecture.
        </p>
      </div>

      {/* Interactive Tabs by Element */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        {[
          { id: 'carbon', name: 'Carbon (Diamond, Graphite, Graphene, C₆₀)', symbol: 'C' },
          { id: 'phosphorus', name: 'Phosphorus (White P₄, Red, Black)', symbol: 'P' },
          { id: 'sulfur', name: 'Sulfur (S₈, Plastic Sulfur)', symbol: 'S' },
          { id: 'tin', name: 'Tin (White β vs Grey α "Tin Pest")', symbol: 'Sn' },
          { id: 'oxygen', name: 'Oxygen (O₂ vs O₃)', symbol: 'O' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveAllotropeGroup(tab.id)}
            className={`px-3.5 py-2 rounded-xl font-semibold whitespace-nowrap transition-all border ${
              activeAllotropeGroup === tab.id
                ? 'bg-amber-600 text-white border-amber-500 shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* CARBON ALLOTROPES */}
      {activeAllotropeGroup === 'carbon' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              The Famous Allotropes of Carbon
            </h2>
            <button
              onClick={() => onOpenElementModal('C')}
              className="text-xs font-semibold text-indigo-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
            >
              Carbon Reference Profile <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            {/* Diamond */}
            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-base text-slate-900 dark:text-white">Diamond</span>
                <span className="font-mono text-xs font-bold text-indigo-600 dark:text-cyan-400">sp³ Hybridized</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                Each carbon atom forms four strong covalent sigma bonds directed toward the corners of a regular tetrahedron (109.5° angles), creating an infinite 3D giant covalent network.
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 space-y-1">
                <div>• <strong>Hardness:</strong> Hardest known bulk natural mineral (10 on Mohs scale).</div>
                <div>• <strong>Electrical:</strong> Complete electrical insulator (no free delocalized electrons).</div>
                <div>• <strong>Thermal:</strong> Superb thermal conductor (~2200 W/m·K) via phonon vibrations.</div>
              </div>
            </div>

            {/* Graphite */}
            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-base text-slate-900 dark:text-white">Graphite</span>
                <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">sp² Hybridized</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                Each carbon atom forms three planar covalent bonds in hexagonal honeycomb sheets. The fourth electron is delocalized into a continuous pi (π) band spanning the sheet. Layers are held only by weak van der Waals forces.
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 space-y-1">
                <div>• <strong>Slipperiness:</strong> Sheets slide freely over each other (dry solid lubricant and pencil lead).</div>
                <div>• <strong>Electrical:</strong> Conducts electricity in-plane due to delocalized mobile π electrons.</div>
                <div>• <strong>Thermodynamics:</strong> The thermodynamically MOST stable form of carbon at STP!</div>
              </div>
            </div>

            {/* Graphene */}
            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-base text-slate-900 dark:text-white">Graphene</span>
                <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">2D Monolayer</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                A single two-dimensional atomic layer of sp² carbon atoms arranged in a honeycomb crystal lattice (Nobel Prize in Physics 2010 to Andre Geim and Konstantin Novoselov).
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 space-y-1">
                <div>• <strong>Strength:</strong> 200× stronger than structural steel per unit weight.</div>
                <div>• <strong>Mobility:</strong> Ballistic electron mobility exceeding 200,000 cm²/(V·s).</div>
              </div>
            </div>

            {/* Fullerenes */}
            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-base text-slate-900 dark:text-white">Fullerenes (C₆₀)</span>
                <span className="font-mono text-xs font-bold text-purple-600 dark:text-purple-400">Molecular Cage</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                Unlike diamond and graphite (which are infinite extended networks), Buckminsterfullerene (C₆₀) is a discrete spherical molecular cage of 60 carbon atoms (20 hexagons and 12 pentagons).
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 space-y-1">
                <div>• <strong>Solubility:</strong> Completely soluble in non-polar organic solvents like toluene.</div>
                <div>• <strong>Nature:</strong> A molecular allotrope of elemental carbon!</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PHOSPHORUS ALLOTROPES */}
      {activeAllotropeGroup === 'phosphorus' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              The Allotropes of Phosphorus: White, Red, and Black
            </h2>
            <button
              onClick={() => onOpenElementModal('P')}
              className="text-xs font-semibold text-indigo-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
            >
              Phosphorus Reference Profile <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
              <span className="font-mono text-xs font-bold text-amber-600">White Phosphorus (P₄)</span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Discrete P₄ Tetrahedron</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                Composed of individual tetrahedral P₄ molecules with acute 60° bond angles. The extreme angle strain makes white phosphorus pyrophoric (ignites spontaneously at 30 °C in air) and acutely lethal (phossy jaw).
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
              <span className="font-mono text-xs font-bold text-rose-600">Red Phosphorus</span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Polymeric Chain Network</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                Produced by heating white phosphorus to 250 °C in an inert atmosphere. One P–P bond per P₄ cage breaks and links into long polymeric chains. Non-toxic, stable in air, and used on safety match striking strips.
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
              <span className="font-mono text-xs font-bold text-slate-600 dark:text-slate-300">Black Phosphorus</span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Layered 2D Phosphorene</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                Thermodynamically most stable allotrope at room temperature. Forms puckered honeycomb layers analogous to graphite. A direct-bandgap semiconductor prized for next-generation nanoelectronics.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SULFUR ALLOTROPES */}
      {activeAllotropeGroup === 'sulfur' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Sulfur: Cyclooctasulfur (S₈) vs Polymeric Plastic Sulfur
            </h2>
            <button
              onClick={() => onOpenElementModal('S')}
              className="text-xs font-semibold text-indigo-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
            >
              Sulfur Reference Profile <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
              <span className="font-mono text-xs font-bold text-yellow-600">α-Cyclooctasulfur (S₈)</span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Puckered 8-Membered Crown Ring</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                Thermodynamically most stable allotrope under ambient standard conditions. Eight sulfur atoms link in a strain-free crown ring with bond angles of 108°. Bright yellow brittle crystals packed in an orthorhombic lattice.
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
              <span className="font-mono text-xs font-bold text-amber-700">Plastic / Amorphous Sulfur</span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Entangled Polymeric Chains</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                When liquid sulfur is heated above 160 °C, thermal energy breaks the S₈ rings open into diradical chains that polymerize into long macromolecules. Quenching into cold water freezes these chains into a rubbery brown elastic solid that slowly reverts to α-S₈ over several days.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TIN ALLOTROPES */}
      {activeAllotropeGroup === 'tin' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Tin: White Tin (β-Sn) vs Grey Tin (α-Sn) and "Tin Pest"
            </h2>
            <button
              onClick={() => onOpenElementModal('Sn')}
              className="text-xs font-semibold text-indigo-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
            >
              Tin Reference Profile <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
              <span className="font-mono text-xs font-bold text-slate-500">White Tin (β-Sn) • Stable above 13.2 °C</span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Tetragonal Metallic Lattice</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                Silvery-white, malleable, ductile metal with density 7.31 g/cm³. Metallic bonding allows it to conduct electricity and form ductile solder and bronze alloys.
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
              <span className="font-mono text-xs font-bold text-rose-600">Grey Tin (α-Sn) • Stable below 13.2 °C ("Tin Pest")</span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Diamond Cubic Covalent Network</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                Below 13.2 °C (55.8 °F), metallic bonding collapses as tin rearranges into a non-metallic diamond cubic covalent network (density 5.77 g/cm³). The dramatic 27% volume expansion causes solid tin metal to crumble into a grey powder. Historically, organ pipes in unheated northern European cathedrals disintegrated due to tin pest during harsh winters!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* OXYGEN ALLOTROPES */}
      {activeAllotropeGroup === 'oxygen' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Oxygen Allotropes: Dioxygen (O₂) vs Ozone (O₃)
            </h2>
            <button
              onClick={() => onOpenElementModal('O')}
              className="text-xs font-semibold text-indigo-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
            >
              Oxygen Reference Profile <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-3xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 shadow-xs space-y-2">
              <span className="font-mono text-xs font-bold text-emerald-700">Dioxygen (O₂)</span>
              <h3 className="font-bold text-base text-emerald-950 dark:text-emerald-200">Diatomic Gas</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                Linear homonuclear diatomic molecule with a net double bond (:O=O:). Essential for cellular respiration.
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-teal-50 dark:bg-teal-950/30 border border-teal-300 dark:border-teal-800 shadow-xs space-y-2">
              <span className="font-mono text-xs font-bold text-teal-700">Ozone (O₃)</span>
              <h3 className="font-bold text-base text-teal-950 dark:text-teal-200">Bent Triatomic Gas</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                Resonance-stabilized bent triatomic molecule (116.8°). Powerful toxic oxidizer at ground level, but essential stratospheric shield against solar ultraviolet-B radiation.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
