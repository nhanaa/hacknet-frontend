import SignupForm from "@/components/signup/SignupForm";

export default function Page() {
  return (
    <div className="h-full w-full flex justify-center items-center bg-[url('/normal_bg.svg')] bg-no-repeat bg-cover animate-fade">
      <SignupForm />
    </div>
  );
}
