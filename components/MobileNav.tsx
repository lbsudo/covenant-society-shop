"use client"
import React from 'react'
import { useState } from "react"
import { NavbarMenuItem } from '@nextui-org/navbar';
import { siteConfig } from '@/config/site';
import { Link } from "@nextui-org/link";
import NavAvatar from './user/NavAvatar';

const MensList = () => (
  <>
    {siteConfig.mensItems.map((item, index) => (
      <NavbarMenuItem key={`${item}-${index}`}>
        <Link color='foreground'>
          {item.label}
        </Link>
      </NavbarMenuItem>
    ))
    }
  </>
);

const WomensList = () => (
  <>
    {siteConfig.womensItems.map((item, index) => (
      <NavbarMenuItem key={`${item}-${index}`}>
        <Link color='foreground'>
          {item.label}
        </Link>
      </NavbarMenuItem>
    ))
    }
  </>
);

const CollectionsList = () => (
  <>
    {siteConfig.collectionItems.map((item, index) => (
      <NavbarMenuItem key={`${item}-${index}`}>
        <Link color='foreground'>
          {item.label}
        </Link>
      </NavbarMenuItem>
    ))
    }
  </>
);


const PartnershipsList = () => (
  <>
    {siteConfig.partnershipItems.map((item, index) => (
      <NavbarMenuItem key={`${item}-${index}`}>
        <Link color='foreground'>
          {item.label}
        </Link>
      </NavbarMenuItem>
    ))
    }
  </>
);



export default function MobileNav() {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [showDefaultList, setShowDefaultList] = useState(true);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    setShowDefaultList(false);
  };

  const handleBackClick = () => {
    setActiveButton(null);
    setShowDefaultList(true);
  }; return (
    <>
      {showDefaultList ? (
        <>
          <ul className='flex flex-col justify-between items-start space-y-4'>
            <li>
              <button onClick={() => handleButtonClick('MENS')}>{activeButton === 'MENS' ? 'MENS ACTIVE' : 'MENS'}</button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('WOMENS')}>{activeButton === 'WOMENS' ? 'WOMENS ACTIVE' : 'WOMENS'}</button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('COLLECTIONS')}>{activeButton === 'COLLECTIONS' ? 'COLLECTIONS ACTIVE' : 'COLLECTIONS'}</button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('PARTNERSHIPS')}>{activeButton === 'PARTNERSHIPS' ? 'PARTNERSHIPS ACTIVE' : 'PARTNERSHIPS'}</button>
            </li>
          </ul>
          <NavAvatar />
        </>

      ) : (
        <div className='flex flex-col items-start text-foreground'>
          <button onClick={handleBackClick}>[ Back ]</button>
          {activeButton === 'MENS' && <MensList />}
          {activeButton === 'WOMENS' && <WomensList />}
          {activeButton === 'COLLECTIONS' && <CollectionsList />}
          {activeButton === 'PARTNERSHIPS' && <PartnershipsList />}
        </div>
      )}
    </>
  )
}
