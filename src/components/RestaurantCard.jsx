import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <Link to={`/restaurant/${restaurant.id}`}>
                <img
                    className="w-full h-40 object-cover"
                    src={`https://source.unsplash.com/600x400/?${restaurant.name}`}
                    alt={restaurant.name}
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold">{restaurant.name}</h2>
                    <p className="text-gray-500">{restaurant.cuisines.join(', ')}</p>
                    <div className="flex items-center mt-2">
                        <span className="text-yellow-500">{'★'.repeat(Math.round(restaurant.rating))}</span>
                        <span className="text-gray-400 ml-2">({restaurant.rating})</span>
                    </div>
                    <p className="text-gray-600 mt-1">Delivery in {restaurant.deliveryTime} mins</p>
                </div>
            </Link>
        </div>
    );
};

export default RestaurantCard;