import Head from "next/head";
import Link from "next/link";
import { Button, Checkbox, Label, TextInput, Datepicker,  FileInput, Textarea } from 'flowbite-react';

const Appointment: React.FC = () => {
    return (
        <>
            <Head>
                <title>Appointment</title>
            </Head>

            <main className="">
                <div className="mx-auto max-w-full">
                    <div className="h-[15rem] w-full bg-[#06132E] text-white flex flex-col items-center justify-center">
                        <div className="text-sm text-center mb-4">Precision Cycling</div>
                        <div className="text-3xl font-bold mb-2 text-center">Make an appointment</div>

                        <div className="flex flex-wrap gap-2">
                            <Button outline gradientDuoTone="pinkToOrange">
                                <strong>Call +32 472 11 22 33</strong>
                            </Button>
                        </div>
                    </div>
                </div>


                <div className="flex-grow p-12">
                    <div className="flex flex-col lg:flex-row gap-12 p-12 items-center justify-center">
                        <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
                            <div className="mb-8 text-3xl font-bold">Your credentials</div>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div>
                                    <TextInput id="firstName" type="text" placeholder="First name" required className="w-full" />
                                </div>
                                <div>
                                    <TextInput id="lastName" type="text" placeholder="Last name" required className="w-full" />
                                </div>
                                <div>
                                    <TextInput id="email" type="email" placeholder="Your email" required className="w-full" />
                                </div>
                                <div>
                                    <TextInput id="phoneNumber" type="tel" placeholder="Phone number" required className="w-full" />
                                </div>
                                <div>
                                    <TextInput id="street" type="text" placeholder="Your street" required className="w-full" />
                                </div>
                                <div>
                                    <TextInput id="streetNumber" type="text" placeholder="Street number" required className="w-full" />
                                </div>
                                <div className="col-span-2">
                                    <TextInput id="city" type="text" placeholder="Your city" required className="w-full" />
                                </div>
                            </div>

                            <div className="border-t border-gray-300 my-8"></div>

                            <div className="mb-8 text-3xl font-bold">Bike Information and Preference</div>

                            <div className="mb-8">
                                <div className="text-lg mb-2 font-bold">Date:</div>
                                <Datepicker />
                            </div>

                            <div className="mb-8">
                                <div className="text-lg mb-2 font-bold">Time Preference:</div>
                                <div className="flex items-center gap-4">
                                    <Checkbox id="morning" />
                                    <Label htmlFor="morning">Morning</Label>

                                    <Checkbox id="afternoon" />
                                    <Label htmlFor="afternoon">Afternoon</Label>

                                    <Checkbox id="evening" />
                                    <Label htmlFor="evening">Evening</Label>

                                    <Checkbox id="nopreference" />
                                    <Label htmlFor="nopreference">No preference</Label>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="text-lg mb-2 font-bold">Bike Information:</div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <TextInput id="bikeBrand" type="text" placeholder="Brand" required className="w-full" />
                                    </div>
                                    <div>
                                        <FileInput id="bikeImage" multiple />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="text-lg mb-2 font-bold">Service:</div>
                                <Textarea id="comment" placeholder="Describe the problem or service needed" required rows={6} className="w-full" />
                            </div>

                            <div className="mb-8 flex items-center gap-4">
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
    );
};

export default Appointment;