import { useQuery } from 'react-query';
import axios from 'axios';

const reshuffleDeck = async (deckId: string) => {
  const response = await axios({
    method: 'get',
    url: `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`,
    responseType: 'stream',
  });

  return JSON.parse(response.data);
};

export const useReshuffleDeck = (deckId: string) => {
  const { isLoading, error, data, refetch } = useQuery('deck', () => reshuffleDeck(deckId), {
    refetchOnMount: false,
  });

  return { isLoading, error, data, refetch };
};