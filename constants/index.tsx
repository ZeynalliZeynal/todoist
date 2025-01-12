import { Nextjs } from '@/components/ui/icons/geist';
import { Logo } from '@/components/ui/icons/logo';
import { FaQuestion } from 'react-icons/fa6';
import { HiOutlineDownload } from 'react-icons/hi';
import { HiOutlineLightBulb } from 'react-icons/hi2';
import { IoExtensionPuzzleOutline, IoHelpBuoyOutline } from 'react-icons/io5';
import { RxLightningBolt } from 'react-icons/rx';
import { TbCards } from 'react-icons/tb';

export const navItems = [
  {
    name: 'features',
    href: '/features',
  },
  {
    name: 'for teams',
    href: '/for-teams',
  },
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
      { name: 'For Teams', href: '/for-teams' },
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

export const geistLinks = [
  {
    title: 'Foundation',
    links: [
      {
        label: 'Introduction',
        href: '/geist/introduction',
        icon: null,
      },
      {
        label: 'Colors',
        href: '/geist/colors',
        icon: null,
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
        icon: null,
      },
      {
        label: 'Badge',
        href: '/geist/badge',
        icon: null,
      },
      {
        label: 'book',
        href: '/geist/book',
        icon: null,
      },
      {
        label: 'button',
        href: '/geist/button',
        icon: null,
      },
      {
        label: 'checkbox',
        href: '/geist/checkbox',
        icon: null,
      },
      {
        label: 'tabs',
        href: '/geist/tabs',
        icon: null,
      },
    ],
  },
];
