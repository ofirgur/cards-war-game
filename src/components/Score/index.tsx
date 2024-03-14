import React, { ReactNode } from 'react'

import { ScoreStyled } from './styled';
interface IScore {
    children: ReactNode;
    isRemaining?: boolean;
    isLeader?: boolean;
    isEqual?: boolean;
}

const Score = (props: IScore) => {
    const { children, isRemaining, isLeader, isEqual } = props

    return (
        <ScoreStyled isRemaining={isRemaining} isLeader={isLeader} isEqual={isEqual}>{children}</ScoreStyled>
    );
};

export default Score;
