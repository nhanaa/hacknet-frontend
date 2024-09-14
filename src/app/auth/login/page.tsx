import LoginForm from "@/components/login/LoginForm";

export default function Page() {
  return (
    <div className="h-full w-full flex justify-center items-center bg-[url('/normal_bg.svg')] bg-no-repeat bg-cover">
      <LoginForm />
    </div>
  );
}
