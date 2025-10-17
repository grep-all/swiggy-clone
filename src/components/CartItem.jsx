import React from 'react';

const CartItem = ({ item, onRemove, onQuantityChange }) => {
    return (
        <div className="flex justify-between items-center p-4 border-b">
            <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-gray-800 font-bold">{`$${item.price.toFixed(2)}`}</p>
                </div>
            </div>
            <div className="flex items-center">
                <button onClick={() => onQuantityChange(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => onQuantityChange(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                <button onClick={() => onRemove(item.id)} className="ml-4 text-red-500">Remove</button>
            </div>
        </div>
    );
};

export default CartItem;