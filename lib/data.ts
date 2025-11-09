export type ItemCard = {
  id: string;
  title: string;
  brand: string;
  images: string[];
  pricePerDay: number;
  deposit: number;
  city: "Bangalore" | "Hyderabad" | "Mumbai";
  category: "gadgets" | "fashion" | "watches" | "sneakers" | "bags";
  rating?: number;
  badge?: "Hot" | "New" | "Verified" | "Luxury";
  description: string;
  condition: "Brand New" | "Excellent" | "Good" | "Fair";
  purchaseDate: string;
  isLuxury?: boolean;
  originalPrice?: number;
};

export const sampleItems: ItemCard[] = [
  // Luxury Watches
  {
    id: '1',
    title: 'Rolex Submariner Date',
    brand: 'Rolex',
    images: [
      'https://images.unsplash.com/photo-1620626832871-b6574b6c31a1?q=80&w=3270&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1587836374228-4c6e0a0e3c3c?q=80&w=3270&auto=format&fit=crop'
    ],
    pricePerDay: 150,
    deposit: 1500,
    city: 'Mumbai',
    category: 'watches',
    badge: 'Luxury',
    description: 'The iconic diver\'s watch, known for its robust and functional design. Water-resistant up to 300 metres with a unidirectional rotatable bezel. This timepiece is the perfect blend of elegance and utility.',
    condition: 'Excellent',
    purchaseDate: '2023-01-20',
    isLuxury: true,
    originalPrice: 12500,
    rating: 5
  },
  {
    id: '2',
    title: 'Patek Philippe Nautilus',
    brand: 'Patek Philippe',
    images: [
      'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=3270&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=3270&auto=format&fit=crop'
    ],
    pricePerDay: 300,
    deposit: 3000,
    city: 'Mumbai',
    category: 'watches',
    badge: 'Luxury',
    description: 'The Nautilus is one of the most sought-after luxury sports watches in the world. Features a distinctive porthole-shaped case and integrated bracelet. An investment piece that appreciates over time.',
    condition: 'Brand New',
    purchaseDate: '2024-03-15',
    isLuxury: true,
    originalPrice: 45000,
    rating: 5
  },
  {
    id: '3',
    title: 'Omega Seamaster Professional',
    brand: 'Omega',
    images: [
      'https://images.unsplash.com/photo-1617058814489-4c833a75b058?q=80&w=3270&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=3270&auto=format&fit=crop'
    ],
    pricePerDay: 120,
    deposit: 1200,
    city: 'Bangalore',
    category: 'watches',
    badge: 'Luxury',
    description: 'James Bond\'s choice. The legendary Seamaster Diver 300M has been a favorite since 1993. Today\'s modern collection has embraced that famous ocean heritage and updated it with OMEGA\'s best innovation and design.',
    condition: 'Excellent',
    purchaseDate: '2023-06-10',
    isLuxury: true,
    originalPrice: 8500,
    rating: 5
  },
  {
    id: '4',
    title: 'TAG Heuer Carrera',
    brand: 'TAG Heuer',
    images: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=3280&auto=format&fit=crop'
    ],
    pricePerDay: 85,
    deposit: 900,
    city: 'Hyderabad',
    category: 'watches',
    badge: 'Verified',
    description: 'A racing-inspired chronograph with impeccable Swiss craftsmanship. Perfect for the modern gentleman who appreciates precision and style.',
    condition: 'Good',
    purchaseDate: '2022-09-25',
    isLuxury: true,
    originalPrice: 5500,
    rating: 4
  },

  // Luxury Bags
  {
    id: '5',
    title: 'Hermès Birkin 30',
    brand: 'Hermès',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=3135&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=3270&auto=format&fit=crop'
    ],
    pricePerDay: 250,
    deposit: 3500,
    city: 'Mumbai',
    category: 'bags',
    badge: 'Luxury',
    description: 'The most iconic handbag in the world. This Togo leather Birkin 30 features palladium hardware and comes with original dust bag and authenticity cards. A true investment piece.',
    condition: 'Excellent',
    purchaseDate: '2023-11-05',
    isLuxury: true,
    originalPrice: 18000,
    rating: 5
  },
  {
    id: '6',
    title: 'Chanel Classic Flap Bag',
    brand: 'Chanel',
    images: [
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=3271&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590156221900-28a8eea34a7e?q=80&w=3270&auto=format&fit=crop'
    ],
    pricePerDay: 180,
    deposit: 2500,
    city: 'Bangalore',
    category: 'bags',
    badge: 'Luxury',
    description: 'The timeless Chanel Classic Flap in caviar leather with gold hardware. Features the iconic quilted pattern and chain strap. Perfect for any occasion from casual to formal.',
    condition: 'Excellent',
    purchaseDate: '2023-08-18',
    isLuxury: true,
    originalPrice: 12000,
    rating: 5
  },
  {
    id: '7',
    title: 'Louis Vuitton Keepall 55',
    brand: 'Louis Vuitton',
    images: [
      'https://images.unsplash.com/photo-1610271340738-726e199f0258?q=80&w=3270&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=3270&auto=format&fit=crop'
    ],
    pricePerDay: 95,
    deposit: 850,
    city: 'Hyderabad',
    category: 'bags',
    badge: 'Verified',
    description: 'Classic travel bag in Monogram canvas. Lightweight, supple and always ready for departure. The ultimate weekend companion for the sophisticated traveler.',
    condition: 'Good',
    purchaseDate: '2022-12-10',
    isLuxury: true,
    originalPrice: 2100,
    rating: 5
  },
  {
    id: '8',
    title: 'Gucci Dionysus Medium',
    brand: 'Gucci',
    images: [
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=3270&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=3269&auto=format&fit=crop'
    ],
    pricePerDay: 110,
    deposit: 1200,
    city: 'Mumbai',
    category: 'bags',
    badge: 'Hot',
    description: 'Signature GG Supreme canvas with the iconic tiger head closure. Features a sliding chain strap that can be worn multiple ways. A statement piece from Gucci\'s most beloved collection.',
    condition: 'Excellent',
    purchaseDate: '2023-04-22',
    isLuxury: true,
    originalPrice: 3800,
    rating: 5
  },

  // Designer Fashion
  {
    id: '9',
    title: 'Burberry Heritage Trench Coat',
    brand: 'Burberry',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=3135&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=3087&auto=format&fit=crop'
    ],
    pricePerDay: 120,
    deposit: 1100,
    city: 'Bangalore',
    category: 'fashion',
    badge: 'Luxury',
    description: 'An iconic piece of British design. Made from weatherproof gabardine with the classic Burberry check lining. Perfect for any season, this coat exudes timeless elegance.',
    condition: 'Excellent',
    purchaseDate: '2023-02-14',
    isLuxury: true,
    originalPrice: 2200,
    rating: 5
  },
  {
    id: '10',
    title: 'Moncler Maya Down Jacket',
    brand: 'Moncler',
    images: [
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=3270&auto=format&fit=crop'
    ],
    pricePerDay: 75,
    deposit: 750,
    city: 'Mumbai',
    category: 'fashion',
    badge: 'Hot',
    description: 'The iconic Moncler puffer jacket with a shiny nylon laqué finish. Features premium goose down insulation. Perfect for cold weather with uncompromising style.',
    condition: 'Good',
    purchaseDate: '2022-10-30',
    isLuxury: true,
    originalPrice: 1650,
    rating: 5
  },

  // Premium Sneakers
  {
    id: '11',
    title: 'Air Jordan 1 Retro High OG',
    brand: 'Nike',
    images: [
      'https://images.unsplash.com/photo-1608231387042-89d0ac7c750a?q=80&w=3270&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=3270&auto=format&fit=crop'
    ],
    pricePerDay: 45,
    deposit: 350,
    city: 'Bangalore',
    category: 'sneakers',
    badge: 'Hot',
    description: 'The shoe that started it all. This original Air Jordan 1 colorway is a must-have for sneaker enthusiasts. Features premium leather and the iconic Nike swoosh.',
    condition: 'Good',
    purchaseDate: '2023-07-08',
    originalPrice: 180,
    rating: 5
  },
  {
    id: '12',
    title: 'Adidas Yeezy Boost 350 V2',
    brand: 'Adidas',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=3174&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=3271&auto=format&fit=crop'
    ],
    pricePerDay: 65,
    deposit: 450,
    city: 'Hyderabad',
    category: 'sneakers',
    badge: 'Verified',
    description: 'One of the most sought-after sneakers globally. Features Primeknit upper and comfortable BOOST cushioning. Perfect for streetwear enthusiasts.',
    condition: 'Excellent',
    purchaseDate: '2023-09-12',
    originalPrice: 240,
    rating: 5
  },
  {
    id: '13',
    title: 'Off-White Nike Blazer',
    brand: 'Nike',
    images: [
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=3264&auto=format&fit=crop'
    ],
    pricePerDay: 80,
    deposit: 600,
    city: 'Mumbai',
    category: 'sneakers',
    badge: 'Luxury',
    description: 'Virgil Abloh\'s deconstructed Nike Blazer collaboration. Features exposed foam, unique lacing system and iconic Off-White text. A collector\'s dream.',
    condition: 'Excellent',
    purchaseDate: '2023-05-30',
    originalPrice: 550,
    rating: 5
  },

  // Premium Gadgets
  {
    id: '14',
    title: 'Sony Alpha 7 IV',
    brand: 'Sony',
    images: [
      'https://images.unsplash.com/photo-1642461321223-3b8b404f543b?q=80&w=3270&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606975461557-0b39a2c89a98?q=80&w=3270&auto=format&fit=crop'
    ],
    pricePerDay: 55,
    deposit: 500,
    city: 'Bangalore',
    category: 'gadgets',
    badge: 'Hot',
    description: 'Full-frame mirrorless camera with 33MP resolution, 4K 60fps video, and advanced AI autofocus. Perfect for professional photographers and videographers.',
    condition: 'Excellent',
    purchaseDate: '2023-03-15',
    originalPrice: 2500,
    rating: 5
  },
  {
    id: '15',
    title: 'Canon EOS R5',
    brand: 'Canon',
    images: [
      'https://images.unsplash.com/photo-1599579172082-95b542385103?q=80&w=3270&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605332155734-367a8b38792a?q=80&w=3270&auto=format&fit=crop'
    ],
    pricePerDay: 70,
    deposit: 650,
    city: 'Hyderabad',
    category: 'gadgets',
    badge: 'Verified',
    description: 'Professional mirrorless camera with 8K video, 45MP sensor, and industry-leading autofocus. The ultimate tool for content creators.',
    condition: 'Good',
    purchaseDate: '2022-11-20',
    originalPrice: 3900,
    rating: 5
  },
  {
    id: '16',
    title: 'DJI Mavic 3 Pro Cine',
    brand: 'DJI',
    images: [
      'https://images.unsplash.com/photo-1684784311093-61058f33534b?q=80&w=3270&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=3270&auto=format&fit=crop'
    ],
    pricePerDay: 90,
    deposit: 800,
    city: 'Mumbai',
    category: 'gadgets',
    badge: 'New',
    description: 'Professional drone with triple-camera system including a 4/3 CMOS Hasselblad camera. Features Apple ProRes 422 HQ recording and 43-minute flight time.',
    condition: 'Brand New',
    purchaseDate: '2024-01-10',
    originalPrice: 4800,
    rating: 5
  },
  {
    id: '17',
    title: 'iPhone 15 Pro Max',
    brand: 'Apple',
    images: [
      'https://images.unsplash.com/photo-1695026412535-5a75a7c26801?q=80&w=3270&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1592286927505-2fd0fb3b5fc2?q=80&w=3270&auto=format&fit=crop'
    ],
    pricePerDay: 40,
    deposit: 400,
    city: 'Bangalore',
    category: 'gadgets',
    badge: 'Hot',
    description: 'Titanium design with A17 Pro chip, 5x telephoto camera, and Action button. The most powerful iPhone ever created for professionals and enthusiasts.',
    condition: 'Excellent',
    purchaseDate: '2023-10-05',
    originalPrice: 1499,
    rating: 5
  },
  {
    id: '18',
    title: 'MacBook Pro 16" M3 Max',
    brand: 'Apple',
    images: [
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=3270&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=3126&auto=format&fit=crop'
    ],
    pricePerDay: 60,
    deposit: 800,
    city: 'Hyderabad',
    category: 'gadgets',
    badge: 'New',
    description: 'The most powerful MacBook Pro ever with M3 Max chip, stunning Liquid Retina XDR display, and up to 22 hours of battery life. Perfect for developers and creators.',
    condition: 'Brand New',
    purchaseDate: '2024-02-01',
    originalPrice: 4299,
    rating: 5
  },
];

