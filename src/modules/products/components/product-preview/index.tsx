import { Badge, Text } from "@medusajs/ui"

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

  const outOfStock = pricedProduct.variants
    .map((i) => i.inventory_quantity)
    .filter((item) => item !== 0)

  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      <div data-testid="product-wrapper" className="relative">
        <Thumbnail
          thumbnail={productPreview.thumbnail}
          size="square"
          isFeatured={isFeatured}
          className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
        />
        {outOfStock.length === 0 && (
          <Badge
            className={`text-sm text-red-500 absolute left-2 top-2 z-10`}
            data-testid="product-title"
          >
            Out of stock
          </Badge>
        )}
        <div className="flex flex-col txt-compact-medium mt-4 justify-between">
          <Text
            className="text-black  text-base md:text-lg"
            data-testid="product-title"
          >
            {productPreview.title}
          </Text>

          <div className="flex items-center gap-x-2">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
