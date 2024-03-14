import { useQuery } from 'react-query';
import axios from 'axios';

const drawCardsFromDeck = async (deckId: string) => {
  const response = await axios({
    method: 'get',
    url: `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`,
    responseType: 'stream',
  });

  return JSON.parse(response.data);
};

export const useDrawCardsFromDeck = (deckId: string) => {
  const { isLoading, error, data, refetch } = useQuery('deck', () => drawCardsFromDeck(deckId), {
    refetchOnMount: false,
  });

  return { isLoading, error, data, refetch };
};