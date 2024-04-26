"use client"
import ReactPlayer from "react-player/youtube"

const Testimonials = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 flex">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-6xl flex flex-col items-center">
        <h2 className="text-center text-2xl md:text-3xl font-medium text-gray-900 mb-12">
          Testimonials
        </h2>
        <div className="flex justify-between items-center flex-wrap lg:flex-nowrap gap-4 md:gap-10">
          <div className="flex-grow order-2 lg:order-1">
            <blockquote className="text-lg text-gray-900 sm:text-lg max-w-[70ch]">
              <p>
                I recently purchased a Rainbow Unicorn Color Kids Art Drawing
                Set SHOPNTROLLY and I have to say, My daughter liked the art
                set. It is a small suitcase and the quality of colors is very
                good and there are 32 shades of colors. My daughter liked it
                very much because it has a brush set, watercolor, sketch pen,
                oil pastel, and colored pencil all in one kit. 💕
              </p>
            </blockquote>
            <div className="flex items-center justify-start gap-2 mt-4">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="avatar"
              />
              <p className="font-medium text-gray-900 ">Rutwa's Mom</p>
            </div>
          </div>
          <div className="flex-grow order-1 lg:order-2 w-full">
            {/* <ReactPlayer
              url="https://youtu.be/pwMbCJoLmDc"
              width="540px"
              height="360px"
              controls
            /> */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/pwMbCJoLmDc?si=rx3M1ZzuxnFH_cPb"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full aspect-video"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
