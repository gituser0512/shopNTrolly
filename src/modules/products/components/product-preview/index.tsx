import { Text } from "@medusajs/ui"

import { ProductPreviewType } from "types/global"

import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product)

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  })

  const outOfStock = pricedProduct.variants.map(i => i.inventory_quantity).filter((item ) => item !== 0)


  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      <div data-testid="product-wrapper">
        <Thumbnail
          thumbnail={productPreview.thumbnail}
          size="square"
          isFeatured={isFeatured}
        />
        <div className="flex flex-col txt-compact-medium mt-4 justify-between">
          <Text
            className="text-black  text-base md:text-lg"
            data-testid="product-title"
          >
            {productPreview.title}
          </Text>
          <Text
            className={
              `text-base md:text-lg ${
                outOfStock.length === 0 ? 'text-red-500' : 'text-green-500'
              }`
            }
            data-testid="product-title"
          >
            {outOfStock.length === 0 ?  'Out of stock' : 'In stock' }
          </Text>
          <div className="flex items-center gap-x-2">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
