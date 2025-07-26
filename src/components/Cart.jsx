import React, { useState } from 'react';
import Section from './Section';
import Container from './Container';
import Button from './Button';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Pink Premium Ceramic',
            price: 99.00,
            quantity: 2,
            emoji: '🌸',
            bgColor: 'from-pink-100 to-pink-200'
        },
        {
            id: 2,
            name: 'Golden Designers Mug',
            price: 50.00,
            originalPrice: 69.00,
            quantity: 1,
            emoji: '🏆',
            bgColor: 'from-yellow-100 to-yellow-200'
        },
        {
            id: 3,
            name: 'Red Love Cup',
            price: 25.00,
            quantity: 3,
            emoji: '❤️',
            bgColor: 'from-red-100 to-red-200'
        }
    ]);

    const [promoCode, setPromoCode] = useState('');
    const [appliedPromo, setAppliedPromo] = useState(null);

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity === 0) {
            setCartItems(cartItems.filter(item => item.id !== id));
        } else {
            setCartItems(cartItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            ));
        }
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const applyPromoCode = () => {
        if (promoCode.toLowerCase() === 'coffee20') {
            setAppliedPromo({ code: 'COFFEE20', discount: 0.2 });
            alert('Promo code applied! 20% discount');
        } else if (promoCode.toLowerCase() === 'welcome10') {
            setAppliedPromo({ code: 'WELCOME10', discount: 0.1 });
            alert('Promo code applied! 10% discount');
        } else {
            alert('Invalid promo code');
        }
        setPromoCode('');
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = appliedPromo ? subtotal * appliedPromo.discount : 0;
    const shipping = subtotal > 50 ? 0 : 9.99;
    const tax = (subtotal - discount) * 0.08;
    const total = subtotal - discount + shipping + tax;

    const shippingOptions = [
        { id: 'standard', name: 'Standard Shipping', price: 0, time: '5-7 business days', selected: true },
        { id: 'express', name: 'Express Shipping', price: 9.99, time: '2-3 business days', selected: false },
        { id: 'overnight', name: 'Overnight Shipping', price: 24.99, time: '1 business day', selected: false }
    ];

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-white">
                <Section backgroundType="gray" spacing="normal">
                    <Container className="text-center">
                        <div className="max-w-md mx-auto">
                            <div className="text-6xl mb-6">🛒</div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
                            <p className="text-lg text-gray-700 mb-8">
                                Looks like you haven't added any coffee products to your cart yet.
                            </p>
                            <Button variant="primary" to="/products">
                                SHOP NOW
                            </Button>
                        </div>
                    </Container>
                </Section>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Section backgroundType="gray" spacing="small">
                <Container>
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
                        <div className="text-sm text-gray-600">
                            {cartItems.reduce((sum, item) => sum + item.quantity, 0)} items
                        </div>
                    </div>
                </Container>
            </Section>

            <Section backgroundType="white" spacing="normal">
                <Container>
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Cart Items */}
                        <div className="lg:col-span-2">
                            <div className="space-y-6">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="bg-gray-50 rounded-lg p-6">
                                        <div className="flex items-center space-x-6">
                                            {/* Product Image */}
                                            <div className={`w-20 h-20 rounded-lg bg-gradient-to-br ${item.bgColor} flex items-center justify-center flex-shrink-0`}>
                                                <span className="text-2xl">{item.emoji}</span>
                                            </div>

                                            {/* Product Info */}
                                            <div className="flex-grow">
                                                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                                                <div className="flex items-center space-x-2 mt-1">
                                                    <span className="text-lg font-bold text-gray-900">
                                                        ${item.price.toFixed(2)}
                                                    </span>
                                                    {item.originalPrice && (
                                                        <span className="text-sm text-gray-500 line-through">
                                                            ${item.originalPrice.toFixed(2)}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Quantity Controls */}
                                            <div className="flex items-center space-x-3">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                                                >
                                                    -
                                                </button>
                                                <span className="w-8 text-center font-medium">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            {/* Item Total */}
                                            <div className="text-right">
                                                <div className="text-lg font-bold text-gray-900">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </div>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-sm text-red-600 hover:text-red-700 mt-1"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Promo Code */}
                            <div className="mt-8 bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Promo Code</h3>
                                <div className="flex space-x-4">
                                    <input
                                        type="text"
                                        value={promoCode}
                                        onChange={(e) => setPromoCode(e.target.value)}
                                        placeholder="Enter promo code"
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                                    />
                                    <Button variant="outline" onClick={applyPromoCode}>
                                        APPLY
                                    </Button>
                                </div>
                                {appliedPromo && (
                                    <div className="mt-3 text-green-600 text-sm">
                                        ✓ Promo code {appliedPromo.code} applied ({(appliedPromo.discount * 100)}% off)
                                    </div>
                                )}
                                <div className="mt-3 text-sm text-gray-600">
                                    Try: COFFEE20 (20% off) or WELCOME10 (10% off)
                                </div>
                            </div>

                            {/* Continue Shopping */}
                            <div className="mt-6">
                                <Button variant="outline" to="/products">
                                    ← CONTINUE SHOPPING
                                </Button>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-gray-50 rounded-lg p-6 sticky top-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>

                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Subtotal</span>
                                        <span className="font-medium">${subtotal.toFixed(2)}</span>
                                    </div>

                                    {appliedPromo && (
                                        <div className="flex justify-between text-green-600">
                                            <span>Discount ({appliedPromo.code})</span>
                                            <span>-${discount.toFixed(2)}</span>
                                        </div>
                                    )}

                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Shipping</span>
                                        <span className="font-medium">
                                            {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Tax</span>
                                        <span className="font-medium">${tax.toFixed(2)}</span>
                                    </div>

                                    <div className="border-t pt-3">
                                        <div className="flex justify-between text-lg font-bold">
                                            <span>Total</span>
                                            <span>${total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Shipping Options */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">Shipping Options</h4>
                                    <div className="space-y-2">
                                        {shippingOptions.map((option) => (
                                            <label key={option.id} className="flex items-center space-x-3 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="shipping"
                                                    defaultChecked={option.selected}
                                                    className="text-amber-600 focus:ring-amber-600"
                                                />
                                                <div className="flex-1">
                                                    <div className="flex justify-between">
                                                        <span className="text-sm font-medium">{option.name}</span>
                                                        <span className="text-sm">{option.price === 0 ? 'FREE' : `$${option.price}`}</span>
                                                    </div>
                                                    <div className="text-xs text-gray-500">{option.time}</div>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Free Shipping Notice */}
                                {shipping > 0 && (
                                    <div className="mb-6 p-3 bg-amber-50 rounded-lg">
                                        <div className="text-sm text-amber-800">
                                            💡 Add ${(50 - subtotal).toFixed(2)} more for FREE shipping!
                                        </div>
                                    </div>
                                )}

                                {/* Checkout Button */}
                                <Button variant="primary" className="w-full mb-4">
                                    PROCEED TO CHECKOUT
                                </Button>

                                {/* Payment Methods */}
                                <div className="text-center">
                                    <div className="text-xs text-gray-500 mb-2">We accept</div>
                                    <div className="flex justify-center space-x-2">
                                        <span className="text-lg">💳</span>
                                        <span className="text-lg">🏦</span>
                                        <span className="text-lg">📱</span>
                                    </div>
                                </div>

                                {/* Security */}
                                <div className="mt-4 text-center">
                                    <div className="text-xs text-gray-500 flex items-center justify-center">
                                        <span className="mr-1">🔒</span>
                                        Secure SSL Encryption
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Recently Viewed */}
            <Section backgroundType="gray" spacing="normal">
                <Container>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">You might also like</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { name: 'Classic White Mug', price: 35.00, emoji: '☕', bgColor: 'from-gray-100 to-gray-200' },
                            { name: 'Blue Ocean Cup', price: 45.00, emoji: '🌊', bgColor: 'from-blue-100 to-blue-200' },
                            { name: 'Green Nature Mug', price: 40.00, emoji: '🌿', bgColor: 'from-green-100 to-green-200' },
                            { name: 'Purple Royalty Cup', price: 55.00, emoji: '👑', bgColor: 'from-purple-100 to-purple-200' }
                        ].map((product, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                                <div className={`h-32 bg-gradient-to-br ${product.bgColor} flex items-center justify-center`}>
                                    <span className="text-3xl">{product.emoji}</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                                        <Button variant="outline" className="text-xs px-3 py-1">
                                            ADD TO CART
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    );
};

export default Cart;
