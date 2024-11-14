import { IoExtensionPuzzleOutline, IoHelpBuoyOutline } from "react-icons/io5";
import React from "react";
import { FaQuestion } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { HiOutlineDownload } from "react-icons/hi";
import { TbCards } from "react-icons/tb";
import { RxLightningBolt } from "react-icons/rx";

export const navItems = [
  {
    name: "resources",
    children: [
      {
        name: "getting started",
        children: [
          {
            name: "getting started",
            href: "/getting-started",
            description: "Set up your account and explore the basics.",
            icon: <RxLightningBolt />,
          },
          {
            name: "help center",
            href: "/help-center",
            description: "Find answers to common questions.",
            icon: <IoHelpBuoyOutline />,
          },
        ],
      },
      {
        name: "resources",
        children: [
          {
            name: "productivity methods + quiz",
            href: "/productivity-methods",
            description: "Take our quiz to find your productivity style.",
            icon: <FaQuestion />,
          },
          {
            name: "inspiration Hub",
            href: "/inspiration-hub",
            description: "Discover creative ideas and success stories.",
            icon: <HiOutlineLightBulb />,
          },
          {
            name: "downloads",
            href: "/downloads",
            description: "Access apps and tools for all your devices.",
            icon: <HiOutlineDownload />,
          },
        ],
      },
      {
        name: "features",
        children: [
          {
            name: "integrations",
            href: "/integrations",
            description: "Connect with your favorite apps.",
            icon: <IoExtensionPuzzleOutline />,
          },
          {
            name: "templates",
            href: "/templates",
            description: "Browse ready-to-use templates for every project.",
            icon: <TbCards />,
          },
        ],
      },
    ],
  },
  {
    name: "pricing",
    children: [
      {
        name: "getting started",
        children: [
          {
            name: "getting started",
            href: "/getting-started",
            description: "Set up your account and explore the basics.",
            icon: <RxLightningBolt />,
          },
          {
            name: "help center",
            href: "/help-center",
            description: "Find answers to common questions.",
            icon: <IoHelpBuoyOutline />,
          },
        ],
      },
    ],
  },
  {
    name: "test",
    href: null,
    children: [
      {
        name: "getting started",
        children: [
          {
            name: "getting started",
            href: "/getting-started",
            description: "Set up your account and explore the basics.",
            icon: <RxLightningBolt />,
          },
          {
            name: "help center",
            href: "/help-center",
            description: "Find answers to common questions.",
            icon: <IoHelpBuoyOutline />,
          },
        ],
      },
      {
        name: "resources",
        children: [
          {
            name: "productivity methods + quiz",
            href: "/productivity-methods",
            description: "Take our quiz to find your productivity style.",
            icon: <FaQuestion />,
          },
          {
            name: "inspiration Hub",
            href: "/inspiration-hub",
            description: "Discover creative ideas and success stories.",
            icon: <HiOutlineLightBulb />,
          },
          {
            name: "downloads",
            href: "/downloads",
            description: "Access apps and tools for all your devices.",
            icon: <HiOutlineDownload />,
          },
        ],
      },
    ],
  },
  {
    name: "features",
    href: "/features",
  },
  {
    name: "for teams",
    href: "/for-teams",
  },
];
