import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import HeroImg from "../../../../../public/hero.jpg"

const Hero = () => {
  return (
    <div className="h-[45vh] md:h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-3xl-semi drop-shadow-md shadow-black">
          Explore the Our Collection
        </h1>
        <p className="text-lg-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          Unlock the Canvas of Collection: Where Artistry Finds its Home!
        </p>
        <UnderlineLink href="/store">
          <p className="font-semibold">Explore products</p>
        </UnderlineLink>
      </div>
      <Image
        // src="https://images.pexels.com/photos/4464822/pexels-photo-4464822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        src={HeroImg}
        loading="eager"
        priority={true}
        quality={90}
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0 object-cover blur-[2px] z-0"
        draggable="false"
        fill
        sizes="100vw"
      />
    </div>
  )
}

export default Hero
