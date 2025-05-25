import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <h1>This historical page</h1>
            <Link href={'/vission'}>Vission</Link>
        </div>
    );
};

export default page;