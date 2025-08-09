'use client'
import Image from "next/image"
import { useState } from "react";
import { ContactFormState } from "@/types/types";
import GoldenButton from "../ui/GoldenButton";

const ContactForm = () => {
    const [formData, setFormData] = useState<ContactFormState>({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`Form submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    }
  return (
    <section className='flex flex-col items-center w-full 2xl:px-50 lg:px-20 gap-8 lg:py-15 py-8 px-6'> 
<div className="flex flex-col items-center gap-3">
    <h2 className="font-semibold text-3xl text-black">Get In Touch With Us</h2>
    <p className="text-gray-light w-2/3 text-center">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
</div>
<div className="grid lg:grid-cols-2 grid-cols-1 justify-between w-full max-lg:gap-8 text-black">
    <div className="lg:flex lg:flex-col lg:gap-8 grid grid-cols-3">
        <div className="flex items-start gap-4">
            <Image src='/icons/address.svg' alt="address" width={28} height={28} />
            <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-xl">Address</h4>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
        </div>
        <div className="flex items-start gap-4">
            <Image src='/icons/phone.svg' alt="phone" width={28} height={28} />
            <div className="flex flex-col gap-2">
             <h4 className="font-semibold text-xl">Phone</h4>
             <div>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
</div>
</div>
        </div>
        <div className="flex items-start gap-4">
            <Image src='/icons/time.svg' alt="time" width={28} height={24} />
             <div className="flex flex-col gap-2">
             <h4 className="font-semibold text-xl">Working Time</h4>
             <div>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
</div>
</div>
</div>
</div>
<form onSubmit={handleSubmit} className="flex flex-col gap-6">
    <div className="flex flex-col gap-2 w-full">
        <label htmlFor="name">Your name</label>
        <input value={formData.name} onChange={handleChange} name="name" type="text" id="name" placeholder="e.g. John Doe" className="border rounded-sm border-gray-light px-3 py-2 w-full" required />
    </div>
    <div className="flex flex-col gap-2 w-full">
        <label htmlFor="email">Email address</label>
        <input value={formData.email} onChange={handleChange} name="email" type="text" id="email" placeholder="e.g. lgzi0@example.com" className="border rounded-sm border-gray-light px-3 py-2 w-full" required />
    </div>
    <div className="flex flex-col gap-2 w-full">
        <label htmlFor="subject">Subject</label>
        <input value={formData.subject} onChange={handleChange} name="subject" type="text" id="subject" placeholder="e.g. Product Enquiry" className="border rounded-sm border-gray-light px-3 py-2 w-full" required />
    </div>
    <div className="flex flex-col gap-2 w-full">
        <label htmlFor="message">Message</label>
        <textarea value={formData.message} onChange={handleChange} name="message" id="message" placeholder="e.g. Product Enquiry" className="border rounded-sm border-gray-light px-3 py-2 w-full" required></textarea>
    </div>
    <GoldenButton className="py-3 px-10 lg:self-start">Submit</GoldenButton>
</form>
</div>
</section>
  )
}

export default ContactForm