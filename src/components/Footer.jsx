import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_DATA } from '../data/constants';

const Footer = () => {
    return (
        <footer className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="font-bold text-2xl text-gray-900 mb-4">{FOOTER_DATA.company.name}</div>
                        <p className="text-gray-600 text-sm mb-4">
                            {FOOTER_DATA.company.description}
                        </p>
                        <p className="text-gray-600 text-sm">{FOOTER_DATA.company.copyright}</p>
                    </div>

                    {/* Menu */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">MENU</h3>
                        <ul className="space-y-2 text-sm">
                            {FOOTER_DATA.menu.map((item) => (
                                <li key={item.name}>
                                    {item.path.startsWith('#') ? (
                                        <a href={item.path} className="text-gray-600 hover:text-gray-900 transition-colors">
                                            {item.name}
                                        </a>
                                    ) : (
                                        <Link to={item.path} className="text-gray-600 hover:text-gray-900 transition-colors">
                                            {item.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">FOLLOW US</h3>
                        <ul className="space-y-2 text-sm">
                            {FOOTER_DATA.social.map((item) => (
                                <li key={item.name}>
                                    <a href={item.url} className="text-gray-600 hover:text-gray-900 transition-colors">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">CONTACT US</h3>
                        <p className="text-gray-600 text-sm mb-2">{FOOTER_DATA.contact.title}</p>
                        <a
                            href={`mailto:${FOOTER_DATA.contact.email}`}
                            className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                        >
                            {FOOTER_DATA.contact.email}
                        </a>
                        <div className="mt-4 text-xs text-gray-500">
                            <a href="http://webflow.com/" className="hover:text-gray-700 transition-colors">
                                Powered by Webflow
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
