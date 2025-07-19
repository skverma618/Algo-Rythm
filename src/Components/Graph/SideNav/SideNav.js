import React, { useState } from "react";
import classes from "./SideNav.module.css";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import SlideStart from "./SpeedSlider.js";

export default function SideNav({
    addingweight,
    changeaddweight,
    changespeed,
    startalgo,
    changeAlgo,
    resetgrid,
    changeweight,
}) {
    const [algo, setAlgo] = useState("");
    const [isCollapsed, setIsCollapsed] = useState(false);

    const algoHandler = (event) => {
        setAlgo(event.target.value);
        changeAlgo(event.target.value);
    };

    const algorithms = [
        { value: "select algo", label: "Select Algorithm", disabled: true },
        { value: "bfs", label: "Breadth-First Search", description: "Unweighted shortest path" },
        { value: "dfs", label: "Depth-First Search", description: "Explores as far as possible" },
        { value: "dijkstra", label: "Dijkstra's Algorithm", description: "Weighted shortest path" },
    ];

    const tools = [
        // {
        //     id: "start",
        //     label: "Start Node",
        //     description: "Set the starting point",
        //     icon: (
        //         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        //             <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
        //         </svg>
        //     ),
        //     action: () => changeaddweight(false),
        //     color: "success"
        // },
        // {
        //     id: "end",
        //     label: "End Node",
        //     description: "Set the destination",
        //     icon: (
        //         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        //             <circle cx="12" cy="12" r="10"/>
        //             <polyline points="12,6 12,12 16,14"/>
        //         </svg>
        //     ),
        //     action: () => changeaddweight(false),
        //     color: "error"
        // },
        {
            id: "wall",
            label: "Wall Node",
            description: "Create obstacles",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <rect x="9" y="9" width="6" height="6"/>
                </svg>
            ),
            action: () => changeaddweight(false),
            color: "secondary"
        },
        {
            id: "weight",
            label: "Weight Node",
            description: "Add weighted paths",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                </svg>
            ),
            action: () => changeaddweight(true),
            color: "warning",
            active: addingweight
        }
    ];

    const actions = [
        {
            id: "visualize",
            label: "Visualize Algorithm",
            description: "Start the visualization",
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
            label: "Reset Grid",
            description: "Clear everything",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="1,4 1,10 7,10"/>
                    <path d="M3.51,15a9,9,0,0,0,2.13,3.09,9,9,0,0,0,13.72,0,9,9,0,0,0,0-12.72,9,9,0,0,0-13.72,0A8.5,8.5,0,0,0,1,10"/>
                </svg>
            ),
            action: resetgrid,
            variant: "secondary"
        }
    ];

    return (
        <>
            <div className={`${classes.sidenav} ${isCollapsed ? classes.hidden : ''}`}>
                <div className={classes.header}>
                    <div className={classes.headerContent}>
                        <h2 className={classes.title}>Graph Controls</h2>
                        <button
                            className={classes.collapseButton}
                            onClick={() => setIsCollapsed(true)}
                            aria-label="Close sidebar"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>

            <div className={classes.content}>
                <div className={classes.section}>
                    <h3 className={classes.sectionTitle}>
                        <span className={classes.sectionIcon}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9,12l2,2,4-4"/>
                                <path d="M21,12c0,4.97-4.03,9-9,9s-9-4.03-9-9,4.03-9,9-9c2.39,0,4.68,0.94,6.36,2.64L21,8"/>
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
                                        <span className={classes.selectLabel}>
                                            {selectedAlgo?.label || "Select Algorithm"}
                                        </span>
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
                                        <span className={classes.menuItemLabel}>{algorithm.label}</span>
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
                                <path d="M12,2l3.09,6.26L22,9.27l-5,4.87L18.18,22,12,18.77,5.82,22,7,14.14,2,9.27l6.91-1.01L12,2Z"/>
                            </svg>
                        </span>
                        Tools
                    </h3>
                    
                    <div className={classes.toolsGrid}>
                        {tools.map((tool) => (
                            <button
                                key={tool.id}
                                className={`${classes.toolButton} ${classes[`tool-${tool.color}`]} ${tool.active ? classes.active : ''}`}
                                onClick={tool.action}
                                title={tool.description}
                            >
                                <span className={classes.toolIcon}>{tool.icon}</span>
                                {!isCollapsed && (
                                    <div className={classes.toolContent}>
                                        <span className={classes.toolLabel}>{tool.label}</span>
                                        <span className={classes.toolDescription}>{tool.description}</span>
                                    </div>
                                )}
                            </button>
                        ))}
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
                        Speed Control
                    </h3>
                    
                    <div className={classes.speedControl}>
                        <SlideStart chnageSpeed={changespeed} target="speed" />
                    </div>
                </div>

                {addingweight && (
                    <div className={classes.section}>
                        <h3 className={classes.sectionTitle}>
                            <span className={classes.sectionIcon}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="3"/>
                                    <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                                </svg>
                            </span>
                            Weight Control
                        </h3>
                        
                        <div className={classes.speedControl}>
                            <SlideStart changeweight={changeweight} target="weight" />
                        </div>
                    </div>
                )}

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
                                    <span className={classes.actionLabel}>{action.label}</span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
                </div>
            </div>

            {/* Burger button when sidebar is hidden */}
            {isCollapsed && (
                <button
                    className={classes.burgerButton}
                    onClick={() => setIsCollapsed(false)}
                    aria-label="Open sidebar"
                    title="Open sidebar"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <line x1="3" y1="12" x2="21" y2="12"/>
                        <line x1="3" y1="18" x2="21" y2="18"/>
                    </svg>
                </button>
            )}
        </>
    );
}
