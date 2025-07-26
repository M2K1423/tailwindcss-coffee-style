import React from 'react';

const Section = ({
    children,
    className = "",
    backgroundType = "white",
    spacing = "normal"
}) => {
    const bgClasses = {
        white: "bg-white",
        gray: "bg-gray-50",
        dark: "bg-gray-900",
        amber: "bg-amber-600"
    };

    const spacingClasses = {
        normal: "section-spacing",
        small: "py-8",
        large: "py-24",
        none: ""
    };

    return (
        <section className={`${spacingClasses[spacing]} ${bgClasses[backgroundType]} ${className}`}>
            {children}
        </section>
    );
};

export default Section;
