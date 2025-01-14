import React from 'react';
import AboutSection from './AboutSection';
import WhyChooseUs from './WhyChooseUs';
import Vision from './Vision';
import Mission from './Mission';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
    return (
        <div className='dark:bg-gray-900' >
            <Helmet>
                <title>Life Link | About Us</title>
            </Helmet>
            <AboutSection></AboutSection>
            <WhyChooseUs></WhyChooseUs>
            <Vision></Vision>
            <Mission></Mission>
        </div>
    );
};

export default AboutUs;