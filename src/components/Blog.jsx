import React from 'react';
import Section from './Section';
import Container from './Container';
import Button from './Button';
import BlogCard from './BlogCard';
import { BLOG_POSTS } from '../data/constants';

const Blog = () => {
    // Extended blog posts for the blog page
    const extendedBlogPosts = [
        ...BLOG_POSTS,
        {
            id: 4,
            title: "The Perfect Coffee Brewing Temperature",
            excerpt: "Discover the science behind the perfect brewing temperature and how it affects your coffee's flavor profile.",
            date: "OCTOBER 15, 2018",
            emoji: "🌡️",
            bgColor: "from-red-100 to-red-200",
            link: "#"
        },
        {
            id: 5,
            title: "Coffee Bean Origins: A Journey Around the World",
            excerpt: "Explore the different coffee growing regions and how geography influences taste and aroma.",
            date: "OCTOBER 20, 2018",
            emoji: "🌍",
            bgColor: "from-green-100 to-green-200",
            link: "#"
        },
        {
            id: 6,
            title: "The Art of Latte: Creating Beautiful Coffee Art",
            excerpt: "Learn the techniques behind creating stunning latte art that will impress your friends and family.",
            date: "OCTOBER 25, 2018",
            emoji: "🎨",
            bgColor: "from-purple-100 to-purple-200",
            link: "#"
        },
        {
            id: 7,
            title: "Sustainable Coffee: Supporting Farmers and Environment",
            excerpt: "Understanding fair trade coffee and how your purchase decisions can make a positive impact.",
            date: "NOVEMBER 1, 2018",
            emoji: "🌱",
            bgColor: "from-green-100 to-green-200",
            link: "#"
        },
        {
            id: 8,
            title: "Coffee Storage: Keeping Your Beans Fresh",
            excerpt: "Best practices for storing coffee beans to maintain their flavor and aroma for longer periods.",
            date: "NOVEMBER 5, 2018",
            emoji: "📦",
            bgColor: "from-orange-100 to-orange-200",
            link: "#"
        },
        {
            id: 9,
            title: "Espresso vs Americano: What's the Difference?",
            excerpt: "A detailed comparison of these popular coffee drinks and when to choose each one.",
            date: "NOVEMBER 10, 2018",
            emoji: "☕",
            bgColor: "from-amber-100 to-amber-200",
            link: "#"
        }
    ];

    const categories = [
        { name: 'All Posts', count: extendedBlogPosts.length },
        { name: 'Health', count: 3 },
        { name: 'Brewing', count: 2 },
        { name: 'Coffee Culture', count: 4 }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Section backgroundType="gray" spacing="normal">
                <Container className="text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Coffee Blog</h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Discover the latest insights, tips, and stories from the world of coffee.
                        From brewing techniques to health benefits, we cover everything coffee-related.
                    </p>
                </Container>
            </Section>

            {/* Categories Filter */}
            <Section spacing="small" className="border-b">
                <Container>
                    <div className="flex flex-wrap justify-center gap-6">
                        {categories.map((category, index) => (
                            <button
                                key={category.name}
                                className={`px-6 py-2 font-medium transition-colors ${index === 0
                                        ? 'bg-gray-900 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category.name} ({category.count})
                            </button>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Featured Post */}
            <Section backgroundType="white" spacing="normal">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="h-64 md:h-96 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                                <span className="text-8xl">☕</span>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center mb-4">
                                    <span className="text-xs text-gray-500 uppercase tracking-wide">FEATURED POST</span>
                                    <span className="mx-2 text-gray-300">•</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-wide">OCTOBER 9, 2018</span>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                    The Ultimate Guide to Coffee: From Bean to Cup
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Dive deep into the fascinating world of coffee, from understanding different bean varieties to mastering brewing techniques. This comprehensive guide covers everything you need to know to elevate your coffee experience and appreciate the art behind every cup.
                                </p>
                                <Button variant="primary">READ THE FULL STORY</Button>
                            </div>
                        </article>
                    </div>
                </Container>
            </Section>

            {/* Blog Posts Grid */}
            <Section backgroundType="gray" spacing="normal">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Stories</h2>
                        <p className="text-lg text-gray-600">Stay updated with our latest coffee insights and lifestyle stories</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {extendedBlogPosts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="text-center mt-12">
                        <Button variant="outline">LOAD MORE ARTICLES</Button>
                    </div>
                </Container>
            </Section>

            {/* Newsletter Subscription */}
            <Section backgroundType="white" spacing="normal">
                <Container maxWidth="4xl" className="text-center">
                    <div className="bg-gray-50 rounded-lg p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Never Miss a Story</h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Subscribe to our newsletter and get the latest coffee stories, tips, and exclusive content delivered to your inbox.
                        </p>
                        <div className="max-w-md mx-auto flex">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                            />
                            <Button variant="primary" className="rounded-l-none border-l-0">
                                SUBSCRIBE
                            </Button>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">
                            Join over 10,000 coffee lovers who never miss our updates
                        </p>
                    </div>
                </Container>
            </Section>

            {/* Coffee Magazine CTA */}
            <Section backgroundType="amber" className="text-white">
                <Container maxWidth="4xl" className="text-center">
                    <h2 className="text-4xl font-bold mb-6">Get Our Premium Coffee Magazine</h2>
                    <p className="text-xl mb-8">
                        Dive deeper into coffee culture with our monthly magazine featuring expert interviews,
                        brewing guides, and exclusive coffee recipes.
                    </p>
                    <Button variant="white">GET YOUR COPY</Button>
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

export default Blog;
