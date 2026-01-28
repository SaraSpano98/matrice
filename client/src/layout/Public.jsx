import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import { checkPath } from '../utils/checkPath.js';
import config from '../config/config.js';

const Public = () => {
    const location = useLocation();
    return (
        <>
        {/* Other layout components can go here */
        checkPath(location.pathname, config.PATH_TO_EXCLUDE.navbar) && <Navbar />
        }
        <div>
            <Outlet />
        </div>
        {/* Other layout components can go here */
        checkPath(location.pathname, config.PATH_TO_EXCLUDE.footer) && <Footer />
        }
        </>
    )
}

export default Public;