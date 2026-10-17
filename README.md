# Element Atlas ⚛️

> **A Comprehensive 118-Element Chemistry Reference & Interactive Elemental Forms Learning Platform**

Element Atlas is an educational chemistry web application featuring two distinct reference systems:
1. **System 1 — The Complete 118-Element Reference:** IUPAC data for all 118 chemical elements, interactive 18-column periodic table, Bohr electron shell diagrams, periodic trends, comparison tool, and property guides.
2. **System 2 — Elemental Forms & Molecular Guide:** A dedicated learning environment exploring how chemical elements exist as real physical substances (monoatomic noble gases, the Diatomic 7, polyatomic allotropes, and formula writing rules).

100% frontend and client-side. No databases, external APIs, authentication, or cookies required.

---

## 🌟 Key Features

### 🔬 System 1: Complete 118-Element Reference
- **All 118 Elements Represented:** From Hydrogen (1) to Oganesson (118).
- **Interactive 18-Column Periodic Table:**
  - Multiple color-coding modes: Category, State of Matter at STP, Block, Electronegativity, Atomic Radius, Ionization Energy, and Density.
  - State and category filters with instant highlights for Monoatomic gases and the Diatomic 7.
- **Detailed Element Modal Dossiers:**
  - Dynamic Bohr electron shell models showing real-time orbital electron counts.
  - Condensed and full electron configurations.
  - Physical properties (density, melting point, boiling point, radii).
  - Chemical properties (electronegativity, ionization energy, oxidation states, common ions).
  - Isotopes with stability, natural abundance, and half-lives.
  - Crystal structures, thermal and electrical conductivity.
  - Historical discovery, etymology, biological roles, hazards, and key chemical compounds.
- **Side-by-Side Element Comparison:** Compare up to 4 elements at once across atomic, electronic, and physical metrics.
- **Periodic Trends Explorer:** Visual charts illustrating trends across Periods 1–7 and Groups 1–18.
- **Elements Directory:** Searchable and sortable registry with real-time filtering.
- **Quick-Jump Search:** Keyboard shortcut `⌘K` or `Ctrl+K`.

### 🧪 System 2: Elemental Forms & Substance Guide
A dedicated learning system with its own separate navigation:
- **Foundations:** Definitions of element, atom, substance, molecule, compound, and ion.
- **Monoatomic Elements:** In-depth study of Group 18 noble gases, filled valence shells, zero bond order, and heavy noble gas compounds ($\text{XeF}_2, \text{XeF}_4$).
- **The Diatomic 7:** Dedicated guide to $\text{H}_2, \text{N}_2, \text{O}_2, \text{F}_2, \text{Cl}_2, \text{Br}_2, \text{I}_2$.
- **Why Are These Elements Diatomic?:** Quantum orbital overlap ($1\text{s}$ and $2\text{p}$) vs extended network solids.
- **Diatomic Bond Types:** Single ($\text{H}–\text{H}$), double ($\text{O}=\text{O}$), and triple ($\text{N}\equiv\text{N}$) bonds with dissociation energies.
- **Diatomic Elements by State:** How London dispersion forces govern phase from gases ($\text{H}_2, \text{F}_2, \text{Cl}_2$) to liquid ($\text{Br}_2$) and solid ($\text{I}_2$).
- **Memory & Mnemonic Guide:** Mnemonics including *"Have No Fear Of Ice Cold Beer"*.
- **Polyatomic Elements:** Structures of ozone ($\text{O}_3$), white phosphorus ($\text{P}_4$ tetrahedron), and cyclooctasulfur ($\text{S}_8$ crown ring).
- **Oxygen Case Study:** Comparative matrix of $\text{O}$ vs $\text{O}_2$ vs $\text{O}_3$ vs $\text{H}_2\text{O}$.
- **Allotropes Directory:** Structural analysis of Carbon (diamond, graphite, graphene, fullerenes), Phosphorus, Sulfur, and Tin ("tin pest").
- **Molecular vs Non-Molecular Elements:** Discrete molecules vs metallic lattices vs giant covalent networks.
- **Formula Writing Rules:** IUPAC guidelines for writing balanced chemical equations.
- **Common Mistakes & Misconceptions:** 7 student traps explained with physical mechanisms.
- **Interactive Self-Test:** 10-question multiple choice quiz with instant scoring and explanation, plus flashcard mode.

---

## 🚀 How to Publish on GitHub Pages

This repository includes a pre-configured GitHub Actions workflow (`.github/workflows/deploy.yml`) and relative asset paths (`base: './'`) in `vite.config.ts`.

### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com) and click **New Repository**.
2. Name it (e.g., `element-atlas`).
3. Leave it Public or Private.

### Step 2: Push Your Code
Initialize git and push to your GitHub repository:
```bash
git init
git add .
git commit -m "Initial commit of Element Atlas"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### Step 3: Enable GitHub Pages via GitHub Actions
1. In your GitHub repository, navigate to **Settings** > **Pages** (in the left sidebar).
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. That's it! GitHub will automatically trigger the deployment workflow.
4. Your website will be live in ~1 minute at:
   `https://<your-username>.github.io/<your-repo-name>/`

---

## 💻 Local Development

### Prerequisites
- Node.js 18+
- npm 9+

### Quick Start
```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🛠️ Tech Stack
- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Animations:** CSS Transitions & Framer Motion

---

## 📄 License
This project is open-source and available under the Apache 2.0 License.
