export interface GameStateContextInterface {
    gameState: GameState;
    setGameState: (gameState: Partial<GameState>) => void;
  }
  
  export interface GameState {
    gameScreen: GameScreen;
    deckId: string;
    score1: number;
    score2: number;
  }
  
  export enum GameScreen {
    start = 1,
    cards = 2,
    end = 3,
  }