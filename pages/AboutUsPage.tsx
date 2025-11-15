
import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { TeamMember } from '../types';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="text-center">
        <img src={member.imageUrl} alt={member.name} className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg mb-4" />
        <h3 className="text-xl font-bold text-brand-blue">{member.name}</h3>
        <p className="text-brand-gold font-semibold">{member.role}</p>
        <p className="text-gray-600 mt-2 text-sm">{member.bio}</p>
    </div>
);

const AboutUsPage: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Page Header */}
            <section className="bg-brand-blue py-20 text-white text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold">About Ryan's Auction & Private Property</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg">Your trusted experts in the Cape Town real estate market, specializing in private sales and property auctions.</p>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-brand-blue mb-4">Our Mission & Values</h2>
                        <div className="w-24 h-1 bg-brand-gold mb-6"></div>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Our mission is to provide an exceptional real estate service built on transparency, integrity, and deep local knowledge. We strive to achieve the best possible outcomes for our clients, whether they are buying, selling, or investing, by leveraging our unique expertise in both private treaty sales and dynamic property auctions.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We are committed to building lasting relationships based on trust and professional service, ensuring every client's journey is smooth, informed, and ultimately successful.
                        </p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/seed/about-mission/600/400" alt="Cape Town landscape" className="rounded-lg shadow-xl" />
                    </div>
                </div>
            </section>

            {/* Company Highlights */}
             <section className="bg-brand-light py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-8">
                            <div className="text-5xl font-bold text-brand-gold">150+</div>
                            <h3 className="mt-2 text-xl font-semibold text-brand-blue">Successful Auctions</h3>
                        </div>
                        <div className="p-8">
                            <div className="text-5xl font-bold text-brand-gold">R2.5B+</div>
                            <h3 className="mt-2 text-xl font-semibold text-brand-blue">In Property Value Sold</h3>
                        </div>
                        <div className="p-8">
                            <div className="text-5xl font-bold text-brand-gold">500+</div>
                            <h3 className="mt-2 text-xl font-semibold text-brand-blue">Happy Clients</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet The Team */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-brand-blue mb-2">Meet Our Expert Team</h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mb-12"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {TEAM_MEMBERS.map(member => <TeamMemberCard key={member.name} member={member} />)}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;
