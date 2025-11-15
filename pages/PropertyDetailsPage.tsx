
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROPERTIES } from '../constants';
import { PropertyStatus } from '../types';
import Button from '../components/Button';
import { BedIcon, BathIcon, CarIcon, AreaIcon } from '../assets/icons';

const PropertyDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const property = PROPERTIES.find(p => p.id === id);

    if (!property) {
        return (
            <div className="h-screen flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold text-brand-blue">Property Not Found</h1>
                <p className="mt-4 text-gray-600">The property you are looking for does not exist.</p>
                <Button to="/properties" className="mt-8">Back to Properties</Button>
            </div>
        );
    }
    
    const formatPrice = (price: number, status: PropertyStatus) => {
        if (status === PropertyStatus.ToLet) return `R ${price.toLocaleString()}/month`;
        if (status === PropertyStatus.Auction) return `Auction: ${property.auctionDetails}`;
        return `R ${price.toLocaleString()}`;
    };

    return (
        <div className="bg-brand-light">
            {/* Header Image */}
            <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${property.images[0]})` }}>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                 <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 text-white">
                    <h1 className="text-4xl lg:text-5xl font-bold">{property.title}</h1>
                    <p className="mt-2 text-xl">{property.location}</p>
                 </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-3xl font-bold text-brand-gold">{formatPrice(property.price, property.status)}</h2>
                             {/* Features Icons */}
                            <div className="flex flex-wrap gap-x-6 gap-y-4 my-6 text-gray-800 border-y py-4">
                                <div className="flex items-center"><BedIcon className="h-6 w-6 mr-2 text-brand-blue" /> <span className="font-semibold">{property.bedrooms} Bedrooms</span></div>
                                <div className="flex items-center"><BathIcon className="h-6 w-6 mr-2 text-brand-blue" /> <span className="font-semibold">{property.bathrooms} Bathrooms</span></div>
                                <div className="flex items-center"><CarIcon className="h-6 w-6 mr-2 text-brand-blue" /> <span className="font-semibold">{property.parking} Parking</span></div>
                                <div className="flex items-center"><AreaIcon className="h-6 w-6 mr-2 text-brand-blue" /> <span className="font-semibold">{property.size} m²</span></div>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-brand-blue mt-8 mb-4">Description</h3>
                            <p className="text-gray-700 leading-relaxed">{property.description}</p>
                            
                            <h3 className="text-2xl font-bold text-brand-blue mt-8 mb-4">Additional Features</h3>
                            <ul className="grid grid-cols-2 gap-4 list-disc list-inside text-gray-700">
                                {property.features.map(feature => <li key={feature}>{feature}</li>)}
                            </ul>
                        </div>

                        {/* Image Gallery */}
                        <div className="bg-white p-8 rounded-lg shadow-md mt-8">
                            <h3 className="text-2xl font-bold text-brand-blue mb-4">Property Gallery</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {property.images.map((img, index) => (
                                    <img key={index} src={img} alt={`${property.title} ${index + 1}`} className="rounded-lg w-full h-auto object-cover" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside>
                        {/* Agent Contact */}
                        <div className="bg-white p-6 rounded-lg shadow-md sticky top-28">
                            <h3 className="text-xl font-bold text-brand-blue text-center mb-4">Contact Agent</h3>
                            <div className="flex flex-col items-center">
                                <img src={property.agent.imageUrl} alt={property.agent.name} className="w-24 h-24 rounded-full object-cover mb-4" />
                                <p className="font-bold">{property.agent.name}</p>
                                <p className="text-sm text-gray-600">{property.agent.email}</p>
                                <p className="text-sm text-gray-600">{property.agent.phone}</p>
                            </div>
                            <div className="mt-6 space-y-3">
                                <Button to="/contact" variant="secondary" className="w-full">Book a Viewing</Button>
                                <Button onClick={() => alert('Downloading brochure...')} variant="primary" className="w-full">Download Brochure</Button>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                            <h3 className="text-xl font-bold text-brand-blue mb-4">Location</h3>
                            <div className="h-64 bg-gray-300 rounded-md flex items-center justify-center text-gray-500">
                                Google Map Placeholder
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetailsPage;
