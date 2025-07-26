import React from 'react';
import Section from './Section';
import Container from './Container';
import Button from './Button';
import ProductCard from './ProductCard';
import BlogCard from './BlogCard';

const StyleGuide = () => {
    const sampleProduct = {
        id: 1,
        name: 'Sample Product',
        price: 99.00,
        originalPrice: 129.00,
        isOnSale: true,
        emoji: '☕',
        bgColor: 'from-amber-100 to-amber-200',
        category: 'premium'
    };

    const sampleBlogPost = {
        id: 1,
        title: "Sample Blog Post Title",
        excerpt: "This is a sample excerpt for the blog post to demonstrate the BlogCard component styling.",
        date: "OCTOBER 9, 2018",
        emoji: "📝",
        bgColor: "from-blue-100 to-blue-200",
        link: "#"
    };

    const colorPalette = [
        { name: 'Primary Dark', class: 'bg-gray-900', hex: '#111827' },
        { name: 'Amber', class: 'bg-amber-600', hex: '#D97706' },
        { name: 'Light Gray', class: 'bg-gray-50', hex: '#F9FAFB' },
        { name: 'Medium Gray', class: 'bg-gray-100', hex: '#F3F4F6' },
        { name: 'Text Gray', class: 'bg-gray-700', hex: '#374151' },
        { name: 'White', class: 'bg-white border', hex: '#FFFFFF' },
    ];

    const typographyExamples = [
        { class: 'text-5xl font-bold', text: 'Heading 1 - 48px Bold', tag: 'h1' },
        { class: 'text-4xl font-bold', text: 'Heading 2 - 36px Bold', tag: 'h2' },
        { class: 'text-3xl font-bold', text: 'Heading 3 - 30px Bold', tag: 'h3' },
        { class: 'text-2xl font-bold', text: 'Heading 4 - 24px Bold', tag: 'h4' },
        { class: 'text-xl font-semibold', text: 'Heading 5 - 20px Semibold', tag: 'h5' },
        { class: 'text-lg font-medium', text: 'Body Large - 18px Medium', tag: 'p' },
        { class: 'text-base', text: 'Body Regular - 16px Regular', tag: 'p' },
        { class: 'text-sm text-gray-600', text: 'Body Small - 14px Gray', tag: 'p' },
        { class: 'text-xs text-gray-500 uppercase tracking-wide', text: 'Caption - 12px Uppercase', tag: 'span' },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Section backgroundType="gray" spacing="normal">
                <Container className="text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Style Guide</h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        A comprehensive guide to CoffeeStyle's design system, including colors, typography,
                        components, and design principles.
                    </p>
                </Container>
            </Section>

            {/* Color Palette */}
            <Section backgroundType="white" spacing="normal">
                <Container>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Color Palette</h2>
                    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {colorPalette.map((color, index) => (
                            <div key={index} className="text-center">
                                <div className={`w-full h-24 rounded-lg mb-3 ${color.class}`}></div>
                                <h3 className="font-semibold text-gray-900 text-sm">{color.name}</h3>
                                <p className="text-xs text-gray-500 font-mono">{color.hex}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Typography */}
            <Section backgroundType="gray" spacing="normal">
                <Container>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Typography</h2>
                    <div className="space-y-6">
                        {typographyExamples.map((example, index) => (
                            <div key={index} className="flex items-baseline space-x-8 border-b border-gray-200 pb-4">
                                <div className="w-1/3">
                                    <span className="text-sm text-gray-500">{example.tag.toUpperCase()}</span>
                                </div>
                                <div className="flex-1">
                                    <div className={example.class}>{example.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Buttons */}
            <Section backgroundType="white" spacing="normal">
                <Container>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Buttons</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Primary Buttons</h3>
                            <div className="flex flex-wrap gap-4">
                                <Button variant="primary">Primary Button</Button>
                                <Button variant="amber">Amber Button</Button>
                                <Button variant="outline">Outline Button</Button>
                                <Button variant="white">White Button</Button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Button States</h3>
                            <div className="flex flex-wrap gap-4">
                                <Button variant="primary">Normal</Button>
                                <Button variant="primary" className="hover:bg-amber-600">Hover State</Button>
                                <Button variant="primary" className="opacity-50 cursor-not-allowed">Disabled</Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Components */}
            <Section backgroundType="gray" spacing="normal">
                <Container>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Components</h2>

                    <div className="space-y-12">
                        {/* Product Card */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Product Card</h3>
                            <div className="max-w-sm">
                                <ProductCard product={sampleProduct} />
                            </div>
                        </div>

                        {/* Blog Card */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Blog Card</h3>
                            <div className="max-w-sm">
                                <BlogCard post={sampleBlogPost} />
                            </div>
                        </div>

                        {/* Sections */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Section Backgrounds</h3>
                            <div className="space-y-4">
                                <Section backgroundType="white" spacing="small" className="border">
                                    <Container>
                                        <p className="text-center">White Background Section</p>
                                    </Container>
                                </Section>
                                <Section backgroundType="gray" spacing="small">
                                    <Container>
                                        <p className="text-center">Gray Background Section</p>
                                    </Container>
                                </Section>
                                <Section backgroundType="amber" spacing="small" className="text-white">
                                    <Container>
                                        <p className="text-center">Amber Background Section</p>
                                    </Container>
                                </Section>
                                <Section backgroundType="dark" spacing="small" className="text-white">
                                    <Container>
                                        <p className="text-center">Dark Background Section</p>
                                    </Container>
                                </Section>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Forms */}
            <Section backgroundType="white" spacing="normal">
                <Container maxWidth="3xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Form Elements</h2>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Text Input</label>
                            <input
                                type="text"
                                placeholder="Enter text here"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Input</label>
                            <input
                                type="email"
                                placeholder="your.email@example.com"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Select Dropdown</label>
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent">
                                <option>Choose an option</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Textarea</label>
                            <textarea
                                rows="4"
                                placeholder="Enter your message here"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent resize-vertical"
                            ></textarea>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Icons & Emojis */}
            <Section backgroundType="gray" spacing="normal">
                <Container>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Icons & Emojis</h2>

                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6">
                        {['☕', '🌟', '🛒', '❤️', '🌍', '📱', '💳', '🚚', '📧', '📞', '📍', '🕒'].map((emoji, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <span className="text-2xl">{emoji}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Design Principles */}
            <Section backgroundType="white" spacing="normal">
                <Container>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Design Principles</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Purpose-Driven</h3>
                            <p className="text-gray-700">Every element serves a clear purpose in enhancing the user experience.</p>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance</h3>
                            <p className="text-gray-700">Optimized for speed and efficiency across all devices and connections.</p>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl mb-4">♿</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Accessibility</h3>
                            <p className="text-gray-700">Designed to be inclusive and usable by everyone, regardless of abilities.</p>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl mb-4">📱</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsive</h3>
                            <p className="text-gray-700">Seamless experience across desktop, tablet, and mobile devices.</p>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl mb-4">🎨</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Consistent</h3>
                            <p className="text-gray-700">Unified visual language and interaction patterns throughout.</p>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl mb-4">💡</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Intuitive</h3>
                            <p className="text-gray-700">Natural and predictable interactions that feel familiar to users.</p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Usage Guidelines */}
            <Section backgroundType="amber" className="text-white">
                <Container maxWidth="4xl" className="text-center">
                    <h2 className="text-3xl font-bold mb-6">Usage Guidelines</h2>
                    <p className="text-xl leading-relaxed mb-8">
                        This style guide ensures consistency across all CoffeeStyle touchpoints.
                        When implementing these elements, always consider the user experience and
                        maintain the brand's warm, approachable personality.
                    </p>
                    <Button variant="white">Download Brand Assets</Button>
                </Container>
            </Section>
        </div>
    );
};

export default StyleGuide;
