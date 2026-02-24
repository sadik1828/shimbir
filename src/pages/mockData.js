// mockData.js
export const services = [
  {
    _id: '1',
    name: 'Residential Construction',
    description: 'Custom homes, renovations, and extensions',
    longDescription: 'From custom home builds to complete renovations, our residential construction services deliver exceptional quality and attention to detail. We work closely with homeowners to bring their dream spaces to life.',
    icon: '🏠',
    features: [
      'Custom Home Building',
      'Home Renovations',
      'Kitchen & Bathroom Remodeling',
      'Room Additions',
      'Basement Finishing'
    ],
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800'
  },
  {
    _id: '2',
    name: 'Commercial Construction',
    description: 'Office buildings, retail spaces, and warehouses',
    longDescription: 'Our commercial construction team delivers high-quality commercial spaces on time and within budget. We handle everything from office buildings to retail spaces and industrial facilities.',
    icon: '🏢',
    features: [
      'Office Buildings',
      'Retail Spaces',
      'Warehouses',
      'Restaurant Construction',
      'Medical Facilities'
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'
  },
  {
    _id: '3',
    name: 'Industrial Construction',
    description: 'Factories, plants, and large-scale facilities',
    longDescription: 'Specializing in complex industrial projects, we deliver robust and efficient facilities designed for heavy-duty operations. Our team has extensive experience in industrial construction.',
    icon: '🏭',
    features: [
      'Manufacturing Plants',
      'Distribution Centers',
      'Industrial Facilities',
      'Heavy Civil Construction',
      'Specialized Infrastructure'
    ],
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800'
  },
  {
    _id: '4',
    name: 'Design & Build',
    description: 'Complete design-to-construction solutions',
    longDescription: 'Our design-build approach streamlines the construction process by integrating design and construction teams. This method saves time, reduces costs, and ensures seamless project execution.',
    icon: '✏️',
    features: [
      'Architectural Design',
      'Engineering Services',
      '3D Modeling',
      'Project Planning',
      'Permit Assistance'
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c627a92ad1ab?w=800'
  }
];

export const projects = [
  {
    _id: '1',
    title: 'Luxury Beachfront Villa',
    description: 'A stunning 5-bedroom beachfront residence with panoramic ocean views',
    location: 'Malibu, CA',
    category: 'Residential Construction',
    tags: ['Luxury Home', 'Beachfront', 'Modern Design'],
    client: 'Private Client',
    budget: '$3.5M',
    duration: '14 months',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'
    ],
    status: 'completed',
    featured: true
  },
  {
    _id: '2',
    title: 'Downtown Office Tower',
    description: 'Modern 10-story office building with sustainable features',
    location: 'Chicago, IL',
    category: 'Commercial Construction',
    tags: ['Office Building', 'Sustainable', 'LEED Certified'],
    client: 'Global Corp Inc.',
    budget: '$12M',
    duration: '18 months',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800'
    ],
    status: 'completed',
    featured: true
  },
  {
    _id: '3',
    title: 'Mountain Retreat Cabin',
    description: 'Cozy yet luxurious mountain cabin with rustic charm',
    location: 'Aspen, CO',
    category: 'Residential Construction',
    tags: ['Cabin', 'Mountain', 'Rustic'],
    client: 'Private Client',
    budget: '$1.2M',
    duration: '8 months',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'
    ],
    status: 'completed',
    featured: false
  },
  {
    _id: '5',
    title: 'Manufacturing Plant',
    description: 'State-of-the-art manufacturing facility with advanced systems',
    location: 'Houston, TX',
    category: 'Industrial Construction',
    tags: ['Factory', 'Industrial', 'Large Scale'],
    client: 'Tech Manufacturing Co.',
    budget: '$25M',
    duration: '24 months',
    images: [
      'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800',
      'https://images.unsplash.com/photo-1554469259-1f0816c3a198?w=800'
    ],
    status: 'completed',
    featured: true
  }
];

export const testimonials = [
  {
    _id: '1',
    clientName: 'Michael Rodriguez',
    projectType: 'Luxury Home Construction',
    content: 'Shimbir Group exceeded our expectations in every way. Their attention to detail and commitment to quality made our dream home a reality.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    _id: '2',
    clientName: 'Sarah Johnson',
    projectType: 'Office Renovation',
    content: 'Working with Shimbir Group on our office renovation was a seamless experience. They understood our vision and executed it perfectly.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    _id: '3',
    clientName: 'David Chen',
    projectType: 'Commercial Building',
    content: 'Professional, reliable, and highly skilled. Shimbir Group delivered our commercial building project ahead of schedule and under budget.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/67.jpg'
  }
];

export const teamMembers = [
  {
    _id: '1',
    name: 'John Shimbir',
    position: 'Founder & CEO',
    bio: 'With over 20 years of experience in the construction industry, John founded Shimbir Group with a vision to deliver exceptional quality.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    _id: '2',
    name: 'Emily Rodriguez',
    position: 'Project Manager',
    bio: 'Emily oversees all residential projects, ensuring quality control and timely delivery. Her meticulous attention to detail is unmatched.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    _id: '3',
    name: 'Michael Chen',
    position: 'Lead Architect',
    bio: 'Michael brings innovative design solutions to every project. His expertise in sustainable architecture has earned numerous industry awards.',
    image: 'https://randomuser.me/api/portraits/men/67.jpg'
  }
];

export const blogPosts = [
  {
    _id: '1',
    title: 'Top 5 Construction Trends for 2026',
    excerpt: 'Discover the latest trends shaping the construction industry this year.',
    date: '2026-01-15',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800',
    category: 'Industry Trends'
  },
  {
    _id: '2',
    title: 'How to Choose the Right Contractor',
    excerpt: 'Essential tips for selecting the perfect construction partner for your project.',
    date: '2026-01-28',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    category: 'Tips & Advice'
  }
];

export default { services, projects, testimonials, teamMembers, blogPosts };