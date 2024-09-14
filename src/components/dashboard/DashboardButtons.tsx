'use client';

import { Button, Stack } from '@chakra-ui/react';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function DashboardButtons() {
  const router = useRouter();

  return (
    <div className="h-full w-full flex justify-center items-center pr-32 animate-fade">
      <Stack
        className="flex flex-col justify-center items-center"
        gap={10}
      >
        <Button
          className="w-64"
          colorScheme="teal"
          onClick={() => router.push('/swiper')}
        >
          Teammate Swiper
        </Button>
        <Button
          className="w-64"
          colorScheme="teal"
        >
          Roster Evaluator
        </Button>
        <Button
          className="w-64"
          colorScheme="teal"
          variant="outline"
          onClick={() => {
            deleteCookie('accessToken');
            router.push('/auth/login');
          }}
        >
          Logout
        </Button>
      </Stack>
    </div>
  );
}
