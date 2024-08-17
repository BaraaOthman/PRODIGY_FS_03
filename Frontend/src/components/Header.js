import React from 'react';
import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';

const Header = ({ cartItems }) => {
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/cart');
    };

    const handleProfileClick = () => {
        navigate('/profile');
    };

    const handleHomeClick = () => {
        navigate('/'); // Navigate to the home page
    };

    const handleSearch = (event) => {
        // Add search functionality here
        console.log('Search:', event.target.value);
    };

    return (
        <header className="header">
            <div className="header-left">
                <div className="home-icon" onClick={handleHomeClick}>
                    🏠
                </div>
                <h1>ShopEase</h1>
            </div>
            <div className="header-center">
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-bar"
                    onChange={handleSearch}
                />
            </div>
            <div className="header-right">
                <div className="cart-icon" onClick={handleCartClick}>
                    🛒

                </div>
                <div className="profile-icon" onClick={handleProfileClick}>
                🤵🏻
                </div>
            </div>
        </header>
    );
};

export default Header;
