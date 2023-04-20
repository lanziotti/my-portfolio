import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import CubosFlix from './pages/Projects/CubosFlix';
import CubosPuzzle from './pages/Projects/CubosPuzzle';
import DigitalBanking from './pages/Projects/DigitalBanking';
import Dindin from './pages/Projects/Dindin';

function AppRoutes() {
    return (
        <>
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