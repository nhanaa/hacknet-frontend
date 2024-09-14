import DashboardButtons from '@/components/dashboard/DashboardButtons';
import ProfileCard from '@/components/ProfileCard';
import { mockUser } from '@/mock/user.mock';
import { Stack, Text } from '@chakra-ui/react';

export default function Page() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div>
        <Stack
          className="flex flex-col justify-center items-center"
          gap={5}
        >
          <Text
            fontSize="5xl"
            fontWeight="medium"
            color="teal"
            textAlign="center"
          >
            Welcome, {mockUser.name}!
          </Text>
          <ProfileCard user={mockUser} />
        </Stack>
      </div>
      <div>
        <DashboardButtons />
      </div>
    </div>
  );
}
