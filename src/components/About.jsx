import React from 'react';
import Section from './Section';
import Container from './Container';
import Button from './Button';

const About = () => {
    const teamMembers = [
        {
            name: "Sarah Johnson",
            role: "Founder & Head Roaster",
            image: "☕",
            description: "With over 15 years in the coffee industry, Sarah brings passion and expertise to every cup."
        },
        {
            name: "Marcus Chen",
            role: "Coffee Sourcing Expert",
            image: "🌍",
            description: "Marcus travels the world to find the finest coffee beans from sustainable farms."
        },
        {
            name: "Emily Rodriguez",
            role: "Barista Master",
            image: "🎨",
            description: "Emily trains our team and develops new brewing techniques and signature drinks."
        },
        {
            name: "David Kim",
            role: "Quality Control",
            image: "🔍",
            description: "David ensures every batch meets our highest standards for taste and quality."
        }
    ];

    const values = [
        {
            icon: "🌱",
            title: "Sustainability",
            description: "We work directly with farmers to ensure fair trade and environmentally responsible practices."
        },
        {
            icon: "⭐",
            title: "Quality",
            description: "Every bean is carefully selected and roasted to perfection using traditional methods."
        },
        {
            icon: "🤝",
            title: "Community",
            description: "We believe coffee brings people together and support local communities worldwide."
        },
        {
            icon: "💡",
            title: "Innovation",
            description: "Constantly exploring new brewing techniques while respecting coffee traditions."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <Section backgroundType="gray" spacing="large">
                <Container className="text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About CoffeeStyle</h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Since 1996, we've been dedicated to bringing you the finest coffee experience.
                        From bean to cup, we ensure every step meets our highest standards of quality and sustainability.
                    </p>
                </Container>
            </Section>

            {/* Story Section */}
            <Section backgroundType="white" spacing="normal">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                <p>
                                    CoffeeStyle began as a small roastery in Seattle with a simple mission:
                                    to share the world's best coffee with our community. What started as a
                                    passion project has grown into a movement that connects coffee lovers
                                    across the globe.
                                </p>
                                <p>
                                    We believe that great coffee is more than just a drink—it's a moment of
                                    connection, a daily ritual, and a bridge between cultures. Every cup tells
                                    a story of the farmers who grew it, the hands that roasted it, and the
                                    people who share it.
                                </p>
                                <p>
                                    Today, we're proud to work with over 50 farms across 15 countries,
                                    ensuring that our commitment to quality extends from our roastery to
                                    your coffee cup.
                                </p>
                            </div>
                            <div className="mt-8">
                                <Button variant="primary">Learn Our Process</Button>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg h-96 flex items-center justify-center">
                            <span className="text-8xl">📖</span>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Values Section */}
            <Section backgroundType="gray" spacing="normal">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            These core principles guide everything we do, from sourcing beans to serving customers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="text-center bg-white p-8 rounded-lg shadow-sm">
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Team Section */}
            <Section backgroundType="white" spacing="normal">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            The passionate people behind every perfect cup of coffee.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                                    <span className="text-4xl">{member.image}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-amber-600 font-medium mb-4">{member.role}</p>
                                <p className="text-gray-700 text-sm leading-relaxed">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Stats Section */}
            <Section backgroundType="amber" className="text-white">
                <Container>
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">29+</div>
                            <div className="text-lg">Years of Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">50+</div>
                            <div className="text-lg">Partner Farms</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">15</div>
                            <div className="text-lg">Countries</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">100K+</div>
                            <div className="text-lg">Happy Customers</div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Mission Statement */}
            <Section backgroundType="dark" className="text-white">
                <Container maxWidth="4xl" className="text-center">
                    <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
                    <p className="text-2xl leading-relaxed mb-8">
                        "To create meaningful connections through exceptional coffee experiences,
                        supporting sustainable practices and celebrating the artistry in every cup."
                    </p>
                    <Button variant="amber">Join Our Journey</Button>
                </Container>
            </Section>
        </div>
    );
};

export default About;
