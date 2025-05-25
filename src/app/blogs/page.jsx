import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='w-10/12 mx-auto'>
            Blogs pages

            <div className='grid grid-cols-3 gap-6 '>
                {
                    blogs.map(blog => (
                        <div key={blog.slug} className='border rounded p-5'>
                            <h1>{blog.title}</h1>
                            <h1 className='py-4'>{blog.description}</h1>
                            <Link href={`/blogs/${blog.slug}`}>
                                <button className='border rounded p-2 bg-cyan-400 text-black'>View Details</button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

const blogs = [
    {
        "slug": "exploring-the-beauty-of-the-mountains",
        "title": "Exploring the Beauty of the Mountains",
        "description": "Discover the breathtaking views, peaceful moments, and adventurous trails hidden in the world's most stunning mountain ranges."
    },
    {
        "slug": "10-healthy-habits-to-start-today",
        "title": "10 Healthy Habits to Start Today",
        "description": "Start building a better lifestyle with these 10 simple and effective healthy habits for your body and mind."
    },
    {
        "slug": "getting-started-with-react-2025",
        "title": "Getting Started with React in 2025",
        "description": "A beginner-friendly guide to help you understand the basics of React and build your first modern web application."
    },
    {
        "slug": "mastering-freelancing-in-2025",
        "title": "Mastering Freelancing in 2025",
        "description": "From finding clients to setting your rates—learn how to succeed as a freelancer in today’s competitive market."
    },
    {
        "slug": "top-5-ai-tools-for-productivity",
        "title": "Top 5 AI Tools for Productivity",
        "description": "Boost your daily workflow with these cutting-edge AI tools designed to save time and increase efficiency."
    }
]


export default page;