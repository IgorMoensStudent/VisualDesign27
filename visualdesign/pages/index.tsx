import Head from "next/head";
import React from "react";
import Image from "next/image";
import { Button } from 'flowbite-react';

import {
  Typography,
  Card,
} from "@material-tailwind/react";




const Home = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <main className="mt-[-170px]">
                <div className="mx-auto max-w-full py-12 main">
                    <div className="h-[32rem] w-full bg-[#06132E] text-white flex flex-col items-center justify-center">
                        <div className="text-6xl font-bold mb-2 text-center">Precision Cycling</div>
                        <div className="text-xl text-center mb-4">Repair / Upgrade Shop</div>
                        
                        <div className="flex flex-wrap gap-2">
                        <Button outline gradientDuoTone="pinkToOrange">
                            Make an appointment 
                        </Button>
                        </div>
                    </div>
                </div> 

                <div className="flex justify-center gap-1 mt-[-156px]">
                    <div className="p-1">
                        <img
                            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
                            alt="Image 1"
                            width={1000}
                            height={1000}
                        />
                    </div>

                    <div className="p-1 ">
                        <img
                            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
                            alt="Image 1"
                            width={1000}
                            height={1000}
                        />
                    </div>
                    
                </div>

                <div className="flex-grow maincontainer">
                    <h2 className="text-3xl font-bold mb-4">Precision Cycling</h2>
                    <p className="text-gray-700 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dolor eu ligula bibendum sagittis nec eu quam. Aenean sollicitudin urna id gravida venenatis.
                    </p>
                    <ul className="list-disc pl-5 mb-4">
                        <li>Bullet point 1</li>
                        <li>Bullet point 2</li>
                        <li>Bullet point 3</li>
                    </ul>
                    <Button outline gradientDuoTone="pinkToOrange">
                        Make an appointment
                    </Button>
                </div>
            </main>
        </>
    );
};

export default Home;
