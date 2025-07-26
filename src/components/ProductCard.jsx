import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, showAddToCart = false }) => {
    return (
        <div className="product-card bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
            {/* Product Image */}
            <div className={`h-64 bg-gradient-to-br ${product.bgColor} flex items-center justify-center relative`}>
                <span className="text-6xl">{product.emoji}</span>
                {product.isOnSale && (
                    <span className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
                        On Sale
                    </span>
                )}
            </div>

            {/* Product Info */}
            <div className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">{product.name}</h3>

                {/* Price */}
                <div className="mb-4">
                    {product.originalPrice ? (
                        <div className="flex items-center space-x-2">
                            <span className="text-lg line-through text-gray-500">${product.originalPrice.toFixed(2)}</span>
                            <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)} USD</span>
                        </div>
                    ) : (
                        <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)} USD</span>
                    )}
                </div>

                {/* Actions */}
                <div className={showAddToCart ? "space-y-2" : ""}>
                    <button className="btn w-full text-center">EXPLORE MUG</button>
                    {showAddToCart && (
                        <Link to="/cart" className="btn-outline w-full text-center block">ADD TO CART</Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
