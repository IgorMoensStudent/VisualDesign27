import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from 'next/link';
import repair_1 from "../public/BikeRepair1.jpg";
import repair_2 from "../public/BikeRepair2.jpg";
import repair_3 from "../public/BikeRepair3.jpg";
import Bart from "../public/BartVermeulen.jpg";
import { Button } from 'flowbite-react';


const Home = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <main className="">
                <div className="mx-auto max-w-full">
                    <div className="h-[32rem] w-full bg-[#06132E] text-white flex flex-col items-center justify-center">
                        <div className="text-6xl font-bold mb-2 text-center">Precision Cycling</div>
                        <div className="text-xl text-center mb-4">Repair / Upgrade Shop</div>
                        
                        <div className="flex flex-wrap gap-2">
                        <Button outline gradientDuoTone="pinkToOrange"><Link href="/appointment">Make an appointment</Link></Button>
                        </div>
                    </div>
                </div> 

                <div className="flex justify-center mt-4 mb-4 gap-2">
                    <div className="p-1">
                        <div className="relative">
                        <Image
                            src={repair_1}
                            alt="Yellow Bike"
                            width={500}
                            height={500}
                        />
                        <p className="absolute bottom-8 left-4 text-white font-bold text-lg border-b-2 border-white">Bike repairs at home</p>
                        </div>
                    </div>

                    <div className="p-1">
                        <div className="relative">
                        <Image
                            src={repair_2}
                            alt="Yellow Bike"
                            width={500}
                            height={500}
                        />
                        <p className="absolute bottom-8 left-4 text-white font-bold text-lg border-b-2 border-white">Bike repairs for companies</p>
                        </div>
                    </div>

                    <div className="p-1">
                        <div className="relative">
                        <Image
                            src={repair_3}
                            alt="Yellow Bike"
                            width={500}
                            height={500}
                        />
                        <p className="absolute bottom-8 left-4 text-white font-bold text-lg border-b-2 border-white">Workshop bike repairs</p>
                        </div>
                    </div>
                </div>

                <div className="flex-grow maincontainer">
                    <div className="flex flex-col lg:flex-row gap-8 p-10 items-center justify-center ">
                        <div className="flex-shrink-0 mb-4 lg:mb-0">
                        <Image
                            src={Bart}
                            alt="Bart Vermeulen"
                            width={400}
                            height={400}
                            className="rounded-full"
                        />
                        </div>
                        <div className="flex flex-col text-center lg:text-left pl-20">
                        <h2 className="text-4xl font-bold mb-4">A Bicycle Mechanic with Passion</h2>
                        <p className="text-gray-700 mb-4">
                            Hi, I'm Bart Vermeulen, a dedicated bicycle mechanic with over a decade of experience. 
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

                <div className="mx-auto max-w-full pt-2 mt-2">
                    <div className="h-[15rem] w-full bg-[#06132E] text-white flex flex-col items-center justify-center">
                        <div className="text-sm text-center mb-4">Precision Cycling</div>
                        <div className="text-3xl font-bold mb-2 text-center">Do you need help with a bicycle repair?</div>
                        
                        <div className="flex flex-wrap gap-2">
                        <Button outline gradientDuoTone="pinkToOrange"><Link href="/appointment">Make an appointment</Link></Button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;
