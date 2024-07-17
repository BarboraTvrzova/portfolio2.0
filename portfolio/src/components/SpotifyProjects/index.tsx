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

const SpotifyProjects = () => {
  const ref = useRef<HTMLCanvasElement | null>(null);

  const [side, setSide] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="h-full"
    >
      <h1 className="">Commercial projects</h1>
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
        <div className="">
          <div className=" bg-[#33323D] p-3 grid grid-cols-4 gap-3 md:grid-cols-4 lg:grid-cols-4">
            <div className="w-full h-full flex justify-center items-center">
              <img src={image_1.src} alt="" />
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <img src={image_2.src} alt="" />
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <img src={image_3.src} alt="" />
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <img src={image_4.src} alt="" />
            </div>
          </div>
        </div>
        <div>
          <p>
            Check out some of the currently live campaigns that I worked on
            together with the digital and audio teams in Forever Audio!
          </p>
          <p>
            These campaigns are specifically created for Spotify mobile app and
            won&apos;t run on a desktop, that is why I am adding QR codes. Once
            you scan it, it will open Spotify app on the campaign. All of these
            feature audio as well, so best to unmute your phone and have fun!
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
          <img
            src={description(side)}
            alt=""
            className="w-full h-full object-contain object-center"
          />
        </motion.div>
        <div className="aspect-square bg-[#33323D] w-full relative">
          <p className="absolute text-white text-xs bottom-1 right-2">
            To pause the animation, simply hover on the QR code you want to scan
          </p>
          <Canvas
            style={{ height: "100%", width: "100%" }}
            camera={{ position: [0, 0, 1.5] }}
            className=""
            ref={ref}
          >
            <Box setSide={setSide} />
          </Canvas>
        </div>
      </div>
    </motion.div>
  );
};

export default SpotifyProjects;
