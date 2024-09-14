'use client';

import { useSignup } from '@/hooks/auth.hooks';
import {
  Button,
  Input,
  Link,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignupForm() {
  const router = useRouter();
  const toast = useToast();

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { mutate: signup, isPending } = useSignup({
    onSuccess: () => {
      router.push('/auth/login');
    },
    onError: () => {
      toast({
        title: 'Error',
        position: 'top',
        description: 'Invalid email or password',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    },
  });

  const handleLogin = () => {
    signup({ firstName, lastName, email, password });
  };

  return (
    <div className="h-full w-1/5 flex flex-col justify-center items-center gap-5">
      <Text
        fontSize="5xl"
        fontWeight="bold"
        color="teal"
        textAlign="center"
      >
        Signup
      </Text>
      <Input
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link className="w-full text-right !underline" fontSize="smaller" href="/auth/login">
        Have an account? Login here
      </Link>
      <Button
        className="w-28"
        colorScheme="teal"
        isDisabled={isPending}
        onClick={handleLogin}
      >
        Signup
      </Button>
    </div>
  );
}
