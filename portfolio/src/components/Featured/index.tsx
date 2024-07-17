/* eslint-disable @next/next/no-img-element */
"use client";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import Box from "../Box";
import { motion } from "framer-motion";
import image_1 from "../../../public/commercial_projects/tui_share.png";
import image_2 from "../../../public/commercial_projects/coke_shre.jpg";
import image_3 from "../../../public/commercial_projects/jolly-rancher_share.jpg";
import image_4 from "../../../public/commercial_projects/pepsi_share.png";

const heading = (side: string) => {
  if (side === "front") {
    return "Tui";
  } else if (side === "back") {
    return "Jolly Ranchers";
  } else if (side === "left") {
    return "Coca-Cola Spiced";
  } else if (side === "right") {
    return "Pepsi Pulse";
  }
};

const description = (side: string) => {
  if (side === "front") {
    return image_1.src;
  } else if (side === "back") {
    return image_3.src;
  } else if (side === "left") {
    return image_2.src;
  } else if (side === "right") {
    return image_4.src;
  }
};

const link = (side: string) => {
  if (side === "front") {
    return "https://open.spotify.com/presents/tui";
  } else if (side === "back") {
    return "https://open.spotify.com/presents/jolly-rancher";
  } else if (side === "left") {
    return "https://open.spotify.com/presents/coca-cola-spiced";
  } else if (side === "right") {
    return "https://open.spotify.com/presents/pepsi";
  }
};

const Featured = () => {
  const ref = useRef<HTMLCanvasElement | null>(null);

  const [side, setSide] = useState("");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="h-full"
    >
      <h1 className="">Featured</h1>
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
        <div>
          <div className=" bg-[#33323D] p-3 grid grid-cols-4 gap-3 md:grid-cols-4 lg:grid-cols-4">
            <a href="https://open.spotify.com/presents/tui" target="_blank">
              <div className="w-full h-full flex justify-center items-center po">
                <img src={image_1.src} alt="Campaign 1" />
              </div>
            </a>
            <a
              href="https://open.spotify.com/presents/coca-cola-spiced"
              target="_blank"
            >
              <div className="w-full h-full flex justify-center items-center">
                <img src={image_2.src} alt="Campaign 2" />
              </div>
            </a>
            <a
              href="https://open.spotify.com/presents/jolly-rancher"
              target="_blank"
            >
              <div className="w-full h-full flex justify-center items-center">
                <img src={image_3.src} alt="Campaign 3" />
              </div>
            </a>
            <a href="https://open.spotify.com/presents/pepsi" target="_blank">
              <div className="w-full h-full flex justify-center items-center">
                <img src={image_4.src} alt="Campaign 4" />
              </div>
            </a>
          </div>
        </div>
        <div>
          <p>
            Check out some of the currently live campaigns that I worked on
            together with the digital and audio teams in Forever Audio!
          </p>
          <p>
            These campaigns are specifically created for Spotify mobile app and
            won&apos;t run on a desktop or in a browser. That is why I am adding
            QR codes that can be scanned with any mobile device - once scanned,
            it will open the campaign in your Spotify. All of these feature
            audio as well, so best to unmute your phone and have fun!
            Alternativelly, if you already are viewing this page on a mobile
            device, you can click on the campaign image itself to launch the
            campaign.
          </p>
        </div>
      </div>
      <motion.h2
        key={heading(side)}
        className="pb-12"
        animate={{
          opacity: [0, 1],
          x: ["50%", "0%"],
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
      >
        {heading(side)}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          key={heading(side)}
          className="aspect-square"
          animate={{
            opacity: [0, 1],
            x: ["25%", "0%"],
            transition: { duration: 0.3, ease: "easeInOut", delay: 0.1 },
          }}
        >
          <a href={link(side)} target="_blank">
            <img
              src={description(side)}
              alt=""
              className="w-full h-full object-contain object-center"
            />
          </a>
        </motion.div>
        <div className="aspect-square bg-[#33323D] w-full relative">
          <p className="absolute text-white text-xs bottom-1 right-2">
            To pause the animation, simply hover on the QR code you want to scan
          </p>
          <Canvas
            style={{ height: "100%", width: "100%" }}
            camera={{ position: [0, 0, 1.5] }}
            ref={ref}
          >
            <Box setSide={setSide} />
          </Canvas>
        </div>
      </div>
    </motion.section>
  );
};

export default Featured;
