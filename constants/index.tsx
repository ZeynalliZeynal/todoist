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
        label: 'Calendar',
        href: '/geist/calendar',
        icon: null,
      },
      {
        label: 'checkbox',
        href: '/geist/checkbox',
        icon: null,
      },
      {
        label: 'choicebox',
        href: '/geist/choicebox',
        icon: null,
      },
      {
        label: 'code block',
        href: '/geist/code-block',
        icon: null,
      },
      {
        label: 'collapse',
        href: '/geist/collapse',
        icon: null,
      },
      {
        label: 'combobox',
        href: '/geist/combobox',
        icon: null,
      },
      {
        label: 'command menu',
        href: '/geist/command-menu',
        icon: null,
      },
      {
        label: 'context menu',
        href: '/geist/context-menu',
        icon: null,
      },
      {
        label: 'description',
        href: '/geist/description',
        icon: null,
      },
      {
        label: 'drawer',
        href: '/geist/drawer',
        icon: null,
      },
      {
        label: 'empty state',
        href: '/geist/empty-state',
        icon: null,
      },
      {
        label: 'error',
        href: '/geist/error',
        icon: null,
      },
      {
        label: 'feedback',
        href: '/geist/feedback',
        icon: null,
      },
      {
        label: 'gauge',
        href: '/geist/gauge',
        icon: null,
      },
      {
        label: 'grid',
        href: '/geist/grid',
        icon: null,
      },
      {
        label: 'input',
        href: '/geist/input',
        icon: null,
      },
      {
        label: 'keyboard input',
        href: '/geist/keyboard-input',
        icon: null,
      },
      {
        label: 'loading dots',
        href: '/geist/loading-dots',
        icon: null,
      },
      {
        label: 'material',
        href: '/geist/material',
        icon: null,
      },
      {
        label: 'menu',
        href: '/geist/menu',
        icon: null,
      },
      {
        label: 'modal',
        href: '/geist/modal',
        icon: null,
      },
      {
        label: 'note',
        href: '/geist/note',
        icon: null,
      },
      {
        label: 'pagination',
        href: '/geist/pagination',
        icon: null,
      },
      {
        label: 'progress',
        href: '/geist/progress',
        icon: null,
      },
      {
        label: 'project banner',
        href: '/geist/project-banner',
        icon: null,
      },
      {
        label: 'radio',
        href: '/geist/radio',
        icon: null,
      },
      {
        label: 'relative time card',
        href: '/geist/relative-time-card',
        icon: null,
      },
      {
        label: 'scroller',
        href: '/geist/scroller',
        icon: null,
      },
      {
        label: 'select',
        href: '/geist/select',
        icon: null,
      },
      {
        label: 'show more',
        href: '/geist/show-more',
        icon: null,
      },
      {
        label: 'skeleton',
        href: '/geist/skeleton',
        icon: null,
      },
      {
        label: 'slider',
        href: '/geist/slider',
        icon: null,
      },
      {
        label: 'snippet',
        href: '/geist/snippet',
        icon: null,
      },
      {
        label: 'spinner',
        href: '/geist/spinner',
        icon: null,
      },
      {
        label: 'split button',
        href: '/geist/split-button',
        icon: null,
      },
      {
        label: 'stack',
        href: '/geist/stack',
        icon: null,
      },
      {
        label: 'status dot',
        href: '/geist/status-dot',
        icon: null,
      },
      {
        label: 'switch',
        href: '/geist/switch',
        icon: null,
      },
      {
        label: 'table',
        href: '/geist/table',
        icon: null,
      },
      {
        label: 'tabs',
        href: '/geist/tabs',
        icon: null,
      },
      {
        label: 'text',
        href: '/geist/text',
        icon: null,
      },
      {
        label: 'textarea',
        href: '/geist/textarea',
        icon: null,
      },
      {
        label: 'theme switcher',
        href: '/geist/theme-switcher',
        icon: null,
      },
      {
        label: 'toast',
        href: '/geist/toast',
        icon: null,
      },
      {
        label: 'toggle',
        href: '/geist/toggle',
        icon: null,
      },
      {
        label: 'tooltip',
        href: '/geist/tooltip',
        icon: null,
      },
    ],
  },
];
