import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <div className='flex items-start justify-between py-6 px-4'>
        <ul className='flex justify-center '>
          <Link href={'/info/contact'}>
            <li className='px-3'>CONTACT</li>

          </Link>
          <Link href={'/info/faq'}>
            <li className='px-3'>FAQ</li>
          </Link>
          <Link href={'/info/return-policy'}>
            <li className='px-3'>RETURN POLICY</li>
          </Link>
          <Link href={'/info/shipping'}>
            <li className='px-3'>SHIPPING</li>
          </Link>
          {/* <Link href={'/info/terms-conditions'}> */}
          {/*   <li className='px-3'>TERMS & CONDITIONS</li> */}
          {/* </Link> */}
          {/* <Link href={'/info/privacy-policy'}> */}
          {/*   <li className='px-3'>PRIVACY POLICY</li> */}
          {/* </Link> */}
        </ul>
        <h2>©2024 — COVENANT SOCIETY</h2>
      </div>
    </>
  )
}
