"use client";

import { User } from "@/types/user.types";
import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import ProfileCard from "../ProfileCard";
import {
  mockBackendUsers,
  mockBusinessUsers,
  mockDataScienceUsers,
  mockFrontendUsers,
} from "@/mock/user.mock";
import { ArrowLeftIcon, ChatIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

export default function Swiper() {
  const router = useRouter();
  const [frontendQueue, setFrontendQueue] = useState<User[]>([]);
  const [backendQueue, setBackendQueue] = useState<User[]>([]);
  const [datascienceQueue, setDatascienceQueue] = useState<User[]>([]);
  const [businessQueue, setBusinessQueue] = useState<User[]>([]);

  const [currentQueue, setCurrentQueue] = useState<string>("Frontend");
  const [isSearching, setIsSearching] = useState<boolean>(true);

  const [hasConfirmedMatch, setHasConfirmedMatch] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const getNextUser = () => {
    {
      switch (currentQueue) {
        case "Frontend":
          if (frontendQueue.length === 0) {
            return undefined;
          }
          return frontendQueue[frontendQueue.length - 1];
        case "Backend":
          if (backendQueue.length === 0) {
            return undefined;
          }
          return backendQueue[backendQueue.length - 1];
        case "Data Science":
          if (datascienceQueue.length === 0) {
            return undefined;
          }
          return datascienceQueue[datascienceQueue.length - 1];
        case "Business":
          if (businessQueue.length === 0) {
            return undefined;
          }
          return businessQueue[businessQueue.length - 1];
        default:
          return undefined;
      }
    }
  };

  const nextUser = useMemo(() => {
    return getNextUser();
  }, [
    currentQueue,
    frontendQueue,
    backendQueue,
    datascienceQueue,
    businessQueue,
  ]);

  const cardColor = useMemo(() => {
    return currentQueue === "Frontend"
      ? "pink"
      : currentQueue === "Backend"
      ? "yellow"
      : currentQueue === "Data Science"
      ? "blue"
      : "cyan";
  }, [currentQueue]);

  useEffect(() => {
    // TODO: Match and fetch users from the backend
    setTimeout(() => {
      setFrontendQueue(mockFrontendUsers);
      setBackendQueue(mockBackendUsers);
      setDatascienceQueue(mockDataScienceUsers);
      setBusinessQueue(mockBusinessUsers);

      setIsSearching(false);
    }, 5000);
  }, []);

  const handleYes = () => {
    // TODO: Match and fetch users from the backend

    // TODO: check if the user has confirmed the match and show the modal
    setHasConfirmedMatch(true);

    switch (currentQueue) {
      case "Frontend":
        setFrontendQueue(frontendQueue.slice(0, -1));
        break;
      case "Backend":
        setBackendQueue(backendQueue.slice(0, -1));
        break;
      case "Data Science":
        setDatascienceQueue(datascienceQueue.slice(0, -1));
        break;
      case "Business":
        setBusinessQueue(businessQueue.slice(0, -1));
        break;
      default:
        break;
    }
  };

  const handleNo = () => {
    // TODO: Match and fetch users from the backend
    switch (currentQueue) {
      case "Frontend":
        setFrontendQueue(frontendQueue.slice(0, -1));
        break;
      case "Backend":
        setBackendQueue(backendQueue.slice(0, -1));
        break;
      case "Data Science":
        setDatascienceQueue(datascienceQueue.slice(0, -1));
        break;
      case "Business":
        setBusinessQueue(businessQueue.slice(0, -1));
        break;
      default:
        break;
    }
  };

  const handleSendMessage = () => {
    console.log(message);
    setHasConfirmedMatch(false);
    setMessage("");
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center animate-fade">
      {!isSearching && (
        <Stack
          className="flex flex-col justify-center items-center animate-fade"
          gap={3}
        >
          <Text
            fontSize="5xl"
            fontWeight="medium"
            color="teal"
            textAlign="center"
          >
            Teammate Swiper
          </Text>
          <Box className="flex flex-row gap-2">
            <Button
              colorScheme="pink"
              variant={`${currentQueue === "Frontend" ? "solid" : "outline"}`}
              onClick={() => setCurrentQueue("Frontend")}
            >
              Front-end
            </Button>
            <Button
              colorScheme="yellow"
              variant={`${currentQueue === "Backend" ? "solid" : "outline"}`}
              onClick={() => setCurrentQueue("Backend")}
            >
              Back-end
            </Button>
            <Button
              colorScheme="blue"
              variant={`${
                currentQueue === "Data Science" ? "solid" : "outline"
              }`}
              onClick={() => setCurrentQueue("Data Science")}
            >
              Data Science
            </Button>
            <Button
              colorScheme="cyan"
              variant={`${currentQueue === "Business" ? "solid" : "outline"}`}
              onClick={() => setCurrentQueue("Business")}
            >
              Business
            </Button>
          </Box>
          <Box className="flex flex-row justify-center items-center gap-3">
            <Button
              className="w-20"
              colorScheme="red"
              variant="solid"
              onClick={handleNo}
            >
              No
            </Button>
            <ProfileCard user={nextUser} color={cardColor} />
            <Button
              className="w-20"
              colorScheme="green"
              variant="solid"
              onClick={handleYes}
            >
              Yes
            </Button>
          </Box>
          <Button
            size="lg"
            variant="outline"
            colorScheme="cyan"
            borderRadius="1.2rem"
            leftIcon={<ArrowLeftIcon />}
            rightIcon={<ArrowLeftIcon />}
            onClick={() => router.push("/dashboard")}
          >
            Back to Dashboard
          </Button>
        </Stack>
      )}
      {isSearching && (
        <div className="flex flex-col justify-center items-center gap-5">
          <Spinner size="xl" color="teal" />
          <Text
            fontSize="5xl"
            fontWeight="bold"
            color="teal"
            textAlign="center"
          >
            Searching for possible teammates
          </Text>
        </div>
      )}

      <Modal
        isOpen={hasConfirmedMatch}
        onClose={() => setHasConfirmedMatch(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> You've got a match!</ModalHeader>
          <ModalBody>Let them know you're interested!</ModalBody>
          <ModalFooter>
            <Box className="w-full flex flex-row justify-between items-center gap-3">
              <Input
                placeholder="Hi, I've got this great idea..."
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setMessage(e.target.value)
                }
              />
              <Button
                colorScheme="blue"
                variant="solid"
                leftIcon={<ChatIcon />}
                onClick={handleSendMessage}
              >
                Send
              </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
