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


        <div className="flex-grow ">
            <div className="flex flex-col lg:flex-row gap-8 p-8 items-center justify-center">
                <div className="max-w-md">
                    <div className="mb-4 text-1xl font-bold">Your credentials</div>
                    
                    <div className="flex flex-row mb-4">
                        <div className="flex-1 mr-2">
                            <TextInput id="firstName" type="text" placeholder="First name" style={{ width: '200px' }} required />
                        </div>
                        <div className="flex-1 ml-2">
                            <TextInput id="lastName" type="text" placeholder="Last name" required />
                        </div>
                    </div>

                    <div className="flex flex-row mb-4">
                        <div className="flex-1 mr-2">
                            <TextInput id="email" type="email" placeholder="Your email" style={{ width: '250px' }} required />
                        </div>
                        <div className="flex-1 ml-2">
                            <TextInput id="phoneNumber" type="tel" placeholder="Phone number" required />
                        </div>
                    </div>

                    <div className="flex flex-row mb-4">
                        <div className="flex-1 mr-2">
                            <TextInput id="street" type="text" placeholder="Your street" style={{ width: '300px' }} required />
                        </div>
                        <div className="flex-1 ml-2">
                            <TextInput id="streetNumber" type="text" placeholder="Street number" required />
                        </div>
                    </div>

                    <div className="flex flex-row mb-4">
                        <div className="flex-1">
                            <TextInput id="city" type="text" placeholder="Your city" required helperText= { <> We’ll never share your details. Read our<a href="#" className="ml-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500">Privacy Policy</a>. </>}/>
                        </div>
                    </div>

                    <div className="border-t border-gray-300 my-4"></div>

                    <div className="mb-4 text-1xl font-bold">Bike information and preference</div>

                    <div className="mb-1 text-sm ">Date:</div>
                    <div className="flex flex-row mb-4">
                        <div className="flex-1">
                            <Datepicker />
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <Checkbox id="promotion" />
                        <Label htmlFor="promotion">Morning</Label>

                        <Checkbox id="promotion" />
                        <Label htmlFor="promotion">Afternoon</Label>

                        <Checkbox id="promotion" />
                        <Label htmlFor="promotion">Evening</Label>

                        <Checkbox id="promotion" />
                        <Label htmlFor="promotion">No preference</Label>
                    </div>

                    <div className="mb-1 text-sm ">Bike information:</div>
                    <div className="flex flex-row mb-4">
                        <div className="flex-1 mr-2">
                            <TextInput id="city" type="text" placeholder="Brand and model" required/>
                        </div>
                        <div className="flex-1 ml-2">
                            <FileInput id="multiple-file-upload" multiple />
                        </div>
                    </div>

                    <div className="mb-1 text-sm ">Service:</div>
                    <div className="flex flex-row mb-4">
                        <div className="flex-1">
                            <Textarea id="comment" placeholder="What is the problem or what service are you looking for?" required rows={4} />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                        <Checkbox id="accept" />
                        <Label htmlFor="accept" className="flex">
                        I agree with the&nbsp;
                        <a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                            terms and conditions
                        </a>
                        </Label>
                    </div>

                    <Button type="submit">Send</Button>


                </div>
            </div>
        </div>

        </main>

        </>
    )
}

export default Appointment;