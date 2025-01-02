import React from 'react';
import CommentSection from '@/components/CommentSection';
import AuthorCard from '@/components/AuthorCard';
import Footer from '@/components/Footer';


const posts = [
  {
    id: "1",
    title: "HTML Block of Web Development",
    description: "Learn the Basics of HTML and Its Importance in Web Development: \nHTML (HyperText Markup Language) is the cornerstone of every web page, providing the structure and framework for content. It defines elements like headings, paragraphs, images, links, and more, organizing them in a way that browsers can render and users can interact with. Mastering HTML is crucial for writing clean, semantic code that enhances accessibility and ensures search engine optimization (SEO).Whether you're just starting your web development journey or aiming to refine your skills, understanding HTML is a vital step toward creating responsive, user-friendly, and maintainable websites.",
    image: "/images/html.jpg",
  },
  {
    id: "2",
    title: "CSS Essentials for Responsive Design",
    description: "CSS: The Power of Web Styling: \nCSS (Cascading Style Sheets) is the backbone of web design, bringing life and visual appeal to websites. It defines the colors, typography, spacing, and overall layout of web pages, creating a seamless and engaging user experience. Beyond just aesthetics, CSS is essential for responsive design, allowing websites to adapt effortlessly to different screen sizes and devices. Whether you're building a simple personal blog or a complex e-commerce platform, CSS ensures that your content not only looks stunning but is also functional and accessible. With CSS, you can craft visually striking designs, implement animations, and maintain consistency across your web projects.",
    image: "/images/css.jpg",
  },
  {
    id: "3",
    title: "JavaScript: The Dynamic Web",
    description: "Explore JavaScripts Role in Adding Interactivity and Functionality to Websites: \nJavaScript is the powerhouse behind dynamic and interactive web experiences. It transforms static web pages into engaging platforms by enabling features like animations, real-time updates, form validations, and interactive content. As the essential scripting language of the web, JavaScript works seamlessly with HTML and CSS to enhance user engagement and functionality.By mastering JavaScript, you gain the ability to create responsive interfaces, build complex web applications, and integrate APIs for dynamic data fetching. From developing simple interactions like dropdown menus to crafting advanced frameworks like React or Vue, JavaScript is the foundation for modern web development.",
    image: "/images/javascript.jpg",
  },
  {
    id: "4",
    title: "Mastering React.js",
    description: "React.js Makes Building Dynamic UI Simple and Efficient: \nReact.js simplifies the process of building dynamic user interfaces (UIs) by promoting the use of reusable components and powerful hooks. With its component-based architecture, developers can break down complex UIs into smaller, manageable pieces, making code more modular and maintainable. Reacts virtual DOM ensures efficient rendering, reducing performance bottlenecks and improving the overall user experience.By using React, you can create seamless, responsive, and scalable web applications that are both intuitive and performant. Its ecosystem of libraries, such as React Router for navigation and Redux for state management, enhances productivity and simplifies building feature-rich applications.",
    image: "/images/react.jpg",
  },
  {
    id: "5",
    title: "Getting Started with Next.js",
    description: "Next.js Combines React with Server-Side Rendering: \nNext.js seamlessly integrates React with server-side rendering (SSR), enhancing both performance and search engine optimization (SEO). By rendering pages on the server, Next.js ensures faster load times, improved initial page loads, and better indexing by search engines, resulting in a more optimized web experience. Next.js offers powerful features like static site generation (SSG) and dynamic routing, allowing you to build fast, scalable, and modern web applications. With SSG, content is pre-rendered at build time, delivering ultra-fast load speeds while reducing the load on servers. Its intuitive routing system simplifies navigation, ensuring a seamless user experience.",
    image: "/images/next.js.jpg",
  },
  {
    id: "6",
    title: "Exploring TypeScript",
    description: "TypeScript Adds Type Safety to JavaScript: \nTypeScript extends JavaScript by introducing static typing, providing stronger type safety that helps reduce runtime errors and improve code maintainability. With TypeScript, you can define clear types for variables, functions, and objects, enabling your code to catch errors at compile time rather than at runtime. This reduces the likelihood of common programming mistakes, such as undefined variables or incorrect data structures. By enforcing type definitions, TypeScript enhances productivity by allowing developers to write more predictable and robust code. It also facilitates better collaboration within teams, as the added type safety ensures that everyone works with a consistent structure. Additionally, TypeScript scales well with large projects, helping to maintain code quality as applications grow in size and complexity.",
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

