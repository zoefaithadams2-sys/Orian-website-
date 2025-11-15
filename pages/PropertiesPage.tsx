
import React, { useState, useMemo } from 'react';
import PropertyCard from '../components/PropertyCard';
import { PROPERTIES } from '../constants';

const ITEMS_PER_PAGE = 6;

const PropertiesPage: React.FC = () => {
    const [filters, setFilters] = useState({
        status: 'all',
        type: 'all',
        minPrice: '',
        maxPrice: '',
        bedrooms: 'all',
        location: '',
    });

    const [currentPage, setCurrentPage] = useState(1);

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
        setCurrentPage(1); // Reset to first page on filter change
    };

    const filteredProperties = useMemo(() => {
        return PROPERTIES.filter(prop => {
            const statusMatch = filters.status === 'all' || prop.status === filters.status;
            // A simple type check example. This can be expanded with more property data.
            const typeMatch = filters.type === 'all' || (filters.type === 'house' && prop.bedrooms > 2) || (filters.type === 'apartment' && prop.bedrooms <= 2);
            const minPriceMatch = filters.minPrice === '' || prop.price >= parseInt(filters.minPrice);
            const maxPriceMatch = filters.maxPrice === '' || prop.price <= parseInt(filters.maxPrice);
            const bedroomsMatch = filters.bedrooms === 'all' || prop.bedrooms >= parseInt(filters.bedrooms);
            const locationMatch = filters.location === '' || prop.location.toLowerCase().includes(filters.location.toLowerCase());

            return statusMatch && typeMatch && minPriceMatch && maxPriceMatch && bedroomsMatch && locationMatch;
        });
    }, [filters]);

    const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
    const paginatedProperties = filteredProperties.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="bg-brand-light">
            {/* Page Header */}
            <section className="bg-brand-blue py-20 text-white text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold">Our Properties</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg">Explore our curated selection of properties for sale, to let, and on auction across Cape Town.</p>
                </div>
            </section>

            {/* Filters */}
            <section className="sticky top-20 z-40 bg-white shadow-md py-4">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                         <select name="status" value={filters.status} onChange={handleFilterChange} className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold">
                            <option value="all">Any Status</option>
                            <option value="For Sale">For Sale</option>
                            <option value="To Let">To Let</option>
                            <option value="Auction">Auction</option>
                        </select>
                        <select name="type" value={filters.type} onChange={handleFilterChange} className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold">
                            <option value="all">Any Type</option>
                            <option value="house">House</option>
                            <option value="apartment">Apartment</option>
                        </select>
                        <select name="bedrooms" value={filters.bedrooms} onChange={handleFilterChange} className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold">
                            <option value="all">Any Beds</option>
                            <option value="1">1+</option>
                            <option value="2">2+</option>
                            <option value="3">3+</option>
                            <option value="4">4+</option>
                        </select>
                        <input type="number" name="minPrice" placeholder="Min Price" value={filters.minPrice} onChange={handleFilterChange} className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                        <input type="number" name="maxPrice" placeholder="Max Price" value={filters.maxPrice} onChange={handleFilterChange} className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                        <input type="text" name="location" placeholder="Location..." value={filters.location} onChange={handleFilterChange} className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                    </div>
                </div>
            </section>

            {/* Property Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {paginatedProperties.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {paginatedProperties.map(prop => <PropertyCard key={prop.id} property={prop} />)}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <h2 className="text-2xl font-semibold text-gray-700">No properties match your criteria.</h2>
                            <p className="text-gray-500 mt-2">Please try adjusting your filters.</p>
                        </div>
                    )}
                </div>
            </section>
            
            {/* Pagination */}
            {totalPages > 1 && (
                <section className="pb-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center space-x-2">
                        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 bg-white border rounded-md disabled:opacity-50">&laquo;</button>
                        {[...Array(totalPages)].map((_, i) => (
                            <button key={i} onClick={() => goToPage(i + 1)} className={`px-4 py-2 border rounded-md ${currentPage === i + 1 ? 'bg-brand-blue text-white' : 'bg-white'}`}>
                                {i + 1}
                            </button>
                        ))}
                        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 bg-white border rounded-md disabled:opacity-50">&raquo;</button>
                    </div>
                </section>
            )}
        </div>
    );
};

export default PropertiesPage;
