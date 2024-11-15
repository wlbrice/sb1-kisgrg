import React from 'react';
import { 
  Gamepad2, 
  Brain, 
  Puzzle, 
  BookOpen, 
  Palette, 
  Music 
} from 'lucide-react';

interface Game {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
}

const games: Game[] = [
  { 
    id: 'matching', 
    name: 'Matching Game', 
    icon: Gamepad2,
    description: 'Match items with their corresponding images'
  },
  { 
    id: 'memory', 
    name: 'Memory Game', 
    icon: Brain,
    description: 'Test your memory by finding matching pairs'
  },
  { 
    id: 'puzzle', 
    name: 'Puzzle Game', 
    icon: Puzzle,
    description: 'Solve challenging puzzles'
  },
  { 
    id: 'quiz', 
    name: 'Quiz Game', 
    icon: BookOpen,
    description: 'Test your knowledge with fun quizzes'
  },
  { 
    id: 'coloring', 
    name: 'Coloring Game', 
    icon: Palette,
    description: 'Express your creativity with colors'
  },
  { 
    id: 'music', 
    name: 'Music Game', 
    icon: Music,
    description: 'Play with rhythm and melodies'
  }
];

interface GameSelectorProps {
  onSelectGame: (gameId: string) => void;
}

function GameSelector({ onSelectGame }: GameSelectorProps) {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-indigo-800 mb-8">
        Choose a Game
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => {
          const Icon = game.icon;
          return (
            <button
              key={game.id}
              onClick={() => onSelectGame(game.id)}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl 
                transition-all transform hover:-translate-y-1 
                flex flex-col items-center gap-4"
            >
              <Icon className="w-12 h-12 text-indigo-600" />
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {game.name}
                </h2>
                <p className="text-gray-600 text-sm">
                  {game.description}
                </p>
              </div>
              {game.id !== 'matching' && (
                <span className="mt-2 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  Coming Soon
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default GameSelector;