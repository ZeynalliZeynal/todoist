import Button from "@/components/ui/button";

export default function NavRight() {
  return (
    <div className="hidden items-center gap-3 xl:flex">
      <Button primary size="sm" href="/auth/log-in">
        Log In
      </Button>
      <Button primary size="sm" href="/contact">
        Contact
      </Button>
      <Button size="sm" href="/auth/sign-up">
        Sign Up
      </Button>
    </div>
  );
}
