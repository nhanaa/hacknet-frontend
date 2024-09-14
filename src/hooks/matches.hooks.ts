import {
  MatchRequest,
  MatchResponse,
  PossibleMatchesResponse,
} from '@/types/matches.types';
import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from '@tanstack/react-query';
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
    gcTime: 0,
  });

export const useCreateMatch = () => useMutation({
  mutationKey: ['createMatch'],
  mutationFn: async (matchRequest: MatchRequest) => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + '/matches',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getCookie('accessToken')}`,
        },
        body: JSON.stringify(matchRequest),
      }
    );
    return response.json() as Promise<MatchResponse>;
  },
});
