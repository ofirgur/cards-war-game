import * as React from 'react';

import { useBrandNewDeck } from '../../hooks/useBrandNewDeck';

import CardsDeck from '../WarCardsGame';
import {BoardStyled } from './styled';

export interface IBoard {
}

const GameBoard = (props: IBoard) => {
  const { data } = useBrandNewDeck();
  
  const test = () => {};

  return (
      <BoardStyled>
        {data && <CardsDeck deckId={data?.deck_id} gameOverCallback={test} />}
      </BoardStyled>
  );
};

export default GameBoard;
