/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import Globe from "react-globe.gl";
import { FaCheck, FaCopy } from "react-icons/fa6";
import { RiRadioButtonLine } from "react-icons/ri";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("harbdulmaleek@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="relative" id="about">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6 grid-cols-1 gap-5 h-full">
        {/* Meeee */}
        <div
          className={cn(
            "row-span-1 col-span-1 xl:row-span-3 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-card  border border-accent justify-between flex flex-col gap-4"
          )}
        >
          <div className="flex-1 items-center justify-center flex">
            <Image
              src="/assets/images/avatar.png"
              width={150}
              height={150}
              alt="avatar"
              className="w-full sm:h-[200px] grayscale h-fit object-contain"
            />
          </div>
          <div className="group-hover/bento:translate-x-2 transition duration-200">
            <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-xl">
              Hi, I'm Adams
            </div>
            <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
              With 3 years of experience, I have honed my skills in frontend and
              backend development, with a focus on animated 3D website
            </div>
          </div>
        </div>

        {/* Tech stack*/}
        <div
          className={cn(
            "row-span-1 col-span-1 xl:row-span-3  rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-card  border border-accent justify-between items-center flex flex-col gap-4"
          )}
        >
          <Image
            src="/assets/images/grid2.png"
            width={200}
            height={150}
            alt="avatar"
            className="w-full sm:h-[300px] h-fit object-contain"
          />
          <div className="group-hover/bento:translate-x-2 transition duration-200">
            <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 w-full text-xl">
              Tech stack
            </div>
            <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 w-full">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </div>
          </div>
        </div>

        {/* Globe */}
        <div
          className={cn(
            "row-span-1 col-span-1 xl:row-span-4  rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-card  border border-accent justify-between flex flex-col space-y-4"
          )}
        >
          <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
            <Globe
              height={326}
              width={326}
              backgroundColor="rgba(0, 0, 0, 0)"
              showAtmosphere
              showGraticules
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              labelsData={[
                {
                  lat: 40,
                  lng: -100,
                  text: "Rjieka, Croatia",
                  color: "white",
                  size: 15,
                },
              ]}
            />
          </div>
          <div>
            <p className="text-lg font-semibold">
              I’m very flexible with time zone communications & locations
            </p>
            <p className="grid-subtext">
              I&apos;m based in Abuja, Nigeria and open to remote work
              worldwide.
            </p>
            <Button
              className="w-full mt-10 bg-black-200 text-white-100 gap-2"
              onClick={handleCopy}
            >
              <RiRadioButtonLine size={16} className="text-green-500" />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Passion */}
        <div
          className={cn(
            " xl:col-span-2 xl:row-span-3 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-card  border border-accent justify-between items-center flex flex-col gap-4"
          )}
        >
          <Image
            src="/assets/images/grid3.png"
            width={200}
            height={150}
            alt="avatar"
            unoptimized
            className="w-full sm:h-[266px]  h-fit object-contain"
          />
          <div className="group-hover/bento:translate-x-2 transition duration-200">
            <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 w-full text-xl ">
              My Passion for Coding
            </div>
            <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 w-full">
              I love solving problems and building things through code.
              Programming isn&apos;t just my profession—it&apos;s my passion. I
              enjoy exploring new technologies, and enhancing my skills.
            </div>
          </div>
        </div>

        {/* Contact */}
        <div
          className={cn(
            " xl:col-span-1 xl:row-span-2 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-card  border border-accent justify-between items-center flex flex-col gap-4"
          )}
        >
          <Image
            src="/assets/images/grid4.png"
            width={200}
            height={150}
            alt="avatar"
            unoptimized
            className="w-full sm:h-[260px]  h-fit object-cover sm:object-top"
          />
          <div className="group-hover/bento:translate-x-2 transition duration-200 flex justify-center items-center flex-col">
            <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 w-full text-center">
              Contact me
            </div>
            <div
              className="font-sans font-normal text-xl w-full flex items-center gap-2 text-gray_gradient"
              onClick={handleCopy}
            >
              {hasCopied ? (
                <FaCheck size={20} className="text-green-800" />
              ) : (
                <FaCopy size={20} className="text-gray-400" />
              )}
              harbdulmaleek@gmail.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
