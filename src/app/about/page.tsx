"use client";
import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="bg-purple-200 min-h-screen flex items-center justify-center">
      <section className="w-full" id="about">
        <div className="md:grid md:grid-cols-2 gap-10 items-center py-14 px-6 xl:gap-16 sm:py-20 xl:px-24">
          <Image
            src="/images/about.jpg"
            width={650}
            height={250}
            alt="About Me"
            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h1 className="p-3 text-center text-3xl font-bold md:text-5xl lg:text-center text-purple-950 hover:text-blue-700 transition-colors duration-300">
              About Us
            </h1>
            <p className="text-base lg:text-lg leading-relaxed text-gray-800 bg-gray-50 shadow-lg p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              Welcome to my blog! I’m a forward-thinking web developer with a knack for creating visually captivating, interactive, and highly functional
              web experiences. Leveraging powerful technologies like React, Next.js, TypeScript, and Tailwind CSS, I transform bold ideas into reality.
              My work blends creativity and precision to craft seamless digital experiences that not only engage but leave a lasting impression. Whether
              it’s tackling complex challenges or designing elegant solutions, I’m dedicated to sharing my journey, insights, and expertise with you
              through this platform.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
