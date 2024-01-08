import Head from "next/head";
import Link from "next/link";
import { Button, Checkbox, Label, TextInput, Datepicker,  FileInput, Textarea } from 'flowbite-react';

const Registration: React.FC = () => {
    return (
        <>
        <Head>
            <title>Sign up</title>
        </Head>

        <main>
            <div className="mx-auto max-w-full">
                <div className="h-[15rem] w-full bg-[#06132E] text-white flex flex-col items-center justify-center">
                    <div className="text-base text-center mb-4">Precision Cycling</div>
                    <div className="text-4xl font-bold mb-2 text-center">Contact Us</div>
                </div>
            </div>

            <div className="flex-grow p-12 bg-[#F5F5F5]">

            </div>
        </main>
        </>
    )
}

export default Registration;