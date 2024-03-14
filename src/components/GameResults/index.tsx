import React, { ReactNode } from 'react'

import { GameResultsStyled } from './styled';

interface IGameResults {
    children: ReactNode,
}

const GameResults = (props: IGameResults) => {
    const { children } = props;
    return(
        <GameResultsStyled>{children}</GameResultsStyled>
    )
}

export default GameResults;