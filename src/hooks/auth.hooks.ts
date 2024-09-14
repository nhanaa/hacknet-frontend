import { LoginResponse, SignupResponse } from "@/types/auth.types";
import { UserAuth, UserSignup } from "@/types/user.types";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export const useLogin = (options: UseMutationOptions<LoginResponse, Error, UserAuth>) => useMutation({
  mutationKey: ['login'],
  mutationFn: async (user: UserAuth) => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        username: user.username,
        password: user.password,
      }),
    });
    return response.json();
  },
  ...options,
})

export const useSignup = (options: UseMutationOptions<SignupResponse, Error, UserSignup>) => useMutation({
  mutationKey: ['signup'],
  mutationFn: async (user: UserSignup) => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return response.json();
  },
  ...options,
})
