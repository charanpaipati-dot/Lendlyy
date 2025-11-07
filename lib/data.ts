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
  badge?: "Hot" | "New" | "Verified";
  description: string;
  condition?: "New" | "Gently Used" | "Used";
  purchaseDate?: string;
};

export const sampleItems: ItemCard[] = [
  { id: '1', title: 'Sony Alpha 7 IV', brand: 'Sony', images: ['https://images.unsplash.com/photo-1642461321223-3b8b404f543b?q=80&w=3270&auto=format&fit=crop'], pricePerDay: 50, deposit: 200, city: 'Bangalore', category: 'gadgets', badge: 'Hot', description: 'A full-frame mirrorless camera that offers stunning image quality, 4K video recording, and a fast autofocus system. Perfect for both professionals and enthusiasts.', condition: 'Gently Used', purchaseDate: '2022-05-15' },
  { id: '2', title: 'Rolex Submariner', brand: 'Rolex', images: ['https://images.unsplash.com/photo-1620626832871-b6574b6c31a1?q=80&w=3270&auto=format&fit=crop'], pricePerDay: 150, deposit: 1000, city: 'Mumbai', category: 'watches', badge: 'Verified', description: 'The iconic diver\'s watch, known for its robust and functional design. Water-resistant up to 300 metres, it is the perfect accessory for any occasion.', condition: 'New', purchaseDate: '2023-01-20' },
  { id: '3', title: 'Louis Vuitton Keepall', brand: 'Louis Vuitton', images: ['https://images.unsplash.com/photo-1610271340738-726e199f0258?q=80&w=3270&auto=format&fit=crop'], pricePerDay: 80, deposit: 500, city: 'Hyderabad', category: 'bags', description: 'A classic travel bag in Monogram canvas. Lightweight, supple and always ready for immediate departure, the bag lives up to its name.' },
  { id: '4', title: 'iPhone 15 Pro', brand: 'Apple', images: ['https://images.unsplash.com/photo-1695026412535-5a75a7c26801?q=80&w=3270&auto=format&fit=crop'], pricePerDay: 30, deposit: 150, city: 'Bangalore', category: 'gadgets', badge: 'New', description: 'Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever.' },
  { id: '5', title: 'Nike Air Jordan 1', brand: 'Nike', images: ['https://images.unsplash.com/photo-1608231387042-89d0ac7c750a?q=80&w=3270&auto=format&fit=crop'], pricePerDay: 40, deposit: 100, city: 'Mumbai', category: 'sneakers', badge: 'Hot', description: 'The original Air Jordan that started a sneaker revolution. A timeless classic that combines style, comfort, and performance.', condition: 'Used', purchaseDate: '2021-11-01' },
  { id: '6', title: 'Gucci Marmont Bag', brand: 'Gucci', images: ['https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=3270&auto=format&fit=crop'], pricePerDay: 90, deposit: 600, city: 'Bangalore', category: 'bags', description: 'The small GG Marmont chain shoulder bag has a softly structured shape and a zip top closure with the Double G hardware. The chain strap has a leather shoulder detail.' },
  { id: '7', title: 'Canon EOS R5', brand: 'Canon', images: ['https://images.unsplash.com/photo-1599579172082-95b542385103?q=80&w=3270&auto=format&fit=crop', 'https://images.unsplash.com/photo-1605332155734-367a8b38792a?q=80&w=3270&auto=format&fit=crop'], pricePerDay: 60, deposit: 300, city: 'Hyderabad', category: 'gadgets', badge: 'Hot', description: 'A professional full-frame mirrorless camera offering photographers and filmmakers high-resolution stills and 8K video. A true hybrid powerhouse.', condition: 'Gently Used', purchaseDate: '2022-08-10' },
  { id: '8', title: 'DJI Mavic 3 Pro', brand: 'DJI', images: ['https://images.unsplash.com/photo-1684784311093-61058f33534b?q=80&w=3270&auto=format&fit=crop'], pricePerDay: 75, deposit: 400, city: 'Mumbai', category: 'gadgets', description: 'Inspiration in Focus. The DJI Mavic 3 Pro, with its triple-camera system, ushers in a new era of camera drones by housing three sensors and lenses with different focal lengths.' },
  { id: '9', title: 'MacBook Pro 16-inch', brand: 'Apple', images: ['https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=3270&auto=format&fit=crop'], pricePerDay: 45, deposit: 250, city: 'Bangalore', category: 'gadgets', badge: 'Verified', description: 'The most powerful MacBook Pro ever. Supercharged by the M2 Pro chip, it delivers game-changing performance with amazing battery life.' },
  { id: '10', title: 'Omega Seamaster', brand: 'Omega', images: ['https://images.unsplash.com/photo-1617058814489-4c833a75b058?q=80&w=3270&auto=format&fit=crop'], pricePerDay: 120, deposit: 800, city: 'Hyderabad', category: 'watches', badge: 'Hot', description: 'A legendary timepiece, the Seamaster Diver 300M has been a favorite since 1993. Today\'s modern collection has embraced that famous ocean heritage and updated it with OMEGA\'s best innovation and design.' },
  { id: '11', title: 'Burberry Trench Coat', brand: 'Burberry', images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=3135&auto=format&fit=crop'], pricePerDay: 100, deposit: 700, city: 'Mumbai', category: 'fashion', description: 'An iconic piece of British design, the Burberry trench coat is a timeless classic. Made from weatherproof gabardine, it\'s perfect for any season.' },
  { id: '12', title: 'Adidas Yeezy Boost 350', brand: 'Adidas', images: ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=3174&auto=format&fit=crop'], pricePerDay: 65, deposit: 200, city: 'Bangalore', category: 'sneakers', description: 'The YEEZY BOOST 350 V2 is one of the most sought-after sneakers in the world. With its Primeknit upper and BOOST midsole, it offers unparalleled comfort and style.' },
];

export const heroSlides = [
    { id: 1, image: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=3270&auto=format&fit=crop', headline: 'Rent Your Desires', sub: 'Access thousands of luxury items, from fashion to gadgets, without the commitment of buying.', cta: { label: 'Start Browsing', href: '/categories' } },
    { id: 2, image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=3135&auto=format&fit=crop', headline: 'Earn From Your Closet', sub: 'Turn your own high-quality items into a source of income by lending them to our trusted community.', cta: { label: 'Lend an Item', href: '/lend' } },
    { id: 3, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=3199&auto=format&fit=crop', headline: 'Sustainable & Smart', sub: 'Experience more while owning less. Join the circular economy and reduce waste.', cta: { label: 'Learn More', href: '/help' } },
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