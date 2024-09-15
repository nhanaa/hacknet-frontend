import { Evaluation, EvaluationRequest } from '@/types/roster.types';
import { User } from '@/types/user.types';
import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from '@tanstack/react-query';
import { getCookie } from 'cookies-next';

export const useGetConfirmedMatches = () =>
  useQuery({
    queryKey: ['confirmedMatches'],
    queryFn: async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + '/roster',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getCookie('accessToken')}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch confirmed matches');
      }

      return response.json() as Promise<User[]>;
    },
  });

export const useGetTeamScores = (
  options: UseMutationOptions<Evaluation, Error, EvaluationRequest>
) => useMutation({
  mutationKey: ['teamScores'],
  mutationFn: async (evaluationRequest: EvaluationRequest) => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + '/roster',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getCookie('accessToken')}`,
        },
        body: JSON.stringify(evaluationRequest),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to evaluate team');
    }

    return response.json();
  },
  ...options,
});
