import { PossibleMatchesResponse } from '@/types/matches.types';
import { useQuery } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';

export const useGetPossibleMatches = () =>
  useQuery({
    queryKey: ['possibleMatches'],
    queryFn: async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + '/matches',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${getCookie('accessToken')}`,
          },
        }
      );
      return response.json() as Promise<PossibleMatchesResponse>;
    },
  });
