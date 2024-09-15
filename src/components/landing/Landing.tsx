"use client";

import { Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { useState } from "react";
import { getCookie } from "cookies-next";

export default function Landing() {
  const router = useRouter();
  const [leave, setLeave] = useState(false);

  const handleGetStarted = () => {
    setLeave(true);
    setTimeout(() => {
      if (getCookie("accessToken")) {
        console.log("Cookie Present");
        router.push("/dashboard");
      } else {
        console.log("No Cookie");
        router.push("/auth/signup");
      }
    }, 600);
  };

  return (
    <div
      className={`${
        leave && "animate-fadeOut"
      } h-full w-full flex flex-col justify-center items-center gap-5 bg-[url('/landing_bg.png')] bg-no-repeat bg-cover animate-fade`}
    >
      <div
        className={`${
          leave && "animate-fadeOut"
        } h-full w-full flex flex-col justify-center items-center gap-5 animate-fade`}
      >
        <Image src={logo} alt="Logo" />
        <Text fontSize="6xl" fontWeight="bold" color="teal" textAlign="center">
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
    </div>
  );
}
