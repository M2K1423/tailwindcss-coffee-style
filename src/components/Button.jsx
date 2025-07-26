import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
    children,
    variant = "primary",
    to = null,
    href = null,
    onClick = null,
    className = "",
    type = "button",
    ...props
}) => {
    const baseClasses = "inline-block px-6 py-3 font-semibold text-center transition-all duration-300 cursor-pointer";

    const variants = {
        primary: "bg-gray-900 text-white hover:bg-amber-600",
        outline: "bg-transparent text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white",
        amber: "bg-amber-600 text-white hover:bg-amber-700",
        white: "bg-white text-amber-600 hover:bg-gray-100"
    };

    const classes = `${baseClasses} ${variants[variant]} ${className}`;

    // If it's a link (internal)
    if (to) {
        return (
            <Link to={to} className={classes} {...props}>
                {children}
            </Link>
        );
    }

    // If it's an external link
    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        );
    }

    // If it's a button
    return (
        <button type={type} onClick={onClick} className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;
