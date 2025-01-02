import React from 'react';

export default function Feature() {
  return (
    <div>
      <section className='py-8 bg-neutral-50 mb-40'>
        <h2
          className='text-center text-3xl font-bold md:text-5xl lg:text-center animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-blue-800 text-purple-950'
        >
          Decoding the Digital Revolution: Unlocking Technologys Potential
          <br /> By Nimra Razi | Tech Insights Nexus
        </h2>

        <p className='text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100'>
          Join Nimra Razi as she unravels the mysteries of the digital world, exploring groundbreaking innovations, decoding tech trends, and sharing insights to empower you in the ever-evolving realm of technology!
        </p>

        <div className='mx-auto max-w-7xl px-5'>
          <h1 className='text-3xl font-bold text-center my-8 text-purple-700 animate-color-change'>
            Exploring Our Categories
          </h1>
          <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100'>
            {[
              'Technology',
              'Artificial Intelligence',
              'HTML',
              'Virtual Reality',
              'Next.Js',
              'Web Development',
            ].map((category, index) => (
              <div
                key={index}
                className='relative group p-6 bg-white rounded-lg hover:bg-purple-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-700'
              >
                <p className='text-center text-lg font-semibold'>{category}</p>
                <div className='absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300'></div>
              </div>
            ))}
          </div>
        </div>
        <p className='text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10'>
          Explore our diverse categories and dive into the world of innovation! From the latest breakthroughs in Technology and Artificial Intelligence to mastering HTML, Next.js, and cutting-edge Web Development techniques. Step into the immersive realm of Virtual Reality and discover how these topics shape the future. There is something for everyone to learn and grow.
        </p>
      </section>
    </div>
  );
}
