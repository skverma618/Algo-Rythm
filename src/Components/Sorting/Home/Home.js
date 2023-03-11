import React, { useState, useEffect } from "react";
import Header from "../../Graph/Header/Header";
import SideNav from "../SideNav/SideNav";
import AlgoBox from "../../AlgoBox/AlgoBox";
import Histogram from "../Histogram/Histogram";
import { mergeSortAnimations } from "../SortingAlgorithms/mergesortanimations";
import { bubbleSortAnimaions } from "../SortingAlgorithms/bubblesortanimations";
import { quicksortanimations } from "../SortingAlgorithms/quicksortanimations";
import { selectionsortanimations } from "../SortingAlgorithms/selectionsortanimations";
import { insertionsortanimations } from "../SortingAlgorithms/insertionsortanimations";

import classes from "../../Graph/Home/Home.module.css";

const Home = () => {
    const [array, setarray] = useState([]);
    const [size, setsize] = useState(70);
    const [algo, setalgo] = useState("");

    const revertback = () => {
        const arrayBars = document.getElementById("array-container").childNodes;
        for (let i = 0; i < arrayBars.length; i++) {
            const barstyle = arrayBars[i].style;
            barstyle.backgroundColor = "turquoise";
        }
    };

    const changealgo = (newalgo) => {
        setalgo(newalgo);
    };

    const randintinterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const changesize = (e, newValue) => {
        console.log("size changed");
        resetarray(newValue);
        setsize(size);
    };

    const changecoloranimations = (arrayBars, color, i, animations) => {
        const baridx = animations[i][1];
        const barstyle = arrayBars[baridx].style;
        setTimeout(() => {
            barstyle.backgroundColor = color;
        }, i * 100);
    };

    const changetwobarcolor = (arrayBars, color, i, animations) => {
        const barOneIdx = animations[i][1];
        const barTwoIdx = animations[i][2];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
        }, i * 100);
    };

    const swapanimations = (arrayBars, i, animations) => {
        setTimeout(() => {
            const [is, barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] =
                animations[i];
            if (is) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                barOneStyle.height = `${barTwoHeight}px`;
                barTwoStyle.height = `${barOneHeight}px`;
            }
        }, i * 100);
    };

    const insertionsort = () => {
        const animations = insertionsortanimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars =
                document.getElementById("array-container").childNodes;
            if (animations[i][0] == 0) {
                changecoloranimations(arrayBars, "yellow", i, animations);
            } else if (animations[i][0] == 1) {
                changecoloranimations(arrayBars, "red", i, animations);
            } else if (animations[i][0] == 2) {
                swapanimations(arrayBars, i, animations);
            } else if (animations[i][0] == 3) {
                changecoloranimations(arrayBars, "turquoise", i, animations);
            }
        }
    };

    const selectionsort = () => {
        const animations = selectionsortanimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars =
                document.getElementById("array-container").childNodes;
            if (animations[i][0] == 0) {
                changecoloranimations(arrayBars, "yellow", i, animations);
            } else if (animations[i][0] == 1) {
                changecoloranimations(arrayBars, "green", i, animations);
            } else if (animations[i][0] == 2) {
                changecoloranimations(arrayBars, "turquoise", i, animations);
            } else if (animations[i][0] == 3) {
                changetwobarcolor(arrayBars, "red", i, animations);
            } else if (animations[i][0] == 4) {
                changetwobarcolor(arrayBars, "turquoise", i, animations);
            } else if (animations[i][0] == 5) {
                swapanimations(arrayBars, i, animations);
            } else {
                changecoloranimations(arrayBars, "violet", i, animations);
            }

            if (i == animations.length - 1) {
                setTimeout(() => {
                    revertback();
                }, (i + 1) * 105);
            }
        }
    };

    const mergesort = () => {
        const animations = mergeSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars =
                document.getElementById("array-container").childNodes;
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? "red" : "turquoise";
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 100);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 100);
            }
        }
    };

    const quicksort = () => {
        const animations = quicksortanimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars =
                document.getElementById("array-container").childNodes;
            if (animations[i][0] === 0) {
                changecoloranimations(arrayBars, "yellow", i, animations);
            } else if (animations[i][0] == 1) {
                changetwobarcolor(arrayBars, "green", i, animations);
            } else if (animations[i][0] == 2) {
                changetwobarcolor(arrayBars, "red", i, animations);
            } else if (animations[i][0] == 3) {
                swapanimations(arrayBars, i, animations);
            } else if (animations[i][0] == 4) {
                changetwobarcolor(arrayBars, "turquoise", i, animations);
            } else {
                changecoloranimations(arrayBars, "violet", i, animations);
            }

            if (i == animations.length - 1) {
                setTimeout(() => {
                    revertback();
                }, (i + 1) * 105);
            }
        }
    };

    const bubblesort = () => {
        const animations = bubbleSortAnimaions(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars =
                document.getElementById("array-container").childNodes;
            if (animations[i][0] === 0) {
                changetwobarcolor(arrayBars, "green", i, animations);
            } else if (animations[i][0] === 1) {
                changetwobarcolor(arrayBars, "turquoise", i, animations);
            } else if (animations[i][0] === 2) {
                changetwobarcolor(arrayBars, "red", i, animations);
            } else if (animations[i][0] === 3) {
                swapanimations(arrayBars, i, animations);
            } else if (animations[i][0] === 4) {
                changecoloranimations(arrayBars, "violet", i, animations);
            }

            if (i == animations.length - 1) {
                setTimeout(() => {
                    revertback();
                }, (i + 1) * 105);
            }
        }
    };

    const startalgo = (algo) => {
        if (algo === "merge") {
            mergesort();
        } else if (algo === "bubble") {
            bubblesort();
        } else if (algo === "quick") {
            quicksort();
        } else if (algo === "selection") {
            selectionsort();
        } else if (algo === "insertion") {
            insertionsort();
        }
    };

    useEffect(() => {
        resetarray(size);
    }, []);

    const resetarray = (sz) => {
        const highestId = window.setTimeout(() => {
            for (let i = highestId; i >= 0; i--) {
                window.clearInterval(i);
            }
        }, 0);
        const arrayBars = document.getElementById("array-container").childNodes;
        for (let i = 0; i < arrayBars.length; i++) {
            const barstyle = arrayBars[i].style;
            barstyle.backgroundColor = "turquoise";
        }
        const arr = [];
        for (let i = 0; i < sz; i++) {
            arr.push(randintinterval(5, 600));
        }
        setarray(arr);
    };

    return (
        <div className={classes.container}>
            <Header></Header>
            <div className={classes.midsection}>
                <SideNav
                    changealgo={changealgo}
                    resetarray={() => {
                        resetarray(size);
                    }}
                    startalgo={startalgo}
                    changesize={changesize}
                ></SideNav>
                <Histogram array={array} />
                <AlgoBox algo={algo}></AlgoBox>
            </div>
        </div>
    );
};

export default Home;
