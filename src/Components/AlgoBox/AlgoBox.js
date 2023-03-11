import React, { useState, useEffect } from "react";
import ColResize from "../ColResize";
import classes from "./AlgoBox.module.css";
import dots from "../../images/dots2.png";
import { BFS } from "./Algorithms/BFS";
export default function AlgoBox({ algo }) {
    const [originalWidth, setoriginalwidth] = useState(0);
    const [originalx, setoriginalx] = useState(0);
    const [language, setLanguage] = useState("java");
    const languageHandler = (language) => {
        setLanguage(language);
    };
    useEffect(() => {
        const el = document.getElementById("algo-container");
        const ow = parseFloat(
            getComputedStyle(el, null)
                .getPropertyValue("width")
                .replace("px", "")
        );
        const ox = el.getBoundingClientRect().left;
        setoriginalwidth(ow);
        setoriginalx(ox);
    }, []);

    const handleMouseDown = (e) => {
        e.preventDefault();
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResize);
    };

    const resize = (e) => {
        const el = document.getElementById("algo-container");
        console.log(el);
        const width = originalWidth - (e.pageX - originalx);
        if (width > 250) {
            el.style.width = width + "px";
            el.style.left = originalx + (e.pageX - originalx) + "px";
        }
    };

    const stopResize = () => {
        window.removeEventListener("mousemove", resize);
    };

    return (
        <>
            <div className={classes.container} id="algo-container">
                <div
                    className={classes.outer}
                    id="resizer"
                    onMouseDown={handleMouseDown}
                >
                    <div className={classes.col_resize_images}>
                        <img src={dots}></img>
                    </div>
                    <div className={classes.inner}></div>
                </div>
                <div className={classes.algobox}>
                    <div className={classes.algo_head}>{algo}</div>
                    <div className={classes.algo_desc}>
                        <BFS></BFS>
                    </div>
                    <div className={classes.algo_lang}>
                        <button
                            className={
                                language === "java"
                                    ? classes.active_lang
                                    : classes.inactive_lang
                            }
                            onClick={() => {
                                languageHandler("java");
                            }}
                        >
                            JAVA
                        </button>
                        <button
                            className={
                                language === "cpp"
                                    ? classes.active_lang
                                    : classes.inactive_lang
                            }
                            onClick={() => {
                                languageHandler("cpp");
                            }}
                        >
                            C++
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
