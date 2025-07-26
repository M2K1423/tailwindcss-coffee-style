import React, { useState } from 'react';
import Section from './Section';
import Container from './Container';
import Button from './Button';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../data/constants';

const Products = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { key: 'all', label: 'All Products' },
        { key: 'sale', label: 'On Sale' },
        { key: 'premium', label: 'Premium' },
        { key: 'designer', label: 'Designer' }
    ];

    const getFilteredProducts = () => {
        switch (activeFilter) {
            case 'sale':
                return PRODUCTS.filter(product => product.isOnSale);
            case 'premium':
                return PRODUCTS.filter(product => product.category === 'premium');
            case 'designer':
                return PRODUCTS.filter(product => product.category === 'designer');
            default:
                return PRODUCTS;
        }
    };

    const filteredProducts = getFilteredProducts();

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Section backgroundType="gray" spacing="normal">
                <Container className="text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Products</h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Discover our premium collection of coffee mugs designed to elevate your coffee experience.
                        Each mug is crafted with care and attention to detail.
                    </p>
                </Container>
            </Section>

            {/* Filters */}
            <Section spacing="small" className="border-b">
                <Container>
                    <div className="flex flex-wrap justify-center gap-4">
                        {filters.map((filter) => (
                            <button
                                key={filter.key}
                                onClick={() => setActiveFilter(filter.key)}
                                className={`px-6 py-2 font-medium transition-colors ${activeFilter === filter.key
                                        ? 'bg-gray-900 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Products Grid */}
            <Section spacing="normal">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} showAddToCart={true} />
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Load More */}
            <Section spacing="small" className="text-center">
                <Button variant="outline">LOAD MORE PRODUCTS</Button>
            </Section>

            {/* Premium Offer Section */}
            <Section backgroundType="amber" className="text-white">
                <Container maxWidth="4xl" className="text-center">
                    <h2 className="text-4xl font-bold mb-6">BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE</h2>
                    <p className="text-xl mb-8">PREMIUM OFFER</p>
                    <Button variant="white">START SHOPPING</Button>
                </Container>
            </Section>

            {/* Newsletter Section */}
            <Section backgroundType="dark" className="text-white">
                <Container maxWidth="4xl" className="text-center">
                    <h2 className="text-3xl font-bold mb-4">SIGN UP AND GET FREE COFFEE BAGS</h2>
                    <p className="text-lg mb-8">Coffee Updates</p>
                    <div className="max-w-md mx-auto flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 text-gray-900 rounded-l-lg focus:outline-none"
                        />
                        <Button variant="amber" className="rounded-r-lg rounded-l-none">
                            SUBSCRIBE
                        </Button>
                    </div>
                    <p className="text-sm text-gray-400 mt-8">
                        Delivering the best coffee life since 1996. From coffee geeks to the real ones.
                    </p>
                </Container>
            </Section>
        </div>
    );
};

export default Products;
