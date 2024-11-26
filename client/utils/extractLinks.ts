import { ReactNode } from "react";

interface NavItem {
  name: string;
  href?: string;
  icon?: ReactNode;
  children?: NavItem[];
}

export default function (items: NavItem[]) {
  const result: NavItem[] = [];

  items.forEach((item) => {
    if (item.href) {
      result.push({ name: item.name, href: item.href });
    }
    if (item.children) {
      item.children.forEach((child) => {
        if (child.href) {
          result.push({ name: child.name, href: child.href });
        }
      });
    }
  });

  return result;
}
