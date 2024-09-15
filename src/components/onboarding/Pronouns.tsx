"use client";

import { useUpdateUserPronouns } from "@/hooks/user.hooks";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Button, Input, Select, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Pronouns() {
  const router = useRouter();
  const [leave, setLeave] = useState(false);

  const [pronouns, setPronouns] = useState<string>("");
  const handleChange = (event) => setPronouns(event.target.value);

  const { mutate: updateUserPronouns, isPending } = useUpdateUserPronouns({
    onSuccess: () => {
      setTimeout(() => {
        router.push("/onboarding/upload-photo");
      }, 500);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleNext = () => {
    updateUserPronouns(pronouns);
    setLeave(true);
  };

  return (
    <div
      className={`${
        leave && "animate-fadeOut"
      } h-full w-1/2 flex flex-col justify-center items-center gap-5 animate-fade`}
    >
      <Text fontSize="6xl" fontWeight="bold" color="teal" textAlign="center">
        What are your preferred pronouns?
      </Text>
      <Input
        value={pronouns}
        onChange={handleChange}
        placeholder="Enter your pronouns"
      />
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
