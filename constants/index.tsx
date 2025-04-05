import { Nextjs } from '@/components/ui/icons/geist';
import { Logo } from '@/components/ui/icons/logo';
import { contactRoute, dashboardRoute, featuresRoute } from '@/routes';

export const navItems = [
  {
    name: 'features',
    href: '/features',
  },
  /*
  {
    name: 'resources',
    children: [
      {
        name: 'integrations',
        href: '/integrations',
        icon: <IoExtensionPuzzleOutline />,
      },
      {
        name: 'templates',
        href: '/templates',
        icon: <TbCards />,
      },
      {
        name: 'getting started',
        href: '/getting-started',
        icon: <RxLightningBolt />,
      },
      {
        name: 'help center',
        href: '/help',
        icon: <IoHelpBuoyOutline />,
      },
      {
        name: 'productivity methods + quiz',
        href: '/productivity-methods',
        icon: <FaQuestion />,
      },
      {
        name: 'inspiration Hub',
        href: '/inspiration',
        icon: <HiOutlineLightBulb />,
      },
      {
        name: 'downloads',
        href: '/downloads',
        icon: <HiOutlineDownload />,
      },
    ],
  },
  */
  {
    name: 'pricing',
    href: '/pricing',
  },
];

export const footerLinks = [
  { href: '/', label: 'Home' },
  { href: contactRoute, label: 'Contact' },
  { href: dashboardRoute, label: 'Dashboard' },
  { href: featuresRoute, label: 'Features' },
];

type LinkProps = {
  label: string;
  href: string;
  icon?: JSX.Element;
};

export const geistLinks: { title: string; links: LinkProps[] }[] = [
  {
    title: 'Foundation',
    links: [
      {
        label: 'Introduction',
        href: '/geist/introduction',
      },
      {
        label: 'Colors',
        href: '/geist/colors',
      },
    ],
  },
  {
    title: 'Brands',
    links: [
      {
        label: 'Todoist',
        href: '/geist/brands#todoist',
        icon: <Logo width={16} height={16} />,
      },
      {
        label: 'Next.js',
        href: '/geist/brands#nextjs',
        icon: <Nextjs />,
      },
    ],
  },
  {
    title: 'Components',
    links: [
      {
        label: 'Avatar',
        href: '/geist/avatar',
      },
      {
        label: 'Badge',
        href: '/geist/badge',
      },
      {
        label: 'book',
        href: '/geist/book',
      },
      {
        label: 'button',
        href: '/geist/button',
      },
      {
        label: 'checkbox',
        href: '/geist/checkbox',
      },
      {
        label: 'code block',
        href: '/geist/code-block',
      },
      {
        label: 'dropdown menu',
        href: '/geist/dropdown-menu',
      },
      {
        label: 'tabs',
        href: '/geist/tabs',
      },
    ],
  },
];
