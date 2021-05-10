// imports
import React from 'react';
import HeroSection from "../HeroSection/HeroSection";
import Cards from "../Cards/Cards";

// This class combines both the HeroSection
// and the Cards into one
const home = () => {

    return (
        <>
            <HeroSection />
            <Cards />
        </>
    );
}

// export home
export default home;