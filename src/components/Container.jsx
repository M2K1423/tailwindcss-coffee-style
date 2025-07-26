import React from 'react';

const Container = ({ children, maxWidth = "7xl", className = "" }) => {
    const maxWidthClasses = {
        "4xl": "max-w-4xl",
        "6xl": "max-w-6xl",
        "7xl": "max-w-7xl",
        "full": "max-w-full"
    };

    return (
        <div className={`${maxWidthClasses[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );
};

export default Container;
