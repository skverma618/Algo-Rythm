import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Grid from "../Grid/Grid";
import SideNav from "../SideNav/SideNav";
import classes from "./Home.module.css";
import AlgoBox from "../../AlgoBox/AlgoBox";
import DFS from "../Algorithms/DFS/DFS";
import BFS from "../Algorithms/BFS/BFS";
import dijstra from "../Algorithms/Dijsktra/Dijsktra";
import node_classes from "../Node/Node.module.css";
export default function Home() {
    const [grid, setgrid] = useState([]);
    const [startNode, setstartNode] = useState([7, 8]);
    const [finishNode, setfinishNode] = useState([17, 35]);
    const [ismousedown, setismousedown] = useState(false);
    const [algo, setalgo] = useState("");
    const [speed, setspeed] = useState(50);
    const [addingweight, setaddingweight] = useState(false);
    const [weight, setweight] = useState(1);

    const changeaddweight = (is) => {
        setaddingweight(is);
    };

    const changeweight = (e, newValue) => {
        setweight(newValue);
    };

    const changeSpeedHandler = (e, newValue) => {
        setspeed(newValue);
    };

    const changeAlgo = (newalgo) => {
        const newGrid = grid.slice();
        for (let i = 0; i < newGrid.length; i++) {
            for (let j = 0; j < newGrid[0].length; j++) {
                newGrid[i][j].weight = 1;
            }
        }
        setgrid(newGrid);
        changeaddweight(false);
        setalgo(newalgo);
    };

    const startalgo = (algo) => {
        console.log(algo);
        if (algo === "bfs") {
            visualizebfs();
        } else if (algo === "dfs") {
            visulaizedfs();
        } else if (algo === "dijkstra") {
            visulaizedijsktra();
        }
    };

    const createNode = (r, c) => {
        return {
            col: c,
            row: r,
            isStart: r == startNode[0] && c == startNode[1],
            isFinish: r == finishNode[0] && c == finishNode[1],
            isWall: false,
            weight: 1,
        };
    };

    const handleMouseDown = (row, col) => {
        if (row != startNode[0] || col != startNode[1]) {
            changewall(row, col);
            setismousedown(true);
        }
    };

    const handleMouseEnter = (row, col) => {
        if (!ismousedown) return;
        changewall(row, col);
    };

    const handleMouseUp = () => {
        setismousedown(false);
    };

    const changewall = (row, col, ismovingstart = false) => {
        if (addingweight === false) {
            const newGrid = grid.slice();
            const node = newGrid[row][col];
            const newNode = {
                ...node,
            };
            if (newNode.isWall) {
                newNode.isWall = false;
            } else if (
                !newNode.isStart &&
                !newNode.isFinish &&
                !ismovingstart
            ) {
                if (!newNode.isWall && newNode.weight === 1) {
                    newNode.isWall = true;
                }
            }
            newGrid[row][col] = newNode;
            setgrid(newGrid);
        } else {
            const newGrid = grid.slice();
            const node = newGrid[row][col];
            const newNode = {
                ...node,
            };
            if (newNode.weight > 1 && newNode.weight === weight) {
                newNode.weight = 1;
            } else if (
                !newNode.isStart &&
                !newNode.isFinish &&
                !ismovingstart &&
                !newNode.isWall
            ) {
                newNode.weight = weight;
            }
            newGrid[row][col] = newNode;
            setgrid(newGrid);
        }
    };

    const animateshortestpath = (nodesinpath) => {
        for (let i = 0; i < nodesinpath.length; i++) {
            setTimeout(() => {
                if (i < nodesinpath.length - 1) {
                    const node = nodesinpath[i];
                    const nextnode = nodesinpath[i + 1];
                    if (nextnode[0] == node[0] + 1) {
                        document.getElementById(
                            `node-${node[0]}-${node[1]}`
                        ).className = `${[
                            node_classes.nodepathdown,
                            node_classes.node,
                        ].join(" ")}`;
                    } else if (nextnode[0] == node[0] - 1) {
                        document.getElementById(
                            `node-${node[0]}-${node[1]}`
                        ).className = `${[
                            node_classes.nodepathup,
                            node_classes.node,
                        ].join(" ")}`;
                    } else if (nextnode[1] == node[1] + 1) {
                        document.getElementById(
                            `node-${node[0]}-${node[1]}`
                        ).className = `${[
                            node_classes.nodepathright,
                            node_classes.node,
                        ].join(" ")}`;
                    } else if (nextnode[1] == node[1] - 1) {
                        document.getElementById(
                            `node-${node[0]}-${node[1]}`
                        ).className = `${[
                            node_classes.nodepathleft,
                            node_classes.node,
                        ].join(" ")}`;
                    }
                }
            }, 50 * i);
        }
    };

    const visualizebfs = () => {
        const [nodevisinorder, nodesinpath] = BFS(startNode, finishNode, grid);
        for (let i = 0; i < nodevisinorder.length; i++) {
            if (i == nodevisinorder.length - 1) {
                setTimeout(() => {
                    animateshortestpath(nodesinpath);
                }, 10 * i);
                return;
            } else {
                setTimeout(() => {
                    const node = nodevisinorder[i];
                    document
                        .getElementById(`node-${node[0]}-${node[1]}`)
                        .classList.add(node_classes.nodevisited);
                }, 10 * i);
            }
        }
    };

    const visulaizedfs = () => {
        console.log("hi");
        const [nodevisinorder, nodesinpath] = DFS(grid, startNode, finishNode);
        console.log(nodevisinorder);
        for (let i = 0; i < nodevisinorder.length; i++) {
            if (i == nodevisinorder.length - 1) {
                setTimeout(() => {
                    animateshortestpath(nodesinpath);
                }, 10 * i);
                return;
            } else {
                setTimeout(() => {
                    const node = nodevisinorder[i];
                    const nextnode = nodevisinorder[i + 1];
                    const nodeel = document.getElementById(
                        `node-${node[0]}-${node[1]}`
                    );
                    nodeel.classList.remove(node_classes.nodevisited);
                    void nodeel.offsetWidth;
                    nodeel.classList.add(node_classes.nodevisited);
                }, 10 * i);
            }
        }
    };

    const visulaizedijsktra = () => {
        const [nodevisinorder, nodesinpath] = dijstra(
            grid,
            startNode,
            finishNode
        );
        for (let i = 0; i < nodevisinorder.length; i++) {
            if (i == nodevisinorder.length - 1) {
                setTimeout(() => {
                    animateshortestpath(nodesinpath);
                }, 10 * i);
                return;
            } else {
                setTimeout(() => {
                    const node = nodevisinorder[i];
                    const nextnode = nodevisinorder[i + 1];
                    const nodeel = document.getElementById(
                        `node-${node[0]}-${node[1]}`
                    );
                    nodeel.classList.remove(node_classes.nodevisited);
                    void nodeel.offsetWidth;
                    nodeel.classList.add(node_classes.nodevisited);
                }, 10 * i);
            }
        }
    };

    const creategrid = () => {
        const array = [];
        for (let i = 0; i < 27; i++) {
            const a = [];
            for (let j = 0; j < 40; j++) {
                const node = createNode(i, j);
                a.push(node);
            }
            array.push(a);
        }
        setgrid(array);
    };

    useEffect(() => {
        creategrid();
    }, []);

    const resetgrid = () => {
        const highestId = window.setTimeout(() => {
            for (let i = highestId; i >= 0; i--) {
                window.clearInterval(i);
            }
        }, 0);
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (i == finishNode[0] && j == finishNode[1]) {
                    document.getElementById(
                        `node-${i}-${j}`
                    ).className = `${node_classes.node} ${node_classes.finish}`;
                } else if (i == startNode[0] && j == startNode[1]) {
                    document.getElementById(
                        `node-${i}-${j}`
                    ).className = `${node_classes.node} ${node_classes.start}`;
                } else {
                    document.getElementById(
                        `node-${i}-${j}`
                    ).className = `${node_classes.node}`;
                }
            }
        }
        creategrid();
    };

    const movestart = (nr, nc) => {
        changewall(nr, nc, true);
        setstartNode([nr, nc]);
    };

    return (
        <div className={classes.container}>
            <Header></Header>
            <div className={classes.midsection}>
                <SideNav
                    addingweight={addingweight}
                    changeaddweight={changeaddweight}
                    changespeed={changeSpeedHandler}
                    startalgo={startalgo}
                    changeAlgo={changeAlgo}
                    resetgrid={resetgrid}
                    changeweight={changeweight}
                ></SideNav>
                <Grid
                    grid={grid}
                    startNode={startNode}
                    finishNode={finishNode}
                    handleMouseDown={handleMouseDown}
                    handleMouseUp={handleMouseUp}
                    handleMouseEnter={handleMouseEnter}
                ></Grid>
                <AlgoBox algo={algo}></AlgoBox>
            </div>
        </div>
    );
}
