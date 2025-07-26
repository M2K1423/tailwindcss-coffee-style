import React, { useState } from 'react';
import Section from './Section';
import Container from './Container';
import Button from './Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: "📍",
            title: "Visit Our Store",
            details: [
                "123 Coffee Street",
                "Seattle, WA 98101",
                "United States"
            ]
        },
        {
            icon: "📞",
            title: "Call Us",
            details: [
                "+1 (555) 123-COFFEE",
                "+1 (555) 123-2633",
                "Mon-Fri: 6AM-8PM PST"
            ]
        },
        {
            icon: "✉️",
            title: "Email Us",
            details: [
                "hello@coffeestyle.com",
                "support@coffeestyle.com",
                "wholesale@coffeestyle.com"
            ]
        },
        {
            icon: "🕒",
            title: "Store Hours",
            details: [
                "Monday - Friday: 6:00 AM - 8:00 PM",
                "Saturday: 7:00 AM - 9:00 PM",
                "Sunday: 8:00 AM - 6:00 PM"
            ]
        }
    ];

    const socialLinks = [
        { name: "Instagram", icon: "📷", url: "#" },
        { name: "Facebook", icon: "📘", url: "#" },
        { name: "Twitter", icon: "🐦", url: "#" },
        { name: "YouTube", icon: "📺", url: "#" }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <Section backgroundType="gray" spacing="normal">
                <Container className="text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Have a question about our coffee, need help with an order, or want to partner with us?
                        We'd love to hear from you and help in any way we can.
                    </p>
                </Container>
            </Section>

            {/* Contact Form & Info */}
            <Section backgroundType="white" spacing="normal">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="order">Order Support</option>
                                        <option value="wholesale">Wholesale Partnership</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="press">Press Inquiry</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows="6"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent resize-vertical"
                                        placeholder="Tell us how we can help you..."
                                    ></textarea>
                                </div>

                                <div>
                                    <Button type="submit" variant="primary" className="w-full md:w-auto">
                                        Send Message
                                    </Button>
                                </div>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                            <div className="space-y-8">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="text-2xl">{info.icon}</div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                                            <div className="text-gray-700 space-y-1">
                                                {info.details.map((detail, idx) => (
                                                    <p key={idx}>{detail}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Media */}
                            <div className="mt-12">
                                <h3 className="text-xl font-semibold text-gray-900 mb-6">Follow Us</h3>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors"
                                            title={social.name}
                                        >
                                            <span className="text-xl">{social.icon}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Map Section (Placeholder) */}
            <Section backgroundType="gray" spacing="small">
                <Container>
                    <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg h-96 flex items-center justify-center">
                        <div className="text-center">
                            <span className="text-6xl mb-4 block">🗺️</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Find Us on the Map</h3>
                            <p className="text-gray-700">Interactive map would be embedded here</p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* FAQ Section */}
            <Section backgroundType="white" spacing="normal">
                <Container maxWidth="4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-700">Quick answers to common questions</p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: "What are your shipping options?",
                                a: "We offer free shipping on orders over $50 within the US. Express shipping is available for $9.99."
                            },
                            {
                                q: "How fresh is your coffee?",
                                a: "We roast our coffee beans fresh every week and ship within 24 hours of roasting to ensure maximum freshness."
                            },
                            {
                                q: "Do you offer wholesale pricing?",
                                a: "Yes! We work with cafes, restaurants, and retailers. Contact us at wholesale@coffeestyle.com for pricing."
                            },
                            {
                                q: "What's your return policy?",
                                a: "We offer a 30-day satisfaction guarantee. If you're not happy with your purchase, we'll make it right."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                                <p className="text-gray-700">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Newsletter CTA */}
            <Section backgroundType="amber" className="text-white">
                <Container maxWidth="4xl" className="text-center">
                    <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
                    <p className="text-xl mb-8">
                        Subscribe to our newsletter for coffee tips, new product announcements, and exclusive offers.
                    </p>
                    <div className="max-w-md mx-auto flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 text-gray-900 rounded-l-lg focus:outline-none"
                        />
                        <Button variant="white" className="rounded-l-none">
                            SUBSCRIBE
                        </Button>
                    </div>
                </Container>
            </Section>
        </div>
    );
};

export default Contact;
