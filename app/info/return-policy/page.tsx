'use client'
import React from 'react'
import InfoNav from '@/components/info/InfoNav'
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from 'next/link';

export default function page() {
  const content1 =
    "Currency Society Stands behind the quality of our products. If you are not completely satisfied with your purchase, you may return your item(s) for an exchange of equal value. Gift cards will be implemented in the future.";
  const content2 =
    "Unfortunately, we cannot make changes to an order after it has been placed. Please carefully review your order prior to completing your purchase.";


  return (
    <>
      <div className='flex w-full items-start justify-start'>
        <InfoNav />
        <div className='flex flex-col pt-16 w-1/3 justify-center items-center text-;eft'>
          <h2 className='text-left font-bold text-lg w-full pl-2'>RETURN POLICY</h2>
          <Accordion variant="light">
            <AccordionItem key="1" aria-label="WHAT IS YOUR DOMESTIC U.S. RETURN POLICY?" title="WHAT IS YOUR DOMESTIC U.S. RETURN POLICY?">
              {content1}
            </AccordionItem>
            {/* <AccordionItem key="2" aria-label="CAN I CANCEL OR MODIFY AN EXISTING ORDER?" title="CAN I CANCEL OR MODIFY AN EXISTING ORDER?"> */}
            {/*   {content2} */}
            {/* </AccordionItem> */}
            <AccordionItem key="3" aria-label="HOW DO I INITIATE A RETURN?" title="HOW DO I INITIATE A RETURN?">
              <p className='pb-2'>Domestic U.S. returns start <Link href='/info/contact' className='underline'>here</Link>.</p>
              <p>If you have any questions regarding your return or if you received an incorrect or damaged item, please don’t hesitate to <Link href='/info/contact' className='underline'>contact us</Link>.</p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  )
}
