import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import NavBar from '../components/shared/NavBar';

const MainLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />

        </>
    );
};

export default MainLayout;