'use client';

import { useUpdateUserGoal } from '@/hooks/user.hooks';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { Button, Select, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Goal() {
  const router = useRouter();
  const [leave, setLeave] = useState(false);

  const [selectedGoal, setSelectedGoal] = useState<string>('');

  const { mutate: updateUserGoal, isPending } = useUpdateUserGoal({
    onSuccess: () => {
      setTimeout(() => {
        router.push('/onboarding/upload-photo');
      }, 500);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleNext = () => {
    updateUserGoal(selectedGoal);
    setLeave(true);
  };

  return (
    <div
      className={`${
        leave && 'animate-fadeOut'
      } h-full w-1/2 flex flex-col justify-center items-center gap-5 animate-fade`}
    >
      <Text
        fontSize="xl"
        fontWeight="medium"
        color="teal"
        textAlign="center"
      >
        Just some more information
      </Text>
      <Text
        fontSize="6xl"
        fontWeight="bold"
        color="teal"
        textAlign="center"
      >
        What is your main goal attending a hackathon?
      </Text>
      <Select
        placeholder="Select your goal"
        color="teal"
        onChange={(e) => setSelectedGoal(e.target.value)}
      >
        <option value="win hackathon">Win Hackathon</option>
        <option value="innovate solution">Innovate Solution</option>
        <option value="networking">Networking</option>
        <option value="Gain experience">Gain Experience</option>
      </Select>
      <Button
        colorScheme="teal"
        variant="outline"
        leftIcon={<ArrowRightIcon />}
        rightIcon={<ArrowRightIcon />}
        isDisabled={!selectedGoal || isPending}
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
}
