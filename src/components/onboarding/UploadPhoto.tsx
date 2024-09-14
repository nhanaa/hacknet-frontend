"use client";

import { Button, Input, Spinner, Text, useToast } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { TriangleUpIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { useUploadUserPhoto } from '@/hooks/user.hooks';

export default function UploadPhoto() {
  const toast = useToast();
  const router = useRouter();

  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { mutate: uploadUserPhoto, isPending } = useUploadUserPhoto({
    onSuccess: () => {
      router.push('/onboarding/profile');
    },
    onError: (error) => {
      console.error(error);
    },
  });

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
      uploadUserPhoto({
        imageLink: '/photo1.png',
      });
    }
  }, [file, isUploading, toast, router]);

  return (
    <div className="h-full w-1/2 flex flex-col justify-center items-center gap-5 animate-fade">
      {!isUploading && (
        <div className="h-full w-full flex flex-col justify-center items-center gap-5">
          <Text
            fontSize="6xl"
            fontWeight="bold"
            color="teal"
            textAlign="center"
          >
            {"Finally, let's put a face to your amazing profile"}
          </Text>
          <Text fontSize="xl" color="teal" textAlign="center">
            {"Upload a photo of yourself to get started."}
          </Text>
          <>
            <Input
              type="file"
              ref={fileInputRef}
              onChange={handleUpload}
              style={{ display: "none" }}
              accept=".jpg,.jpeg,.png"
            />
            <Button
              colorScheme="teal"
              variant="outline"
              leftIcon={<TriangleUpIcon />}
              rightIcon={<TriangleUpIcon />}
              onClick={() => fileInputRef.current?.click()}
            >
              Upload Photo
            </Button>
          </>
        </div>
      )}
      {isUploading && (
        <div className="flex flex-col justify-center items-center gap-5">
          <Spinner size="xl" color="teal" />
          <Text
            className="animate-fadeLoop"
            fontSize="5xl"
            fontWeight="bold"
            color="teal"
            textAlign="center"
          >
            Uploading photo
          </Text>
        </div>
      )}
    </div>
  );
}
