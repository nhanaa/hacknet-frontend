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
import { FormEvent, useState } from 'react';

export default function SignupForm() {
  const router = useRouter();
  const toast = useToast();

  const [leave, setLeave] = useState(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { mutate: signup, isPending } = useSignup({
    onSuccess: () => {
      router.push('/auth/login');
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
  const already = () => {
    setLeave(true);
    setTimeout(() => {
      router.push('/auth/login');
    }, 700);
  };
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup({ firstName, lastName, email, password });
  };

  return (
    <form className="w-1/5" onSubmit={handleLogin}>
      <div
        className={`${
          leave && 'animate-fadeOut'
        } h-full w-full flex flex-col justify-center items-center gap-5 animate-fade`}
      >
        <Text
          fontSize="5xl"
          fontWeight="bold"
          color="teal"
          textAlign="center"
        >
          Sign up
        </Text>
        <Input
          placeholder="First Name"
          isRequired
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          placeholder="Last Name"
          isRequired
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          placeholder="Email"
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
          onClick={already}
          href="/auth/login"
        >
          Have an account? Login here
        </Link>
        <Button
          className="w-28"
          type="submit"
          colorScheme="teal"
          isDisabled={isPending}
        >
          Sign up
        </Button>
      </div>
    </form>
  );
}
