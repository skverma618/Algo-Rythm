import React from "react";
import { useState } from "react";
import classes from "./SideNav.module.css";
import SlideStart from "./SpeedSlider.js";

export default function SideNav({ startalgo, resetgrid, changesize }) {
    const [algo, setAlgo] = useState();

    const algoHandler = (event) => {
        setAlgo(event.target.value);
    };
    return (
        <div className={classes.sidenav}>
            <div className={classes.top}>
                <div className={classes.navs}>
                    <div className={classes.algoSelect}>
                        <div className={classes.start_stop}>
                            <div>
                                <button
                                    className={classes.visulize_btn}
                                    onClick={() => {
                                        startalgo();
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
