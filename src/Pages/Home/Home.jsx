import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import PremiumProfiles from './PremiumProfiles';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Life Link | Home</title>
            </Helmet>
           <Banner></Banner>
           <PremiumProfiles></PremiumProfiles>
        </div>
    );
};

export default Home;