import React, { useState, useEffect } from 'react'

import { useDrawCardsFromDeck } from '../../hooks/useDrawCardsFromDeck';
import { scoreLogic } from './scoreLogic';

import Button from '../Button';
import CardsView from '../CardsView';
import Dashboard from '../Dashboard';
import { WarCardsGameStyled } from './styled';

interface IWarCardsGame {
    deckId: string;
    gameOverCallback: (a: number, b: number) => void,
}

const WarCardsGame = (props: IWarCardsGame) => {
    const { deckId, gameOverCallback } = props
    console.log('deckId: ', deckId);
    const { data: { remaining, cards, deck_id }, refetch} = useDrawCardsFromDeck(deckId);
    console.log('data: ', { remaining, cards, deck_id });
    
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);

    useEffect(() => {
        if(remaining === 0) {
            gameOverCallback(score1, score2);
        }
    }, [remaining, score1, score2]);

    const onPlayClick = async () => {
        const response = await refetch();
        const { data: { cards } } = response;

        if(cards) {
            const value1 = scoreLogic[cards[0].value];
            const value2 = scoreLogic[cards[1].value];

            if(value1 === value2) {
                // return cards back to deck and re shuffle
            } else if(value1 > value2) {
                setScore1(score1 + 2);
            } else {
                setScore2(score2 + 2);
            } 
        }
    };

    return (
        <WarCardsGameStyled>
            <CardsView cards={cards} />
            <Dashboard remaining={remaining} score1={score1} score2={score2} />
            <br />
            <Button onClick={onPlayClick}>Open cards</Button>
        
        </WarCardsGameStyled>
    );
};

export default WarCardsGame;
