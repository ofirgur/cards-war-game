import React from 'react';
import { useGameStateContext } from '../../context';
import { GameScreen } from '../../types';
import GameOverScreen from '../GameOverScreen';
import GameCardsScreen from '../GameCardsScreen';
import GameStartScreen from '../GameStartScreen';
import { GameOutletScreenStyled } from './styled';

const GameOutletScreen = () => {
  const { gameState } = useGameStateContext();

  const renderScreen = () => {
    switch (gameState.gameScreen) {
      case GameScreen.cards:
        return <GameCardsScreen />;
      case GameScreen.end:
        return <GameOverScreen />;
      case GameScreen.start:
      default: return <GameStartScreen />;
    }
  };

  return (
    <GameOutletScreenStyled>
      {renderScreen()}
    </GameOutletScreenStyled>
  );
};

export default GameOutletScreen;
