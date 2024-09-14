import UploadPhoto from "@/components/onboarding/UploadPhoto";

export default function Page() {
  return (
    <div className="h-full w-full flex justify-center items-center bg-[url('/normal_bg.svg')] bg-no-repeat bg-cover">
      <UploadPhoto />
    </div>
  );
}
