import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { FaX } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Toggle menu function
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array to run only once on mount

    // Nav items array
    const navItems = [
        { link: "Home", path: "home" },
        { link: "Service", path: "service" }, 
        { link: "About", path: "about" },
        { link: "Products", path: "products" },
        { link: "Testimonials", path: "testimonials" },
        { link: "FAQ", path: "faq" },
    ];

    return (
        <header className={`w-full fixed top-0 left-0 right-0`}>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? 'sticky top-0 left-0 right-0 border-b bg-white duration-300' : 'bg-transparent'}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href="/" className='w-full inline-block items-center text-2xl font-semibold space-x-3'><span className='text-[#263238]'>Logo</span></a>
                    {/* Nav items for large devices */}
                    <ul className='md:flex space-x-14 hidden'>
                        {navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block cursor-pointer text-base text-gray900 hover:text-brandPrimary first:font-medium  '>{link}</Link>

                        )}
                    </ul>
                    {/* btn for large devices */}
                    <div className="space-x-12 hidden lg:flex mx-12">
                        <a href="" className='hidden lg:flex items-center text-brandPrimary hover:text-gray900'>Login</a>
                        <button className=' bg-brandPrimary text-white px-4 py-2 transition-all duration-300 rounded hover:bg-neutralGrey inline-block text-nowrap'>Sign Up</button>

                    </div>

                    {/* for mobile devices */}
                    <div className='md:hidden '>
                        <button
                            onClick={toggleMenu}
                            className='text-neutralGrey backdrop:focus:outline-none focus:text-gray-900'>
                            {
                                isMenuOpen ? (<FaX className='h-6 w-6 text-neutralDGrey' />) : (<FaBars className='h-6 w-6 text-neutralDGrey' />)
                            }
                        </button>
                    </div>
                </div>

                {/* Menu for mobile */}
                <div className={`space-y-4 px-3 mt-16 py-7 bg-brandPrimary ${isMenuOpen?"block fixed top-0 right-0 left-0":"hidden"}`}>
                    {navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white hover:text-brandPrimary first:font-medium  '>{link}</Link>

                    )}


                </div>


            </nav>
        </header>
    );
}

export default Navbar;
