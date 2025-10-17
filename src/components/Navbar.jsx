import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
                    Swiggy Dummy
                </Link>
                <div className="flex items-center space-x-4">
                    <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Home</Link>
                    <Link to="/cart" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Cart</Link>
                    <Link to="/checkout" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Checkout</Link>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;