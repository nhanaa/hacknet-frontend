"use client";

import { Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/logo.svg";

export default function Landing() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/auth/signup");
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-5 bg-[url('/landing_bg.png')] bg-no-repeat bg-cover">
      <Image src={logo} alt="Logo" />
      <Text fontSize="6xl" fontWeight="bold" color="teal">
        Welcome to HackNet
      </Text>
      <Button
        size="lg"
        variant="outline"
        colorScheme="teal"
        onClick={handleGetStarted}
      >
        Get Started
      </Button>
    </div>
  );
}
