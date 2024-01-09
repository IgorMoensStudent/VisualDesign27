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
                        <div className="text-base text-center mb-3 bodyFont">Precision Cycling</div>
                        <div className="text-4xl font-bold mb-1 text-center headerFont">Make an appointment</div>

                        <div className="flex flex-wrap gap-2 mt-4">
                            <Button outline gradientDuoTone="pinkToOrange">
                                <strong>Call +32 472 11 22 33</strong>
                            </Button>
                        </div>
                    </div>
                </div>


                <div className="flex-grow p-12 bg-[#F5F5F5]">
                    <div className="flex flex-col lg:flex-row gap-12 p-12 items-center justify-center">
                        <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
                            <div className="mb-8 text-3xl font-bold headerFont">Your credentials</div>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div>
                                    <TextInput id="firstName" type="text" placeholder="First name" required className="w-full bodyFont" />
                                </div>
                                <div>
                                    <TextInput id="lastName" type="text" placeholder="Last name" required className="w-full bodyFont" />
                                </div>
                                <div>
                                    <TextInput id="email" type="email" placeholder="Your email" required className="w-full bodyFont" />
                                </div>
                                <div>
                                    <TextInput id="phoneNumber" type="tel" placeholder="Phone number" required className="w-full bodyFont" />
                                </div>
                                <div>
                                    <TextInput id="street" type="text" placeholder="Your street" required className="w-ful bodyFont" />
                                </div>
                                <div>
                                    <TextInput id="streetNumber" type="text" placeholder="Street number" required className="w-full bodyFont" />
                                </div>
                                <div className="col-span-2">
                                    <TextInput id="city" type="text" placeholder="Your city" required className="w-full bodyFont" />
                                </div>
                            </div>

                            <div className="border-t border-gray-300 my-8"></div>

                            <div className="mb-8 text-3xl font-bold headerFont">Bike Information and Preference</div>

                            <div className="mb-8">
                                <div className="text-lg mb-2 font-bold headerFont">Date:</div>
                                <Datepicker />
                            </div>

                            <div className="mb-8">
                                <div className="text-lg mb-2 font-bold headerFont">Time Preference:</div>
                                <div className="flex items-center gap-4">
                                    <Checkbox id="morning" />
                                    <Label htmlFor="morning" className="bodyFont">Morning</Label>

                                    <Checkbox id="afternoon" />
                                    <Label htmlFor="afternoon" className="bodyFont">Afternoon</Label>

                                    <Checkbox id="evening" />
                                    <Label htmlFor="evening" className="bodyFont">Evening</Label>

                                    <Checkbox id="nopreference" />
                                    <Label htmlFor="nopreference" className="bodyFont">No preference</Label>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="text-lg mb-2 font-bold headerFont">Bike Information:</div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <TextInput id="bikeBrand" type="text" placeholder="Brand" required className="w-full bodyFont" />
                                    </div>
                                    <div>
                                        <FileInput id="bikeImage" multiple />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="text-lg mb-2 font-bold headerFont">Service:</div>
                                <Textarea id="comment" placeholder="Describe the problem or service needed" required rows={6} className="w-full bodyFont" />
                            </div>

                            <div className="mb-8 flex items-center gap-4">
                                <Checkbox id="accept" />
                                <Label htmlFor="accept" className="flex bodyFont">
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