import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { Button } from 'flowbite-react';

import repair_1 from "../public/BikeRepair1.jpg";
import repair_2 from "../public/BikeRepair2.jpg";
import repair_3 from "../public/BikeRepair3.jpg";
import Bart from "../public/BartVermeulen.jpg";
import cover from "../public/BikeCover.jpg";
import image1 from "../public/Image1.jpg";
import image2 from "../public/Image2.jpg";
import image3 from "../public/Image3.jpg";
import image4 from "../public/Image4.jpg";
import image5 from "../public/Image5.jpg";
import image6 from "../public/Image6.jpg";
import image7 from "../public/Image7.jpg";
import Ketting from "../public/Ketting.png";
import Bike from "../public/Bike.png";
import logo1 from "../public/Logo1.png";
import logo2 from "../public/Logo2.png";
import logo3 from "../public/Logo3.png";

const Home = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <main className="">
                <div className="mx-auto max-w-full relative">
                    <div className="h-[28rem] w-full bg-[#06132E] text-white flex flex-col items-center justify-center relative">
                        <div className="relative z-10 text-6xl font-bold mb-2 text-center">Precision Cycling</div>
                        <div className="relative z-10 text-xl text-center mb-4">Repair / Upgrade Shop</div>

                        <div className="absolute top-20  left-0 w-full h-full flex flex-col items-center justify-center">
                            <div className="flex flex-wrap gap-2">
                                <Button outline gradientDuoTone="pinkToOrange">
                                    <Link href="/appointment">Make an appointment</Link>
                                </Button>
                            </div>
                        </div>
                        
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 mt-4">
                            <Image
                                src={Bike}
                                alt="Bike"
                                width={180} 
                                height={180} 
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-4 mb-4 gap-2">
                    <div className="p-1">
                        <div className="relative">
                        <Image
                            src={repair_1}
                            alt="Yellow Bike"
                            width={400}
                            height={400}
                        />
                        <p className="absolute bottom-8 left-4 text-white font-bold text-lg border-b-2 border-white transition-colors duration-300 hover:text-[#C8AF46] hover:border-[#C8AF46]"><Link href="/appointment">Repairs</Link></p>
                        </div>
                    </div>

                    <div className="p-1">
                        <div className="relative">
                        <Image
                            src={repair_2}
                            alt="Yellow Bike"
                            width={400}
                            height={400}
                        />
                        <p className="absolute bottom-8 left-4 text-white font-bold text-lg border-b-2 border-white transition-colors duration-300 hover:text-[#C8AF46] hover:border-[#C8AF46]"><Link href="/appointment">Upgrades</Link></p>
                        </div>
                    </div>

                    <div className="p-1">
                        <div className="relative">
                        <Image
                            src={repair_3}
                            alt="Yellow Bike"
                            width={400}
                            height={400}
                        />
                        <p className="absolute bottom-8 left-4 text-white font-bold text-lg border-b-2 border-white transition-colors duration-300 hover:text-[#C8AF46] hover:border-[#C8AF46]"><Link href="/shop">Shop</Link></p>
                        </div>
                    </div>
                </div>

                <div className="flex-grow maincontainer">
                    <div className="flex flex-col lg:flex-row gap-8 p-10 items-center justify-center ">

                        <div className="flex-shrink-0 mb-4 lg:mb-0 relative">
                            <Image
                                src={Bart}
                                alt="Bart Vermeulen"
                                width={400}
                                height={400}
                                className="rounded-2xl"
                            />
                            <p className="absolute bottom-0 left-0 right-0 text-white font-bold text-sm bg-[#06132E] text-center py-1">Bart Vermeulen</p>
                        
                            <div  className="absolute top-0 right-0 mt-4 mr-[-40px]">
                                <Image
                                    src={logo2}
                                    alt="Logo 1"
                                    width={95} 
                                    height={95} 
                                    className="rounded-2xl"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col text-center lg:text-left pl-20">
                        <h2 className="text-4xl font-bold mb-4">A Bicycle Mechanic with Passion</h2>
                        <p className="text-gray-700 mb-4">
                            Hi, my name is Bart Vermeulen, I am a dedicated bicycle mechanic with over a decade of experience. 
                            I've worked in various bicycle stores in and around Leuven since 2006. My passion for cycling led me to merge my skills with entrepreneurial spirit, 
                            resulting in Precision Cycling - the inaugural bicycle repair service in Leuven that brings convenience to your home or workplace.
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Your bike, always in great condition!</li>
                            <li>Solutions for companies and individuals</li>
                            <li>Comprehensive repair and maintenance</li>
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
                            <div className="text-sm text-center mb-4 text-[#F5F5F5]">Precision Cycling</div>
                            <div className="text-3xl font-bold mb-2 text-center text-[#E5E4E2]">Do you need help with repairs / upgrades?</div>
                            <div className="flex flex-wrap gap-2"><Button outline gradientDuoTone="pinkToOrange"><Link href="/appointment">Make an appointment</Link></Button></div>
                        </div>
                    </div>
                </div>
                
                <div className="maincontainer">
                <div className="mb-6 text-center text-2xl font-bold pt-4">Always ready, for a new adventure.</div>
                    <div className="flex flex-wrap justify-center gap-1 ">
                        <div className="p-3">
                            <Image
                                src={image1}
                                alt="image1"
                                width={350}
                                height={350}
                                className="rounded-2xl"
                            />
                        </div>
                        <div className="p-3">
                            <Image
                                src={image3}
                                alt="image3"
                                width={320}
                                height={320}
                                className="rounded-2xl"
                            />
                        </div>
                        <div className="p-3">
                            <Image
                                src={image2}
                                alt="image2"
                                width={350}
                                height={350}
                                className="rounded-2xl"
                            />
                        </div>
                        <div className="p-3">
                            <Image
                                src={image4}
                                alt="image4"
                                width={350}
                                height={350}
                                className="rounded-2xl"
                            />
                        </div>
                        <div className="p-3">
                            <Image
                                src={image5}
                                alt="image5"
                                width={350}
                                height={350}
                                className="rounded-2xl"
                            />
                        </div>
                        <div className="p-3">
                            <Image
                                src={image7}
                                alt="image5"
                                width={350}
                                height={350}
                                className="rounded-2xl"
                            />
                        </div>
                        
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;
