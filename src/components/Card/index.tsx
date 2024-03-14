import React from 'react'

import { CardStyled } from './styled';
interface ICard {
    src: string;
}

const Card = (props: ICard) => {
    const { src } = props

    return (
        <CardStyled src={src} alt="card" />
    );
};

export default Card;
