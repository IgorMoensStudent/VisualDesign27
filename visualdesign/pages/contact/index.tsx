import React from "react";
import Head from "next/head";
import { Button, Checkbox, Label, TextInput, Datepicker,  FileInput, Textarea } from 'flowbite-react';

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      
      
    <main>
        <div className="mx-auto max-w-full">
            <div className="h-[15rem] w-full bg-[#06132E] text-white flex flex-col items-center justify-center">
                <div className="text-sm text-center mb-4">Precision Cycling</div>
                <div className="text-3xl font-bold mb-2 text-center">Contact us</div>
            </div>
        </div>

        <div className="flex-grow ">
    <div className="flex flex-col lg:flex-row gap-8 p-10 items-center justify-center">
        <div className="flex-shrink-0 mb-4 lg:mb-0 w-full lg:w-1/2 lg:ml-10">
            <div className="max-w-md">
                <div className="mb-4 text-lg font-bold">Contact information</div>
                <div className="mb-4 text-3xl font-bold">Contact us</div>
                <div className="mb-4">
                    <p>Ik ben Bart Vermeuelen, ervaring sinds 1990 in fietsenherstellingen en zaakvoerder van "Precision Cycling".</p>
                </div>
                
                <div className="mb-4">
                    <ul>
                        <li className="mb-2">Info@PrecisionCycling.be</li>
                        <li className="mb-2">+32 472 11 22 23</li>
                        <li className="mb-2">Regio Leuven</li>
                        <li className="mb-2">Businessnr. BE0889.193.652</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="flex flex-col text-center lg:text-left pl-20 w-full lg:w-1/2 lg:mr-10 bg-[#EAE6E3] p-20">
            <div className="mb-4 text-lg font-bold">Questions?</div>
            <div className="mb-4 text-3xl font-bold">Send us a message</div>
            
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                    <TextInput id="name" type="text" placeholder="Name" required />
                </div>
                <div>
                    <TextInput id="lastName" type="number" placeholder="Phone number" required />
                </div>
                <div>
                    <TextInput id="email" type="email" placeholder="Your email" required />
                </div>

                <div className="flex items-center gap-3">
                    <Checkbox id="call" />
                    <Label htmlFor="call">Call me back</Label>
                </div>

                <div className="mb-4">
                    <Textarea id="comment" placeholder="Your message..." required rows={4} />
                </div>
                
                <div className="mb-4 flex items-center gap-2">
                    <Checkbox id="accept" />
                    <Label htmlFor="accept" className="flex">I agree with the&nbsp;<a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">terms and conditions</a></Label>
                </div>
                
                <Button type="submit" className="w-full bg-[#06132E]">Send</Button>
            </div>
        </div>
    </div>
</div>


    </main>

    </>
  )
}

export default Contact;
