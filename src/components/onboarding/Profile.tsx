"use client";

import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Card, CardBody, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ProfileCard from "../ProfileCard";
import { mockUser } from "../../mock/user.mock";
import { useState } from "react";

export default function Profile() {
  const router = useRouter();
  const [leave, setLeave] = useState(false);

  const handleGoToDashboard = () => {
    setLeave(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 500);
  };

  return (
    <div
      className={`${
        leave && "animate-fadeOut"
      } h-full w-full flex flex-col justify-center items-center gap-5 animate-fade`}
    >
      <Text fontSize="5xl" fontWeight="bold" color="teal" textAlign="center">
        {"Tada! This is your HackNet card"}
      </Text>
      <ProfileCard user={mockUser} />
      <Button
        size="lg"
        variant="outline"
        colorScheme="cyan"
        borderRadius="1.2rem"
        leftIcon={<ArrowRightIcon />}
        rightIcon={<ArrowRightIcon />}
        onClick={handleGoToDashboard}
      >
        Go to Dashboard
      </Button>
    </div>
  );
}
