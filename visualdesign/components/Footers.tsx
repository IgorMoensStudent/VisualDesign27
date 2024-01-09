import React from "react";
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import Logo from '../public/UCLL.png';
import Image from "next/image";
import logo1 from "../public/Logo1.png";
import logo2 from "../public/Logo2.png";
import logo3 from "../public/Logo3.png";

const Footers : React.FC = () => {
    return (
        <Footer container>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                <p></p>
                <Footer.LinkGroup>
                    <Footer.Link href="/">Home</Footer.Link>
                    <Footer.Link href="/shop">Shop</Footer.Link>
                    <Footer.Link href="/about">About us</Footer.Link>
                    <Footer.Link href="/contact">Contact</Footer.Link>
                </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href="#" by="Igor Moens and Eric Sarpong™" className="bodyFont" year={2024} />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <Footer.Icon href="#" icon={BsFacebook} />
                    <Footer.Icon href="#" icon={BsInstagram} />
                    <Footer.Icon href="#" icon={BsTwitter} />
                </div>
                </div>
            </div>
        </Footer>
    )
}

export default Footers;