import React, { ReactNode, useState } from 'react'

import { ButtonStyled } from './styled';

interface IButton {
    children: ReactNode;
    onClick: () => void;
    disabled?: boolean;
}

function Button(props: IButton) {
    const { children, onClick, disabled} = props
    const [isDisabled, setIsDisabled] = useState(disabled);
    const handleClick = () => {
        onClick();
        setIsDisabled(true);
        setTimeout(() => {
            setIsDisabled(false);
        }, 500);
    };

    return (
        <ButtonStyled onClick={handleClick} disabled={isDisabled}>{children}</ButtonStyled>
    )
}

export default Button
