import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='bg-yellow-200 text-black'>Dashboard Layout</div>
            {children}
            <footer>Footer layout</footer>
        </div>
    );
};

export default DashboardLayout;