import React from 'react';
import { Link } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import RestaurantCard from '../components/RestaurantCard';

const Home = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-4">
            <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">Welcome to Swiggy Dummy App</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {restaurants.map(restaurant => (
                    <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
                        <RestaurantCard restaurant={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;