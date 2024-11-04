import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import headerImage from '../assets/Logo_pot.png';
import feature1 from '../assets/test.png';
import feature2 from '../assets/solar-panel.png';
import feature3 from '../assets/watering-can.png';
import featureimg from '../assets/Kvetinac_1.png';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Home = () => {
    const containerRef = useRef(null);
    const headerImageRef = useRef(null);
    const productRef = useRef(null);
    const companyRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        // Animace pro hlavní kontejner
        gsap.fromTo(containerRef.current, 
            { opacity: 0, y: -50 }, 
            { opacity: 1, y: 0, duration: 1 } 
        );

        // Animace pro obrázek v headeru
        gsap.fromTo(headerImageRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1.5, delay: 0.5 } 
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

        // Animace pro obrázek a text "Dostupné v roce 2025"
        gsap.fromTo(companyRef.current.querySelector('.company-image'), 
        { opacity: 0, y: -20 }, 
        { opacity: 1, y: 0, duration: 1, scrollTrigger: {
            trigger: companyRef.current,
            start: "top 80%", // Spustit, když je horní část sekce 80% výšky okna
        }}
        );

        gsap.fromTo(companyRef.current.querySelector('.available-year'), 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1, scrollTrigger: {
            trigger: companyRef.current,
            start: "top 80%",
        }}
        );

        const sections = [productRef.current, companyRef.current, contactRef.current];
        
        sections.forEach((section, index) => {
            gsap.fromTo(section, 
                { opacity: 0, y: 50 }, 
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 1, 
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%", // Kdy spustit animaci
                        toggleActions: "play none none reverse",
                        markers: false // Vyžaduje pro vizuální debugging
                    }
                }
            );
        });
            const featureItems = document.querySelectorAll('.feature-item');
        featureItems.forEach((item, index) => {
            gsap.fromTo(item, 
                { opacity: 0, y: 20 }, 
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.5, 
                    delay: index * 0.2, // Opoždění mezi jednotlivými prvky
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%', // Aktivace, když je vrchol prvku 80% výšky okna
                        toggleActions: 'play none none reverse' // Jak se animace chová
                    }
                });
        });

        // Animace pro pohyb myši
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const rect = headerImageRef.current.getBoundingClientRect();
            const x = clientX - rect.left; // Vzdálenost myši od levého okraje obrázku
            const y = clientY - rect.top; // Vzdálenost myši od horního okraje obrázku
            const centerX = rect.width / 2; // Střed obrázku
            const centerY = rect.height / 2; // Střed obrázku
    
            // Vypočítejte vzdálenost myši od středu obrázku
            const distance = Math.sqrt(Math.pow(centerX - x, 2) + Math.pow(centerY - y, 2));
    
            // Nastavte intenzitu záření podle vzdálenosti
            const glowIntensity = Math.max(0, 20 - distance / 10); // Intenzita záření se snižuje s rostoucí vzdáleností
            const glowClass = glowIntensity > 0 ? 'glow' : '';
    
            // Aplikace třídy pro efekt záření
            headerImageRef.current.className = `header-image ${glowClass}`;
    
            // Animace pohybu obrázku
            gsap.to(headerImageRef.current, {
                x: (clientX / window.innerWidth) * 20 - 10,
                y: (clientY / window.innerHeight) * 20 - 10,
                duration: 0.6,
                ease: "power3.out"
            });
        };
    
        // Přidání události mousemove
        window.addEventListener('mousemove', handleMouseMove);
    
        // Úklid události při odpojení komponenty
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="growpot-container" ref={containerRef}>
            {/* Navigační lišta */}
            <nav className="growpot-navbar">
                <a className="growpot-logo">Growpot</a>
                <ul className="growpot-nav-links">
                    <li>
                        <Link to="#product" className="growpot-link" onClick={(e) => {
                            e.preventDefault(); // Zamez výchozímu chování odkazu
                            gsap.to(window, {
                                scrollTo: { y: "#product", autoKill: false },
                                duration: 1 // Délka animace
                            });
                        }}>
                            Growpot
                        </Link>
                    </li>
                    <li>
                        <Link to="#company" className="growpot-link" onClick={(e) => {
                            e.preventDefault();
                            gsap.to(window, {
                                scrollTo: { y: "#company", autoKill: false },
                                duration: 1
                            });
                        }}>
                            Firma
                        </Link>
                    </li>
                    <li>
                        <Link to="#contact" className="growpot-link" onClick={(e) => {
                            e.preventDefault();
                            gsap.to(window, {
                                scrollTo: { y: "#contact", autoKill: false },
                                duration: 1
                            });
                        }}>
                            Kontakt
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Header s obrázkem */}
            <header className="growpot-header">
                <h1>Growpot.</h1>
                <p>Automatický květináč s chytrými funkcemi a solárním napájením.</p>
                <img src={headerImage} alt="Header Image" ref={headerImageRef} className="header-image" />
            </header>

            {/* Sekce - Produkty */}
            <section id="product" ref={productRef} className="growpot-section product-section">
                <h2>Produkt</h2> {/* Přidání nadpisu nad sekci */}
                <div className="product-content">
                    <img src={featureimg} alt="Product Image" className="product-image" />
                    <div className="product-features">
                        <ul>
                            <li className="feature-item">
                                <img src={feature1} alt="Feature 1" className="feature-icon" />
                                <span>Funkce 1: Měření teploty a vlhkosti</span>
                            </li>
                            <li className="feature-item">
                                <img src={feature2} alt="Feature 2" className="feature-icon" />
                                <span>Funkce 2: Solární napájení</span>
                            </li>
                            <li className="feature-item">
                                <img src={feature3} alt="Feature 3" className="feature-icon" />
                                <span>Funkce 3: Automatické zavlažování</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Sekce - O společnosti */}
            <section id="company" ref={companyRef} className="growpot-section company-section">
                <div className="company-content">
                    <img src={headerImage} alt="Company Image" className="company-image" />
                    <div className="company-links">
                        <a className="company-link">Efektivní</a>
                        <span className="separator">|</span>
                        <a className="company-link">Úsporný</a>
                        <span className="separator">|</span>
                        <a className="company-link">Stylový</a>
                        <span className="separator">|</span>
                        <a className="company-link">Praktický</a>
                    </div>
                    <div className="available-year">
                        <p>Dostupné v roce 2025</p>
                    </div>
                </div>
            </section>

            {/* Sekce - Kontakt */}
            <section id="contact" ref={contactRef} className="growpot-section contact-section">
                <h2>Kontaktujte nás</h2>
                <p>Pro dotazy pište na contact@growpot.com nebo volejte 123-456-7890.</p>
            </section>

            {/* Zápatí */}
            <footer className="growpot-footer">
                <p>© 2024 Growpot. Všechna práva vyhrazena.</p>
            </footer>
        </div>
    );
};

export default Home;
