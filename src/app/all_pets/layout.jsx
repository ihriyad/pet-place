import Footer from '@/components/footer/Footer';
import Navbar from '@/components/nav/Navbar';
import React from 'react';

const AllPetsLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default AllPetsLayout;