import FeaturedPets from "@/components/featured/FeaturedPets";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/nav/Navbar";
import EndCTA from "@/components/statics/EndCTA";
import FAQ from "@/components/statics/FAQ";
import PetCareTips from "@/components/statics/PetCareTips";

import SuccessStories from "@/components/statics/SuccessStories";
import WhyAdopt from "@/components/statics/WhyAdopt";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Navbar></Navbar>
      {children}
      <FeaturedPets></FeaturedPets>
      <WhyAdopt></WhyAdopt>
      <SuccessStories></SuccessStories>
      <PetCareTips></PetCareTips>
      <FAQ></FAQ>
      <EndCTA></EndCTA>
      <Footer></Footer>
    </main>
  );
};

export default MainLayout;