export const heroSlides = [
    { id: 1, image: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=3270&auto=format&fit=crop', headline: 'Rent Your Desires', sub: 'Access thousands of luxury items, from fashion to gadgets, without the commitment of buying.', cta: { label: 'Start Browsing', href: '/categories' } },
    { id: 2, image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=3135&auto=format&fit=crop', headline: 'Earn From Your Closet', sub: 'Turn your own high-quality items into a source of income by lending them to our trusted community.', cta: { label: 'Lend an Item', href: '/lend' } },
    { id: 3, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=3199&auto=format&fit=crop', headline: 'Sustainable & Smart', sub: 'Experience more while owning less. Join the circular economy and reduce waste.', cta: { label: 'Learn More', href: '/help' } },
    { id: 4, image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=3270&auto=format&fit=crop', headline: 'Luxury Made Accessible', sub: 'Experience designer items without the premium price tag. Rent Hermès, Rolex, and more.', cta: { label: 'Explore Luxury', href: '/categories?luxury=true' } },
];

export const trustBarItems = [
    { icon: 'verified', title: 'Verified Lenders', desc: 'Every lender is KYC-verified to ensure a trusted community.' },
    { icon: 'secure', title: 'Secure Deposits', desc: 'Your deposits are held safely until the item is returned.' },
    { icon: 'delivery', title: 'Fast Delivery', desc: 'Get your rented items delivered to your doorstep quickly.' },
    { icon: 'insurance', title: 'Damage Protection', desc: 'Optional insurance add-ons for peace of mind.' },
];

export const categories = [
    { slug: 'gadgets', label: 'Gadgets', icon: 'gadgets' },
    { slug: 'fashion', label: 'Fashion', icon: 'fashion' },
    { slug: 'watches', label: 'Watches', icon: 'watches' },
    { slug: 'sneakers', label: 'Sneakers', icon: 'sneakers' },
    { slug: 'bags', label: 'Bags', icon: 'bags' },
];

export const howItWorksSteps = [
    { title: 'Browse & Discover', desc: 'Explore thousands of items from trusted lenders in your city.' },
    { title: 'Book & Pay Deposit', desc: 'Securely book your item for the dates you need and pay a refundable deposit.' },
    { title: 'Enjoy & Return', desc: 'Enjoy your rental! Return it as you received it to get your deposit back.' },
];

export const testimonials = [
    { name: 'Priya Sharma', city: 'Bangalore', quote: 'Lendlyy is a game-changer! I rented a designer bag for a wedding and it was a seamless experience.', rating: 5 },
    { name: 'Rohan Gupta', city: 'Mumbai', quote: 'Listing my camera on Lendlyy was so easy. It\'s a great way to make some extra cash from gear I\'m not using.', rating: 5 },
    { name: 'Ananya Reddy', city: 'Hyderabad', quote: 'The variety is amazing. I found the perfect lens for my photography trip without having to buy it.', rating: 4 },
];
