"use client";
import { useState } from 'react';
import Layout from '../layout';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ name, email, message });
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <>
            <div className="px-2 pb-2 bg-gray-100">
            <h1 className="text-4xl font-bold text-center my-6 text-amber-700">Contact Us</h1>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mb-8 mx-auto">
                <div className="mb-4">
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div className="mb-4">
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div className="mb-4">
                    <textarea 
                        placeholder="Your Message" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required 
                        className="border p-2 rounded w-full"
                        rows={4}
                    />
                </div>
                <button type="submit" className="bg-amber-500 text-white p-2 rounded w-full">Send Message</button>
            </form>

            {/* Google Map Section */}
            <div className="flex justify-center mb-8">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.0037259123505!2d119.8825762!3d-8.499017199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2db465e361dba09d%3A0x279870f3f4ea4df5!2sELEVEN%20CAFE!5e0!3m2!1sen!2sid!4v1731995603280!5m2!1sen!2sid"
                    width="80%"
                    height="80%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                />
            </div>

            {/* WhatsApp Section */}
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4 text-amber-700">Chat with us on WhatsApp</h2>
                <p className="text-lg">You can reach us at:</p>
                <a 
                    href="https://wa.me/YOUR_WHATSAPP_NUMBER" 
                    className="bg-amber-500 text-white text-lg font-semibold py-2 px-4 rounded hover:bg-amber-600 transition duration-200"
                >
                    <span role="img" aria-label="WhatsApp">💬</span> +62 812 3456 7890
                </a>
            </div>
            </div>
        </>
    );
}