import { styled } from 'styled-components';

type ScoreStyledProps = {
    isLeader?: boolean;
    isRemaining?: boolean;
    isEqual?: boolean;
}

export const ScoreStyled = styled.p<ScoreStyledProps>`
    width: 150px;
    margin: 10px;
    text-align: center;
    font-size: 30px;
    color: ${p => (p.isRemaining || p.isEqual ? 'black' : (p.isLeader ? 'green' : 'red'))};
    box-shadow: inset 2px 1px 10px rgba(0, 0, 0, 0.8);
    background: white;
    border-radius: 10px;
`;