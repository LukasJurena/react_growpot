import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Home = () => {
    const containerRef = useRef(null);
    const productRef = useRef(null);
    const companyRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        // Animace pro hlavní kontejner
        gsap.fromTo(containerRef.current, 
            { opacity: 0, y: -50 }, // počáteční hodnoty
            { opacity: 1, y: 0, duration: 1 } // koncové hodnoty
        );

        // Animace pro jednotlivé sekce při načtení stránky
        gsap.fromTo(productRef.current, 
            { opacity: 0, x: -100 }, 
            { opacity: 1, x: 0, duration: 1, delay: 0.5 }
        );
        gsap.fromTo(companyRef.current, 
            { opacity: 0, x: 100 }, 
            { opacity: 1, x: 0, duration: 1, delay: 1 }
        );
        gsap.fromTo(contactRef.current, 
            { opacity: 0, y: 50 }, 
            { opacity: 1, y: 0, duration: 1, delay: 1.5 }
        );
    }, []);

    return (
        <div className="growpot-container" ref={containerRef}>
            {/* Navigační lišta */}
            <nav className="growpot-navbar">
                <a className="growpot-logo">Growpot</a>
                <ul className="growpot-nav-links">
                    <li><Link to="#product" className="growpot-link">Growpot</Link></li>
                    <li><Link to="#company" className="growpot-link">Firma</Link></li>
                    <li><Link to="#contact" className="growpot-link">Kontakt</Link></li>
                </ul>
            </nav>

            {/* Hlavní nadpis */}
            <header className="growpot-header">
                <h1>Vítejte v Growpot</h1>
                <p>Vaše řešení pro efektivní a udržitelný růst rostlin!</p>
            </header>

            {/* Sekce */}
            <section id="product" ref={productRef} className="growpot-section product-section">
                <h2>Naše produkty</h2>
                <p>Growpot nabízí inovativní řešení pro domácí zahradničení, které umožňuje rostlinám prospívat s minimálním úsilím.</p>
            </section>

            <section id="company" ref={companyRef} className="growpot-section company-section">
                <h2>O naší společnosti</h2>
                <p>Jsme tým zahradnických nadšenců, kteří se zavázali vytvářet udržitelná řešení pro městské zahradničení.</p>
            </section>

            <section id="contact" ref={contactRef} className="growpot-section contact-section">
                <h2>Kontaktujte nás</h2>
                <p>Máte nějaké otázky? Kontaktujte nás na emailu contact@growpot.com nebo nám zavolejte na číslo 123-456-7890.</p>
            </section>

            {/* Zápatí */}
            <footer className="growpot-footer">
                <p>© 2024 Growpot. Všechna práva vyhrazena.</p>
            </footer>
        </div>
    );
};

export default Home;
