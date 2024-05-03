import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"
import { SortCategoryOption } from "../components/refinement-list/sort-categories"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
  sortByCategory,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
  sortByCategory?: SortCategoryOption
}) => {
  const pageNumber = page ? parseInt(page) : 1

  return (
    <div
      className="flex flex-col small:flex-row small:items-start py-6 content-container"
      data-testid="category-container"
    >
      <RefinementList
        sortBy={sortBy || "created_at"}
        sortByCategory={sortByCategory || "brand"}
      />
      <div className="w-full ">
        <div className="mb-8 text-2xl-semi">
          <h1 data-testid="store-page-title">All Products</h1>
        </div>
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sortBy || "created_at"}
            page={pageNumber}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default StoreTemplate
