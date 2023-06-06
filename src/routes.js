import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import CubosFlix from './pages/Projects/CubosFlix';
import CubosPuzzle from './pages/Projects/CubosPuzzle';
import DigitalBanking from './pages/Projects/DigitalBanking';
import Dindin from './pages/Projects/Dindin';
import { useEffect } from 'react';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function AppRoutes() {
    return (
        <>
            <ScrollToTop />
            <ToastContainer />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/digital-banking' element={<DigitalBanking />} />
                <Route path='/dindin' element={<Dindin />} />
                <Route path='/cubos-puzzle' element={<CubosPuzzle />} />
                <Route path='/cubos-flix' element={<CubosFlix />} />
            </Routes>
        </>
    );
}

export default AppRoutes;