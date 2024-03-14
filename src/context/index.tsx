import React from 'react';
import { GameStateContextInterface, GameState } from '../types';

// state management context
const GameStateContext = React.createContext<GameStateContextInterface | null>(null);

// custome hook to get the state of the app, getter & setter,
// return { gameState, setGameState }, see Ln 32, Col 38
export const useGameStateContext = () => {
  const context = React.useContext(GameStateContext);
  if (!context) {
    throw new Error('useGameStateContext must be used within a GameStateContextProvider');
  }

  return context;
};

// context frovider for app state, should wrap the Root of the app
// it's a component with local state,
// it shares it's state (getter & setter) with the returned GameStateContext.Provider (context provider)
export const GameStateContextProvider = (props: any) => {
  const { initialState } = props;
  const [gameState, regularSetGameState] = React.useState(initialState);
  const setGameState = (newState: Partial<GameState>) => {
    regularSetGameState((prevState: GameState) => ({
      ...prevState,
      ...newState,
    }));
  };

  const value = React.useMemo(() => ({ gameState, setGameState }), [gameState]);
  return (
    <GameStateContext.Provider value={value} {...props} />
  );
};
