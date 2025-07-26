import React from 'react';
import Section from './Section';
import Container from './Container';
import Button from './Button';
import ProductCard from './ProductCard';
import BlogCard from './BlogCard';
import { FEATURED_PRODUCTS, BLOG_POSTS } from '../data/constants';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <Section className="hero-section flex items-center">
                <Container className="py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-sm font-medium text-gray-600 mb-4 tracking-wide uppercase">
                                BEST PLACE TO BUY DESIGN
                            </p>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                                Coffee
                                <span className="block text-amber-600">Mugs</span>
                            </h1>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                The most versatile furniture system ever created. Designed to fit your life, made to move and grow.
                            </p>
                            <Button to="/products" variant="primary">
                                EXPLORE OUR PRODUCTS
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg p-8 h-96 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-32 h-32 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-white text-4xl">☕</span>
                                    </div>
                                    <p className="text-gray-700 font-medium">Premium Coffee Mugs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Story Section */}
            <Section backgroundType="white">
                <Container maxWidth="4xl" className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8">
                        Even the all-powerful Pointing has no control about the blind texts.
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                    </p>
                    <Button variant="outline" href="#">
                        Read the full Story
                    </Button>
                </Container>
            </Section>

            {/* Featured Mugs Section */}
            <Section backgroundType="gray">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">FEATURED MUGS</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {FEATURED_PRODUCTS.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button to="/products" variant="outline">
                            MORE PRODUCTS
                        </Button>
                    </div>
                </Container>
            </Section>

            {/* Premium Offer Section */}
            <Section backgroundType="amber" className="text-white">
                <Container maxWidth="4xl" className="text-center">
                    <h2 className="text-4xl font-bold mb-6">BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE</h2>
                    <p className="text-xl mb-8">PREMIUM OFFER</p>
                    <Button to="/products" variant="white">
                        START SHOPPING
                    </Button>
                </Container>
            </Section>

            {/* Coffee Magazine Section */}
            <Section backgroundType="white">
                <Container maxWidth="4xl" className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8">Get our Coffee Magazine</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        The most versatile furniture system ever created. Designed to fit your life.
                    </p>
                    <Button to="/products" variant="primary">
                        START SHOPPING
                    </Button>
                </Container>
            </Section>

            {/* Blog Section */}
            <Section backgroundType="gray">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">BEHIND THE MUGS, LIFESTYLE STORIES</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {BLOG_POSTS.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
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
        </>
    );
};

export default Home;
