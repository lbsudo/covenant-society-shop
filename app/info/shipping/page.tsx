"use client"
import React from 'react'
import InfoNav from '@/components/info/InfoNav'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function page() {
  return (
    <>
      <div className='flex w-full items-start justify-start'>
        <InfoNav />
        <div className='flex flex-col pt-16 w-1/3 justify-center items-center text-;eft'>
          <p className='pb-4'>Please allow up to 5 business days for order processing and verification. You will receive an email notification once the order has shipped. Orders placed over the weekend or on holidays will begin processing the next business day.</p>
          <Table removeWrapper aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>REGION</TableColumn>
              <TableColumn>RATE</TableColumn>
              <TableColumn>DELIVERY TIME</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>USA</TableCell>
                <TableCell>$15 USD</TableCell>
                <TableCell>5-10 Business Days</TableCell>
              </TableRow>
              {/* <TableRow key="2"> */}
              {/*   <TableCell>Zoey Lang</TableCell> */}
              {/*   <TableCell>Technical Lead</TableCell> */}
              {/*   <TableCell>Paused</TableCell> */}
              {/* </TableRow> */}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
} 
