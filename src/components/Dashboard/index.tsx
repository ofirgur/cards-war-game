import React from 'react'

import Score from '../Score';
import { DashboardStyled } from './styled';

interface IDashboard {
    remaining: number,
    score1: number,
    score2: number,
}

function Dashboard(props: IDashboard) {
    const { remaining, score1, score2 } = props
    const leader = score1 > score2
    return (
        <DashboardStyled>
            <Score isLeader={score1 > score2} isEqual={score1 === score2}>{score1}</Score>
            <Score isRemaining>{remaining}</Score>
            <Score isLeader={score2 > score1} isEqual={score1 === score2}>{score2}</Score>
        </DashboardStyled>
    )
}

export default Dashboard;
