import { Button, Input, Label, Textarea } from "@medusajs/ui"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Shop N Trolly",
  description: "SHOPNTROLLY - Easy Shopping.",
}

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-wrap items-start justify-start md:justify-center gap-10 md:gap-8 lg:gap-12 container px-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              We'd love to hear from you. Fill out the form and we'll get back
              to you as soon as possible.
            </p>
          </div>
          <div className="space-y-4">
            <form
              className="grid gap-4"
              action="https://formsubmit.co/hello@shopntrolly.com"
              method="POST"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    className="text-gray-700 dark:text-gray-300 text-base font-medium"
                    htmlFor="first-name"
                  >
                    First name
                  </Label>
                  <Input
                    className="bg-white dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-500"
                    id="first-name"
                    name="first_name"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    className="text-gray-700 text-base font-medium dark:text-gray-300"
                    htmlFor="last-name"
                  >
                    Last name
                  </Label>
                  <Input
                    className="bg-white dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-500"
                    id="last-name"
                    placeholder="Enter your last name"
                    name="last_name"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label
                  className="text-gray-700 text-base font-medium dark:text-gray-300"
                  htmlFor="email"
                >
                  Email
                </Label>
                <Input
                  className="bg-white dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-500"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <Label
                  className="text-gray-700 text-base font-medium dark:text-gray-300"
                  htmlFor="phone"
                >
                  Phone number
                </Label>
                <Input
                  className="bg-white dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-500"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone"
                />
              </div>
              <div className="space-y-2">
                <Label
                  className="text-gray-700 text-base font-medium dark:text-gray-300"
                  htmlFor="message"
                >
                  Message
                </Label>
                <Textarea
                  className="min-h-[100px] bg-white dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-500"
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                />
              </div>
              <Button
                type="submit"
                size="large"
                className="bg-[#ffc600] hover:bg-[#ffc600]/40 text-black dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 w-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
        <div className="flex items-center">
          <div className="grid gap-4 bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800">
            <div className="space-y-2">
              <p className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                Shop N Trolly
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-md font-medium text-gray-600 dark:text-gray-400">
                Email: hello@shopntrolly.com
              </p>
              <p className="text-md font-medium text-gray-600 dark:text-gray-400">
                Phone: +91 9156834305 / +91 8007529003
              </p>
            </div>
          </div>
          {/* <div className="ml-8">
              <Image
                alt="Office Location"
                className="rounded-lg shadow-lg"
                height={300}
                src={Logo}
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
            </div> */}
        </div>
      </div>
    </section>
  )
}
