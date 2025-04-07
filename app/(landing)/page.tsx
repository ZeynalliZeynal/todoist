import { ButtonLink } from '@/components/ui/button';
import { LogoInvert } from '@/components/ui/icons/logo';
import Image from 'next/image';
import { FaAndroid, FaApple } from 'react-icons/fa6';
import { dashboardRoute } from '@/routes';

export default function Home() {
  return (
    <section>
      <div className="flex items-center flex-col justify-center gap-3 p-12 lg:p-8 md:p-6 xs:p-4">
        <div className="text-center space-y-6">
          <h1 className="text-[clamp(24px,3.75vw,48px)] leading-[100%]">
            Organize your work and life, finally.
          </h1>
          <div className="font-medium space-y-3">
            <p className="text-balance">
              Simplify life for both you and your team with the world’s #1 task
              manager and to-do list app.
            </p>
            <p className="inline-flex items-center gap-2">
              <span>374K+ ★★★★★ reviews from</span>
              <span className="inline-flex items-center gap-1">
                <FaApple aria-label="Apple store" />
                <FaAndroid aria-label="Play store" />
              </span>
            </p>
          </div>
          <div className="flex items-center gap-3 w-full justify-center">
            <ButtonLink
              href={dashboardRoute}
              variant="secondary"
              size="lg"
              className="rounded-full"
              prefix={<LogoInvert className="size-4" />}
            >
              Start for free
            </ButtonLink>
          </div>
        </div>
        <div>
          <Image
            src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_1536/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fintro%2Fwide%2Fheaderui.en.png"
            alt="Banner"
            width={1312}
            height={408}
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
