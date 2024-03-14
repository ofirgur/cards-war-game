import React from 'react';

import { useGameStateContext } from '../../context';
import { GameScreen } from '../../types';
import { useBrandNewDeck } from '../../hooks/useBrandNewDeck';

import Card from '../../components/Card';
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
      <Card src="https://deckofcardsapi.com/static/img/KD.png" />
      <MessageStyled>Welcome to the War</MessageStyled>
      <Button onClick={handleStartClick}>Start the War</Button>
    </GameStartScreenStyled>
  );
};

export default GameStartScreen;
