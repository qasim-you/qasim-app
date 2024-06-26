import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 z-0">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          layout="fill" // Ensures the image fills the container
          className="footer-image opacity-50" // Apply opacity to the image
        />
      </div>

      <div className="relative flex flex-col items-center z-10">
        <h1 className="heading lg:max-w-[45vw] text-white">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:qasimyousaf094@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="relative flex mt-16 md:flex-row flex-col justify-between items-center z-10">
        <p className="md:text-base text-sm md:font-normal font-light text-white-200">
          Copyright © 2024 Adrian Hajdin
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {info.img && (
                <Image
                  src={info.img} // Dynamic image source
                  alt="icons"
                  width={20}
                  height={20}
                  // Add optional optimization and placeholder props
                  // placeholder="blur" // Example placeholder
                  // blurDataURL="data:..." // Example blur data URL
                  // onLoadingComplete={(image) => console.log('Image loaded!')} // Optional loading hook
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
