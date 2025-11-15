
import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import Button from '../components/Button';
import { PROPERTIES, TESTIMONIALS } from '../constants';

const TestimonialSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
        }, 5000); // Change testimonial every 5 seconds
        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <div className="relative w-full max-w-3xl mx-auto h-48 flex items-center justify-center">
            {TESTIMONIALS.map((testimonial, index) => (
                <div key={index} className={`absolute w-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-xl italic text-center text-gray-600">"{testimonial.quote}"</p>
                    <p className="text-md font-semibold text-center text-brand-blue mt-4">- {testimonial.author}</p>
                </div>
            ))}
        </div>
    );
};


const HomePage: React.FC = () => {
  const featuredProperties = PROPERTIES.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/capetown/1920/1080')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Find Your Home. Discover Your Investment. Secure Your Future.</h1>
          <p className="mt-4 text-lg md:text-2xl font-light">Real Estate & Property Auctions Across Cape Town.</p>
          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button to="/properties" variant="secondary">View Properties</Button>
            <Button to="/contact" variant="outline">Book a Valuation</Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-blue">Your Premier Partner in Cape Town Property</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto my-4"></div>
          <p className="text-gray-700 leading-relaxed mt-4">
            At Ryan's Auction & Private Property, we combine deep local expertise with a modern, transparent approach to buying, selling, and auctioning properties. Whether you're seeking a luxury seaside villa or a strategic investment opportunity, our dedicated team is here to guide you every step of the way, ensuring a seamless and successful experience.
          </p>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-blue mb-2">Featured Properties</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map(prop => <PropertyCard key={prop.id} property={prop} />)}
          </div>
        </div>
      </section>

      {/* Quick Search Bar */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Find Your Property</h2>
            <div className="bg-white/20 p-6 rounded-lg shadow-lg">
                <form className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    <select className="p-3 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-gold md:col-span-2 lg:col-span-1">
                        <option>Buy</option>
                        <option>Rent</option>
                        <option>Auction</option>
                    </select>
                     <input type="text" placeholder="Location (e.g. Camps Bay)" className="p-3 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-gold col-span-1 md:col-span-2"/>
                    <select className="p-3 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-gold">
                        <option>Any Property Type</option>
                        <option>House</option>
                        <option>Apartment</option>
                        <option>Commercial</option>
                    </select>
                    <button type="submit" className="w-full bg-brand-gold text-white font-semibold p-3 rounded-md hover:bg-yellow-600 transition duration-300 col-span-1">
                        Search
                    </button>
                </form>
            </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-brand-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-brand-blue mb-2">What Our Clients Say</h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-12"></div>
              <TestimonialSlider />
          </div>
      </section>
    </div>
  );
};

export default HomePage;
