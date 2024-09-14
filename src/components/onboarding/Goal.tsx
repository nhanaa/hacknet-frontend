'use client';

import { ArrowRightIcon } from '@chakra-ui/icons';
import { Button, Select, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function Goal() {
  const router = useRouter();

  const handleNext = () => {
    // TODO: Update user's goal in the database
    router.push('/onboarding/upload-photo');
  };

  return (
    <div className="h-full w-1/2 flex flex-col justify-center items-center gap-5">
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
      <Select placeholder="Select your goal" color="teal">
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
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
}
