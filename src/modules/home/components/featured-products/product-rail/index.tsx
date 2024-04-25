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

  const backgroundColorMap: { [key: string]: string } = {
    "Baby Products": "bg-rose-100",
    "Home Essentials": "bg-slate-100",
    Stationary: "bg-zinc-100",
  }

  const defaultBackgroundColor = "#f5f5f5"
  const backgroundColor =
    backgroundColorMap[collection.title] || defaultBackgroundColor

  return (
    <div className={`py-12 ${backgroundColor}`}>
      <div className="flex justify-between mb-8 content-container">
        <h3 className="text-3xl font-medium">{collection.title}</h3>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          View all
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-2 drop-shadow-xl small:grid-cols-4 gap-x-6 gap-y-24 small:gap-y-36 content-container">
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
