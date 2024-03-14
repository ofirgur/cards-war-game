import { useQuery } from 'react-query';
import axios from 'axios';

const returnCardsToDeck = async (deckId: string, cards: string) => {
  const response = await axios({
    method: 'get',
    url: `https://deckofcardsapi.com/api/deck/${deckId}/return/?cards=${cards}`,
    responseType: 'stream',
  });

  return JSON.parse(response.data);
};

export const useReturnCardsToDeck = (deckId: string, cards: string) => {
  const { isLoading, error, data, refetch } = useQuery('deck', () => returnCardsToDeck(deckId, cards), {
    refetchOnMount: false,
  });

  return { isLoading, error, data, refetch };
};