import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import classes from "./Header.module.css";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigationItems = [
        { path: '/', label: 'Home', icon: 'home' },
        { path: '/graph', label: 'Graph', icon: 'graph' },
        { path: '/sorting', label: 'Sorting', icon: 'sort' },
        { path: '/sudoku', label: 'Sudoku', icon: 'grid' },
        { path: '/nqueens', label: 'N-Queens', icon: 'chess' },
        { path: '/segment', label: 'Segment Trees', icon: 'tree' }
    ];

    const handleNavigation = (path) => {
        navigate(path);
        setIsMobileMenuOpen(false);
    };

    const getIcon = (iconName) => {
        const icons = {
            home: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"/>
                    <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
            ),
            graph: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="18" cy="5" r="3"/>
                    <circle cx="6" cy="12" r="3"/>
                    <circle cx="18" cy="19" r="3"/>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
            ),
            sort: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6H21M7 12H17M11 18H13"/>
                </svg>
            ),
            grid: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                </svg>
            ),
            chess: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 3H15M9 21H15M12 3C12 3 10.5 7 9 12C10.5 17 12 21 12 21M12 3C12 3 13.5 7 15 12C13.5 17 12 21 12 21"/>
                    <path d="M5 12H19"/>
                </svg>
            ),
            tree: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2V6M18 8C18 8 18 9 17 10C16 11 15 12 13 12H11C9 12 8 11 7 10C6 9 6 8 6 8M12 12V22"/>
                    <circle cx="12" cy="2" r="2"/>
                    <circle cx="6" cy="8" r="2"/>
                    <circle cx="18" cy="8" r="2"/>
                </svg>
            )
        };
        return icons[iconName] || icons.home;
    };

    return (
        <header className={`${classes.header} ${isScrolled ? classes.scrolled : ''}`}>
            <div className={classes.container}>
                <div className={classes.logo} onClick={() => handleNavigation('/')}>
                    <div className={classes.logoIcon}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path 
                                d="M12 2L2 7L12 12L22 7L12 2Z" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                fill="var(--primary-500)"
                            />
                            <path 
                                d="M2 17L12 22L22 17" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            />
                            <path 
                                d="M2 12L12 17L22 12" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className={classes.logoText}>
                        <span className={classes.logoTitle}>Algo</span>
                        <span className={classes.logoSubtitle}>Visualizer</span>
                    </div>
                </div>

                <nav className={classes.navigation}>
                    <ul className={classes.navList}>
                        {navigationItems.map((item) => (
                            <li key={item.path} className={classes.navItem}>
                                <button
                                    className={`${classes.navLink} ${
                                        location.pathname === item.path ? classes.active : ''
                                    }`}
                                    onClick={() => handleNavigation(item.path)}
                                >
                                    <span className={classes.navIcon}>
                                        {getIcon(item.icon)}
                                    </span>
                                    <span className={classes.navLabel}>{item.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    className={classes.mobileMenuButton}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    <span className={`${classes.hamburger} ${isMobileMenuOpen ? classes.open : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${classes.mobileMenu} ${isMobileMenuOpen ? classes.mobileMenuOpen : ''}`}>
                <nav className={classes.mobileNavigation}>
                    <ul className={classes.mobileNavList}>
                        {navigationItems.map((item) => (
                            <li key={item.path} className={classes.mobileNavItem}>
                                <button
                                    className={`${classes.mobileNavLink} ${
                                        location.pathname === item.path ? classes.active : ''
                                    }`}
                                    onClick={() => handleNavigation(item.path)}
                                >
                                    <span className={classes.mobileNavIcon}>
                                        {getIcon(item.icon)}
                                    </span>
                                    <span className={classes.mobileNavLabel}>{item.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className={classes.mobileMenuOverlay}
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </header>
    );
}
