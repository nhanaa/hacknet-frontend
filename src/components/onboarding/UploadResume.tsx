"use client";

import { Button, Input, Spinner, Text, useToast } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { TriangleUpIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

export default function UploadResume() {
  const toast = useToast();
  const router = useRouter();

  const [file, setFile] = useState<File | null>(null);
  const [loadingText, setLoadingText] = useState("Analyzing Resume");
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
      setIsUploading(true);
    } else {
      toast({
        title: "Error",
        position: "top",
        description: "Something went wrong. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (file && isUploading) {
      // TODO: Upload file to server, if success move to upload photo
      setTimeout(() => {
        setLoadingText("Extracting Information");
      }, 1000);
      setTimeout(() => {
        setLoadingText("Analyzing Skills");
      }, 3000);
      setTimeout(() => {
        setLoadingText("Creating Profile");
      }, 5000);
      setTimeout(() => {
        router.push("/onboarding/goal");
      }, 7000);
    }
  }, [file, isUploading, toast, router]);

  return (
    <div className="h-full w-1/2 flex flex-col justify-center items-center gap-5">
      {!isUploading && (
        <div className="h-full w-full flex flex-col justify-center items-center gap-5">
          <Text
            fontSize="6xl"
            fontWeight="bold"
            color="teal"
            textAlign="center"
          >
            {"Let's get to know you"}
          </Text>
          <>
            <Input
              type="file"
              ref={fileInputRef}
              onChange={handleUpload}
              style={{ display: "none" }}
              accept=".pdf"
            />
            <Button
              colorScheme="teal"
              variant="outline"
              leftIcon={<TriangleUpIcon />}
              rightIcon={<TriangleUpIcon />}
              onClick={() => fileInputRef.current?.click()}
            >
              Upload Resume
            </Button>
          </>
        </div>
      )}
      {isUploading && (
        <div className="flex flex-col justify-center items-center gap-5">
          <Spinner speed="1s" size="xl" thickness="4px" color="teal" />
          <Text
            fontSize="5xl"
            fontWeight="bold"
            color="teal"
            textAlign="center"
          >
            {loadingText}
          </Text>
        </div>
      )}
    </div>
  );
}
