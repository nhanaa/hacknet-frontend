'use client';

import React, { useEffect } from 'react';
import { Spinner, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import ProfileCard from '../ProfileCard';
import DashboardButtons from './DashboardButtons';
import { useGetCurrentUser } from '@/hooks/user.hooks';

export default function WelcomeUser() {
  const router = useRouter();
  const { data: user, isError, isLoading, error } = useGetCurrentUser();

  useEffect(() => {
    if (isError && error?.message === 'User has not completed onboarding') {
      router.push('/onboarding/upload-resume');
    }
  }, [isError, error, router]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="xl" color="teal" />
      </div>
    );
  }

  if (!user) {
    return null; // or return a fallback UI
  }

  return (
    <div className="flex flex-row animate-fade">
      <div className="flex-1">
        <Stack
          className="flex flex-col justify-center items-center"
          gap={5}
        >
          <Text
            fontSize="5xl"
            fontWeight="medium"
            color="teal"
            textAlign="center"
          >
            Welcome, {user.name}!
          </Text>
          <ProfileCard user={user} />
        </Stack>
      </div>
      <div className="flex-1">
        <DashboardButtons />
      </div>
    </div>
  );
}
