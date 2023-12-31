'use client'
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { useState } from "react";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
  SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";
import NavAvatar from "./user/NavAvatar";
// import { getServerSession } from "next-auth";
// import { options } from "@/app/api/auth/[...nextauth]/options";
import ShoppingCart from "./cart/ShoppingCart";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, User } from "@nextui-org/react";
import { UserButton } from "@clerk/nextjs";
import MobileNav from "./MobileNav";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (label: any) => {
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const renderDropdownItem = (label: any, items: any) => {
    const isOpen = openDropdown === label;

    return (
      <NavbarItem
        onMouseEnter={() => handleMouseEnter(label)}
        onMouseLeave={handleMouseLeave}
      >
        <Dropdown isOpen={isOpen}>
          <DropdownTrigger>
            <Button variant="light" className="uppercase">
              {label}
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions" className="flex flex-row">
            {items.map((item: any) => (
              <DropdownItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium uppercase"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </NavbarItem>
    );
  };

  return (
    <NextUINavbar className="fixed" maxWidth="xl" position="sticky">
      <NavbarContent className="py-6 basis-1/5 sm:basis-full hidden lg:flex gap-1 justify-start ml-2 capitalize" justify="start">
        {renderDropdownItem("Mens", siteConfig.mensItems)}
        {renderDropdownItem("Womens", siteConfig.womensItems)}
        {renderDropdownItem("Collections", siteConfig.collectionItems)}
        {renderDropdownItem("Collaborations", siteConfig.partnershipItems)}
      </NavbarContent>

      <NavbarBrand as="li" className="gap-3 max-w-fit">
        <NextLink className="flex justify-start items-center gap-1" href="/">
          <Logo />
        </NextLink>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <ShoppingCart />
        <NavAvatar />
        {/* <UserButton /> */}
      </NavbarContent>

      {/* Mobile Menu  */}
      <NavbarContent className="sm:hidden basis-1" justify="end">
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
        </Link>
        <ThemeSwitch />
        <ShoppingCart />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {/* {searchInput} */}
        <div className="mx-4 mt-2 w-full flex flex-col gap-2">
          <MobileNav />
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
