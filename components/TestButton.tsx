'use client'
import React from 'react'

export default function TestButton({ handleApi }: any) {
  return (
    <>
      <button onClick={handleApi} className='border p-2 mt-3 uppercase'>Initiate Printful API</button>
    </>
  )
}
