import { Text, clx } from "@medusajs/ui"
import Image from "next/image"
import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Logo from "../../../../../public/favicon_io/icon-touch.png"
import Link from "next/link"
import Divider from "@modules/common/components/divider"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t  w-full bg-black">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-4 md:py-10">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-white hover:text-yellow-500 uppercase flex gap-2 items-center"
            >
              <Image src={Logo} alt="logo" width={100} height={100} className="border rounded-md"/>
              <h3 className="text-2xl hidden md:block">Shop N Trolly</h3>
            </LocalizedClientLink>
            <div className="flex flex-col gap-[4px] w-full justify-between text-ui-fg-muted mt-3">
              <Text className="txt-compact-small">
                Address: 102, Aarya Residency, Prayeja City Rd,
                Pandurang Industrial Area, Nanded, Pune, Pin - 411041, Maharashtra
              </Text>
              <Text className="txt-compact-small">
                Email: hello@in.shopntrolly.com
              </Text>
              <Text className="txt-compact-small">
                Phone: +91 9156834305 / +91 8007529003
              </Text>

            </div>
            <Divider />
            <div className="flex w-full justify-between text-ui-fg-muted mt-4">
              <Text className="txt-compact-small">
                © {new Date().getFullYear()} Shop N Trolly. All rights reserved.
              </Text>
              {/* <MedusaCTA /> */}
            </div>
          </div>
          <div className=" gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="text-base text-white">
                  Categories
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-white",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-white"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="text-lg font-medium text-white">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-1": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-yellow-500 text-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="text-lg font-medium text-white">Legal</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <Link
                    href="/aboutus"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-yellow-500 text-base"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-yellow-500 text-base"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-yellow-500 text-base"
                  >
                    Terms Of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-yellow-500 text-base"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refund-policy"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-yellow-500 text-base"
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/in/shipping-policy"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-yellow-500 text-base"
                  >
                    Shipping Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
