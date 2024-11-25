import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { LuMail } from "react-icons/lu";

export default function Page() {
  return (
    <section className="w-80 mx-auto h-full">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl">Log in to Todoist</h1>
        <form className="space-y-3">
          <Input size="large" placeholder="Email" />
          <Button prefix={<LuMail />} size="lg" className="w-full rounded-lg">
            Continue with Email
          </Button>
        </form>
      </div>
    </section>
  );
}
