import Head from "next/head";
import React from "react";

const About : React.FC = () => {
    return (
        <>
        <Head>
            <title>About us</title>
        </Head>

        <main className="">
        <div className="mx-auto max-w-full">
            <div className="h-[15rem] w-full bg-[#06132E] text-white flex flex-col items-center justify-center">
                <div className="text-sm text-center mb-4">Precision Cycling</div>
                <div className="text-3xl font-bold mb-2 text-center">About us</div>
            </div>
        </div>

        

        </main>
        </>
    )
}

export default About;