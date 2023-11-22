import React from 'react'
import Link from 'next/link'

type Props = {}

export default function InfoNav({ }: Props) {
  return (
    <>
      <ul className="hidden lg:flex flex-col gap-4 justify-start ml-2 uppercase text-white pt-16 w-1/3">
        <li >
          <Link
            className=''
            href='/info/contact'
          >
            contact
          </Link>
        </li>
        <li >
          <Link
            className=''
            href='/info/faq'
          >
            FAQ
          </Link>
        </li>
        <li >
          <Link
            className=''
            href='/info/return-policy'
          >
            RETRUN POLICY
          </Link>
        </li>
        <li >
          <Link
            className=''
            href='/info/shipping'
          >
            SHIPPING
          </Link>
        </li>
        {/* <li > */}
        {/*   <Link */}
        {/*     className='' */}
        {/*     href='/info/terms-condition' */}
        {/*   > */}
        {/*     TERMS AND CONDITIONS */}
        {/*   </Link> */}
        {/* </li> */}
        {/* <li > */}
        {/*   <Link */}
        {/*     className='' */}
        {/*     href='/info/privacy-policy' */}
        {/*   > */}
        {/*     PRIVACY POLICY */}
        {/*   </Link> */}
        {/* </li> */}
      </ul >
    </>
  )
}
