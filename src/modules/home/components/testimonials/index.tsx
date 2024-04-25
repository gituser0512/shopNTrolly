import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import HeroImg from "../../../../../public/hero.jpg"

const Testimonials = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 flex">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl flex flex-col items-center">
        <h2 className="text-center text-3xl font-semibold text-gray-900 mb-8">
          Testimonials
        </h2>
        <div className="flex justify-between items-center flex-wrap lg:flex-nowrap gap-4 md:gap-10">
          <div className="flex-grow order-2 lg:order-1">
            <blockquote className="text-lg font-medium text-gray-900 sm:text-lg max-w-[60ch]">
              <p>
                I recently purchased a pair of heels from your shop and I have
                to say, I am absolutely thrilled with them! They fit perfectly
                and the quality is top notch. I love the stylish look and feel
                of the heels and I can&apos;t wait to wear them again. The
                shipping was fast and the customer service was amazing. I highly
                recommend Shoptrolly for all your heel needs! 💕
              </p>
            </blockquote>
            <div className="flex items-center justify-start gap-2 mt-4">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="avatar"
              />
              <p className="font-medium text-gray-900 ">Wanda Maximoff</p>
            </div>
          </div>
          <div className="flex-grow order-1 lg:order-2">
            <Image
              src="https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Your Image Description"
              className="w-full h-full rounded-lg shadow-lg aspect-auto"
              height={600}
              width={600}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
