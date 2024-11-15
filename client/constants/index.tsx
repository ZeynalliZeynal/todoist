import { IoExtensionPuzzleOutline, IoHelpBuoyOutline } from "react-icons/io5";
import React from "react";
import { FaQuestion } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { HiOutlineDownload } from "react-icons/hi";
import { TbCards } from "react-icons/tb";
import { RxLightningBolt } from "react-icons/rx";

export const navItems = [
  {
    name: "features",
    href: "/features",
  },
  {
    name: "for teams",
    href: "/for-teams",
  },
  {
    name: "resources",
    children: [
      {
        name: "integrations",
        href: "/integrations",
        icon: <IoExtensionPuzzleOutline />,
      },
      {
        name: "templates",
        href: "/templates",
        icon: <TbCards />,
      },
      {
        name: "getting started",
        href: "/getting-started",
        icon: <RxLightningBolt />,
      },
      {
        name: "help center",
        href: "/help-center",
        icon: <IoHelpBuoyOutline />,
      },
      {
        name: "productivity methods + quiz",
        href: "/productivity-methods",
        icon: <FaQuestion />,
      },
      {
        name: "inspiration Hub",
        href: "/inspiration-hub",
        icon: <HiOutlineLightBulb />,
      },
      {
        name: "downloads",
        href: "/downloads",
        icon: <HiOutlineDownload />,
      },
    ],
  },
  {
    name: "pricing",
    href: "/pricing",
  },
];
