import LoginForm from "@/components/auth/login-form";
import Header from "@/app/(auth)/_layout/header/header";
import Footer from "@/app/(auth)/_layout/footer/footer";

export default function Page() {
  return (
    <div>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 max-w-full flex">
          <div className="pt-8 flex items-center flex-col flex-grow">
            <section className="w-80 mx-auto h-full flex flex-col justify-center">
              <div className="space-y-4 text-center">
                <h1 className="text-3xl">Sign up to Todoist</h1>
                <LoginForm />
              </div>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
