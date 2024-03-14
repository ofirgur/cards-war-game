import React from 'react';

import { useGameStateContext } from '../../context';
import { GameScreen } from '../../types';
import { useBrandNewDeck } from '../../hooks/useBrandNewDeck';

import Button from '../../components/Button';
import { GameStartScreenStyled, MessageStyled } from './styled';

const GameStartScreen = () => {
  const { setGameState } = useGameStateContext();
  const { refetch } = useBrandNewDeck();

  const handleStartClick = async () => {
    const res = await refetch();
    const { data: { deck_id }} = res;
    setGameState({
      deckId: deck_id,
      gameScreen: GameScreen.cards,
    });
  };

  return (
    <GameStartScreenStyled>
      <MessageStyled>Welcome to War Game</MessageStyled>
      <Button onClick={handleStartClick}>Start</Button>
    </GameStartScreenStyled>
  );
};

export default GameStartScreen;
