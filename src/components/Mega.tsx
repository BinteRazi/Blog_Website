import React from 'react';
import BlogCard from '../components/BlogCard';
import { title } from 'process';

export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "HTML Basics: Building Blocks of Web Development",
      description: "An introductory guide to HTML and its foundational role in web development.",
      date: "2024-12-20",
      imageUrl: "/images/html.jpg",
    },
    {
      id: "2",
      title: "CSS Essentials for Modern Design",
      description: "Learn how CSS transforms HTML into visually appealing web pages.",
      date: "2024-12-22",
      imageUrl: "/images/css.jpg",
    },
    {
      id: "3",
      title: "JavaScript for Beginners",
      description: "Discover the power of JavaScript for creating interactive web applications.",
      date: "2024-12-23",
      imageUrl: "/images/javascript.jpg",
    },
    {
      id: "4",
      title: "Getting Started with React",
      description: "Understand the basics of React and how to build reusable components.",
      date: "2024-12-24",
      imageUrl: "/images/react.jpg",
    },
    {
      id: "5",
      title: "Mastering Next.js for Modern Web Apps",
      description: "Learn how Next.js enhances React with server-side rendering and more.",
      date: "2024-12-25",
      imageUrl: "/images/next.js.jpg",
    },
    {
      id: "6",
      title: "Exploring TypeScript: Strongly Typed JavaScript",
      description: "A beginners guide to TypeScript and its advantages for large-scale applications.",
      date: "2024-12-26",
      imageUrl: "/images/typescript.jpg",
    },
  ];

  return (
    <div className='my-8'>
      <h1 className='text-3xl font-bold text-center my-8 text-purple-800 animate-color-change'>
        Exploring the World of AI and Technology
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {posts.map((post, index) => (
          <div className='fade-in' key={post.id}>
            <div className='blog-card'>
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
