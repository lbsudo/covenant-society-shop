'use client'
import React from 'react'
import InfoNav from '@/components/info/InfoNav'
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from 'next/link';

export default function page() {

  return (
    <>
      <div className='flex w-full items-start justify-start'>
        <InfoNav />
        <div className='flex flex-col pt-16 w-1/3 justify-center items-center text-;eft'>
          <h2 className='text-left font-bold text-lg w-full pl-2'>RETURN POLICY</h2>

        </div>
      </div>
    </>
  )
}


