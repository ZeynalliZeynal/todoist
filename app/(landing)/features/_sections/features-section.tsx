import {
  Bell,
  DesktopDevice,
  Plus,
  RefreshClockwise,
  StarFill,
  Trash,
  User,
} from 'vercel-geist-icons';
import { Grid } from '@/components/ui/grid';
import Banner from '@/components/ui/banner';

export default async function FeaturesSection() {
  return (
    <article>
      <Grid columns={3} className="border-t-0">
        <section className="p-8">
          <div className="space-y-4">
            <h2>Projects</h2>
            <ul className="space-y-2 list-disc list-inside">
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
        <section className="p-8">
          <div className="space-y-4">
            <h2>Tasks</h2>
            <ul className="space-y-2 list-disc list-inside">
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
        <section className="p-8">
          <div className="space-y-4">
            <h2>Account</h2>
            <ul className="space-y-2 list-disc list-inside">
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

        <Banner variant="blue" fill className="col-span-3" icon={<StarFill />}>
          More features are on the way
        </Banner>
      </Grid>
    </article>
  );
}
