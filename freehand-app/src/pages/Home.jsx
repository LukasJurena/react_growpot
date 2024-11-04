import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Home = () => {
    const containerRef = useRef(null);
    const productRef = useRef(null);
    const companyRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        // Initial animation for the main container
        //gsap.from(containerRef.current, { opacity: 1, y: -50, duration: 1 });
    
        /* Animations for each section when the page loads
        //gsap.from(productRef.current, { opacity: 1, x: -100, duration: 1, delay: 0.5 });
        //gsap.from(companyRef.current, { opacity: 1, x: 100, duration: 1, delay: 1 });
        gsap.from(contactRef.current, { opacity: 1, y: 50, duration: 1, delay: 1.5 });*/
    }, []);

    return (
        <div className="growpot-container" ref={containerRef}>
            {/* Navigation Bar */}
            <nav className="growpot-navbar">
                <a className="growpot-logo">Growpot</a>
                <ul className="growpot-nav-links">
                    <li><Link to="#product" className="growpot-link">Growpot</Link></li>
                    <li><Link to="#company" className="growpot-link">Firma</Link></li>
                    <li><Link to="#contact" className="growpot-link">Kontakt</Link></li>
                </ul>
            </nav>

            {/* Main Header */}
            <header className="growpot-header">
                <h1>Welcome to Growpot</h1>
                <p>Your solution for efficient and sustainable plant growth!</p>
            </header>

            {/* Sections */}
            <section id="product" ref={productRef} className="growpot-section product-section">
                <h2>Our Product</h2>
                <p>Growpot offers innovative solutions for home gardening, allowing plants to thrive with minimal effort.</p>
            </section>

            <section id="company" ref={companyRef} className="growpot-section company-section">
                <h2>About Our Company</h2>
                <p>We are a team of gardening enthusiasts committed to creating sustainable solutions for urban gardening.</p>
            </section>

            <section id="contact" ref={contactRef} className="growpot-section contact-section">
                <h2>Contact Us</h2>
                <p>Have any questions? Reach out to us at contact@growpot.com or call us at 123-456-7890.</p>
            </section>

            {/* Footer */}
            <footer className="growpot-footer">
                <p>© 2024 Growpot. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
