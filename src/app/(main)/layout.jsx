import Footer from '@/components/footer/Footer';
import Navbar from '@/components/nav/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <main>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </main>
    );
};

export default MainLayout;