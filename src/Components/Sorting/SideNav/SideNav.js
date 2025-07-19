import React, { useState } from "react";
import classes from "./SideNav.module.css";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import SlideStart from "./SpeedSlider.js";

export default function SideNav({
    resetarray,
    startalgo,
    changesize,
    changealgo,
}) {
    const [algo, setAlgo] = useState("");
    const [isCollapsed, setIsCollapsed] = useState(false);

    const algoHandler = (event) => {
        setAlgo(event.target.value);
        changealgo(event.target.value);
    };

    const algorithms = [
        { value: "select algo", label: "Select Algorithm", disabled: true },
        { value: "merge", label: "Merge Sort", description: "O(n log n) - Divide and conquer", complexity: "O(n log n)" },
        { value: "quick", label: "Quick Sort", description: "O(n log n) avg - Partition based", complexity: "O(n²) worst" },
        { value: "bubble", label: "Bubble Sort", description: "O(n²) - Simple comparison", complexity: "O(n²)" },
        { value: "selection", label: "Selection Sort", description: "O(n²) - Find minimum", complexity: "O(n²)" },
        { value: "insertion", label: "Insertion Sort", description: "O(n²) - Insert in place", complexity: "O(n²)" },
    ];

    const actions = [
        {
            id: "start",
            label: "Start Sorting",
            description: "Begin algorithm visualization",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="5,3 19,12 5,21 5,3"/>
                </svg>
            ),
            action: () => startalgo(algo),
            variant: "primary",
            disabled: !algo || algo === "select algo"
        },
        {
            id: "reset",
            label: "Generate New Array",
            description: "Create a new random array",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="1,4 1,10 7,10"/>
                    <path d="M3.51,15a9,9,0,0,0,2.13,3.09,9,9,0,0,0,13.72,0,9,9,0,0,0,0-12.72,9,9,0,0,0-13.72,0A8.5,8.5,0,0,0,1,10"/>
                </svg>
            ),
            action: resetarray,
            variant: "secondary"
        }
    ];

    const getComplexityColor = (complexity) => {
        if (complexity.includes('n log n')) return 'success';
        if (complexity.includes('n²')) return 'warning';
        return 'secondary';
    };

    return (
        <div className={`${classes.sidenav} ${isCollapsed ? classes.collapsed : ''}`}>
            <div className={classes.header}>
                <div className={classes.headerContent}>
                    <h2 className={classes.title}>Sorting Controls</h2>
                    <button
                        className={classes.collapseButton}
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                    >
                        <svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2"
                            className={isCollapsed ? classes.rotated : ''}
                        >
                            <polyline points="15,18 9,12 15,6"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className={classes.content}>
                <div className={classes.section}>
                    <h3 className={classes.sectionTitle}>
                        <span className={classes.sectionIcon}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 6H21M7 12H17M11 18H13"/>
                            </svg>
                        </span>
                        Algorithm Selection
                    </h3>
                    
                    <div className={classes.algorithmSelector}>
                        <Select
                            value={algo || "select algo"}
                            onChange={algoHandler}
                            className={classes.select}
                            displayEmpty
                            renderValue={(selected) => {
                                const selectedAlgo = algorithms.find(a => a.value === selected);
                                return (
                                    <div className={classes.selectValue}>
                                        <div className={classes.selectHeader}>
                                            <span className={classes.selectLabel}>
                                                {selectedAlgo?.label || "Select Algorithm"}
                                            </span>
                                            {selectedAlgo?.complexity && !isCollapsed && (
                                                <span className={`${classes.complexityBadge} ${classes[`complexity-${getComplexityColor(selectedAlgo.complexity)}`]}`}>
                                                    {selectedAlgo.complexity}
                                                </span>
                                            )}
                                        </div>
                                        {selectedAlgo?.description && !isCollapsed && (
                                            <span className={classes.selectDescription}>
                                                {selectedAlgo.description}
                                            </span>
                                        )}
                                    </div>
                                );
                            }}
                        >
                            {algorithms.map((algorithm) => (
                                <MenuItem 
                                    key={algorithm.value} 
                                    value={algorithm.value}
                                    disabled={algorithm.disabled}
                                    className={classes.menuItem}
                                >
                                    <div className={classes.menuItemContent}>
                                        <div className={classes.menuItemHeader}>
                                            <span className={classes.menuItemLabel}>{algorithm.label}</span>
                                            {algorithm.complexity && (
                                                <span className={`${classes.complexityBadge} ${classes[`complexity-${getComplexityColor(algorithm.complexity)}`]}`}>
                                                    {algorithm.complexity}
                                                </span>
                                            )}
                                        </div>
                                        {algorithm.description && (
                                            <span className={classes.menuItemDescription}>
                                                {algorithm.description}
                                            </span>
                                        )}
                                    </div>
                                </MenuItem>
                            ))}
                        </Select>
                    </div>
                </div>

                <div className={classes.section}>
                    <h3 className={classes.sectionTitle}>
                        <span className={classes.sectionIcon}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="3"/>
                                <path d="M19.4,15a1.65,1.65,0,0,0,.33,1.82l.06.06a2,2,0,0,1,0,2.83,2,2,0,0,1-2.83,0l-.06-.06a1.65,1.65,0,0,0-1.82-.33,1.65,1.65,0,0,0-1,1.51V21a2,2,0,0,1-2,2,2,2,0,0,1-2-2v-.09A1.65,1.65,0,0,0,9,19.4a1.65,1.65,0,0,0-1.82.33l-.06.06a2,2,0,0,1-2.83,0,2,2,0,0,1,0-2.83l.06-.06a1.65,1.65,0,0,0,.33-1.82,1.65,1.65,0,0,0-1.51-1H3a2,2,0,0,1-2-2,2,2,0,0,1,2-2h.09A1.65,1.65,0,0,0,4.6,9a1.65,1.65,0,0,0-.33-1.82L4.21,7.1a2,2,0,0,1,0-2.83,2,2,0,0,1,2.83,0L7.1,4.21A1.65,1.65,0,0,0,8.92,4.54,1.65,1.65,0,0,0,9.91,3H12a2,2,0,0,1,2,2v.09a1.65,1.65,0,0,0,1,1.51,1.65,1.65,0,0,0,1.82-.33l.06-.06a2,2,0,0,1,2.83,0,2,2,0,0,1,0,2.83l-.06.06a1.65,1.65,0,0,0-.33,1.82V9a1.65,1.65,0,0,0,1.51,1H21a2,2,0,0,1,2,2,2,2,0,0,1-2,2h-.09A1.65,1.65,0,0,0,19.4,15Z"/>
                            </svg>
                        </span>
                        Array Size & Speed
                    </h3>
                    
                    <div className={classes.controlsContainer}>
                        <div className={classes.speedControl}>
                            <div className={classes.controlLabel}>
                                <span>Array Size</span>
                                <span className={classes.controlValue}>70</span>
                            </div>
                            <SlideStart changesize={changesize} />
                        </div>
                        
                        <div className={classes.infoCard}>
                            <div className={classes.infoIcon}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <line x1="12" y1="16" x2="12" y2="12"/>
                                    <line x1="12" y1="8" x2="12.01" y2="8"/>
                                </svg>
                            </div>
                            <div className={classes.infoContent}>
                                <span className={classes.infoTitle}>Visualization Speed</span>
                                <span className={classes.infoDescription}>
                                    Adjust the slider to control animation speed
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.section}>
                    <h3 className={classes.sectionTitle}>
                        <span className={classes.sectionIcon}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="9,11 12,14 22,4"/>
                                <path d="M21,12v7a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5a2,2,0,0,1,2-2h11"/>
                            </svg>
                        </span>
                        Actions
                    </h3>
                    
                    <div className={classes.actionsGrid}>
                        {actions.map((action) => (
                            <button
                                key={action.id}
                                className={`${classes.actionButton} ${classes[`btn-${action.variant}`]}`}
                                onClick={action.action}
                                disabled={action.disabled}
                                title={action.description}
                            >
                                <span className={classes.actionIcon}>{action.icon}</span>
                                {!isCollapsed && (
                                    <div className={classes.actionContent}>
                                        <span className={classes.actionLabel}>{action.label}</span>
                                        <span className={classes.actionDescription}>{action.description}</span>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {algo && algo !== "select algo" && !isCollapsed && (
                    <div className={classes.section}>
                        <h3 className={classes.sectionTitle}>
                            <span className={classes.sectionIcon}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14,2H6A2,2,0,0,0,4,4V20a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V8Z"/>
                                    <polyline points="14,2 14,8 20,8"/>
                                    <line x1="16" y1="13" x2="8" y2="13"/>
                                    <line x1="16" y1="17" x2="8" y2="17"/>
                                    <polyline points="10,9 9,9 8,9"/>
                                </svg>
                            </span>
                            Algorithm Info
                        </h3>
                        
                        <div className={classes.algorithmInfo}>
                            {(() => {
                                const selectedAlgo = algorithms.find(a => a.value === algo);
                                return (
                                    <div className={classes.algoInfoCard}>
                                        <div className={classes.algoInfoHeader}>
                                            <h4 className={classes.algoInfoTitle}>{selectedAlgo?.label}</h4>
                                            <span className={`${classes.complexityBadge} ${classes[`complexity-${getComplexityColor(selectedAlgo?.complexity || '')}`]}`}>
                                                {selectedAlgo?.complexity}
                                            </span>
                                        </div>
                                        <p className={classes.algoInfoDescription}>
                                            {selectedAlgo?.description}
                                        </p>
                                        <div className={classes.algoProperties}>
                                            <div className={classes.property}>
                                                <span className={classes.propertyLabel}>Stable:</span>
                                                <span className={classes.propertyValue}>
                                                    {['merge', 'bubble', 'insertion'].includes(algo) ? 'Yes' : 'No'}
                                                </span>
                                            </div>
                                            <div className={classes.property}>
                                                <span className={classes.propertyLabel}>In-place:</span>
                                                <span className={classes.propertyValue}>
                                                    {['bubble', 'selection', 'insertion'].includes(algo) ? 'Yes' : 'No'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })()}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
