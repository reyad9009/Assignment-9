import React from 'react';
import Banner from './Banner';
import { Outlet } from 'react-router-dom';
import CategoryNavbar from '../pages/CategoryNavbar';
import ServicesCard from '../pages/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryNavbar></CategoryNavbar>
            <ServicesCard></ServicesCard>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
