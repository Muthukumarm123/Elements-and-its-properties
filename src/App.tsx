import React, { useState, useEffect } from 'react';
import { ELEMENTS_DATA, getElementByNumber, getElementBySymbol } from './data/elementsData';
import { ElementData, MainNavSection, ElementalFormsSubTopic } from './types/chemistry';
import { Navbar } from './components/Navigation/Navbar';
import { MainSidebar } from './components/Navigation/MainSidebar';
import { ElementalFormsSidebar } from './components/Navigation/ElementalFormsSidebar';
import { HomeHero } from './components/Home/HomeHero';
import { PeriodicTable } from './components/PeriodicTable/PeriodicTable';
import { ElementsDirectory } from './components/ElementsList/ElementsDirectory';
import { CompareElements } from './components/Compare/CompareElements';
import { PropertiesGuide } from './components/Properties/PropertiesGuide';
import { PeriodicTrends } from './components/Trends/PeriodicTrends';
import { ChemistryConcepts } from './components/Concepts/ChemistryConcepts';
import { AboutSection } from './components/About/AboutSection';
import { ElementDetailModal } from './components/ElementModal/ElementDetailModal';
import { GlobalSearchModal } from './components/SearchModal/GlobalSearchModal';

// Elemental Forms subtopic components
import { ElementalFormsOverview } from './components/ElementalForms/ElementalFormsOverview';
import { MonoatomicSection } from './components/ElementalForms/MonoatomicSection';
import { DiatomicSection } from './components/ElementalForms/DiatomicSection';
import { WhyDiatomicSection } from './components/ElementalForms/WhyDiatomicSection';
import { DiatomicBondTypes } from './components/ElementalForms/DiatomicBondTypes';
import { DiatomicByState } from './components/ElementalForms/DiatomicByState';
import { DiatomicSevenGuide } from './components/ElementalForms/DiatomicSevenGuide';
import { PolyatomicSection } from './components/ElementalForms/PolyatomicSection';
import { OxygenDeepDive } from './components/ElementalForms/OxygenDeepDive';
import { AllotropesSection } from './components/ElementalForms/AllotropesSection';
import { MolecularVsNonMolecular } from './components/ElementalForms/MolecularVsNonMolecular';
import { ElementalFormulaRules } from './components/ElementalForms/ElementalFormulaRules';
import { CommonMoleculesGallery } from './components/ElementalForms/CommonMoleculesGallery';
import { WhyMoleculesForm } from './components/ElementalForms/WhyMoleculesForm';
import { FormsByStateAndGroup } from './components/ElementalForms/FormsByStateAndGroup';
import { ElementalFormExplorer } from './components/ElementalForms/ElementalFormExplorer';
import { ElementalFormComparison } from './components/ElementalForms/ElementalFormComparison';
import { CommonMistakesSection } from './components/ElementalForms/CommonMistakesSection';
import { QuickRevisionSection } from './components/ElementalForms/QuickRevisionSection';

