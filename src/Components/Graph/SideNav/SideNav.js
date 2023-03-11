import React from "react";
import { useState } from "react";
import classes from "./SideNav.module.css";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import destination from "../../../images/destination.svg";
import wall from "../../../images/wall2.jpg";
import weight from "../../../images/weight2.png";
import visited from "../../../images/destination.svg";
import target from "../../../images/target2.webp";
import SlideStart from "./SpeedSlider.js";
import path from "../../../images/wall2.jpg";
export default function SideNav({
    startalgo,
    changeAlgo,
    resetgrid,
    changespeed,
    addingweight,
    changeaddweight,
    changeweight,
}) {
    const [algo, setAlgo] = useState();

    let btn = null;
    if (algo === "dijkstra") {
        if (addingweight) {
            btn = (
                <div style={{ marginBottom: "30px" }}>
                    <button
                        onClick={() => {
                            changeaddweight(false);
                        }}
                        className={classes.visulize_btn}
                    >
                        DONE
                    </button>
                </div>
            );
        } else {
            btn = (
                <div style={{ marginBottom: "30px" }}>
                    <button
                        onClick={() => {
                            changeaddweight(true);
                        }}
                        className={classes.visulize_btn}
                    >
                        ADD WEIGHT
                    </button>
                </div>
            );
        }
    }

    const algoHandler = (event) => {
        setAlgo(event.target.value);
        changeAlgo(event.target.value);
    };
    return (
        <div className={classes.sidenav}>
            <div className={classes.top}>
                <div className={classes.navs}>
                    <div className={classes.algoSelect}>
                        <div>
                            <Select
                                value={algo ?? "select algo"}
                                onChange={algoHandler}
                                style={{
                                    width: "240px",
                                    background: "#fff",
                                    borderRadius: "13px",
                                    padding: "0px",
                                    margin: "0px",
                                    boxShadow:
                                        "inset 10px 3.6px 8px rgba(0, 0, 0, 0.2)",
                                    outline: "none",
                                }}
                            >
                                <MenuItem value="select algo">
                                    SELECT ALGO
                                </MenuItem>
                                <MenuItem value="bfs">BFS</MenuItem>
                                <MenuItem value="dfs">DFS</MenuItem>
                                <MenuItem value="dijkstra">DIJKSTRA</MenuItem>
                            </Select>
                            {/* </FormControl> */}
                        </div>
                        {btn}
                        <div className={classes.start_stop}>
                            <div>
                                <button
                                    className={classes.visulize_btn}
                                    onClick={() => {
                                        startalgo(algo);
                                    }}
                                >
                                    Start
                                </button>
                            </div>
                            <div>
                                <button
                                    className={classes.reset_btn}
                                    onClick={() => {
                                        resetgrid();
                                    }}
                                >
                                    reset
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={classes.speed}>
                        <div>Speed</div>
                        <div>
                            <SlideStart
                                target="speed"
                                chnageSpeed={changespeed}
                                changeweight={changeweight}
                            ></SlideStart>
                        </div>
                    </div>
                    {addingweight ? (
                        <div className={classes.speed}>
                            <div>Weight</div>
                            <div>
                                <SlideStart
                                    target="weight"
                                    chnageSpeed={changespeed}
                                    changeweight={changeweight}
                                ></SlideStart>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
            <div className={classes.mid}>
                <div className={classes.middiv}>
                    <div>
                        <div>
                            <img src={destination}></img>
                        </div>
                        <div>Start Node</div>
                    </div>
                    <div>
                        <div>
                            <img src={target}></img>
                        </div>
                        <div>Target Node</div>
                    </div>
                    <div>
                        <div>
                            <img src={weight}></img>
                        </div>
                        <div>weight Node</div>
                    </div>
                    <div>
                        <div>
                            <img src={wall}></img>
                        </div>
                        <div>wall Node</div>
                    </div>
                    <div>
                        <div>
                            <img src={visited}></img>
                        </div>
                        <div>visited Node</div>
                    </div>
                    <div>
                        <div>
                            <img src={path}></img>
                        </div>
                        <div>path discovered</div>
                    </div>
                </div>
            </div>
            <div className={classes.bottom}></div>
        </div>
    );
}
