import Button from '@/components/ui/button';
import { BrandsAssets } from '@/components/ui/icons/geist';
import { Input } from '@/components/ui/input';
import Spinner from '@/components/ui/spinner';
import Link from 'next/link';
import { IoIosList } from 'react-icons/io';
import { IoGridOutline, IoPersonAddOutline } from 'react-icons/io5';
import { TbShieldBolt } from 'react-icons/tb';

export default function GeistCards() {
  return (
    <section className="border-y grid grid-cols-2">
      <Link
        href="/geist/brands"
        className="flex flex-col gap-6 p-8 [--shadow-color:hsl(var(--ds-background-200))] hover:[--shadow-color:hsl(var(--ds-background-100))] hover:bg-background-100 transition border-r"
      >
        <div className="mx-auto relative">
          <BrandsAssets />
          <div className="absolute inset-0 shadow-brands transition" />
        </div>
        <div className="mt-auto text-base">
          <strong className="font-semibold">Brand Assets</strong>
          <p className="text-gray-900 text-base">
            Learn how to work with our brand assets.
          </p>
        </div>
      </Link>
      <Link
        href="/geist/components"
        className="flex flex-col gap-6 p-8 hover:bg-background-100 transition"
      >
        <div className="pointer-events-none mx-auto flex flex-wrap gap-4 items-center">
          <Button
            prefix={<TbShieldBolt />}
            size="md"
            className="bg-background-100 text-gray-900"
          />
          <Spinner size={32} />
          <Button
            prefix={<IoPersonAddOutline />}
            size="md"
            className="bg-background-100 text-gray-900 flex-1"
          >
            Collaborate
          </Button>
          <div className="flex items-center p-1 rounded-lg h-10 border bg-background-100 text-gray-900">
            <label className="inline-flex items-center justify-center w-10 h-8 rounded bg-gray-100">
              <IoGridOutline />
            </label>
            <label className="inline-flex items-center justify-center w-10 h-8 rounded">
              <IoIosList />
            </label>
          </div>
          <Input
            prefix="https://"
            suffix=".com"
            placeholder="todoistnext.vercel"
            size="medium"
            className="[&_input]:flex-1 flex-1"
          />
        </div>
        <div className="mt-auto text-base">
          <strong className="font-semibold">Components</strong>
          <p className="text-gray-900 text-base">
            Building blocks for React applications.
          </p>
        </div>
      </Link>
    </section>
  );
}
