import {
  Bell,
  DesktopDevice,
  Plus,
  RefreshClockwise,
  StarFill,
  Trash,
  User,
} from 'vercel-geist-icons';
import Banner from '@/components/ui/banner';

export default async function FeaturesSection() {
  return (
    <article>
      <div className="border border-y-0 grid grid-cols-3 md:grid-cols-2 xs:grid-cols-1 xs:text-center">
        <section className="p-8 border-r md:border-r-0">
          <div className="space-y-4">
            <h2>Projects</h2>
            <ul className="gap-2 flex flex-col xs:items-center">
              <li className="flex items-center gap-2">
                <Plus />
                Create
              </li>
              <li className="flex items-center gap-2">
                <Trash />
                Delete
              </li>
              <li className="flex items-center gap-2">
                <RefreshClockwise />
                Update
              </li>
            </ul>
          </div>
        </section>
        <section className="p-8 md:border-l md:border-b xs:border-0 xs:border-t">
          <div className="space-y-4">
            <h2>Tasks</h2>
            <ul className="gap-2 flex flex-col xs:items-center">
              <li className="flex items-center gap-2">
                <Plus />
                Create
              </li>
              <li className="flex items-center gap-2">
                <Trash />
                Delete
              </li>
              <li className="flex items-center gap-2">
                <RefreshClockwise />
                Update
              </li>
            </ul>
          </div>
        </section>
        <section className="p-8 border-l md:border-l-0 md:border-t md:border-r xs:border-r-0">
          <div className="space-y-4">
            <h2>Account</h2>
            <ul className="gap-2 flex flex-col xs:items-center">
              <li className="flex items-center gap-2">
                <RefreshClockwise />
                Update
              </li>
              <li className="flex items-center gap-2">
                <User />
                Upload or remove avatar
              </li>
              <li className="flex items-center gap-2">
                <Bell />
                Manage notifications
              </li>
              <li className="flex items-center gap-2">
                <DesktopDevice />
                Manage sessions
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Banner variant="blue" fill className="col-span-3" icon={<StarFill />}>
        More features are on the way
      </Banner>
    </article>
  );
}
