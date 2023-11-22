import React from 'react'
import InfoNav from '@/components/info/InfoNav'
import Link from 'next/link'

export default function page() {
  return (
    <>
      <div className='flex w-full items-start justify-start'>
        <InfoNav />
        <div className='flex flex-col pt-16 w-1/3 justify-center items-center text-;eft'>
          <p className='pb-3'>For questions related to online orders, please send us an email at <span className='underline'>contact@currencycovenant.com</span>. Kindly include your order number for faster assistance.</p>
          <p className='pb-3'>We aim to respond to each email within 1 business day however during new product releases it may take us a little longer. We appreciate your patience. Please note that our current hours of service are between 9:00am – 5:00pm PST Monday to Friday.</p>
          <p className='text-left w-full mb-3'>For all other questions, please refer to our <Link href='/info/faq' className='underline'>FAQs</Link>{" "}and{" "}<Link href='/info/terms-conditions' className='underline'>Terms</Link></p>
          <button className='text-left w-full'>CONTACT US</button>
        </div>
      </div>
    </>
  )
} 
