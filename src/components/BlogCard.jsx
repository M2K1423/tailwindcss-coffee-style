import React from 'react';

const BlogCard = ({ post }) => {
    return (
        <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className={`h-48 bg-gradient-to-br ${post.bgColor} flex items-center justify-center`}>
                <span className="text-4xl">{post.emoji}</span>
            </div>
            <div className="p-6">
                <h3 className="font-semibold text-lg mb-3 leading-tight">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                <p className="text-xs text-gray-500 mb-4 uppercase tracking-wide">{post.date}</p>
                <a href={post.link || "#"} className="text-sm font-medium text-gray-900 hover:text-amber-600 transition-colors">
                    READ THE FULL STORY
                </a>
            </div>
        </article>
    );
};

export default BlogCard;
