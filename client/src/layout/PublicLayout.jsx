import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import { checkPath } from '../utils/checkPath.js';
import { config } from '../config/index.js';

const PublicLayout = () => {
    const location = useLocation();

    // Trasforma automaticamente in array, anche se il config contiene una stringa singola
    const navbarExclude = Array.isArray(config.PATH_TO_EXCLUDE.navbar) 
        ? config.PATH_TO_EXCLUDE.navbar 
        : [config.PATH_TO_EXCLUDE.navbar];

    const footerExclude = Array.isArray(config.PATH_TO_EXCLUDE.footer) 
        ? config.PATH_TO_EXCLUDE.footer 
        : [config.PATH_TO_EXCLUDE.footer];

    return (
        <>
            {checkPath(location.pathname, navbarExclude) && <Navbar />}
            
            <div>
                <Outlet />
            </div>
            
            {checkPath(location.pathname, footerExclude) && <Footer />}
        </>
    );
};

export default PublicLayout;
