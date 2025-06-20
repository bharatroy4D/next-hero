import Link from 'next/link';
import React from 'react';

const BlogPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-center mb-8">Our Blogs</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    blogs.map(blog => (
                        <div
                            key={blog.slug}
                            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300"
                        >
                            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                            <p className="text-gray-600 mb-3">{blog.description}</p>
                            <p className="text-sm text-gray-500 mb-4">By {blog.author} — {blog.date}</p>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
                                <Link href={`/blogs/${blog.slug}`}>Read More</Link>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BlogPage;

const blogs = [
    {
        slug: "introduction-to-react",
        title: "Introduction to React",
        description: "Learn the basics of React and how to get started with building components.",
        author: "John Doe",
        date: "2025-06-10"
    },
    {
        slug: "responsive-web-design",
        title: "Responsive Web Design Tips",
        description: "Discover how to build websites that look great on all devices using CSS and media queries.",
        author: "Jane Smith",
        date: "2025-06-12"
    },
    {
        slug: "nextjs-vs-react",
        title: "Next.js vs React: Which One to Choose?",
        description: "A comparison of Next.js and React for frontend development in 2025.",
        author: "Alex Khan",
        date: "2025-06-14"
    },
    {
        slug: "tailwind-css-guide",
        title: "Complete Guide to Tailwind CSS",
        description: "Master utility-first CSS with Tailwind. Learn how to build fast and clean UI.",
        author: "Emily Chen",
        date: "2025-06-15"
    },
    {
        slug: "context-api-vs-redux",
        title: "Context API vs Redux: Which Should You Use?",
        description: "Understand the differences between Context API and Redux for state management in React.",
        author: "Michael Roy",
        date: "2025-06-17"
    }
];
