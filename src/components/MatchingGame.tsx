import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { gameItems } from './GameItems';

interface Item {
  id: number;
  text: string;
  image: string;
}

interface MatchingGameProps {
  topic: string;
  onBack: () => void;
}

function MatchingGame({ topic, onBack }: MatchingGameProps) {
  const [selectedText, setSelectedText] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentItems, setCurrentItems] = useState<Item[]>([]);
  const [score, setScore] = useState(0);

  const selectRandomItems = () => {
    const topicItems = gameItems[topic];
    const shuffled = [...topicItems].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  };

  useEffect(() => {
    setCurrentItems(selectRandomItems());
  }, [topic]);

  const handleCheck = () => {
    if (selectedText !== null && selectedImage !== null) {
      const matchIsCorrect = selectedText === selectedImage;
      setIsCorrect(matchIsCorrect);
      if (matchIsCorrect) {
        setScore(score + 1);
      }
      setShowResult(true);
    }
  };

  const closeModal = () => {
    setShowResult(false);
    setSelectedText(null);
    setSelectedImage(null);
    if (isCorrect) {
      setCurrentItems(selectRandomItems());
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-indigo-50 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-indigo-600" />
          </button>
          <h2 className="text-2xl font-bold text-indigo-800">
            Match the {topic.charAt(0).toUpperCase() + topic.slice(1)}
          </h2>
        </div>
        <div className="px-4 py-2 bg-indigo-100 rounded-lg">
          <span className="font-semibold text-indigo-800">Score: {score}</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Select Text</h3>
          {currentItems.map((item) => (
            <button
              key={`text-${item.id}`}
              onClick={() => setSelectedText(item.id)}
              className={`w-full p-3 rounded-lg border-2 transition-all ${
                selectedText === item.id
                  ? 'border-indigo-600 bg-indigo-50'
                  : 'border-gray-200 hover:border-indigo-300'
              }`}
            >
              {item.text}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Select Image</h3>
          <div className="grid gap-3">
            {currentItems.map((item) => (
              <button
                key={`image-${item.id}`}
                onClick={() => setSelectedImage(item.id)}
                className={`flex justify-center items-center p-4 rounded-lg transition-all 
                  bg-gradient-to-r from-indigo-50 to-purple-50
                  ${
                    selectedImage === item.id
                      ? 'ring-4 ring-indigo-400 shadow-lg'
                      : 'hover:ring-2 hover:ring-indigo-300 shadow-md'
                  }`}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-lg transform rotate-2"></div>
                  <div className="absolute inset-0 bg-white rounded-lg transform -rotate-2"></div>
                  <img
                    src={item.image}
                    alt={item.text}
                    className="relative w-[150px] h-[150px] object-cover rounded-lg border-4 border-white shadow-md transform transition-transform hover:scale-105"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleCheck}
          disabled={selectedText === null || selectedImage === null}
          className={`px-6 py-2 rounded-lg font-semibold text-white transition-all ${
            selectedText === null || selectedImage === null
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700'
          }`}
        >
          Check Match
        </button>
      </div>

      {showResult && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full">
            <h3 className={`text-xl font-bold mb-3 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
              {isCorrect ? 'Correct Match!' : 'Incorrect Match!'}
            </h3>
            <p className="text-gray-600 mb-4">
              {isCorrect
                ? 'Great job! You matched the correct pair!'
                : 'Try again! The image and text don\'t match.'}
            </p>
            <button
              onClick={closeModal}
              className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              {isCorrect ? 'Next Round' : 'Try Again'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MatchingGame;