
import React from 'react';
import { Link } from 'react-router-dom';
import { Property, PropertyStatus } from '../types';
import { BedIcon, BathIcon, CarIcon, AreaIcon } from '../assets/icons';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const formatPrice = (price: number, status: PropertyStatus) => {
    if (status === PropertyStatus.ToLet) {
      return `R ${price.toLocaleString()}/month`;
    }
    return `R ${price.toLocaleString()}`;
  };

  const statusColors: { [key in PropertyStatus]: string } = {
    [PropertyStatus.ForSale]: 'bg-brand-blue',
    [PropertyStatus.ToLet]: 'bg-green-600',
    [PropertyStatus.Auction]: 'bg-brand-gold',
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
      <Link to={`/properties/${property.id}`} className="block">
        <div className="relative">
          <img className="h-56 w-full object-cover" src={property.images[0]} alt={property.title} />
          <div className={`absolute top-0 left-0 mt-3 ml-3 px-3 py-1 text-xs font-semibold text-white rounded-full ${statusColors[property.status]}`}>
            {property.status}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-brand-blue group-hover:text-brand-gold transition-colors duration-300 truncate">{property.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{property.location}</p>
          <p className="text-xl font-bold text-brand-blue mt-3">{property.status === PropertyStatus.Auction ? property.auctionDetails : formatPrice(property.price, property.status)}</p>
          <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between text-sm text-gray-700">
            <div className="flex items-center">
              <BedIcon className="h-5 w-5 mr-2 text-brand-gold" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <BathIcon className="h-5 w-5 mr-2 text-brand-gold" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <CarIcon className="h-5 w-5 mr-2 text-brand-gold" />
              <span>{property.parking}</span>
            </div>
             <div className="flex items-center">
              <AreaIcon className="h-5 w-5 mr-2 text-brand-gold" />
              <span>{property.size} m²</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
