'use client'
import React from 'react'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import {
  NavbarItem,
} from "@nextui-org/navbar";


export default function NavAvatar() {


  return (
    <NavbarItem>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </NavbarItem>
  )
}
