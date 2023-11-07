'use client'
import { addToCart } from '@/redux/shoppingSlice';
import { SyncVariant, SyncProduct } from '../../types/Product';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

export default function ProductPage({ product }: any) {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(product.sync_variants[0]);
  // console.log(product.SyncVariant.id)

  const handleVariantChange = (variant: SyncVariant) => {
    setSelectedVariant(variant);
    setQuantity(1);
  };
  const dispatch = useDispatch();
  const item = {
    name: product.sync_product.name,
    productId: product.sync_product.id,
    product_template_id: selectedVariant.sync_product_id,
    variant_id: selectedVariant.variant_id,
    quantity: quantity,
    price: selectedVariant.retail_price,
    url: `/products/${product.sync_product.external_id}`,
    thumbnail: product.sync_product.thumbnail_url,
    size: selectedVariant.size
  }
  console.log(item)

  return (
    <>
      <div className='relativ w-full flex flex-row px-16'>
        <div className='h-full w-1/2'>
          <Image
            src={product.sync_product.thumbnail_url}
            alt={product.sync_product.name}
            // fill
            width={2000}
            height={2000}
            className=" object-cover"
            priority
          />
        </div>
        <div className='w-1/2'>
          <h1 className="text-2xl lg:text-3xl font-semibold">{product.sync_product.name}</h1>
          <p className="text-2xl font-medium ">
            ${selectedVariant.retail_price} {selectedVariant.currency}
          </p>
          {product.sync_variants.length > 1 && (
            <div className="mt-2 space-x-2">
              <p className="font-semibold text-lg">Sizes:</p>
              <div className="flex items-center space-x-2">
                {product.sync_variants.map((variant: any) => (
                  <button
                    key={variant.external_id}
                    className={`font-semibold text-lg border px-3 py-1 rounded-lg ${variant.external_id === selectedVariant.external_id ? 'bg-primary text-white' : 'border-gray-300'
                      }`}
                    onClick={() => handleVariantChange(variant)}
                  >
                    {variant.size}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="mt-6 flex items-center">
            <label className="font-semibold text-lg mr-2">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-16 text-lg border-b border-primary focus:outline-none"
            />
          </div>
          <div className="mt-8">
            <button
              onClick={() =>
                dispatch(addToCart(item)) &&
                toast.success(`Product added successfully`)}
            >
              Add To Cart
            </button>
          </div>
        </div>
        <Toaster position='top-center' />
      </div >

    </>
  );
}

