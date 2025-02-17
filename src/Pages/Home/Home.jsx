import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import PremiumProfiles from './PremiumProfiles';
import HowItWorks from './HowItWorks';
import SuccessCounter from './SuccessCounter';
import SuccessStories from './SuccessStories';
import MembershipPlans from './MembershipPlans';


const Home = () => {
  
    return (
        <div>
            <Helmet>
                <title>Life Link | Home</title>
            </Helmet>
           <Banner></Banner>
           <PremiumProfiles></PremiumProfiles>
           <HowItWorks></HowItWorks>
           <MembershipPlans></MembershipPlans>
           <SuccessCounter></SuccessCounter> 
           <SuccessStories></SuccessStories>
        </div>
    );
};

export default Home;