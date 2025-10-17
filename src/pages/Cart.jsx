import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { formatCurrency } from '../utils/currency';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-lg">Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <CartItem 
                            key={item.id} 
                            item={item} 
                            removeFromCart={removeFromCart} 
                            updateQuantity={updateQuantity} 
                        />
                    ))}
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">Total: {formatCurrency(getTotalPrice())}</h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;