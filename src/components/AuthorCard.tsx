import React from 'react';
import Link from 'next/link';
import Image from 'next/image';



const AuthorCard = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
      <div className='flex items-center animation-fadeIn'>
        <Image
          className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-purple-700'
          src="/images/image.jpg"
          alt="Author Image"
          width={160}
          height={160} 
          />
      


      <div>
        <h3 className='text-xl font-bold'>Nimra Razi</h3>
        <p className='text-slate-500'> Graphics Designer | Web Developer</p>

      </div>
    </div><p className='mt-4 text-black leading-relaxed'>Nimra Razi is a talented Graphics Designer and Web Developer known for creating stunning visuals and interactive, user-friendly websites. With a passion for creativity and a strong technical background, she blends art
        and technology to deliver impactful designs and seamless web experiences. </p><div className='mt-4 flex space-x-3'>
        <Link href="#" className='px-4 py-2 text-white bg-purple-800 rounded-md hover:bg-blue-700 transition duration-300 '>
          Twitter
        </Link>

        <Link href="#" className='px-4 py-2 text-white bg-purple-800 rounded-md hover:bg-blue-700 transition duration-300 '>
          LinkedIn
        </Link>

        <Link href="#" className='px-4 py-2 text-white bg-purple-800 rounded-md hover:bg-blue-700 transition duration-300 '>
          GitHub
        </Link>
      </div>
    </div>
  )
}

export default AuthorCard;
