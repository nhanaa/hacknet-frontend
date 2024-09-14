'use client';

import { useLogin } from '@/hooks/auth.hooks';
import {
  Button,
  Input,
  Link,
  Text,
  useToast,
} from '@chakra-ui/react';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function LoginForm() {
  const router = useRouter();
  const toast = useToast();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { mutate: login, isPending } = useLogin({
    onSuccess: (data) => {
      // set in cookie
      setCookie('accessToken', data.access_token);
      if (data.needOnBoarding) {
        router.push('/onboarding/upload-resume');
      } else {
        router.push('/dashboard');
      }
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        position: 'top',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    },
  });

  const handleLogin = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    login({ username: email, password });
  };

  return (
    <form className="w-1/5" onSubmit={handleLogin}>
      <div className="h-full w-full flex flex-col justify-center items-center gap-5 animate-fade">
        <Text
          fontSize="5xl"
          fontWeight="bold"
          color="teal"
          textAlign="center"
        >
          Login
        </Text>
        <Input
          placeholder="Email"
          isRequired
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          isRequired
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link
          className="w-full text-right !underline mr-3"
          fontSize="smaller"
          href="/auth/signup"
        >
          {"Don't have an account? Signup here"}
        </Link>
        <Button
          className="w-28"
          type="submit"
          colorScheme="teal"
          isDisabled={isPending}
        >
          Login
        </Button>
      </div>
    </form>
  );
}
