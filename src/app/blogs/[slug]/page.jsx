import React from 'react';

const BlogSinglePage = ({params}) => {
    const blog = blogs.find(blog => blog.slug === params.slug);
    const { title, description, author, date } = blog;

    if (!blog) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-xl text-red-500">Blog not found!</h1>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto px-6 py-10">
            <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
                <h1 className="text-3xl font-bold mb-4">{title}</h1>
                <p className="text-sm text-gray-500 mb-4">By {author} — {date}</p>
                <hr className="mb-4" />
                <p className="text-lg text-gray-800">{description}</p>
                <div className="mt-6">
                    {/* <button
                        className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
                        onClick={() => window.history.back()}
                    >
                        ← Back to Blogs
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default BlogSinglePage;
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
