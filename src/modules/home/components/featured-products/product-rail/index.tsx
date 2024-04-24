import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"

export default function ProductRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  const { products } = collection

  console.log(collection, "collection")

  if (!products) {
    return null
  }

  const backgroundColorMap: { [key: string]: string }  = {
    "Baby Products": "bg-[#f7ebeb]",
    "Home Essentials": "bg-[#eeeeee]",
    "Stationary": "bg-[#dddddd]"
  };
  
  const defaultBackgroundColor = "#f5f5f5"; 
  const backgroundColor = backgroundColorMap[collection.title] || defaultBackgroundColor;


  return (
    <div className={`content-container py-12 small:py-24 ${backgroundColor} `}>
      <div className="flex justify-between mb-8">
        <Text className="font-reforesta text-3xl text-gray-700 leading-10 antialiased">{collection.title}</Text>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          View all
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-2 drop-shadow-xl small:grid-cols-4 gap-x-6 gap-y-24 small:gap-y-36 ">
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <ProductPreview
                productPreview={product}
                region={region}
                isFeatured
              />
            </li>
          ))}
      </ul>
    </div>
  )
}
