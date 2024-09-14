import WelcomeUser from "@/components/dashboard/WelcomeUser";

export default function Page() {
  return (
    <div className="h-full w-full flex justify-center items-center bg-[url('/normal_bg.svg')] bg-no-repeat bg-cover">
      <div className="animate-fade">
        <Stack className="flex flex-col justify-center items-center" gap={5}>
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
      <div className="animate-fade">
        <DashboardButtons />
      </div>
      <WelcomeUser />
    </div>
  );
}
