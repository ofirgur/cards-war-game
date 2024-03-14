import { useQuery } from 'react-query';
import axios from 'axios';

const getNewDeck = async () => {
  const response = await axios({
    method: 'get',
    url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
    responseType: 'stream',
  });

  return JSON.parse(response.data);
};

export const useBrandNewDeck = () => {
    const { isLoading, error, data, refetch } = useQuery('deck', getNewDeck, {
      refetchOnMount: false,
    });

  return { isLoading, error, data, refetch };
};