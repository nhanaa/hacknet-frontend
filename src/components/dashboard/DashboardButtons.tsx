"use client";

import { Button, Circle, Stack } from "@chakra-ui/react";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DashboardButtons() {
  const router = useRouter();
  const [leave] = useState(false);
  const teamSwiperClick = () => {
    // setLeave(true);
    setTimeout(() => {
      router.push("/swiper");
    }, 700);
  };
  return (
    <div
      className={`${
        leave && "animate-fadeOut"
      } h-full w-full flex justify-center items-center pr-32 animate-fade`}
    >
      <Stack className="flex flex-col justify-center items-center" gap={10}>
        <Button className="w-64" colorScheme="teal" onClick={teamSwiperClick}>
          Find Teammates
        </Button>
        {/* <div className="relative">
          <Circle
            className="hover:animate-bounce hover:cursor-pointer"
            size="2rem"
            bg="red"
            color="white"
            position="absolute"
            top={-2}
            right={-2}
            zIndex={5}
            shadow="medium"
          >
            <p>1</p>
          </Circle>
          <Button className="w-64" colorScheme="teal">
            Your Inbox
          </Button>
        </div> */}
        <Button
          className="w-64"
          colorScheme="teal"
          onClick={() => router.push("evaluate")}
        >
          Team Evaluator
        </Button>
        <Button
          className="w-64"
          colorScheme="teal"
          variant="outline"
          onClick={() => {
            deleteCookie("accessToken");
            router.push("/auth/login");
          }}
        >
          Logout
        </Button>
      </Stack>
    </div>
  );
}
