// Products data
export const PRODUCTS = [
    {
        id: 1,
        name: 'Pink Premium Ceramic',
        price: 99.00,
        originalPrice: null,
        isOnSale: false,
        emoji: '🌸',
        bgColor: 'from-pink-100 to-pink-200',
        category: 'premium'
    },
    {
        id: 2,
        name: 'Golden Designers Mug',
        price: 50.00,
        originalPrice: 69.00,
        isOnSale: true,
        emoji: '🏆',
        bgColor: 'from-yellow-100 to-yellow-200',
        category: 'designer'
    },
    {
        id: 3,
        name: 'Red Love Cup',
        price: 25.00,
        originalPrice: 37.00,
        isOnSale: true,
        emoji: '❤️',
        bgColor: 'from-red-100 to-red-200',
        category: 'premium'
    },
    {
        id: 4,
        name: 'Black Tea Cup',
        price: 15.00,
        originalPrice: 29.00,
        isOnSale: true,
        emoji: '⚫',
        bgColor: 'from-gray-100 to-gray-200',
        category: 'basic'
    },
    {
        id: 5,
        name: 'B&W Essentials Mug',
        price: 19.00,
        originalPrice: null,
        isOnSale: false,
        emoji: '⚪',
        bgColor: 'from-slate-100 to-slate-200',
        category: 'basic'
    },
    {
        id: 6,
        name: 'Winter Style Mug',
        price: 25.00,
        originalPrice: null,
        isOnSale: false,
        emoji: '❄️',
        bgColor: 'from-blue-100 to-blue-200',
        category: 'designer'
    },
    {
        id: 7,
        name: 'Ceramic Tea',
        price: 46.00,
        originalPrice: null,
        isOnSale: false,
        emoji: '🍵',
        bgColor: 'from-green-100 to-green-200',
        category: 'premium'
    },
    {
        id: 8,
        name: 'No Handle Bar Cup',
        price: 34.00,
        originalPrice: null,
        isOnSale: false,
        emoji: '🥤',
        bgColor: 'from-orange-100 to-orange-200',
        category: 'designer'
    },
    {
        id: 9,
        name: 'Espresso Cup by Mugs.co',
        price: 25.00,
        originalPrice: null,
        isOnSale: false,
        emoji: '☕',
        bgColor: 'from-amber-100 to-amber-200',
        category: 'basic'
    },
    {
        id: 10,
        name: 'Summer Designer Cup',
        price: 29.00,
        originalPrice: null,
        isOnSale: false,
        emoji: '🌞',
        bgColor: 'from-yellow-100 to-yellow-200',
        category: 'designer'
    },
    {
        id: 11,
        name: 'Premium Coffee Mug',
        price: 55.00,
        originalPrice: null,
        isOnSale: false,
        emoji: '🏅',
        bgColor: 'from-purple-100 to-purple-200',
        category: 'premium'
    },
    {
        id: 12,
        name: 'Designer Collection',
        price: 75.00,
        originalPrice: null,
        isOnSale: false,
        emoji: '✨',
        bgColor: 'from-indigo-100 to-indigo-200',
        category: 'designer'
    }
];

// Featured products (first 3 products)
export const FEATURED_PRODUCTS = PRODUCTS.slice(0, 3);

// Blog posts data
export const BLOG_POSTS = [
    {
        id: 1,
        title: "Health Check: why do I get a headache when I haven't had my coffee?",
        excerpt: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
        date: "OCTOBER 9, 2018",
        emoji: "☕",
        bgColor: "from-amber-100 to-amber-200",
        link: "#"
    },
    {
        id: 2,
        title: "How long does a cup of coffee keep you awake?",
        excerpt: "It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.",
        date: "OCTOBER 9, 2018",
        emoji: "🌙",
        bgColor: "from-blue-100 to-blue-200",
        link: "#"
    },
    {
        id: 3,
        title: "Recent research suggests that heavy coffee drinkers may reap health benefits.",
        excerpt: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
        date: "OCTOBER 9, 2018",
        emoji: "🏥",
        bgColor: "from-green-100 to-green-200",
        link: "#"
    }
];

// Navigation links
export const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'Our Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'StyleGuide', path: '/styleguide' },
    { name: 'PhanPhatDev', path: 'https://phanphat.dev', external: true }
];

// Footer data
export const FOOTER_DATA = {
    company: {
        name: "CoffeeStyle.",
        description: "Delivering the best coffee life since 1996. From coffee geeks to the real ones.",
        copyright: "CoffeeStyle Inc. © 1996"
    },
    menu: [
        { name: 'Home', path: '/' },
        { name: 'Our Products', path: '/products' },
        { name: 'About', path: '#' },
        { name: 'Contact', path: '#' },
        { name: 'StyleGuide', path: '#' }
    ],
    social: [
        { name: 'Facebook', url: '#' },
        { name: 'Instagram', url: '#' },
        { name: 'Pinterest', url: '#' },
        { name: 'Twitter', url: '#' }
    ],
    contact: {
        title: "We're Always Happy to Help",
        email: "us@coffeestyle.io"
    }
};
