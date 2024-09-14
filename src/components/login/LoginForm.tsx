"use client";

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
import { useState } from 'react';

export default function LoginForm() {
  const router = useRouter();
  const toast = useToast();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
    onError: () => {
      toast({
        title: "Error",
        position: "top",
        description: "Invalid email or password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  const handleLogin = () => {
    login({ username: email, password });
  };

  return (
    <div className="h-full w-1/5 flex flex-col justify-center items-center gap-5 animate-fade">
      <Text fontSize="5xl" fontWeight="bold" color="teal" textAlign="center">
        Login
      </Text>
      <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <Input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link
        className="w-full text-right !underline"
        fontSize="smaller"
        href="/auth/signup"
      >
        {"Don\'t have an account? Signup here"}
      </Link>
      <Button
        className="w-28"
        colorScheme="teal"
        isDisabled={isPending}
        onClick={handleLogin}
      >
        Login
      </Button>
    </div>
  );
}
