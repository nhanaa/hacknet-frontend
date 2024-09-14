"use client";

import { ArrowRightIcon } from "@chakra-ui/icons";
import { Button, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ProfileCard from "../ProfileCard";
import { useGetCurrentUser } from "@/hooks/user.hooks";

export default function Profile() {
  const router = useRouter();
  const [leave, setLeave] = useState(false);

  const { data: user } = useGetCurrentUser();

  const handleGoToDashboard = () => {
    setLeave(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 700);
  };

  if (!user) {
    return <Spinner size="xl" color="teal" />;
  }

  return (
    <div
      className={`${
        leave && "animate-fadeOut"
      } h-full w-full flex flex-col justify-center items-center gap-5 animate-fade`}
    >
      <Text fontSize="5xl" fontWeight="bold" color="teal" textAlign="center">
        {"Tada! This is your HackNet card"}
      </Text>
      <ProfileCard user={user} />
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
