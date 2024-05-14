import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import HotSales from "@modules/home/components/hotsales"
import Testimonials from "@modules/home/components/testimonials"
import InfiniteScroll from "@modules/home/components/infiniteScroll"

export const metadata: Metadata = {
  title: "Home | Shop N Trolly",
  description: "SHOPNTROLLY - Easy Shopping.",
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 9)
    if (!collections) {
      return null
    }

    const sortedCollections = collections.sort((a, b) => {
      const aCollectionId = parseInt(a.metadata.collection_id as string, 10)
      const bCollectionId = parseInt(b.metadata.collection_id as string, 10)

      return aCollectionId - bCollectionId
    })

    const collectionIds = sortedCollections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id.toString()] }, // Cast id to string
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection
        if (sortedCollections) {
          collection = sortedCollections.find(
            (collection) =>
              collection.id ===
              (queryParams?.collection_id as string[])?.join("") // Assert collection_id as string[]
          )
        }
        if (!collection) {
          return
        }
        collection.products = response.products as unknown as Product[]
      })
    )

    return sortedCollections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <InfiniteScroll />
      <div className="">
        <ul className="flex flex-col gap-x-16">
          {collections && (
            <FeaturedProducts collections={collections} region={region} />
          )}
        </ul>
      </div>
      {/* <HotSales /> */}
      <Testimonials />
    </>
  )
}
