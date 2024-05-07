import { Metadata } from "next"

const privacyPolicy = [
  {
    id: 1,
    title: "Information we collect",
    description:
      "SHOPNTROLLY recognizes the importance of maintaining your privacy. We value your privacy and appreciate your trust in us. This Policy describes how we treat user information we collect on http://www.Shopntrolly.com and other offline sources. This Privacy Policy applies to current and former visitors to our website and to our online customers. By visiting and/or using our website, you agree to this Privacy Policy.",
  },
  {
    id: 2,
    title: "Contact information",
    description:
      "We might collect your name, email, mobile number, phone number, street, city, state, pincode, country and ip address (For Delivery purpose only)",
  },
  {
    id: 3,
    title: "Payment and billing information.",
    description:
      "We might collect your billing name, billing address and payment method when you buy a ticket. We NEVER collect your credit card number or credit card expiry date or other details pertaining to your credit card on our website. Credit card information will be obtained and processed by our online payment partner CC Avenue.",
  },
  {
    id: 4,
    title: "Information you post.",
    description:
      "We collect information you post in a public space on our website or on a third-party social media site belonging to http://www.Shopntrolly.com",
  },
  {
    id: 5,
    title: "Demographic information.",
    description:
      "We may collect demographic information about you, events you like, events you intend to participate in, tickets you buy, or any other information provided by your during the use of our website. We might collect this as a part of a survey also.",
  },
  {
    id: 6,
    title: "Other information.",
    description:
      "If you use our website, we may collect information about your IP address and the browser youre using. We might look at what site you came from, duration of time spent on our website, pages accessed or what site you visit when you leave us.",
  },
  {
    id: 7,
    title: "We collect information in different ways.",
    description:
      "We collect information directly from you. We collect information directly from you when you register for an event or buy tickets. We also collect information if you post a comment on our websites or ask us a question through phone or email.",
  },
  {
    id: 8,
    title: "We get information about you from third parties.",
    description:
      "For example, if you use an integrated social media feature on our websites. The third-party social media site will give us certain information about you. This could include your name and email address.",
  },
  {
    id: 9,
    title: "Use of your personal information",
    description:
      "We might use the information you provide to contact you for confirmation of a purchase on our website or for other promotional purposes. We might also use the information to respond to your requests or questions.",
  },
  {
    id: 10,
    title: "Use of your personal information",
    description: "We might use information as otherwise permitted by law. ",
  },
  {
    id: 11,
    title: "Sharing of information with third-parties",
    description:
      "We will share information with third parties who perform services on our behalf.   This includes a third party who provide or sponsor an event, or who operates a venue where we hold events. Our partners use the information we give them as described in their privacy policies.",
  },
  {
    id: 12,
    title: "We will share information with the event organizers.  ",
    description:
      "We share your information with event organizers and other parties responsible for fulfilling the purchase obligation. The event organizers and other parties may use the information we give them as described in their privacy policies.",
  },
  {
    id: 13,
    title:
      "We may share information if we think we have to in order to comply with the law or to protect ourselves.  ",
    description:
      "We will share information to respond to a court order or subpoena. We may also share it if a government agency or investigatory body requests. Or, we might also share information when we are investigating potential fraud.",
  },
  {
    id: 14,
    title:
      "We may share information with any successor to all or part of our business.    ",
    description:
      "For example, if part of our business is sold we may give our customer list as part of that transaction.",
  },
  {
    id: 15,
    title:
      "We may share information for reasons not described in this policy.   ",
    description: "We will tell you before we do this.  ",
  },
  {
    id: 16,
    title: "Email Opt-Out  ",
    description:
      "You can opt out of receiving our marketing emails. To stop receiving our promotional emails, please email unsubscribe me on shopntrolly@gmail.com. It may take about ten days to process your request. Even if you opt out of getting marketing messages, we will still be sending you transactional messages through email and SMS about your purchases.",
  },
  {
    id: 17,
    title: "Third party sites ",
    description:
      "If you click on one of the links to third party websites, you may be taken to websites we do not control. This policy does not apply to the privacy practices of those websites. Read the privacy policy of other websites carefully. We are not responsible for these third party sites.",
  },
  {
    id: 18,
    title: "Updates to this policy  ",
    description:
      "This Privacy Policy was last updated on 01-04-2024. From time to time we may change our privacy practices. We will notify you of any material changes to this policy as required by law. We will also post an updated copy on our website. Please check our site periodically for updates.",
  },
  {
    id: 19,
    title: "Jurisdiction Jurisdiction   ",
    description:
      "If you choose to visit the website, your visit and any dispute over privacy is subject to this Policy and the website's terms of use. In addition to the foregoing, any disputes arising under this Policy shall be governed by the laws of India.  ",
  },
]

export const metadata: Metadata = {
  title: "Privacy Policy | Shop N Trolly",
  description: "SHOPNTROLLY - Easy Shopping.",
}

export default async function Aboutus() {
  return (
    <section>
      <div className="py-10">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
          <div className="grid gap-12 md:gap-0 md:grid-cols-1 lg:grid-cols-1 items-center lg:gap-24">
            <div className="lg:col-span-2">
              <div className="md:pr-6 lg:pr-0">
                <h2 className="text-3xl text-gray-950 dark:text-white font-bold">
                  Privacy policy{" "}
                </h2>
                <h4 className="mt-6 text-black font-semibold dark:text-gray-300">
                  This Privacy Policy applies to the Shopntrolly.com{" "}
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
