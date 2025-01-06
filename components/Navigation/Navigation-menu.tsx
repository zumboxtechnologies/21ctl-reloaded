"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import Polygon from "../Polygon";
import { NavLink } from "@/types";

export function NavigationMenuLinks({ navLinks }: { navLinks: NavLink[] }) {
  const pathName = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map((item) =>
          item.navSubMenus ? (
            <NavigationMenuItem key={item.navTitle}>
              <NavigationMenuTrigger
                className={`relative ${
                  pathName === item.navLink
                    ? "after:absolute after:bg-primary font-neuebold after:bottom-0 after:right-4 after:left-4 after:h-[2px]"
                    : "text-primaryGray"
                }`}
              >
                {item.navTitle}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-6 p-6 w-fit lg:grid-cols-[_1fr_1fr_1fr]">
                  {item.navSubMenus.map((subItem, subIndex) => (
                    <ListItem
                      key={subIndex}
                      tabIndex={subIndex}
                      href={subItem.link}
                      title={subItem.title}
                    >
                      {subItem.desc}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={item.navTitle}>
              {item.navLink && (
                <Link href={item.navLink} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`relative ${
                      pathName === item.navLink
                        ? "after:absolute after:bg-primary font-neuebold after:bottom-0 after:right-4 after:left-4 after:h-[2px]"
                        : "text-primaryGray"
                    } ${navigationMenuTriggerStyle()}`}
                  >
                    {item.navTitle}
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, tabIndex, ...props }, ref) => {
  const backgroundColor = () => {
    switch (tabIndex) {
      case 0:
        return "bg-dimYellow";
      case 1:
        return "bg-curiousBlue";
      case 2:
        return "bg-dimGray";
      case 3:
        return "bg-dimYellow";
      case 4:
        return "bg-carise";
      default:
        return "bg-pink-100"; // Default background
    }
  };
  return (
    <li>
      <NavigationMenuLink asChild>
        <a ref={ref} className={cn("block select-none", className)} {...props}>
          <div
            className={cn(
              `relative w-full md:min-w-[408px] h-[222px] flex flex-col gap-6 p-6 justify-end text-primaryBlack`,
              backgroundColor()
            )}
          >
            <Polygon className="w-12 h-12 bg-white" />
            <h4 className="text-2xl font-neuebold">{title}</h4>
            <p>{children}</p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
