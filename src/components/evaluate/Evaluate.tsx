'use client';

import {
  useGetConfirmedMatches,
  useGetTeamScores,
} from '@/hooks/roster.hooks';
import {
  Button,
  Spinner,
  Stack,
  Text,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Box,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ProfileCard from '../ProfileCard';
import { useRouter } from 'next/navigation';
import { Evaluation } from '@/types/roster.types';

export default function Evaluate() {
  const router = useRouter();
  const [firstPtr, setFirstPtr] = useState(0);
  const [secondPtr, setSecondPtr] = useState(0);
  const [thirdPtr, setThirdPtr] = useState(0);

  const [isEvaluating, setIsEvaluating] = useState(false);
  const [teamScores, setTeamScores] = useState<Evaluation | null>(
    null
  );

  const {
    data: matches,
    isLoading,
    isError,
  } = useGetConfirmedMatches();

  const { mutate: evaluate, isPending } = useGetTeamScores({
    onSuccess: (data) => {
      setTeamScores(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  useEffect(() => {
    if (!isLoading && !isError && matches && matches.length > 0) {
      setFirstPtr(0);
      setSecondPtr(Math.floor(matches.length / 2));
      setThirdPtr(matches.length - 1);
    }
  }, [matches, isLoading, isError]);

  if (isLoading) {
    return <Spinner size="xl" color="teal" />;
  }

  if (!matches || matches.length === 0) {
    return (
      <div className="flex flex-row justify-evenly items-center">
        <Stack className="items-center" gap={5}>
          <Text fontSize="5xl" fontWeight="bold" color="teal">
            No matches found
          </Text>
          <Button
            className="w-32"
            variant="outline"
            colorScheme="teal"
            size="lg"
            onClick={() => router.push('/dashboard')}
          >
            Go back
          </Button>
        </Stack>
      </div>
    );
  }

  const handleEvaluate = () => {
    setIsEvaluating(true);
    evaluate({
      user1: matches[firstPtr],
      user2: matches[secondPtr],
      user3: matches[thirdPtr],
    });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="flex flex-row justify-evenly items-center gap-5">
        <Stack className="items-center" gap={5}>
          <Button
            className="w-40"
            colorScheme={'blue'}
            size="lg"
            onClick={() =>
              setFirstPtr(
                (firstPtr - 1 + matches.length) % matches.length
              )
            }
          >
            Previous
          </Button>
          <ProfileCard user={matches[firstPtr]} />
          <Button
            className="w-40"
            colorScheme={'blue'}
            size="lg"
            onClick={() =>
              setFirstPtr((firstPtr + 1) % matches.length)
            }
          >
            Next
          </Button>
        </Stack>
        <Stack className="items-center" gap={5}>
          <Button
            className="w-40"
            colorScheme={'blue'}
            size="lg"
            onClick={() =>
              setSecondPtr(
                (secondPtr - 1 + matches.length) % matches.length
              )
            }
          >
            Previous
          </Button>
          <ProfileCard user={matches[secondPtr]} />
          <Button
            className="w-40"
            colorScheme={'blue'}
            size="lg"
            onClick={() =>
              setSecondPtr((secondPtr + 1) % matches.length)
            }
          >
            Next
          </Button>
        </Stack>
        <Stack className="items-center" gap={5}>
          <Button
            className="w-40"
            colorScheme={'blue'}
            size="lg"
            onClick={() =>
              setThirdPtr(
                (thirdPtr - 1 + matches.length) % matches.length
              )
            }
          >
            Previous
          </Button>
          <ProfileCard user={matches[thirdPtr]} />
          <Button
            className="w-40"
            colorScheme={'blue'}
            size="lg"
            onClick={() =>
              setThirdPtr((thirdPtr + 1) % matches.length)
            }
          >
            Next
          </Button>
        </Stack>
      </div>
      <Button
        className="w-56"
        colorScheme="green"
        size="lg"
        onClick={handleEvaluate}
      >
        Evaluate Team
      </Button>
      <Modal
        isOpen={isEvaluating}
        onClose={() => setIsEvaluating(false)}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{'Evaluation Grade'}</ModalHeader>
          <ModalBody>
            {teamScores && !isPending ? (
              <div className="flex flex-row justify-evenly items-center gap-5">
                {Object.entries(teamScores).map(([key, value]) => (
                  <div className="flex flex-col justify-center items-center gap-2">
                    <Text className="text-gray-800" fontSize="medium">
                      {key[0].toUpperCase() + key.slice(1)}
                    </Text>
                    <Button className="w-20" colorScheme="green">
                      {value}
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-row justify-center items-center">
                <Spinner size="xl" color="teal" />
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <Box className="w-full flex flex-row justify-end items-center gap-3">
              <Button
                colorScheme="blue"
                variant="solid"
                onClick={() => setIsEvaluating(false)}
              >
                Okay
              </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
