import { styled } from 'styled-components';

export const ButtonStyled = styled.button` 
  --color-1: #186cb8;
  --color-2: #2a9a9f;
  --color-3: #f1b211;
  --color-4: #e83611;
  --color-5: #f9002f;

  height: 70px;
  width: 400px;
  cursor: pointer;
  border-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0E1013;
  box-shadow: 2px 1px 8px #515151;
  
  border-radius: 10px; 
  padding: 0 24px;
  text-align: center;
  font-weight: 600;
  font-size: 30px;
  text-transform: uppercase;
  background: linear-gradient(219deg, 
    var(--color-1) 19%, 
    transparent 19%,transparent 20%, 
    var(--color-2) 20%, var(--color-2)  39%,
    transparent 39%,transparent 40%, 
    var(--color-3) 40%,var(--color-3) 59% ,
    transparent 59%,transparent 60%, 
    var(--color-4) 60%, var(--color-4) 79%,
    transparent 79%, transparent 80%, 
    var(--color-5) 80%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`