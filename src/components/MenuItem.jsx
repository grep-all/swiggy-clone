import React from 'react';

const MenuItem = ({ item, addToCart }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-xl font-bold mt-1">{`₹${item.price}`}</p>
            <button 
                onClick={() => addToCart(item)} 
                className="mt-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-200"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default MenuItem;