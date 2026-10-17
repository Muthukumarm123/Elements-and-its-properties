import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  BookOpen,
  Award,
  Layers,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { REVISION_QUIZ_QUESTIONS } from '../../data/elementalFormsData';

export const QuickRevisionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'quiz' | 'flashcards'>('quiz');

  // Quiz state
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [quizFinished, setQuizFinished] = useState(false);

  // Flashcards state
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentQ = REVISION_QUIZ_QUESTIONS[currentQIndex];

  const handleSelectOption = (qId: number, optionIdx: number) => {
    if (selectedAnswers[qId] !== undefined) return; // already answered
    setSelectedAnswers(prev => ({ ...prev, [qId]: optionIdx }));
    setShowExplanation(prev => ({ ...prev, [qId]: true }));
  };

  const handleNextQuestion = () => {
    if (currentQIndex < REVISION_QUIZ_QUESTIONS.length - 1) {
      setCurrentQIndex(prev => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setSelectedAnswers({});
    setShowExplanation({});
    setCurrentQIndex(0);
    setQuizFinished(false);
  };

  const totalScore = Object.entries(selectedAnswers).reduce((acc, [qId, ansIdx]) => {
    const q = REVISION_QUIZ_QUESTIONS.find(item => item.id === Number(qId));
    return acc + (q && q.correctIndex === ansIdx ? 1 : 0);
  }, 0);

  // Flashcards content
  const flashcards = [
    {
      front: 'What are the classic "Diatomic 7" elements?',
      back: 'Hydrogen (H₂), Nitrogen (N₂), Oxygen (O₂), Fluorine (F₂), Chlorine (Cl₂), Bromine (Br₂), and Iodine (I₂).\nMnemonic: "Have No Fear Of Ice Cold Beer" or "Horses Need Oats For Clear Brown Eyes".'
    },
    {
      front: 'Why is H₂ an element and NOT a compound?',
      back: 'A compound must contain two or more DIFFERENT chemical elements. H₂ contains exclusively hydrogen atoms bonded together, so it is an elemental substance in molecular form.'
    },
    {
      front: 'Which diatomic element is liquid at room temperature (STP)?',
      back: 'Bromine (Br₂). It is a dense, reddish-brown fuming liquid at 298 K.'
    },
    {
      front: 'Which diatomic element is solid at room temperature (STP)?',
      back: 'Iodine (I₂). It forms deep violet-black lustrous crystals held by London dispersion forces.'
    },
    {
      front: 'Why do noble gases naturally exist as monoatomic gases?',
      back: 'Noble gases have completely filled valence shells (s²p⁶ or 1s² for He). Adding electrons into molecular orbitals would populate high-energy antibonding orbitals, yielding a bond order of 0.'
    },
    {
      front: 'What are allotropes? Give two famous examples.',
      back: 'Allotropes are different structural modifications of the same chemical element in the same physical state. Examples:\n1. Carbon: Diamond (3D sp³ network), Graphite (2D sp² sheets), Graphene, C₆₀.\n2. Oxygen: Dioxygen (O₂) and Ozone (O₃).'
    },
    {
      front: 'Why is bulk solid copper written as Cu and not Cu₂?',
      back: 'Metals do NOT exist as discrete small molecules. They form continuous 3D crystalline metallic lattices where positive ion cores are submerged in a delocalized sea of valence electrons. The formula Cu is an empirical representation.'
    },
    {
      front: 'What is the molecular formula and geometry of white phosphorus and elemental sulfur?',
      back: 'White phosphorus: P₄ (tetrahedral cage with strained 60° angles).\nElemental sulfur: S₈ (puckered crown-shaped octatomic ring with single S–S bonds).'
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
          <Award className="w-4 h-4" />
          Interactive Assessment
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Quick Revision & Self-Test
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Test your mastery of elemental substances, diatomic molecules, allotropes, and formula rules. Choose between interactive multiple-choice quiz mode or quick-flip flashcards.
        </p>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 pt-2">
          <button
            type="button"
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'quiz'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Multiple Choice Quiz ({REVISION_QUIZ_QUESTIONS.length} Questions)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('flashcards')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'flashcards'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Revision Flashcards ({flashcards.length} Cards)
          </button>
        </div>
      </div>

      {/* QUIZ TAB */}
      {activeTab === 'quiz' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
          {!quizFinished ? (
            <>
              {/* Question progress */}
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-4">
                <span>Question {currentQIndex + 1} of {REVISION_QUIZ_QUESTIONS.length}</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  Current Score: {totalScore} / {Object.keys(selectedAnswers).length}
                </span>
              </div>

              {/* Question text */}
              <div className="space-y-4">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {currentQ.question}
                </h2>

                {/* Options list */}
                <div className="space-y-2.5">
                  {currentQ.options.map((opt, oIdx) => {
                    const isSelected = selectedAnswers[currentQ.id] === oIdx;
                    const isAnswered = selectedAnswers[currentQ.id] !== undefined;
                    const isCorrect = currentQ.correctIndex === oIdx;

                    let btnClass = 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 hover:border-emerald-400';
                    if (isAnswered) {
                      if (isCorrect) {
                        btnClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 font-bold';
                      } else if (isSelected && !isCorrect) {
                        btnClass = 'border-red-400 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200 line-through';
                      } else {
                        btnClass = 'border-slate-200 dark:border-slate-800 opacity-50 text-slate-500';
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        type="button"
                        onClick={() => handleSelectOption(currentQ.id, oIdx)}
                        disabled={isAnswered}
                        className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 ${btnClass}`}
                      >
                        <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span className="flex-1">{opt}</span>
                        {isAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                        {isAnswered && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-500 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {showExplanation[currentQ.id] && (
                  <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/60 text-xs sm:text-sm text-teal-950 dark:text-teal-200 space-y-1.5 animate-fadeIn">
                    <div className="font-bold flex items-center gap-1 text-teal-800 dark:text-teal-300 uppercase tracking-wide text-xs">
                      <HelpCircle className="w-3.5 h-3.5" /> Explanation
                    </div>
                    <p>{currentQ.explanation}</p>
                  </div>
                )}
              </div>

              {/* Next / Submit button */}
              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  disabled={selectedAnswers[currentQ.id] === undefined}
                  onClick={handleNextQuestion}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs"
                >
                  {currentQIndex === REVISION_QUIZ_QUESTIONS.length - 1 ? 'Finish Quiz' : 'Next Question'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            /* Quiz Completion screen */
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                  Quiz Completed!
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  You scored <strong className="text-emerald-600 dark:text-emerald-400 font-black text-lg">{totalScore}</strong> out of <strong className="text-slate-800 dark:text-slate-200">{REVISION_QUIZ_QUESTIONS.length}</strong> ({Math.round((totalScore / REVISION_QUIZ_QUESTIONS.length) * 100)}%)
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 max-w-md mx-auto text-xs text-slate-600 dark:text-slate-300 text-left">
                {totalScore >= 9 ? (
                  <p className="text-emerald-700 dark:text-emerald-300 font-semibold">
                    Mastery Level: Outstanding! You understand homonuclear molecules, bonding orbitals, and allotropes thoroughly.
                  </p>
                ) : totalScore >= 7 ? (
                  <p className="text-teal-700 dark:text-teal-300 font-semibold">
                    Great Job! You have a solid grasp of elemental substances. Review common misconceptions to polish edge cases.
                  </p>
                ) : (
                  <p className="text-amber-700 dark:text-amber-300 font-semibold">
                    Good start! We recommend revisiting the Diatomic 7 and Allotropes sections before trying again.
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={handleRestartQuiz}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs sm:text-sm font-bold hover:opacity-90 transition-all shadow-xs"
              >
                <RotateCcw className="w-4 h-4" />
                Retake Quiz
              </button>
            </div>
          )}
        </div>
      )}

      {/* FLASHCARDS TAB */}
      {activeTab === 'flashcards' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-3">
            <span>Card {flashcardIndex + 1} of {flashcards.length}</span>
            <span className="italic">Click card to reveal answer</span>
          </div>

          {/* Interactive Card */}
          <div
            onClick={() => setIsFlipped(prev => !prev)}
            className="cursor-pointer min-h-[220px] sm:min-h-[260px] p-8 rounded-2xl border-2 border-dashed border-emerald-300 dark:border-emerald-700/60 bg-emerald-50/40 dark:bg-emerald-950/20 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all flex flex-col justify-center items-center text-center space-y-4"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/60">
              {isFlipped ? 'Answer / Solution' : 'Question / Concept'}
            </span>

            <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white max-w-lg whitespace-pre-line leading-relaxed">
              {isFlipped ? flashcards[flashcardIndex].back : flashcards[flashcardIndex].front}
            </p>

            <span className="text-xs text-slate-400 dark:text-slate-500">
              {isFlipped ? 'Click again to flip back' : 'Tap to flip'}
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              disabled={flashcardIndex === 0}
              onClick={() => {
                setIsFlipped(false);
                setFlashcardIndex(prev => prev - 1);
              }}
              className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 flex items-center gap-1.5"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>

            <button
              type="button"
              onClick={() => setIsFlipped(prev => !prev)}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-200"
            >
              Flip Card
            </button>

            <button
              type="button"
              disabled={flashcardIndex === flashcards.length - 1}
              onClick={() => {
                setIsFlipped(false);
                setFlashcardIndex(prev => prev + 1);
              }}
              className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 flex items-center gap-1.5"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
