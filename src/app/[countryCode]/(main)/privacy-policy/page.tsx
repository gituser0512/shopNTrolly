import { Metadata } from "next"
import Image1 from "../../../../../public/favicon_io/android-chrome-512x512.png"
import Image from "next/image"

export default async function Aboutus() {
    return (
        <section>
            <div className="pt-36">
                <div className="mx-auto px-6 max-w-6xl text-gray-500">
                    <div className="grid gap-12 md:gap-0 md:grid-cols-1 lg:grid-cols-1 items-center lg:gap-24">
                        <div className="lg:col-span-2">
                            <div className="md:pr-6 lg:pr-0">
                                <h2 className="text-3xl text-gray-950 dark:text-white font-bold">Privacy policy </h2>
                                <h4 className="mt-6 text-black font-semibold dark:text-gray-300">This Privacy Policy applies to the Shopntrolly.com  </h4>
                                <p className="mt-6 text-gray-700 dark:text-gray-300">SHOPNTROLLY recognizes the importance of maintaining your privacy. We value your privacy and appreciate your trust in us. This Policy describes how we treat user information we collect on http://www.Shopntrolly.com and other offline sources. This Privacy Policy applies to current and former visitors to our website and to our online customers. By visiting and/or using our website, you agree to this Privacy Policy. 
                                Shopntrolly.com is a property SHOPNTROLLY, a small startup started by a Shekhar and a Team. </p>
                                <h4 className="mt-6 text-black font-semibold dark:text-gray-300">Information we collect  </h4>
                                <p className="mt-6 text-gray-700 dark:text-gray-300">Contact information. We might collect your name, email, mobile number, phone number, street, city, state, pincode,  country and ip address (For Delivery purpose only)</p>
                                <h4 className="mt-6 text-black font-semibold dark:text-gray-300">Payment and billing information. </h4>
                                <p className="mt-6 text-gray-700 dark:text-gray-300">We might collect your billing name, billing address and payment method when you buy a ticket. We NEVER collect your credit card number or credit card expiry date or other details pertaining to your credit card on our website. Credit card information will be obtained and processed by our online payment partner CC Avenue. </p>
                                <h4 className="mt-6 text-black font-semibold dark:text-gray-300">Information you post. </h4>
                                <p className="mt-6 text-gray-700 dark:text-gray-300">We collect information you post in a public space on our website or on a third-party social media site belonging to http://www.Shopntrolly.com </p>
                                <h4 className="mt-6 text-black font-semibold dark:text-gray-300">Demographic information.  </h4>
                                <p className="mt-6 text-gray-700 dark:text-gray-300">We may collect demographic information about you, events you like, events you intend to participate in, tickets you buy, or any other information provided by your during the use of our website. We might collect this as a part of a survey also.  </p>
                                <h4 className="mt-6 text-black font-semibold dark:text-gray-300">Other information. </h4>
                                <p className="mt-6 text-gray-700 dark:text-gray-300">If you use our website, we may collect information about your IP address and the browser you're using. We might look at what site you came from, duration of time spent on our website, pages accessed or what site you visit when you leave us. We might also collect the type of mobile device you are using, or the version of the operating system your computer or device is running.  </p>
                                <h4 className="mt-6 text-black font-semibold dark:text-gray-300">We collect information in different ways. </h4>
                                <p className="mt-6 text-gray-700 dark:text-gray-300">We collect information directly from you. We collect information directly from you when you register for an event or buy tickets. We also collect information if you post a comment on our websites or ask us a question through phone or email. </p>
                                <h4 className="mt-6 text-black font-semibold dark:text-gray-300">We get information about you from third parties.  </h4>
                                <p className="mt-6 text-gray-700 dark:text-gray-300">For example, if you use an integrated social media feature on our websites. The third-party social media site will give us certain information about you. This could include your name and email address.</p>


                            </div>

                        </div>
                        {/* <div className="overflow-hidden lg:col-span-3 border bg-white dark:bg-[--card-dark-bg] rounded-[--card-border-radius] border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
                          
                                    <Image 
                                        src={Image1} 
                                        alt="image"
                                        className="w-full h-full object-cover object-center"
                                        width={300}
                                        height={200}
                                    />
                          
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
