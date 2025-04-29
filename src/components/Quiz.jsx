
// Completing components/Quiz.jsx
import React, { useState } from 'react';

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  
  const questions = [
    {
      question: "What is the main advantage of glassmorphism in UI design?",
      options: [
        "A. It uses less system resources", 
        "B. It creates depth and hierarchy", 
        "C. It works better on mobile devices", 
        "D. It loads faster than other design styles"
      ],
      correctAnswer: 1 // Index of the correct answer (B)
    },
    {
      question: "Which CSS property creates the blur effect in glassmorphism?",
      options: [
        "A. blur-filter", 
        "B. glass-effect", 
        "C. backdrop-filter", 
        "D. transparency"
      ],
      correctAnswer: 2 // Index of the correct answer (C)
    },
    {
      question: "What CSS property is commonly used with glassmorphism to create transparency?",
      options: [
        "A. opacity", 
        "B. rgba colors", 
        "C. visibility", 
        "D. transparent"
      ],
      correctAnswer: 1 // Index of the correct answer (B)
    },
    {
      question: "Which design trend is closely related to glassmorphism?",
      options: [
        "A. Brutalism", 
        "B. Neumorphism", 
        "C. Material design", 
        "D. Flat design"
      ],
      correctAnswer: 1 // Index of the correct answer (B)
    },
    {
      question: "What challenge might glassmorphism present for accessibility?",
      options: [
        "A. Low contrast issues", 
        "B. File size concerns", 
        "C. Limited browser support", 
        "D. Mobile responsiveness"
      ],
      correctAnswer: 0 // Index of the correct answer (A)
    }
  ];

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const handleNextQuestion = () => {
    // Check if answer is correct and update score
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    // Move to next question or show results
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null); // Reset selection
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResults(false);
  };
  
  return (
    <div className="glass rounded-xl p-5 mb-6">
      <h2 className="text-xl font-semibold mb-4">Quiz Challenge</h2>
      <p className="mb-6 text-gray-600">Test your knowledge with these questions.</p>
      
      {showResults ? (
        <div className="text-center py-8">
          <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-blue-300 inline-block text-transparent bg-clip-text">
            Quiz Complete!
          </div>
          <div className="text-2xl mb-6">Your score: {score} / {questions.length}</div>
          <div className="mb-6">
            {score === questions.length ? (
              <div className="text-green-500 font-medium">Perfect score! Excellent job!</div>
            ) : score >= questions.length / 2 ? (
              <div className="text-blue-500 font-medium">Good job! Keep learning.</div>
            ) : (
              <div className="text-orange-500 font-medium">You might need more practice.</div>
            )}
          </div>
          <button 
            onClick={restartQuiz}
            className="px-6 py-3 bg-gradient-to-r from-pink-400 to-blue-300 text-white rounded-lg font-medium hover:opacity-90 transition"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">Question {currentQuestion + 1} of {questions.length}</h3>
          <div className="glass rounded-xl p-4 mb-4">
            <p className="font-medium mb-4">{questions[currentQuestion].question}</p>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <div 
                  key={index}
                  className={`glass rounded-lg p-3 quiz-option cursor-pointer hover:bg-white/20 ${
                    selectedOption === index ? 'bg-gradient-to-r from-pink-400/30 to-blue-300/30' : ''
                  }`}
                  onClick={() => handleOptionSelect(index)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-5 w-5 rounded-full border ${
                      selectedOption === index 
                        ? 'border-blue-400 bg-blue-400/20' 
                        : 'border-gray-300'
                    } flex items-center justify-center`}>
                      {selectedOption === index && (
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between">
            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-pink-400 to-blue-300 h-2.5" 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex justify-end mt-6">
            <button 
              onClick={handleNextQuestion}
              disabled={selectedOption === null}
              className={`px-6 py-2 rounded-lg font-medium ${
                selectedOption !== null 
                  ? 'bg-gradient-to-r from-pink-400 to-blue-300 text-white hover:opacity-90' 
                  : 'glass text-gray-400 cursor-not-allowed'
              } transition`}
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;