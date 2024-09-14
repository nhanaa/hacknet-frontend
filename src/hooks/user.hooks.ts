import { User } from '@/types/user.types';
import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from '@tanstack/react-query';
import { getCookie } from 'cookies-next';

export const useGetCurrentUser = () =>
  useQuery({
    queryKey: ['getCurrentUser'],
    queryFn: async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + '/userinfo',
        {
          headers: {
            Authorization: `Bearer ${getCookie('accessToken')}`,
          },
        }
      );

      if (response.status === 404) {
        throw new Error('User has not completed onboarding');
      }

      return response.json() as Promise<User>;
    },
  });

export const useUploadUserResume = (
  options: UseMutationOptions<User, Error, File>
) =>
  useMutation({
    mutationKey: ['uploadUserResume'],
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append('file', file);
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + '/userinfo/uploadfile',
        {
          method: 'POST',
          body: formData,
          headers: {
            Authorization: `Bearer ${getCookie('accessToken')}`,
          },
        }
      );
      return response.json();
    },
    ...options,
  });

export const useUploadUserPhoto = (
  options: UseMutationOptions<
    { message: string },
    Error,
    {
      imageLink: string;
    }
  >
) =>
  useMutation({
    mutationKey: ['uploadUserPhoto'],
    mutationFn: async ({ imageLink }: { imageLink: string }) => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + '/userinfo/imagelink',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getCookie('accessToken')}`,
          },
          body: JSON.stringify({ imageLink }),
        }
      );
      return response.json();
    },
    ...options,
  });

export const useUpdateUserGoal = (
  options: UseMutationOptions<{ message: string }, Error, string>
) =>
  useMutation({
    mutationKey: ['updateUserGoal'],
    mutationFn: async (goal: string) => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + '/userinfo/goal',
        {
          method: 'PUT',
          body: JSON.stringify({ goal }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getCookie('accessToken')}`,
          },
        }
      );
      return response.json();
    },
    ...options,
  });