export default function App() {
  const [currentSection, setCurrentSection] = useState<MainNavSection>('home');
  const [elementalSubTopic, setElementalSubTopic] = useState<ElementalFormsSubTopic>('overview');
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from system preference
  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  // Keyboard shortcut ⌘K / Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Element navigation in modal
  const handlePrevElement = () => {
    if (!selectedElement) return;
    const prevNum = selectedElement.number === 1 ? 118 : selectedElement.number - 1;
    const prevEl = getElementByNumber(prevNum);
    if (prevEl) setSelectedElement(prevEl);
  };

  const handleNextElement = () => {
    if (!selectedElement) return;
    const nextNum = selectedElement.number === 118 ? 1 : selectedElement.number + 1;
    const nextEl = getElementByNumber(nextNum);
    if (nextEl) setSelectedElement(nextEl);
  };

  const handleSelectElementBySymbol = (symbol: string) => {
    const el = getElementBySymbol(symbol);
    if (el) setSelectedElement(el);
  };

  const handleSelectElementByNumber = (num: number) => {
    const el = getElementByNumber(num);
    if (el) setSelectedElement(el);
  };

  // Direct route into Elemental Forms with element context
  const handleExploreElementalForm = (element: ElementData) => {
    setSelectedElement(null);
    setCurrentSection('elemental-forms');

    if (element.elementalForm.formType.includes('monoatomic')) {
      setElementalSubTopic('monoatomic');
    } else if (element.elementalForm.formType.includes('diatomic')) {
      setElementalSubTopic('diatomic');
    } else if (element.elementalForm.formType === 'polyatomic-molecular') {
      setElementalSubTopic('polyatomic');
    } else if (['C', 'P', 'S', 'Sn', 'O'].includes(element.symbol)) {
      setElementalSubTopic('allotropes');
    } else {
      setElementalSubTopic('molecular-vs-nonmolecular');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        currentSection={currentSection}
        onNavigate={(sec) => {
          setCurrentSection(sec);
          setIsMobileMenuOpen(false);
        }}
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onOpenSearch={() => setIsSearchOpen(true)}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
        onOpenElement={handleSelectElementByNumber}
      />

      {/* Main Body Layout with Sidebar + Content */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto px-4 md:px-6 py-6 gap-6 relative">
        {/* Dedicated Sidebar for active system */}
        <aside
          className={`fixed inset-y-0 left-0 z-30 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-4 transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 md:bg-transparent md:border-0 md:p-0 md:w-64 md:shrink-0 ${
            isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0'
          }`}
        >
          <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-1">
            {currentSection === 'elemental-forms' ? (
              <ElementalFormsSidebar
                currentSubTopic={elementalSubTopic}
                onSelectSubTopic={(sub) => setElementalSubTopic(sub)}
                onReturnToMain={() => {
                  setCurrentSection('table');
                  setIsMobileMenuOpen(false);
                }}
                onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
              />
            ) : (
              <MainSidebar
                currentSection={currentSection}
                onNavigate={(sec) => {
                  setCurrentSection(sec);
                  setIsMobileMenuOpen(false);
                }}
                onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
              />
            )}
          </div>
        </aside>

        {/* Mobile backdrop */}
        {isMobileMenuOpen && (
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-20 md:hidden"
          />
        )}

        {/* Primary Content Area */}
        <main className="flex-1 min-w-0 overflow-hidden">
          {/* SYSTEM 1: MAIN VIEWS */}
          {currentSection === 'home' && (
            <HomeHero
              elements={ELEMENTS_DATA}
              onNavigateSection={(sec) => setCurrentSection(sec)}
              onNavigateElementalForm={(sub) => {
                setCurrentSection('elemental-forms');
                setElementalSubTopic(sub);
              }}
              onSelectElementModal={handleSelectElementBySymbol}
            />
          )}

          {currentSection === 'table' && (
            <PeriodicTable
              elements={ELEMENTS_DATA}
              onSelectElement={(el) => setSelectedElement(el)}
              onNavigateToElementalForms={() => {
                setCurrentSection('elemental-forms');
                setElementalSubTopic('overview');
              }}
            />
          )}

          {currentSection === 'elements' && (
            <ElementsDirectory
              elements={ELEMENTS_DATA}
              onSelectElement={(el) => setSelectedElement(el)}
              onExploreElementalForm={handleExploreElementalForm}
            />
          )}

          {currentSection === 'compare' && (
            <CompareElements
              elements={ELEMENTS_DATA}
              onSelectElementModal={(el) => setSelectedElement(el)}
              onExploreElementalForm={handleExploreElementalForm}
            />
          )}

          {currentSection === 'properties' && <PropertiesGuide />}

          {currentSection === 'trends' && (
            <PeriodicTrends
              elements={ELEMENTS_DATA}
              onSelectElement={(el) => setSelectedElement(el)}
            />
          )}

          {currentSection === 'concepts' && <ChemistryConcepts />}

          {currentSection === 'about' && <AboutSection />}

          {/* SYSTEM 2: DEDICATED ELEMENTAL FORMS LEARNING SYSTEM */}
          {currentSection === 'elemental-forms' && (
            <div className="space-y-6">
              {elementalSubTopic === 'overview' && (
                <ElementalFormsOverview
                  onSelectTopic={(topic) => setElementalSubTopic(topic)}
                  onOpenElementByName={handleSelectElementBySymbol}
                />
              )}

              {elementalSubTopic === 'monoatomic' && (
                <MonoatomicSection onSelectElementModal={handleSelectElementBySymbol} />
              )}

              {elementalSubTopic === 'diatomic' && (
                <DiatomicSection
                  onSelectElementModal={handleSelectElementBySymbol}
                  onNavigateToTopic={(top) => setElementalSubTopic(top as ElementalFormsSubTopic)}
                />
              )}

              {elementalSubTopic === 'why-diatomic' && (
                <WhyDiatomicSection
                  onOpenElementModal={handleSelectElementBySymbol}
                  onNavigateToTopic={(top) => setElementalSubTopic(top as ElementalFormsSubTopic)}
                />
              )}

              {elementalSubTopic === 'bond-types' && <DiatomicBondTypes />}

              {elementalSubTopic === 'diatomic-by-state' && <DiatomicByState />}

              {elementalSubTopic === 'diatomic-seven' && (
                <DiatomicSevenGuide onOpenElementModal={handleSelectElementBySymbol} />
              )}

              {elementalSubTopic === 'polyatomic' && (
                <PolyatomicSection
                  onSelectTopic={(top) => setElementalSubTopic(top as ElementalFormsSubTopic)}
                  onOpenElementModal={handleSelectElementBySymbol}
                />
              )}

              {elementalSubTopic === 'oxygen-example' && (
                <OxygenDeepDive onOpenOxygenReference={() => handleSelectElementBySymbol('O')} />
              )}

              {elementalSubTopic === 'allotropes' && (
                <AllotropesSection onOpenElementModal={handleSelectElementBySymbol} />
              )}

              {elementalSubTopic === 'molecular-vs-nonmolecular' && <MolecularVsNonMolecular />}

              {elementalSubTopic === 'formula-rules' && <ElementalFormulaRules />}

              {elementalSubTopic === 'common-molecules' && <CommonMoleculesGallery />}

              {elementalSubTopic === 'why-molecules-form' && <WhyMoleculesForm />}

              {(elementalSubTopic === 'by-state' ||
                elementalSubTopic === 'by-group' ||
                elementalSubTopic === 'by-period') && (
                <FormsByStateAndGroup
                  elements={ELEMENTS_DATA}
                  onOpenElementModal={handleSelectElementBySymbol}
                />
              )}

              {elementalSubTopic === 'explorer' && (
                <ElementalFormExplorer
                  elements={ELEMENTS_DATA}
                  onOpenElementModal={(el) => setSelectedElement(el)}
                />
              )}

              {elementalSubTopic === 'comparison' && <ElementalFormComparison />}

              {elementalSubTopic === 'common-mistakes' && (
                <CommonMistakesSection
                  onNavigateToTopic={(top) => setElementalSubTopic(top as ElementalFormsSubTopic)}
                  onSelectElementModal={handleSelectElementBySymbol}
                />
              )}

              {elementalSubTopic === 'quick-revision' && <QuickRevisionSection />}
            </div>
          )}
        </main>
      </div>

      {/* Global Interactive Modals */}
      <ElementDetailModal
        element={selectedElement}
        onClose={() => setSelectedElement(null)}
        onPrevElement={handlePrevElement}
        onNextElement={handleNextElement}
        onExploreElementalForm={handleExploreElementalForm}
      />

      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        elements={ELEMENTS_DATA}
        onSelectElement={(el) => {
          setSelectedElement(el);
          setIsSearchOpen(false);
        }}
      />
    </div>
  );
}
