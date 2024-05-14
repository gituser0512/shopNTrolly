import { Metadata } from "next"

const privacyPolicy = [
    {
        id: 1,
        description:
            "99% of All Prepaid orders are shipped within 24 hours. Orders placed over the Weekends will be dispatch on Monday.",
    },
    {
        id: 2,
        description:
            "For All Cash on Delivery (Limited Pin codes Only) orders Call Confirmation is Compulsory. COD orders will be dispatch next day after you place the Order, Our Logistics team or courier partners, NEVER asks to make any payment for any order(s) before delivery. Don't Pay on any Link for Cash on Delivery options if you get any Text Messages.",
    },
    {
        id: 3,
        description:
            "We are very Punctual about Fast Service and that's why we almost keep everything in ready stock to dispatch. Ignore Electric Products if you want Fast Delivery, Air Courier won't Allow Electric Products.",
    },
    {
        id: 4,
        description:
            "TRACKING YOUR SHIPMENT - Once your order has been dispatched, We''ll send you confirmation email with a tracking details. you'll be able to track it directly on the carrier's website.",
    },
    {
        id: 5,
        description:
            "We use DTDC/Expresbees/Delhivery Courier service for all over India and Deliver within standard 5-6 days.",
    },

]

export const metadata: Metadata = {
    title: "Shipping Policy | Shop N Trolly",
    description: "SHOPNTROLLY - Easy Shopping.",
}

export default async function ShippingPolicy() {
    return (
        <section>
            <div className="py-10 ">
                <div className="mx-auto px-6 max-w-6xl text-gray-500">
                    <div className="grid gap-12 md:gap-0 md:grid-cols-1 lg:grid-cols-1 items-center lg:gap-24">
                        <div className="lg:col-span-2">
                            <div className="md:pr-6 lg:pr-0">
                                <h2 className="text-3xl text-gray-950 dark:text-white font-bold">
                                    Shipping policy{" "}
                                </h2>
                                <h4 className="mt-6 text-black font-semibold dark:text-gray-300">
                                    This Shipping Policy applies to the Shopntrolly.com{" "}
                                </h4>

                                <ul id="privacy-policy-list" className="mt-6 text-gray-700 dark:text-gray-300">
                                    {privacyPolicy?.map((item) => (
                                        <li key={item.id} className="mb-4">
                                            <p>{item.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
