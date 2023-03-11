import React from "react";
import { useState } from "react";
import classes from "./SideNav.module.css";
import SlideStart from "./SpeedSlider.js";

export default function SideNav({ clickHandler, resetGrid }) {
    return (
        <div className={classes.sidenav}>
            <div className={classes.top}>
                <div className={classes.navs}>
                    <div className={classes.algoSelect}>
                        <div className={classes.start_stop}>
                            <div>
                                <button
                                    className={classes.visulize_btn}
                                    onClick={clickHandler}
                                >
                                    Start
                                </button>
                            </div>
                            <div>
                                <button
                                    className={classes.reset_btn}
                                    onClick={() => {
                                        resetGrid();
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
                            <SlideStart></SlideStart>
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
