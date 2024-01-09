import Head from "next/head";
import React from "react"
import Image from "next/image";
import Link from 'next/link';
import { Button } from 'flowbite-react';
import Repair from "../../public/BikeRepair4.jpg"
import Instagram from "../../public/Instagram.png"
import Twitter from "../../public/Twitter.png"
import Linkedin from "../../public/Linkedin.png"
import Youtube from "../../public/Youtube.png"
import WhatsApp from "../../public/WhatsApp.png"
import Messenger from "../../public/Messenger.png"
import Femke from "../../public/FemkeVerlinden.jpg";
import cover from "../../public/BikeCover.jpg"
import logo2 from "../../public/Logo2.png";

const About : React.FC = () => {
    return (
        <>
        <Head>
            <title>About us</title>
        </Head>

        <main className="">
        <div className="mx-auto max-w-full">
            <div className="h-[15rem] w-full bg-[#06132E] text-white flex flex-col items-center justify-center">
                <div className="text-base text-center mb-3 bodyFont">Precision Cycling</div>
                <div className="text-4xl font-bold mb-1 text-center headerFont">About us</div>
            </div>
        </div>
        
        <div className="flex-grow">
            <div className="flex flex-col lg:flex-row gap-8 p-10 items-center justify-center ">
                <div className="flex flex-col text-center lg:text-left pl-20">
                <h2 className="text-4xl font-bold mb-4">How do we work?</h2>
                <p className="text-gray-700 mb-4">
                Precision Cycling brings expert bike repairs and upgrades to your home or workplace. 
                Whether it's a flat tire, brake replacements or major maintenance, our specialized team ensures top-notch service.
                As Leuven's road bike repair specialists, we focus on niches like electric or vintage bikes, providing precision, passion and community right at your doorstep.
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Schedule an Appointment</li>
                    <li>On-the-Spot Repairs</li>
                    <li>Tailored Servicing</li>
                </ul>
                <ul>
                <Button outline gradientDuoTone="pinkToOrange"><Link href="/appointment">Make an appointment</Link></Button>
                </ul>
                </div>

                <div className="flex-shrink-0 mb-4 lg:mb-0 relative">
                    <Image
                        src={Repair}
                        alt="Bart Vermeulen"
                        width={500}
                        height={500}
                        className="rounded-xl"
                    />
                </div>
            </div>
        </div>

        <div className="flex-grow maincontainer">
            <div className="flex flex-col lg:flex-row gap-8 p-10 items-center justify-center ">
                <div className="flex-shrink-0 mb-4 lg:mb-0 relative">
                    <Image
                        src={Femke}
                        alt="Femke Verlinden"
                        width={300}
                        height={300}
                        className="rounded-2xl"
                    />
                    <p className="absolute bottom-0 left-0 right-0 text-white font-bold text-sm bg-[#06132E] text-center py-1">Femke Verlinden</p>
                </div>
                
                <div className="flex flex-col text-center lg:text-left pl-20">
                    <h2 className="text-4xl font-bold mb-4">Cycling Enthusiast and Client Care Specialist</h2>
                    <p className="text-gray-700 mb-4">
                    Hello, I'm Femke Verlinden, a devoted cyclist with three years of experience in client service at Precision Cycling—the pioneer in bicycle repair services in Leuven. 
                    Although my professional journey began here, my passion for cycling roots back to my youth when I frequently rode with my father and uncle. 
                    This genuine love for cycling has fueled my commitment to ensuring your bike is in top condition. 
                    At Precision Cycling, I'm excited to bring the convenience of our repair services directly to your home or workplace.
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Tailored Solutions for You</li>
                        <li>Convenience at Your Fingertips</li>
                        <li>Thorough Repair and Maintenance</li>
                    </ul>
                </div>
            </div>
        </div>

    
        <div className="mx-auto max-w-full pt-0 mt-0 relative">
                    <div className="h-[15rem] w-full bg-cover bg-center relative flex flex-col items-center justify-center">
                        <Image
                        src={cover}
                        alt="Cover Image"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top-center"
                        />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                            <div className="text-base text-center mb-4 text-[#E5E4E2] headerFont">Precision Cycling</div>
                            <div className="text-4xl font-bold mb-2 text-center text-[#E5E4E2] headerFont">Do you need help with repairs / upgrades?</div>
                            <div className="flex flex-wrap gap-2"><Button outline gradientDuoTone="pinkToOrange"><Link href="/appointment">Make an appointment</Link></Button></div>
                        </div>
                    </div>
                </div>

                <div className="flex-grow maincontainer">
            <div className="flex flex-col lg:flex-row gap-8 p-10 items-center justify-center mt-8 mb-8">
                <div className="flex flex-col text-center lg:text-left pl-20">
                    <h2 className="text-4xl font-bold mb-4 text-center">Follow us on social media</h2>
                    <div className="flex justify-center mt-4 mb-4 gap-7">

                        <div className="p-1">
                            <div className="relative">
                                <Image
                                    src={Instagram}
                                    alt="Instagram"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>

                        <div className="p-1">
                            <div className="relative">
                                <Image
                                    src={Twitter}
                                    alt="Twitter"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>

                        <div className="p-1">
                            <div className="relative">
                                <Image
                                    src={Linkedin}
                                    alt="Linkedin"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>

                        <div className="p-1">
                            <div className="relative">
                                <Image
                                    src={WhatsApp}
                                    alt="WhatsApp"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>

                        <div className="p-1">
                            <div className="relative">
                                <Image
                                    src={Youtube}
                                    alt="Youtube"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>



        </main>
        </>
    )
}

export default About;