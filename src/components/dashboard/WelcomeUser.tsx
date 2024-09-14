'use client';

import { Spinner, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import ProfileCard from '../ProfileCard';
import { useGetCurrentUser } from '@/hooks/user.hooks';
import DashboardButtons from './DashboardButtons';

export default function WelcomeUser() {
  const { data: user } = useGetCurrentUser();

  if (!user) {
    return <Spinner size="xl" color="teal" />;
  }

  return (
    <div className="flex flex-row">
      <div className="animate-fade">
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
      <div>
        <DashboardButtons />
      </div>
    </div>
  );
}
