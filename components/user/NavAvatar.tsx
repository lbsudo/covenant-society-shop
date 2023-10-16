'use client'
import React from 'react'
import { Avatar } from "@nextui-org/react";
import {
  NavbarItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';



export default function NavAvatar() {
  const { data: session } = useSession({
    required: false,
    // onUnauthenticated() {
    //   redirect('/api/auth/signin?callbackUrl=/client')
    // }
  })
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
