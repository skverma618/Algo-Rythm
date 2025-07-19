import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Index.module.css";
import Header from "../Graph/Header/Header";
import graph from "../../images/graph.png";
import sorting from "../../images/sorting1.png";
import sudoku from "../../images/sudoku1.jpg";
import nqueen from "../../images/nqueen1.png";

const algorithmCategories = [
    {
        id: "graph",
        title: "Graph Traversals",
        description: "Visualize BFS, DFS, and Dijkstra's algorithms on interactive grids",
        image: graph,
        path: "/graph",
        color: "primary",
        features: ["Breadth-First Search", "Depth-First Search", "Dijkstra's Algorithm"]
    },
    {
        id: "sorting",
        title: "Sorting Algorithms",
        description: "Watch sorting algorithms in action with animated comparisons",
        image: sorting,
        path: "/sorting",
        color: "success",
        features: ["Merge Sort", "Quick Sort", "Bubble Sort", "Selection Sort"]
    },
    {
        id: "sudoku",
        title: "Sudoku Solver",
        description: "See backtracking algorithm solve Sudoku puzzles step by step",
        image: sudoku,
        path: "/sudoku",
        color: "accent",
        features: ["Backtracking", "Constraint Satisfaction", "Interactive Solving"]
    },
    {
        id: "nqueens",
        title: "N-Queens Problem",
        description: "Explore the classic N-Queens problem with backtracking visualization",
        image: nqueen,
        path: "/nqueens",
        color: "warning",
        features: ["Backtracking", "Constraint Solving", "Dynamic Board Size"]
    },
    {
        id: "segment",
        title: "Segment Trees",
        description: "Understand segment tree operations with interactive visualizations",
        image: nqueen, // Using nqueen image as placeholder
        path: "/segment",
        color: "secondary",
        features: ["Range Queries", "Point Updates", "Tree Visualization"]
    }
];

export default function Index() {
    return (
        <div className={classes.container}>
            <Header />
            
            <main className={classes.main}>
                <div className={classes.hero}>
                    <div className={classes.heroContent}>
                        <h1 className={classes.heroTitle}>
                            Algorithm <span className={classes.highlight}>Visualizer</span>
                        </h1>
                        <p className={classes.heroDescription}>
                            Interactive visualizations to help you understand algorithms better. 
                            Watch step-by-step execution and learn how different algorithms work.
                        </p>
                    </div>
                </div>

                <section className={classes.algorithmsSection}>
                    {/* <div className={classes.sectionHeader}>
                        <h2 className={classes.sectionTitle}>Choose an Algorithm Category</h2>
                        <p className={classes.sectionDescription}>
                            Select from our collection of interactive algorithm visualizations
                        </p>
                    </div> */}

                    <div className={classes.algorithmGrid}>
                        {algorithmCategories.map((category, index) => (
                            <NavLink 
                                key={category.id}
                                to={category.path}
                                className={classes.algorithmCardLink}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className={`${classes.algorithmCard} ${classes[`card-${category.color}`]}`}>
                                    <div className={classes.cardImageContainer}>
                                        <img
                                            src={category.image}
                                            alt={category.title}
                                            className={classes.cardImage}
                                        />
                                        <div className={classes.cardOverlay}></div>
                                    </div>
                                    
                                    <div className={classes.cardContent}>
                                        <div className={classes.cardHeader}>
                                            <h3 className={classes.cardTitle}>{category.title}</h3>
                                            <div className={`${classes.cardBadge} ${classes[`badge-${category.color}`]}`}>
                                                Interactive
                                            </div>
                                        </div>
                                        
                                        <p className={classes.cardDescription}>
                                            {category.description}
                                        </p>
                                        
                                        <div className={classes.cardFeatures}>
                                            {category.features.map((feature, idx) => (
                                                <span key={idx} className={classes.featureTag}>
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* <div className={classes.cardFooter}>
                                        <span className={classes.exploreText}>
                                            Explore Algorithm
                                        </span>
                                        <svg 
                                            className={classes.arrowIcon}
                                            width="16" 
                                            height="16" 
                                            viewBox="0 0 16 16" 
                                            fill="none"
                                        >
                                            <path 
                                                d="M6 12L10 8L6 4" 
                                                stroke="currentColor" 
                                                strokeWidth="2" 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div> */}
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </section>

                <section className={classes.featuresSection}>
                    <div className={classes.featuresGrid}>
                        <div className={classes.featureCard}>
                            <div className={classes.featureIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3 className={classes.featureTitle}>Real-time Visualization</h3>
                            <p className={classes.featureDescription}>
                                Watch algorithms execute step by step with smooth animations
                            </p>
                        </div>
                        
                        <div className={classes.featureCard}>
                            <div className={classes.featureIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3 className={classes.featureTitle}>Interactive Controls</h3>
                            <p className={classes.featureDescription}>
                                Control speed, reset, and customize parameters for each algorithm
                            </p>
                        </div>
                        
                        <div className={classes.featureCard}>
                            <div className={classes.featureIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 11H15M9 15H15M17 21L12 16L7 21V5C7 4.46957 7.21071 3.96086 7.58579 3.58579C7.96086 3.21071 8.46957 3 9 3H15C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5V21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3 className={classes.featureTitle}>Educational Content</h3>
                            <p className={classes.featureDescription}>
                                Learn with detailed explanations and code examples
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
