import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";

import { GameStateContextProvider } from '../../context';
import { INITIAL_GAME_STATE } from '../../constants';

import GameOutletScreen from '../../screens/GameOutletScreen';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GameStateContextProvider initialState={INITIAL_GAME_STATE}>
        <GameOutletScreen />
      </GameStateContextProvider>
    </QueryClientProvider>
  );
}

export default App;
