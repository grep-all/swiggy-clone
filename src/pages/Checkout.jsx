import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { formatCurrency } from '../utils/currency';

const Checkout = () => {
    const { cartItems } = useContext(CartContext);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
                <ul className="mb-4">
                    {cartItems.map(item => (
                        <li key={item.id} className="flex justify-between mb-2">
                            <span>{item.name} (x{item.quantity})</span>
                            <span>{formatCurrency(item.price * item.quantity)}</span>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>{formatCurrency(calculateTotal())}</span>
                </div>
            </div>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Place Order
            </button>
        </div>
    );
};

export default Checkout;