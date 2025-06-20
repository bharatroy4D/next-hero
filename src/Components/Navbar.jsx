"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const handleLogin = () =>{
        router.push('/login')
    }
    const links = [
        { title: 'Home', path: '/home' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
        { title: 'Services', path: '/services' },
        { title: 'Blogs', path: '/blogs' },
    ]
    return (
        <div className='flex items-center justify-between container px-20 mx-auto py-3 bg-cyan-400'>
            <h1 className='text-xl font-bold text-green-700'>Next-Hero</h1>
            <div className='flex gap-8 text-gray-700 text-md font-semibold'>
                {
                    links.map(link => <Link className={`${pathName === link.path && "text-green-700"}`} key={link.path} href={link.path}> {link.title}</Link>)
                }
            </div>
            <button onClick={handleLogin} className='text-white font-semibold border rounded-md py-2 px-4 bg-green-400'>Login</button>
        </div>
    );
};

export default Navbar;