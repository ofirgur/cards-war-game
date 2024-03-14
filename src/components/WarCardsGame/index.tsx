import React, { useState, useEffect } from 'react'

import { useDrawCardsFromDeck } from '../../hooks/useDrawCardsFromDeck';
import { useReturnCardsToDeck } from '../../hooks/useReturnCardsToDeck';
import { useReshuffleDeck } from '../../hooks/useReshuffleDeck';
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
    const { data: { remaining, cards, deck_id }, refetch: cardsDrawRefetch} = useDrawCardsFromDeck(deckId);
    const { refetch: cardsReshuffleDeck} = useReshuffleDeck(deckId);
    const { refetch: cardsReturnRefetch } = useReturnCardsToDeck(deckId, !cards ? '' : `${cards[0].code},${cards[1].code}`);
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);

    //console.log('deckId: ', deckId);
    //console.log('data: ', { remaining, cards, deck_id });
    
    // game over logic
    useEffect(() => {
        if(remaining > 0) return;
        gameOverCallback(score1, score2);
    }, [remaining, score1, score2]);

    // draw cards drow logic
    useEffect(() => {
        if(!cards) return;
        const handleScore = () => {        
            const [card1, card2] = cards;
            const value1 = scoreLogic[card1.value];
            const value2 = scoreLogic[card2.value];
            if(value1 === value2) {
                setTimeout(() => {
                    cardsReturnRefetch();
                    cardsReshuffleDeck();
                }, 1000);
            } else if(value1 > value2) {
                setScore1(score1 + 2);
            } else {
                setScore2(score2 + 2);
            }
        }; 
        handleScore();
    }, [cards]);

    const onPlayClick = () => {
        cardsDrawRefetch();
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
