import { updateProfile } from '@/actions/profile.action';
import { Input } from '@/components/ui/input';
import SubmitButton from '@/components/submit-button';

export default function UpdateNameSection({ user }: { user: User }) {
  return (
    <section className="rounded-md bg-background-100 border overflow-hidden">
      <form
        action={async (formData) => {
          'use server';
          const name = formData.get('name')?.toString() || '';
          await updateProfile({
            name,
          });

          // if (res.status === 'fail') {
          //   toast.error(res.message[0].message);
          // }
        }}
      >
        <div className="p-6 border-b">
          <h4 className="text-xl font-semibold capitalize">Your name</h4>
          <p className="my-3">
            This name is your name visible to the others within the app. You can
            change it whenever you want.
          </p>
          <Input
            name="name"
            defaultValue={user.name}
            maxLength={32}
            className="*:bg-background-200 *:rounded-md w-[300px]"
          />
        </div>
        <footer className="flex items-center justify-between py-3 px-6">
          <div className="text-gray-900">
            Please use 32 characters at maximum.
          </div>
          <SubmitButton size="sm">Save</SubmitButton>
        </footer>
      </form>
    </section>
  );
}
