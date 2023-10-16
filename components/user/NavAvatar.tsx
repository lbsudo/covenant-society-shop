'use client'
import React from 'react'
import { Avatar } from "@nextui-org/react";
import {
  NavbarItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";



export default function NavAvatar({ session }: any) {
  return (
    <>
      <NavbarItem>
        {session ? (
          <button>
            <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-6 h-6 text-tiny" />
          </button>
        ) : (
          <NextLink href={'/server'} className="flex justify-start items-center gap-1">
            <Avatar showFallback src='https://i.pravatar.cc/150?u=a042581f4e29026024d' className="w-7 h-7 text-tiny" />
          </NextLink>
        )
        }
      </NavbarItem>
    </>
  )
}
