'use client'
import React from 'react'
import InfoNav from '@/components/info/InfoNav'
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from 'next/link';

export default function page() {
  const content1 =
    "We current do not offer international shipping and only ship within the United States, but be we will in the future. Subscribe to our newsletter to be notified when we go international.";
  const content2 =
    "Unfortunately, we cannot make changes to an order after it has been placed. Please carefully review your order prior to completing your purchase.";
  const content3 =
    "We currently accept Visa, Mastercard, and American Express.";
  const content4 =
    "Please review our return policy ";
  const content5 =
    "Orders placed by customers will currently only be charged in US Dollars (USD)";

  return (
    <>
      <div className='flex w-full items-start justify-start'>
        <InfoNav />
        <div className='flex flex-col pt-16 w-1/3 justify-center items-center'>
          <h2 className='text-left font-bold text-lg w-full pl-2'>FREQUENTLY ASKED QUESTIONS</h2>
          <Accordion variant="light">
            <AccordionItem key="1" aria-label="DO YOU OFFER INTERNATIONAL SHIPPING?" title="DO YOU OFFER INTERNATIONAL SHIPPING?">
              {content1}
            </AccordionItem>
            <AccordionItem key="2" aria-label="CAN I CANCEL OR MODIFY AN EXISTING ORDER?" title="CAN I CANCEL OR MODIFY AN EXISTING ORDER?">
              {content2}
            </AccordionItem>
            <AccordionItem key="3" aria-label="WHAT PAYMENT METHODS DO YOU ACCEPT?" title="WHAT PAYMENT METHODS DO YOU ACCEPT?">
              {content3}
            </AccordionItem>
            <AccordionItem key="4" aria-label="WHAT IS YOUR RETURN POLICY FOR ORDERS PLACED ONLINE?" title="WHAT IS YOUR RETURN POLICY FOR ORDERS PLACED ONLINE?">
              {content4}<Link href='/info/return-policy'>here</Link>
            </AccordionItem>
            {/* <AccordionItem key="5" aria-label="WHAT CURRENCY ARE YOUR PRICES IN?" title="WHAT CURRENCY ARE YOUR PRICES IN?"> */}
            {/*   {content5} */}
            {/* </AccordionItem> */}
          </Accordion>
        </div>
      </div>
    </>
  )
}

