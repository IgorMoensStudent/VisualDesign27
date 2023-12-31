import Link from 'next/link';
import React, { useState, useEffect } from "react";
import styles from './Header.module.css';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

   

const NavList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                    <Typography as="li" variant="body" color="blue-gray" className="p-3 font-semibold" placeholder="">
                        <Link href="/" className="flex items-center hover-underline-padding">Home</Link>
                    </Typography>

                    <Typography as="li" variant="body" color="blue-gray" className="p-3 font-semibold" placeholder="">
                        <Link href="/shop" className="flex items-center hover-underline-padding">Shop</Link>
                    </Typography>

                    <Typography as="li" variant="body" color="blue-gray" className="p-3 font-semibold" placeholder="">
                        <Link href="#" className="flex items-center hover-underline-padding">About us</Link>
                    </Typography>
                    
                    <Typography as="li" variant="body" color="blue-gray" className="p-3 font-semibold" placeholder="">
                        <Link href="/contact" className="flex items-center hover-underline-padding">Contact</Link>
                    </Typography>
                </ul> 
)

const Header: React.FC = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsSticky(offset > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

        return (
        <div className={`${styles.header} ${isSticky ? styles.sticky : ''} `}>
            <Navbar className="z-10 h-max max-w-full rounded-none px-4 py-6 lg:px-10 lg:py-10" placeholder="">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography as="a"  href="/" className="mr-4 ml-8 cursor-pointer py-1.5 font-bold" placeholder="" >
                        Precision Cycling
                    </Typography>
        
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block"> {NavList}</div>
                        <div className="flex items-center gap-x-1">
                            <Button variant="text" size="lg" className="hidden lg:inline-block" placeholder="">
                                <span>Log in</span>
                            </Button>
                            <Button variant="gradient" size="lg" className="hidden lg:inline-block" placeholder="">
                                <span>Sign in</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </Navbar>
        </div>
        )
    }

export default Header;