"use client";
import React from 'react';
import Image from 'next/image';
import {TypeAnimation} from "react-type-animation";
const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-6">
        <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
           <span className='text-transparent bg-clip-text bg-gradient-to-br from-white via-[#FFA500] to-[#FF8C00]'>
            Hi,  This is Abhay{" "}
            </span>  
            <br/>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'The Developer',
        1000, // wait 1s"
        'Web Developer',
        1000,
        'UI/UX Designer',
        1000,
        'Outsystems Dev',
        1000
      ]}
      wrapper="span"
      speed={50}
      //style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
        </h1>
        <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">
        Full-stack developer with 2+ years of experience in developing scalable web applications and websites, improving company efficiency and productivity. Do collaborative work with other developers and evolved front and back-end stacks throughout my career, increasing revenue by ~13%</p>
        <div>
            <button className='px-6 py-4 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-white via-[#FFA500] to-[#FF8C00] hover:bg-slate-400'>Hire me</button>
            <button className='px-6 py-4 w-full sm:w-fit rounded-full text-white border border-white hover:bg-slate-400 mt-3'>Download CV</button>
        </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-6">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero5.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={'300'}
              height={'300'}
            />
          </div>
            
        </div>
        </div>
    </section>
  )
}

export default HeroSection