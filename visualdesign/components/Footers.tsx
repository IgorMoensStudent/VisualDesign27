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
                <Image
                    src={logo3}
                    alt="logo"
                    width={100}
                    height={100}
                    className="rounded-2xl"
                />
                <Footer.LinkGroup>
                    <Footer.Link href="#">About</Footer.Link>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                    <Footer.Link href="#">Licensing</Footer.Link>
                    <Footer.Link href="#">Contact</Footer.Link>
                </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href="#" by="Igor Moens and Eric Sarpong™" year={2024} />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <Footer.Icon href="#" icon={BsFacebook} />
                    <Footer.Icon href="#" icon={BsInstagram} />
                    <Footer.Icon href="#" icon={BsTwitter} />
                    <Footer.Icon href="#" icon={BsGithub} />
                    <Footer.Icon href="#" icon={BsDribbble} />
                </div>
                </div>
            </div>
        </Footer>
    )
}

export default Footers;