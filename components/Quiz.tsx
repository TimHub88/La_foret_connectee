"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaTree, FaCheckCircle, FaTimesCircle, FaShareAlt } from "react-icons/fa";

const quizQuestions = [
  {
    id: 1,
    question: "Quelle est la surface forestière du département des Vosges ?",
    options: [
      { text: "150 000 hectares", correct: false },
      { text: "350 000 hectares", correct: true },
      { text: "500 000 hectares", correct: false },
      { text: "250 000 hectares", correct: false },
    ],
    explanation: "Les Vosges comptent environ 350 000 hectares de forêts, soit près de 59% du territoire départemental, ce qui en fait l'un des départements les plus boisés de France."
  },
  {
    id: 2,
    question: "Quelle essence d'arbre est la plus présente dans les forêts vosgiennes ?",
    options: [
      { text: "Le chêne", correct: false },
      { text: "Le sapin pectiné", correct: false },
      { text: "L'épicéa commun", correct: true },
      { text: "Le hêtre", correct: false },
    ],
    explanation: "L'épicéa commun représente environ 35% des forêts vosgiennes, suivi du hêtre (30%) et du sapin pectiné (15%). Ces trois essences dominent le paysage forestier vosgien."
  },
  {
    id: 3,
    question: "Combien de m³ de bois sont récoltés annuellement dans les Vosges ?",
    options: [
      { text: "500 000 m³", correct: false },
      { text: "1 200 000 m³", correct: true },
      { text: "800 000 m³", correct: false },
      { text: "2 000 000 m³", correct: false },
    ],
    explanation: "Environ 1,2 million de m³ de bois sont récoltés chaque année dans les Vosges, alimentant les scieries, menuiseries et industries du bois de la région."
  },
  {
    id: 4,
    question: "Quel pourcentage de la forêt vosgienne appartient à des propriétaires privés ?",
    options: [
      { text: "30%", correct: false },
      { text: "50%", correct: false },
      { text: "70%", correct: true },
      { text: "90%", correct: false },
    ],
    explanation: "Environ 70% des forêts vosgiennes sont détenues par des propriétaires privés, le reste appartenant aux communes (forêts communales) et à l'État (forêts domaniales)."
  },
  {
    id: 5,
    question: "Combien d'emplois directs la filière bois génère-t-elle dans les Vosges ?",
    options: [
      { text: "1 500 emplois", correct: false },
      { text: "3 000 emplois", correct: true },
      { text: "5 000 emplois", correct: false },
      { text: "500 emplois", correct: false },
    ],
    explanation: "La filière bois des Vosges génère environ 3 000 emplois directs, incluant la sylviculture, l'exploitation forestière, la transformation du bois et l'artisanat."
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [started, setStarted] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);
      setShowExplanation(true);
      
      if (quizQuestions[currentQuestion].options[index].correct) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setStarted(false);
  };

  const handleShare = () => {
    const text = `J'ai obtenu ${score}/${quizQuestions.length} au quiz sur le bois vosgien ! 🌲 Découvrez l'initiative "La Forêt Connectée" pour valoriser nos forêts.`;
    
    if (navigator.share) {
      navigator.share({
        title: "Quiz Bois Vosgien",
        text: text,
        url: window.location.href,
      });
    } else {
      // Fallback: copier dans le presse-papiers
      navigator.clipboard.writeText(text + " " + window.location.href);
      alert("Lien copié dans le presse-papiers !");
    }
  };

  if (!started) {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-sapin to-sapin/80" id="quiz">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaTree className="text-7xl text-dore mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quiz : Connaissez-vous la forêt vosgienne ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Testez vos connaissances sur nos forêts et découvrez des chiffres surprenants sur le bois vosgien !
            </p>
            <button
              onClick={() => setStarted(true)}
              className="bg-dore text-sapin px-10 py-4 rounded-lg font-bold text-xl hover:bg-dore/90 transition-all hover:scale-105 shadow-xl"
            >
              Commencer le quiz
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  if (quizCompleted) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    let message = "";
    let emoji = "";

    if (percentage >= 80) {
      message = "Excellent ! Vous êtes un vrai expert de la forêt vosgienne ! 🌟";
      emoji = "🏆";
    } else if (percentage >= 60) {
      message = "Bravo ! Vous connaissez bien nos forêts ! 👏";
      emoji = "🎯";
    } else if (percentage >= 40) {
      message = "Pas mal ! Vous en savez déjà pas mal sur nos forêts ! 🌲";
      emoji = "👍";
    } else {
      message = "Vous avez encore beaucoup à découvrir sur la forêt vosgienne ! 📚";
      emoji = "🌱";
    }

    return (
      <section className="py-20 px-4 bg-gradient-to-br from-sapin to-sapin/80" id="quiz">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-2xl"
          >
            <div className="text-7xl mb-6">{emoji}</div>
            <h2 className="text-4xl font-bold text-sapin mb-4">
              Quiz terminé !
            </h2>
            <div className="text-6xl font-bold text-dore mb-4">
              {score}/{quizQuestions.length}
            </div>
            <p className="text-2xl text-gray-700 mb-8">{message}</p>
            
            <div className="bg-casse rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-sapin mb-4">
                💡 Le saviez-vous ?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Avec 350 000 hectares de forêts et 1,2 million de m³ de bois récoltés chaque année,
                les Vosges sont un acteur majeur de la filière bois en France. Une traçabilité complète
                permettrait de valoriser encore davantage ce patrimoine exceptionnel.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRestart}
                className="bg-sapin text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-sapin/90 transition-all"
              >
                Recommencer
              </button>
              <button
                onClick={handleShare}
                className="bg-dore text-sapin px-8 py-4 rounded-lg font-bold text-lg hover:bg-dore/90 transition-all flex items-center gap-2 justify-center"
              >
                <FaShareAlt />
                Partager mon score
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-sapin to-sapin/80" id="quiz">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <p className="text-white/80 text-lg mb-2">
            Question {currentQuestion + 1} sur {quizQuestions.length}
          </p>
          <div className="w-full bg-white/30 rounded-full h-3">
            <div
              className="bg-dore h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-sapin mb-8">
              {question.question}
            </h3>

            <div className="space-y-4 mb-8">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full text-left p-4 rounded-lg font-semibold text-lg transition-all ${
                    selectedAnswer === null
                      ? "bg-casse hover:bg-sapin/10 hover:border-sapin border-2 border-transparent"
                      : selectedAnswer === index
                      ? option.correct
                        ? "bg-green-100 border-2 border-green-500"
                        : "bg-red-100 border-2 border-red-500"
                      : option.correct
                      ? "bg-green-100 border-2 border-green-500"
                      : "bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {selectedAnswer !== null && (
                      <span className="text-2xl">
                        {option.correct ? (
                          <FaCheckCircle className="text-green-600" />
                        ) : selectedAnswer === index ? (
                          <FaTimesCircle className="text-red-600" />
                        ) : null}
                      </span>
                    )}
                    <span className={selectedAnswer !== null && !option.correct && selectedAnswer !== index ? "text-gray-500" : "text-gray-800"}>
                      {option.text}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-dore/20 border-l-4 border-dore p-6 rounded-lg mb-6"
                >
                  <p className="text-gray-800 leading-relaxed">
                    <strong>💡 Le saviez-vous ?</strong> {question.explanation}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {showExplanation && (
              <button
                onClick={handleNextQuestion}
                className="w-full bg-sapin text-white py-4 rounded-lg font-bold text-lg hover:bg-sapin/90 transition-all"
              >
                {currentQuestion < quizQuestions.length - 1 ? "Question suivante" : "Voir mes résultats"}
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

