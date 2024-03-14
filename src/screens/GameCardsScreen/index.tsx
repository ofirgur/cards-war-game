import React from 'react';

import { useGameStateContext } from '../../context';
import { GameScreen } from '../../types';

import CardsDeck from '../../components/WarCardsGame';
import { GameCardsScreenStyled } from './styled';

const GameCardsScreen = () => {
  const { gameState, setGameState } = useGameStateContext();

  const handleGameOver = (score1: number, score2: number) => {
    setGameState({
      gameScreen: GameScreen.end,
      score1,
      score2,
    })
  }

  return (
    <GameCardsScreenStyled>
      <CardsDeck deckId={gameState.deckId} gameOverCallback={handleGameOver} />
    </GameCardsScreenStyled>
  );
};

export default GameCardsScreen;
;
