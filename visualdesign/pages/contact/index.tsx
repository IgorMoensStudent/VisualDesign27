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

        <div className="flex-grow p-8">
            <div className="flex flex-col lg:flex-row gap-8 p-8 items-center justify-center">
                <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
                    <div className="mb-6 text-3xl font-bold">Send us a message</div>

                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <div>
                            <TextInput id="name" type="text" placeholder="First name" required className="w-full" />
                        </div>
                        <div>
                            <TextInput id="phone" type="text" placeholder="Last name" required className="w-full" />
                        </div>
                        <div>
                            <TextInput id="email" type="email" placeholder="Email" required className="w-full" />
                        </div>
                        <div>
                            <TextInput id="phone" type="text" placeholder="Phone number" required className="w-full" />
                        </div>
                    </div>

                    <div className="mb-6">
                        <div className="flex items-center gap-3">
                            <Checkbox id="call" />
                            <Label htmlFor="call">Call back</Label>

                            <Checkbox id="message" />
                            <Label htmlFor="message">Send message</Label>

                            <Checkbox id="nopreference" />
                            <Label htmlFor="nopreference">No preference</Label>
                        </div>
                    </div>

                    <div className="mb-6">
                        <Textarea id="comment" placeholder="Your message..." required rows={6} className="w-full" />
                    </div>

                    <div className="mb-6 flex items-center gap-2">
                        <Checkbox id="accept" />
                        <Label htmlFor="accept" className="flex">
                            I agree with the&nbsp;
                            <a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                terms and conditions
                            </a>
                        </Label>
                    </div>

                    <Button type="submit" className="w-full bg-[#06132E]">
                        Send
                    </Button>
                </div>
            </div>
        </div>
    </main>

    </>
  )
}

export default Contact;
