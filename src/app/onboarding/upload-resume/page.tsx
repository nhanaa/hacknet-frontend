import UploadResume from "@/components/onboarding/UploadResume";

export default function Page() {
  return (
    <div className="h-full w-full flex justify-center items-center bg-[url('/normal_bg.svg')] bg-no-repeat bg-cover animate-fade">
      <UploadResume />
    </div>
  );
}
