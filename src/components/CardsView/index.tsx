import React from 'react'

import Card from '../Card';

import { CardsViewStyled } from './styled';
interface ICardsView {
    cards?: {
        image: string
    }[]
}

const CardsView = (props: ICardsView) => {
    const { cards } = props

    return (
        <CardsViewStyled>
            {cards && <Card src={cards[0].image} />}
            <Card src="https://deckofcardsapi.com/static/img/back.png" />
            {cards && <Card src={cards[1].image} />}
        </CardsViewStyled>
    );
};

export default CardsView;
