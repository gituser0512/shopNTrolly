"use client"

import { ChangeEvent } from "react"

import FilterRadioGroup from "@modules/common/components/filter-radio-group"

export type SortOption = "brand" | "model" 

type SortCategoriesProps = {
    sortByCategory: SortOption
  setQueryParams: (name: string, value: SortOption) => void
  'data-testid'?: string
}

const sortOptions = [
  {
    value: "brand",
    label: "Brands",
  },
  {
    value: "model",
    label: "Models",
  },
]

const sortCategories = ({ 'data-testid': dataTestId, sortByCategory, setQueryParams }: SortCategoriesProps) => {
  const handleChange = (e: ChangeEvent<HTMLButtonElement>) => {
    const newSortBy = e.target.value as SortOption
    setQueryParams("sortBy", newSortBy)
  }

  return (
    <FilterRadioGroup
      title="Sort by"
      items={sortOptions}
      value={sortByCategory}
      handleChange={handleChange}
      data-testid={dataTestId}
    />
  )
}

export default sortCategories
