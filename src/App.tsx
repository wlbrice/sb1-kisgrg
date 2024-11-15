import React, { useState } from 'react';
import GameSelector from './components/GameSelector';
import TopicSelector from './components/TopicSelector';
import MatchingGame from './components/MatchingGame';

type GameState = {
  game: string | null;
  topic: string | null;
};

function App() {
  const [gameState, setGameState] = useState<GameState>({
    game: null,
    topic: null
  });

  const handleGameSelect = (game: string) => {
    setGameState({ game, topic: null });
  };

  const handleTopicSelect = (topic: string) => {
    setGameState({ ...gameState, topic });
  };

  const handleBack = () => {
    if (gameState.topic) {
      setGameState({ ...gameState, topic: null });
    } else {
      setGameState({ game: null, topic: null });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-6">
      {!gameState.game ? (
        <GameSelector onSelectGame={handleGameSelect} />
      ) : gameState.game === 'matching' && !gameState.topic ? (
        <TopicSelector onSelectTopic={handleTopicSelect} onBack={handleBack} />
      ) : gameState.game === 'matching' && gameState.topic ? (
        <MatchingGame 
          topic={gameState.topic} 
          onBack={handleBack} 
        />
      ) : (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 text-center">
          <button
            onClick={handleBack}
            className="mb-4 px-4 py-2 text-indigo-600 hover:text-indigo-800"
          >
            ← Back to Games
          </button>
          <h2 className="text-2xl font-bold text-gray-800">
            Game Under Development
          </h2>
          <p className="text-gray-600 mt-2">
            This game is coming soon! Please check back later.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;