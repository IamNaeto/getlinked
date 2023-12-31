import { useState, useEffect } from 'react';
import { RiMenu4Line, RiCloseCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Header = () => {
    // Manage header bg change on scroll
    const [scrollY, setScrollY] = useState(0);
    const [headerBackground, setHeaderBackground] = useState('');

    // Manage visibility of nav menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    // Update the scroll position state when the user scrolls
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
  
    useEffect(() => {
      // Add a scroll event listener and cleanup on component unmount
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    // Determine the background color based on the scroll position
    useEffect(() => {
      if (scrollY > 0) {
        // Apply a backdrop blur background when scrolling
        setHeaderBackground(' backdrop-blur-xl');
      } else {
        // Remove the background color when at the top
        setHeaderBackground('');
      }
    }, [scrollY]);

    //Control nav hide and show
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

      const location = useLocation();
      const isHome = location.pathname === '/';
    return ( 
        <header className={`fixed top-0 w-full py-3 px-[5%] flex items-center justify-between z-1000 shadow-lg z-50 border-b border-1 border-gray-600 ${headerBackground}`}>
            <Link to="/"  >
                <h2 className="text-4xl font-extrabold text-white">get<span className="text-purple">linked</span></h2>
            </Link>

            <div className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-[10px] border-purple lg:border-none border right-4 lg:right-0 lg:top-0 bg-darkpurple lg:bg-transparent rounded-xl lg:rounded-none shadow-sm shadow-gray-600 lg:shadow-none lg:p-0 p-10 lg:relative lg:flex flex-col lg:flex-row items-start lg:items-center text-white gap-10 transition-transform transform`}>
              {isHome ?
                <nav className="text-[16px] font-medium flex flex-col items-start lg:items-center lg:flex-row gap-2  z-1000">
                    <a href="#timeline" className="p-3 rounded-sm hover:text-pink hover:bg-purpleblur slow-transition">Timeline</a>
                    <a href="#overview" className="p-3 rounded-sm hover:text-pink hover:bg-purpleblur slow-transition">Overview</a>
                    <a href="#faqs" className="p-3 rounded-sm hover:text-pink hover:bg-purpleblur slow-transition">FAQs</a>
                    <Link to="/contact" className="p-3 rounded-sm hover:text-pink hover:bg-purpleblur slow-transition">Contact</Link>
                </nav>
                :
                <nav className="text-[16px] font-medium flex flex-col items-start lg:items-center lg:flex-row gap-2  z-1000">
                    <a href="/#timeline" className="p-3 rounded-sm hover:text-pink hover:bg-purpleblur slow-transition">Timeline</a>
                    <a href="/#overview" className="p-3 rounded-sm hover:text-pink hover:bg-purpleblur slow-transition">Overview</a>
                    <a href="/#faqs" className="p-3 rounded-sm hover:text-pink hover:bg-purpleblur slow-transition">FAQs</a>
                    <Link to="/contact" className="p-3 rounded-sm hover:text-pink hover:bg-purpleblur slow-transition">Contact</Link>
                </nav>
              }

                <Link to="/register" className="btn py-3 px-10 text-[16px] font-medium cursor-pointer rounded-sm">Register</Link>

                <RiCloseCircleLine 
                className="absolute top-5 right-5 lg:hidden text-5xl font-bold text-white cursor-pointer hover:text-purple slow-transition"
                onClick={toggleMenu}
                />
            </div>

            <RiMenu4Line className=" lg:hidden text-4xl font-bold text-white cursor-pointer hover:text-purple transition-all"
            onClick={toggleMenu}
            />
        </header>
     );
}
 
export default Header;