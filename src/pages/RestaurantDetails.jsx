import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import restaurantsData from '../data/restaurants';
import MenuItem from '../components/MenuItem';

const RestaurantDetails = () => {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const restaurant = restaurantsData.find((res) => res.id === parseInt(id));

    if (!restaurant) {
        return <div className="text-center">Restaurant not found</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="mb-4">
                <img src={restaurant.bannerImage} alt={restaurant.name} className="w-full h-64 object-cover rounded-lg" />
                <h1 className="text-3xl font-bold mt-4">{restaurant.name}</h1>
                <p className="text-gray-600">{restaurant.cuisines.join(', ')}</p>
                <p className="text-gray-600">Rating: {restaurant.rating} ⭐</p>
                <p className="text-gray-600">Delivery Time: {restaurant.deliveryTime} mins</p>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {restaurant.menu.map((item) => (
                    <MenuItem key={item.id} item={item} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default RestaurantDetails;