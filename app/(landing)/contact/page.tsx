import { ButtonLink } from '@/components/ui/button';
import { Grid, GridCell, GridCross } from '@/components/ui/grid';
import { Linkedin, LogoGithub } from 'vercel-geist-icons';
import axios from 'axios';

export const metadata = {
  title: 'Contact me',
};

export default async function ContactPage() {
  const githubData = await axios.get(
    'https://api.github.com/users/ZeynalliZeynal',
  );

  console.log(githubData);

  return (
    <>
      <section className="pt-[90px]">
        <Grid rows={4} columns={8} smColumns={12} aspectRatio>
          <GridCross column={1} row={1} />
          <GridCross column={-1} row={-1} />
          <GridCell row="2 / span 2" column="2 / span 6" smColumn="4 / span 6">
            <div className="h-full relative rounded-full shadow-border z-[-1] bg-background-100 w-full">
              <svg
                fill="none"
                height="38"
                viewBox="0 0 33 38"
                width="33"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-0.5 h-1/2 w-auto aspect-[80/91] -translate-x-[39%]"
              >
                <path
                  d="M1.3391 37C8.42916 30.5968 12.5 21.4749 12.5 11.8795V0.5H32.5V12.5C32.5 26.031 21.531 37 8 37H1.3391Z"
                  fill="var(--ds-background-100)"
                  stroke="var(--ds-gray-400)"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                ></path>
              </svg>
              <div className="absolute inset-0 rounded-full bg-background-100" />
            </div>
            <div className="size-full center rounded-full absolute inset-0">
              <h1 className="lg:text-7xl md:text-5xl text-4xl">Contact me.</h1>
            </div>
          </GridCell>
        </Grid>
      </section>
      <Grid rows={1} columns={1} className="h-4" />
      <section>
        <Grid rows={2} smRows={1} columns={1} smColumns={2}>
          <GridCell row={1} column={1}>
            <div className="relative z-[5] size-full lg:p-12 md:p-8 p-6 flex flex-col sm:gap-8 justify-center gap-6 hover:bg-gray-200 transition">
              <Linkedin className="text-5xl" />
              <div className="flex flex-col sm:gap-4 gap-2">
                <h2 className="text-[2rem]">Let&apos;s Connect!</h2>
                <p className="text-lg text-gray-900">
                  I am posting some of my works time to time.
                </p>
              </div>
              <ButtonLink
                href="https://www.linkedin.com/in/zeynal-zeynalli-7a0047294"
                size="md"
                className="rounded-full bg-background-100"
              >
                Send a Connection request
              </ButtonLink>
            </div>
          </GridCell>
          <GridCell row={2} column={1} smRow={1} smColumn={2}>
            <div className="relative z-[1] size-full lg:p-12 md:p-8 p-6 flex flex-col sm:gap-8 justify-center gap-6 hover:bg-gray-200 transition">
              <LogoGithub className="text-5xl" />
              <div className="flex flex-col sm:gap-4 gap-2">
                <h2 className="text-[2rem]">See my works!</h2>
                <p className="text-lg text-gray-900">
                  Of course, all I&apos;m doing is on github and most of them
                  are public to everyone. Please take your time and send a
                  feedback or open an issue to help me improve.
                </p>
              </div>
              <ButtonLink
                href="https://github.com/ZeynalliZeynal"
                size="md"
                className="rounded-full bg-background-100"
              >
                {githubData.data.public_repos} repositories
              </ButtonLink>
            </div>
          </GridCell>
        </Grid>
      </section>
    </>
  );
}
