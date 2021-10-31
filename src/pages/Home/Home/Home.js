import React from 'react';
import Banner from '../Banner/Banner';
import Tours from '../Tours/Tours';
import Feedback from '../Feedback/Feedback';
import WhyTravelly from '../WhyTravelly/WhyTravelly';
import Activity from '../Activity/Activity';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tours></Tours>
            <Feedback></Feedback>
            <WhyTravelly></WhyTravelly>
            <Activity></Activity>
            <Footer></Footer>
        </div>
    );
};

export default Home;