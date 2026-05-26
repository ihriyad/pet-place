import Footer from '@/components/footer/Footer';
import Navbar from '@/components/nav/Navbar';
import PetCareTips from '@/components/statics/PetCareTips';
import SuccessStories from '@/components/statics/SuccessStories';
import WhyAdopt from '@/components/statics/WhyAdopt';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <main>
            <Navbar></Navbar>
            {children}
            <WhyAdopt></WhyAdopt>
            <SuccessStories></SuccessStories>
            <PetCareTips></PetCareTips>
            <Footer></Footer>
        </main>
    );
};

export default MainLayout;