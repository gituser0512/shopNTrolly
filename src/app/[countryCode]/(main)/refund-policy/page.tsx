import { Metadata } from "next"

const privacyPolicy = [
  {
    id: 1,
    title: "Returns",
    content: [
      {
        id: 1,
        description:"Goods once sold can not be returned or exchanged without a valid reason."
      },
      {
        id: 2,
        description:" In case of online purchase customer can return the goods if it is not the same model or the product seems damaged."
      },
      {
        id: 3,
        description:" User can not return any used product."
      },
]
},
{
    id: 2,
    title: "Return and Refund policy will not be valid for the below reasons:",
    content: [
      {
        id: 1,
        description:"If you don't have Unboxing Video from starting to end."
      },
      {
        id: 2,
        description:" if you don't Email or WhatsApp us your full video for any Claim within 2 days after product delivered."
      },
      
]
},
{
    id: 2,
    title: "REPLACEMENTS & REFUNDS:",
    content: [
      {
        id: 1,
        description:"If a product is received and is in defective condition ( Dead On Arrival ) or damaged the product will be replaced with a new product. The product has to be shipped back to SHOP N TROLLY Office address with all original packing and accessories with no damage to serial numbers"
      },
      {
        id: 2,
        description:"Once the product is received we will dispatch your product on the same day. It is highly recommended to make a full  unboxing video of the product. Inform us immediately when you receive any defected or damaged goods when you receive it."
      },
      
]
}
  
]

export const metadata: Metadata = {
  title: "Refund Policy | Shop N Trolly",
  description: "SHOPNTROLLY - Easy Shopping.",
}

export default async function RefundPolicy() {
  return (
    <section>
      <div className="py-10">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
          <div className="grid gap-12 md:gap-0 md:grid-cols-1 lg:grid-cols-1 items-center lg:gap-24">
            <div className="lg:col-span-2">
              <div className="md:pr-6 lg:pr-0">
                <h2 className="text-3xl text-gray-950 dark:text-white font-bold">
                    Refund policy{" "}
                </h2>
                <h4 className="mt-6 text-black font-semibold dark:text-gray-300">
                  This Refund Policy applies to the Shopntrolly.com{" "}
                </h4>

                <ul
                  id="privacy-policy-list"
                  className="mt-6 text-gray-700 dark:text-gray-300"
                >
                  {privacyPolicy.map((item) => (
                    <li key={item.id} className="mb-4">
                      <h4 className="text-black text-xl font-medium dark:text-gray-300">
                        {item.title}{" "}
                      </h4>
                      <p>{item.content.map(item => (
                        item.description
                      ))}</p>
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
