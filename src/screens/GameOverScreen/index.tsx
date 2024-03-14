import React from 'react';

import { useGameStateContext } from '../../context';
import { INITIAL_GAME_STATE } from '../../constants';

import GameResults from '../../components/GameResults';
import Score from '../../components/Score';
import Button from '../../components/Button';
import { GameOverScreenStyled, MessageStyled } from './styled';

const GameOverScreen = () => {
  const { gameState, setGameState } = useGameStateContext();
  const { score1, score2 } = gameState;
  
  const handleStartClick = () => {
    setGameState(INITIAL_GAME_STATE);
  };

  return (
    <GameOverScreenStyled>
      <MessageStyled>Game Over</MessageStyled>
      <GameResults>
        <Score isLeader={score1 > score2} isEqual={score1 === score2}>P1: {score1}</Score>
        <Score isLeader={score2 > score1} isEqual={score2 === score1}>P2: {score2}</Score>
      </GameResults>
      <Button onClick={handleStartClick}>Start again</Button>
    </GameOverScreenStyled>
  );
};

export default GameOverScreen;
