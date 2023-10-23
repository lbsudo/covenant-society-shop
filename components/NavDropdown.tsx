"use client"
import React from 'react'
import { useState, useEffect } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, NavbarItem, NavbarContent } from "@nextui-org/react";
import NextLink from "next/link";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";

export default function NavDropdown() {


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
    <>
      {/* <ul className="hidden lg:flex gap-1 justify-start ml-2 uppercase"> */}
      {renderDropdownItem("Mens", siteConfig.navItems)}
      {/* {renderDropdownItem("Womens", siteConfig.womensDd)} */}
      {/* {renderDropdownItem("Collections", siteConfig.collectionsDd)} */}
      {/* {renderDropdownItem("Collaborations", siteConfig.collaborationsDd)} */}
      {/* </ul> */}
    </>
  );
}

