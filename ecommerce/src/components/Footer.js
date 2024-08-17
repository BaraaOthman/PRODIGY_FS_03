import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src='https://tse3.mm.bing.net/th?id=OIP.vaKksnv2pKZFFEqfbzBnzgHaHa&pid=Api&P=0&h=220' alt="ShopEase Logo" />
                </div>
                <div className="footer-info">
                    <p className="footer-heading">Contact Us</p>
                    <p>Email: support@shopease.com</p>
                    <p>Phone: (+961) 70 456 368</p>
                    <p>Address: 123 Main Street, Lebanon</p>
                </div>
                <div className="footer-about">
                    <p className="footer-heading">About Us</p>
                    <p>At ShopEase, we strive to provide you with the best shopping experience. Our mission is to make online shopping easy and enjoyable for everyone.</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 ShopEase | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
