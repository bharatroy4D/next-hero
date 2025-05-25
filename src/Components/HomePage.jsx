import Link from 'next/link';
import React from 'react';

const HomePage = () => {
    return (
    <div className='flex  gap-10'>
            <Link href={'/home/historical'}>Historical</Link>
            <Link href={'/home/mission'}>Mission</Link>
        </div>
    );
};

export default HomePage;