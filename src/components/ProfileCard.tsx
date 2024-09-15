import { User } from "@/types/user.types";
import { Box, Card, CardBody, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { motion, useDragControls } from "framer-motion";

interface ProfileCardProps {
  user: User | undefined;
  color?: string;
  role?: string;
}

export default function ProfileCard({ user, color, role }: ProfileCardProps) {
  const controls = useDragControls();
  if (!user) {
    return (
      <div className="w-80">
        <Card className={`p-2 bg-white`} borderRadius="1.2rem" height={"510px"}>
          <CardBody className="flex flex-col justify-center items-center  gap-5">
            <Stack
              className="flex flex-col justify-center items-center"
              gap={3}
            >
              <Text
                fontSize="4xl"
                fontWeight="medium"
                color="teal"
                textAlign="center"
              >
                {`No more ${role} teammates to swipe!`}
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-80">
      <Card
        className={`p-2 bg-white ${color ? "!border-2" : ""}`}
        borderColor={color}
        borderRadius="1.2rem"
      >
        <CardBody className="gap-5">
          <Stack className="flex flex-col justify-center items-center" gap={3}>
            <div className="h-32 flex flex-row justify-center items-center">
              <Image
                src={user.imageLink}
                width={200}
                height={200}
                className="rounded-md"
                alt="Profile photo"
              />
            </div>
            <Text
              className="w-full rounded-xl flex justify-center items-center"
              fontSize="2xl"
              fontWeight="bold"
              color="white"
              textAlign="center"
              background="teal"
            >
              {user.name}
            </Text>
            <Text
              fontSize="lg"
              fontWeight="600"
              color="teal"
              textAlign="center"
            >
              {user.experienceLevel.toUpperCase()}
            </Text>
            <Box className="flex flex-row justify-center items-center gap-2">
              <Text fontSize="lg" color="teal" textAlign="center">
                Role:
              </Text>
              <Text
                className="p-1 rounded-sm"
                fontSize="small"
                fontWeight="600"
                color="white"
                backgroundColor="red.300"
                textAlign="center"
              >
                {user.role1.toUpperCase()}
              </Text>
              <Text
                className="p-1 rounded-sm"
                fontSize="small"
                fontWeight="600"
                color="white"
                backgroundColor="orange.200"
                textAlign="center"
              >
                {user.role2.toUpperCase()}
              </Text>
            </Box>
            <Text
              fontSize="lg"
              fontWeight="600"
              color="teal"
              textAlign="center"
            >
              Languages & Frameworks
            </Text>
            <Box className="flex flex-row justify-center items-center gap-2">
              {user.primaryLanguages.map((language, index) => (
                <Text
                  className="w-20 p-1 rounded-sm whitespace-nowrap"
                  key={index}
                  fontSize="small"
                  fontWeight="600"
                  color="white"
                  backgroundColor="red.300"
                  textAlign="center"
                >
                  {language.toUpperCase()}
                </Text>
              ))}
            </Box>
            <Box className="flex flex-row justify-center items-center gap-2">
              {user.secondaryLanguages.map((language, index) => (
                <Text
                  className="w-20 p-1 rounded-sm whitespace-nowrap"
                  key={index}
                  fontSize="small"
                  fontWeight="600"
                  color="white"
                  backgroundColor="orange.200"
                  textAlign="center"
                >
                  {language.toUpperCase()}
                </Text>
              ))}
            </Box>
            <Box className="flex flex-row justify-center items-center gap-2">
              <Text
                fontSize="lg"
                fontWeight="600"
                color="teal"
                textAlign="center"
              >
                Main Goal
              </Text>
              <Text
                className="rounded-md flex justify-center items-center p-1"
                fontSize="medium"
                fontWeight="bold"
                color="white"
                textAlign="center"
                background="teal"
              >
                {user.goal}
              </Text>
            </Box>
            <Text
              fontSize="lg"
              fontWeight="600"
              color="teal"
              textAlign="center"
            >
              Pronouns
            </Text>
            <Text
              className="rounded-md flex justify-center items-center p-1"
              fontSize="medium"
              fontWeight="bold"
              color="white"
              textAlign="center"
              background="teal"
            >
              {user.pronouns}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}
