import React, { ReactElement, ReactNode } from 'react'

import { ButtonStyled } from './styled';

interface IButton {
    children: ReactNode;
    onClick: () => void;
}

function Button(props: IButton) {
    const { children, onClick} = props

    return (
        <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
    )
}

export default Button
