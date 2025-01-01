import React from 'react';
import CommentSection from '@/components/CommentSection';
import AuthorCard from '@/components/AuthorCard';
import Footer from '@/components/Footer';


const posts = [
  {
    id: "1",
    title: "HTML Block of Web Development",
    description: "Learn the basics of HTML and its importance in web development.\nHTML is the foundation that structures content on web pages, defining elements like headings, paragraphs, images, and links. Mastering HTML ensures semantic, accessible, and maintainable code, enabling the creation of responsive and functional websites.",
    image: "/images/html.jpg",
  },
  {
    id: "2",
    title: "CSS Essentials for Responsive Design",
    description: "CSS brings style to the web.\nUnderstand how to create visually appealing and responsive layouts.CSS brings style to the web by defining the look and layout of web pages and responsive designs that adapt to different screen sizes.",
    image: "/images/css.jpg",
  },
  {
    id: "3",
    title: "JavaScript: The Dynamic Web",
    description: "Explore JavaScript’s role in adding interactivity and functionality to websites.\nLearn the basics of this essential scripting language to build dynamic, interactive, and engaging user experiences..",
    image: "/images/javascript.jpg",
  },
  {
    id: "4",
    title: "Mastering React.js",
    description: "React.js makes building dynamic UI simple and efficient.\nReact.js simplifies building dynamic UIs with reusable components and powerful hooks. Dive into creating seamless, responsive, and efficient web applications.",
    image: "/images/react.jpg",
  },
  {
    id: "5",
    title: "Getting Started with Next.js",
    description: "Next.js combines React with server-side rendering.\nNext.js integrates React with server-side rendering, improving performance and SEO. Learn its key features like static site generation, routing, and API integration for modern web development..",
    image: "/images/next.js.jpg",
  },
  {
    id: "6",
    title: "Exploring TypeScript",
    description: "TypeScript adds type safety to JavaScript.\nTypeScript adds type safety to JavaScript, reducing errors and improving code maintainability. Learn why it enhances productivity and scalability, making it a key tool for modern developers.",
    image: "/images/typescript.jpg",
  },
];

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className='text-2xl font-bold text-center mt-10'>Post Not Found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className='mt-4 text-justify'>
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className='max-w-3xl mx-auto p-5'>
      <h1 className='md:text-4xl text-3xl font-bold text-purple-600 text-center'>
        {post.title}
      </h1>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className='w-full h-auto rounded-md mt-4'
        />
      )}

      <div className='mt-6 text-lg text-slate-700'>
        {renderParagraphs(post.description)}
      </div>

      <CommentSection postId={post.id} />
      <AuthorCard />
      <Footer />
    </div>
  );
}

