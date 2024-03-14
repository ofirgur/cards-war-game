import { GameState, GameScreen } from '../types';

export const INITIAL_GAME_STATE: GameState = {
  gameScreen: GameScreen.start,
  deckId: '',
  score1: 0,
  score2: 0,
};