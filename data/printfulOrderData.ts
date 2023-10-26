import { Product } from "@/types/Product";
import { useSelector } from 'react-redux';
import { StateProps } from '@/types/Product';

export const getProductData = () => {
  const { productData } = useSelector((state: StateProps) => state?.shopping);
  return productData;
};


export const getPrintfulOrderData = () => {
  const productData = getProductData();

  return {
    recipient: {
      name: "Lawrence Brown",
      address1: "13818 Woodpecker Rd",
      city: "Victorville",
      country_name: "United States",
      state_name: "California",
      zip: "92394",
    },
    items: productData.map((item: Product) => [
      {
        quantity: item.quantity,
        variant_id: item.sync_variant.variant_id,
        external_product_id: item.sync_variant.external_id,
      }
    ]),
  };
};

// export const printfulOrderData = async () => {

//   const { productData } = useSelector((state: StateProps) => state?.shopping);

//   return {
//     recipient: {
//       name: "Lawrence Brown",
//       address1: "13818 Woodpecker Rd",
//       city: "Victorville",
//       country_name: "United States",
//       state_name: "California",
//       zip: "92394",
//     },
//     items: productData.map((item: Product) => [
//       {
//         quantity: item.quantity,
//         variant_id: item.sync_variant.variant_id,
//         external_product_id: item.sync_variant.external_id,
//       }
//     ]),
//   };
// };
