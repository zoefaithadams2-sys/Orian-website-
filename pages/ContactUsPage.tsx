
import React from 'react';
import Button from '../components/Button';

const ContactUsPage: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Page Header */}
            <section className="bg-brand-blue py-20 text-white text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold">Get In Touch</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg">We'd love to hear from you. Whether you're looking to buy, sell, or simply have a question, our team is ready to help.</p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-2 bg-brand-light p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-brand-blue mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input type="tel" id="phone" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea id="message" rows={5} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold"></textarea>
                                </div>
                                <div>
                                    <Button onClick={() => alert('Message sent!')} className="w-full" variant="secondary">Send Message</Button>
                                </div>
                            </form>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-8">
                            <div className="bg-brand-light p-8 rounded-lg shadow-lg">
                                <h3 className="text-xl font-bold text-brand-blue mb-4">Contact Information</h3>
                                <div className="space-y-3 text-gray-700">
                                    <p><span className="font-semibold">Address:</span> Office 23, Adderley Street, Cape Town, South Africa, 8874</p>
                                    <p><span className="font-semibold">Phone:</span> +27 79 405 3864</p>
                                    <p><span className="font-semibold">WhatsApp:</span> +27 78 900 2159</p>
                                    <p><span className="font-semibold">Email:</span> arthur.randcorporation@gmail.com</p>
                                </div>
                            </div>
                             <div className="bg-brand-light p-8 rounded-lg shadow-lg">
                                <h3 className="text-xl font-bold text-brand-blue mb-4">Business Hours</h3>
                                 <div className="space-y-2 text-gray-700">
                                     <p><span className="font-semibold">Mon - Fri:</span> 9:00 AM - 5:00 PM</p>
                                     <p><span className="font-semibold">Sat:</span> 10:00 AM - 1:00 PM (By Appointment)</p>
                                     <p><span className="font-semibold">Sun:</span> Closed</p>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Map */}
            <section>
                <div className="h-96 bg-gray-300 flex items-center justify-center text-gray-500 font-semibold text-2xl">
                    Google Map of Cape Town Office
                </div>
            </section>
        </div>
    );
};

export default ContactUsPage;
