import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../data/constants';

const Header = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex justify-between items-center py-6">
                    {/* Logo */}
                    <Link to="/" className="font-bold text-2xl text-gray-900 hover:text-amber-600 transition-colors">
                        CoffeeStyle.
                    </Link>

                    {/* Navigation Menu */}
                    <ul className="hidden md:flex space-x-8 items-center">
                        {NAV_LINKS.map((link) => (
                            <li key={link.name}>
                                {link.external ? (
                                    <a
                                        href={link.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className={`font-medium transition-colors ${isActive(link.path)
                                            ? 'text-amber-600'
                                            : 'text-gray-700 hover:text-gray-900'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button className="text-gray-700 hover:text-gray-900">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    {/* Cart */}
                    <div className="flex items-center space-x-4">
                        <Link to="/cart" className="text-gray-700 hover:text-gray-900 font-medium flex items-center">
                            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                            </svg>
                            Cart (3)
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
