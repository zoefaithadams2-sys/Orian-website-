
import { Property, PropertyStatus, Agent, TeamMember, Testimonial } from './types';

export const AGENTS: { [key: string]: Agent } = {
  ryan: {
    name: 'Ryan Thomson',
    email: 'ryan.thomson@ra-pp.co.za',
    phone: '+27 82 123 4567',
    imageUrl: 'https://picsum.photos/seed/agent1/200/200',
  },
  jane: {
    name: 'Jane Doe',
    email: 'jane.doe@ra-pp.co.za',
    phone: '+27 83 765 4321',
    imageUrl: 'https://picsum.photos/seed/agent2/200/200',
  },
};

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Luxury Villa with Ocean Views',
    location: 'Camps Bay, Cape Town',
    price: 35000000,
    status: PropertyStatus.ForSale,
    bedrooms: 5,
    bathrooms: 5,
    parking: 3,
    size: 600,
    description: 'Breathtaking, modern villa nestled on the slopes of the Twelve Apostles mountain range, offering panoramic views of the Atlantic Ocean. This architectural masterpiece features open-plan living spaces, an infinity pool, and state-of-the-art finishes.',
    features: ['Infinity Pool', 'Home Cinema', 'Ocean Views', 'Air Conditioning', 'Gourmet Kitchen', 'Security System'],
    images: [
      'https://picsum.photos/seed/prop1img1/1200/800',
      'https://picsum.photos/seed/prop1img2/1200/800',
      'https://picsum.photos/seed/prop1img3/1200/800',
      'https://picsum.photos/seed/prop1img4/1200/800',
    ],
    agent: AGENTS.ryan,
  },
  {
    id: '2',
    title: 'Historic Wine Farm Estate',
    location: 'Constantia, Cape Town',
    price: 75000000,
    status: PropertyStatus.Auction,
    auctionDetails: 'Auction on 30 Nov 2024, 11:00 AM',
    bedrooms: 8,
    bathrooms: 7,
    parking: 10,
    size: 2500,
    description: 'A rare opportunity to own a piece of Cape history. This magnificent estate in the heart of the Constantia wine valley boasts sprawling vineyards, a historic manor house, and modern production facilities. A truly unique lifestyle investment.',
    features: ['Private Vineyard', 'Historic Manor', 'Wine Cellar', 'Mountain Views', 'Guest Cottages', 'Tennis Court'],
    images: [
      'https://picsum.photos/seed/prop2img1/1200/800',
      'https://picsum.photos/seed/prop2img2/1200/800',
      'https://picsum.photos/seed/prop2img3/1200/800',
    ],
    agent: AGENTS.ryan,
  },
  {
    id: '3',
    title: 'Modern City Apartment',
    location: 'V&A Waterfront, Cape Town',
    price: 45000,
    status: PropertyStatus.ToLet,
    bedrooms: 2,
    bathrooms: 2,
    parking: 2,
    size: 150,
    description: 'Experience sophisticated urban living in this stylish apartment at the prestigious V&A Waterfront. Featuring contemporary design, premium amenities, and stunning harbour views. Perfect for professionals or as a corporate rental.',
    features: ['24-hour Security', 'Communal Pool & Gym', 'Harbour Views', 'Balcony', 'Fully Furnished'],
    images: [
      'https://picsum.photos/seed/prop3img1/1200/800',
      'https://picsum.photos/seed/prop3img2/1200/800',
    ],
    agent: AGENTS.jane,
  },
  {
    id: '4',
    title: 'Family Home in Leafy Suburb',
    location: 'Newlands, Cape Town',
    price: 12500000,
    status: PropertyStatus.ForSale,
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    size: 450,
    description: 'Charming and spacious family home in the heart of Newlands. This property offers a large garden, swimming pool, and easy access to top schools and amenities. An ideal setting to raise a family.',
    features: ['Swimming Pool', 'Large Garden', 'Fireplace', 'Close to Schools', 'Mountain Views'],
    images: [
      'https://picsum.photos/seed/prop4img1/1200/800',
      'https://picsum.photos/seed/prop4img2/1200/800',
      'https://picsum.photos/seed/prop4img3/1200/800',
    ],
    agent: AGENTS.jane,
  },
  {
    id: '5',
    title: 'Penthouse on the Atlantic Seaboard',
    location: 'Sea Point, Cape Town',
    price: 22000000,
    status: PropertyStatus.ForSale,
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    size: 280,
    description: 'An exquisite penthouse offering 360-degree views of the ocean, Lion\'s Head, and the city. With a private rooftop terrace and splash pool, this is the epitome of luxury coastal living.',
    features: ['Rooftop Terrace', 'Private Pool', '360-degree Views', 'Direct Elevator Access', 'Modern Finishes'],
    images: [
      'https://picsum.photos/seed/prop5img1/1200/800',
      'https://picsum.photos/seed/prop5img2/1200/800',
    ],
    agent: AGENTS.ryan,
  },
  {
    id: '6',
    title: 'Commercial Retail Space',
    location: 'CBD, Cape Town',
    price: 85000,
    status: PropertyStatus.ToLet,
    bedrooms: 0,
    bathrooms: 2,
    parking: 5,
    size: 300,
    description: 'Prime retail space on a busy street in Cape Town\'s central business district. High foot traffic and excellent visibility make this an ideal location for a flagship store or restaurant.',
    features: ['High Foot Traffic', 'Street Frontage', 'Excellent Visibility', 'Kitchenette', 'Storage Space'],
    images: [
      'https://picsum.photos/seed/prop6img1/1200/800',
    ],
    agent: AGENTS.jane,
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
    {
        name: 'Ryan Thompson',
        role: 'Founder & Principal Auctioneer',
        imageUrl: 'https://picsum.photos/seed/team1/400/400',
        bio: 'With over 20 years of experience in the Cape Town property market, Ryan leads the team with unparalleled expertise and a passion for securing the best outcomes for our clients.'
    },
    {
        name: 'Jessica Chen',
        role: 'Head of Private Sales',
        imageUrl: 'https://picsum.photos/seed/team2/400/400',
        bio: 'Jessica specializes in luxury residential properties on the Atlantic Seaboard. Her client-centric approach and sharp negotiation skills have made her a top agent in the region.'
    },
    {
        name: 'David Muller',
        role: 'Rental Portfolio Manager',
        imageUrl: 'https://picsum.photos/seed/team3/400/400',
        bio: 'David manages our extensive portfolio of rental properties, ensuring both landlords and tenants receive exceptional service and support.'
    },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: 'Ryan\'s Auction & Private Property handled the sale of our home with absolute professionalism and achieved a price beyond our expectations. We couldn\'t be happier.',
        author: 'The Smith Family, Constantia'
    },
    {
        quote: 'The auction process was seamless and transparent. The team\'s expertise was evident every step of the way. Highly recommended for any serious seller.',
        author: 'John P., Camps Bay'
    },
    {
        quote: 'As first-time homebuyers, we were nervous, but their guidance and patience made the experience enjoyable and stress-free. Thank you for helping us find our dream home!',
        author: 'Sarah & Tom, Newlands'
    }
];
