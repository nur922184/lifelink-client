import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import PremiumProfiles from './PremiumProfiles';
import HowItWorks from './HowItWorks';
import SuccessCounter from './SuccessCounter';
import SuccessStories from './SuccessStories';
import MembershipPlans from './MembershipPlans';
import Security from './Security';
import Testimonials from './Testimonials';


const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Life Link | Home</title>
            </Helmet>
            <div className='max-w-[1496px] mx-auto '>
                <Banner></Banner>
                <PremiumProfiles></PremiumProfiles>
                <HowItWorks></HowItWorks>
                <MembershipPlans></MembershipPlans>
                <SuccessCounter></SuccessCounter>
                <SuccessStories></SuccessStories>
                <Security></Security>
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;