import React, { useState, useEffect } from 'react';
import HeroSection from "../HeroSection/HeroSection";
import Cards from "../Cards/Cards";

const home = () => {

    return (
        <>
            <HeroSection />
            <Cards />
        </>
    );
}

export default home;