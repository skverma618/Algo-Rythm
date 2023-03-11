import React from "react";
import { useState } from "react";
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
    const [algo, setAlgo] = useState();

    const algoHandler = (event) => {
        setAlgo(event.target.value);
        changealgo(event.target.value);
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
                                <MenuItem value="merge">Merge Sort</MenuItem>
                                <MenuItem value="quick">Quick Sort</MenuItem>
                                <MenuItem value="bubble">Bubble Sort</MenuItem>
                                <MenuItem value="selection">
                                    Selection Sort
                                </MenuItem>
                                <MenuItem value="insertion">
                                    Insertion Sort
                                </MenuItem>
                            </Select>
                            {/* </FormControl> */}
                        </div>
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
                                        resetarray();
                                    }}
                                >
                                    reset
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={classes.speed}>
                        <div>size</div>
                        <div>
                            <SlideStart changesize={changesize}></SlideStart>
                            {/* <Slider aria-label="speed" defaultValue={50} /> */}
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className={classes.bottom}></div>
        </div>
    );
}
