'use client';

import React from 'react';
import Link from 'next/link';

// Blog post interface
interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
}

//  Blog posts data
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'HTML Block of Web Development',
    description: 'Learn the basics of HTML and its importance in web development.',
    image: '/images/html.jpg',
  },
  {
    id: '2',
    title: 'CSS Essentials for Responsive Design',
    description: 'Understand how to create visually appealing and responsive layouts.',
    image: '/images/css.jpg',
  },
  {
    id: '3',
    title: 'JavaScript: The Dynamic Web',
    description: 'Explore JavaScript\'s role in adding interactivity to websites.',
    image: '/images/javascript.jpg',
  },
  {
    id: '4',
    title: 'Mastering React.js',
    description: 'Dive into the world of React components and hooks.',
    image: '/images/react.jpg',
  },
  {
    id: '5',
    title: 'Getting Started with Next.js',
    description: 'Next.js combines React with server-side rendering for modern web apps.',
    image: '/images/next.js.jpg',
  },
  {
        id: '6',
        title: 'Exploring TypeScript: Strongly Typed JavaScript',
        description: 'A beginner’s guide to TypeScript and its advantages for large-scale applications.',
        image: "/images/typescript.jpg",
      },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-purple-200 py-10 px-5">
      <h1 className="text-center text-4xl font-bold text-purple-950 mb-8 hover:text-blue-700 transition-colors duration-300">
         My Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-purple-600 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{post.description}</p>
              <Link
                href={`/posts/${post.id}`}
                className="text-blue-500 hover:underline font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
