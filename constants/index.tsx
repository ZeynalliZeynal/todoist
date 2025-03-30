import { Nextjs } from '@/components/ui/icons/geist';
import { Logo } from '@/components/ui/icons/logo';

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

export const authFooterLinks = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'pricing',
    href: '/pricing',
  },
  {
    name: 'templates',
    href: '/templates',
  },
  {
    name: 'getting started',
    href: '/getting-started',
  },
  {
    name: 'help center',
    href: '/help',
  },
  {
    name: 'downloads',
    href: '/downloads',
  },
];

export const footerLinks = [
  {
    title: 'Features',
    children: [
      { name: 'How It Works', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Templates', href: '/templates' },
    ],
  },
  {
    title: 'Resources',
    children: [
      { name: 'Download Apps', href: '/downloads' },
      { name: 'Help Center', href: '/help' },
      { name: 'Productivity Methods', href: '/productivity-methods' },
      { name: 'Integrations', href: '/integrations' },
      { name: 'Channel Partners', href: '/channel-partners' },
    ],
  },
  {
    title: 'Company',
    children: [
      {
        name: 'About Us',
        href: 'https://doist.com/?utm_source=todoist&utm_medium=landing_page&utm_campaign=home',
      },
      {
        name: 'Careers',
        href: 'https://doist.com/jobs?utm_source=todoist&utm_medium=landing_page&utm_campaign=home',
      },
      { name: 'Inspiration Hub', href: '/inspiration' },
      {
        name: 'Press',
        href: 'https://doist.com/press/?utm_source=todoist&utm_medium=landing_page&utm_campaign=home',
      },
      {
        name: 'Twist',
        href: 'https://twist.com/?utm_source=todoist&utm_medium=landing_page&utm_campaign=home',
      },
    ],
  },
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
