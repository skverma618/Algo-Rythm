import React, { useState, useEffect } from "react";
import ColResize from "../ColResize";
import classes from "./AlgoBox.module.css";
import dots from "../../images/dots2.png";
import { BFS } from "./Algorithms/BFS";

export default function AlgoBox({ algo }) {
    const [originalWidth, setoriginalwidth] = useState(0);
    const [originalx, setoriginalx] = useState(0);
    const [language, setLanguage] = useState("java");
    const [isMinimized, setIsMinimized] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const languageHandler = (language) => {
        setLanguage(language);
    };

    useEffect(() => {
        const el = document.getElementById("algo-container");
        if (el) {
            const ow = parseFloat(
                getComputedStyle(el, null)
                    .getPropertyValue("width")
                    .replace("px", "")
            );
            const ox = el.getBoundingClientRect().left;
            setoriginalwidth(ow);
            setoriginalx(ox);
        }
    }, []);

    const handleMouseDown = (e) => {
        e.preventDefault();
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResize);
    };

    const resize = (e) => {
        const el = document.getElementById("algo-container");
        if (el) {
            const width = originalWidth - (e.pageX - originalx);
            if (width > 250) {
                el.style.width = width + "px";
                el.style.left = originalx + (e.pageX - originalx) + "px";
            }
        }
    };

    const stopResize = () => {
        window.removeEventListener("mousemove", resize);
    };

    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const getAlgorithmTitle = (algo) => {
        const titles = {
            'bfs': 'Breadth-First Search',
            'dfs': 'Depth-First Search',
            'dijkstra': "Dijkstra's Algorithm",
            'merge': 'Merge Sort',
            'quick': 'Quick Sort',
            'bubble': 'Bubble Sort',
            'selection': 'Selection Sort',
            'insertion': 'Insertion Sort'
        };
        return titles[algo] || algo || 'Algorithm Details';
    };

    const getAlgorithmIcon = (algo) => {
        const icons = {
            'bfs': (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="18" cy="5" r="3"/>
                    <circle cx="6" cy="12" r="3"/>
                    <circle cx="18" cy="19" r="3"/>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
            ),
            'dfs': (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                    <path d="M2 17L12 22L22 17"/>
                    <path d="M2 12L12 17L22 12"/>
                </svg>
            ),
            'dijkstra': (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
                </svg>
            ),
            'merge': (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6H21M7 12H17M11 18H13"/>
                </svg>
            )
        };
        return icons[algo] || (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <rect x="9" y="9" width="6" height="6"/>
            </svg>
        );
    };

    if (!isVisible) {
        return (
            <div className={classes.hiddenToggle}>
                <button
                    className={classes.showButton}
                    onClick={toggleVisibility}
                    title="Show Algorithm Details"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15,18 9,12 15,6"/>
                    </svg>
                </button>
            </div>
        );
    }

    return (
        <div className={`${classes.container} ${isMinimized ? classes.minimized : ''}`} id="algo-container">
            <div
                className={classes.resizer}
                id="resizer"
                onMouseDown={handleMouseDown}
                title="Drag to resize"
            >
                <div className={classes.resizerHandle}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="9" cy="12" r="1"/>
                        <circle cx="9" cy="5" r="1"/>
                        <circle cx="9" cy="19" r="1"/>
                        <circle cx="15" cy="12" r="1"/>
                        <circle cx="15" cy="5" r="1"/>
                        <circle cx="15" cy="19" r="1"/>
                    </svg>
                </div>
            </div>

            <div className={classes.algobox}>
                <div className={classes.header}>
                    <div className={classes.headerContent}>
                        <div className={classes.titleSection}>
                            <span className={classes.algorithmIcon}>
                                {getAlgorithmIcon(algo)}
                            </span>
                            <div className={classes.titleText}>
                                <h3 className={classes.title}>{getAlgorithmTitle(algo)}</h3>
                                {algo && (
                                    <span className={classes.subtitle}>Interactive Explanation</span>
                                )}
                            </div>
                        </div>
                        
                        <div className={classes.headerControls}>
                            <button
                                className={classes.controlButton}
                                onClick={toggleMinimize}
                                title={isMinimized ? "Expand" : "Minimize"}
                            >
                                <svg 
                                    width="16" 
                                    height="16" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2"
                                    className={isMinimized ? classes.rotated : ''}
                                >
                                    <polyline points="6,9 12,15 18,9"/>
                                </svg>
                            </button>
                            <button
                                className={classes.controlButton}
                                onClick={toggleVisibility}
                                title="Hide panel"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="9,18 15,12 9,6"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {!isMinimized && (
                    <>
                        <div className={classes.content}>
                            <div className={classes.description}>
                                <BFS />
                            </div>
                        </div>

                        <div className={classes.footer}>
                            <div className={classes.languageSelector}>
                                <span className={classes.languageLabel}>Code Example:</span>
                                <div className={classes.languageButtons}>
                                    <button
                                        className={`${classes.languageButton} ${
                                            language === "java" ? classes.active : classes.inactive
                                        }`}
                                        onClick={() => languageHandler("java")}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
                                        </svg>
                                        Java
                                    </button>
                                    <button
                                        className={`${classes.languageButton} ${
                                            language === "cpp" ? classes.active : classes.inactive
                                        }`}
                                        onClick={() => languageHandler("cpp")}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M14,2H6A2,2,0,0,0,4,4V20a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V8Z"/>
                                            <polyline points="14,2 14,8 20,8"/>
                                            <line x1="16" y1="13" x2="8" y2="13"/>
                                            <line x1="16" y1="17" x2="8" y2="17"/>
                                        </svg>
                                        C++
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
