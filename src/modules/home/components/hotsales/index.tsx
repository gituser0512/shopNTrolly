import Image from "next/image"
import Hotsale from "../../../../../public/home-page-01-hero-full-width.jpg"
import UnderlineLink from "@modules/common/components/underline-link"

const HotSales = () => {
  return (
    <div className="h-[45vh] md:h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center ">
        <h1 className="text-2xl font-semibold md:text-3xl-semi mb-4 drop-shadow-md shadow-black">
          New arrivals are here
        </h1>
        <p className="text-sm md:text-lg-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          The new arrivals have, well, newly arrived. Check out the latest
          options from our summer small-batch release while they're still in
          stock.
        </p>
        <UnderlineLink href="/store">
          <p className="font-semibold">Explore products</p>
        </UnderlineLink>
      </div>
      <Image
        src={Hotsale}
        loading="eager"
        priority={true}
        quality={90}
        alt="Photo"
        className="absolute inset-0 object-cover z-0 brightness-50"
        draggable="false"
        fill
        sizes="100vw"
      />
    </div>
  )
}

export default HotSales
