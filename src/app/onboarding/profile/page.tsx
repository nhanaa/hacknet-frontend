import Confetti from "@/components/confetti/Confetti";
import Profile from "@/components/onboarding/Profile";

export default function Page() {
  return (
    <>
      <Confetti />
      <div className="h-full w-full flex justify-center items-center bg-[url('/normal_bg.svg')] bg-no-repeat bg-cover">
        <Profile />
      </div>
    </>
  );
}
