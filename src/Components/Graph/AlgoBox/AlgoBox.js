import React, { useState, useEffect } from "react";
import ColResize from "../ColResize";
import classes from "./AlgoBox.module.css";
import dots from "../../../images/dots2.png";
export default function AlgoBox() {
    const [originalWidth, setoriginalwidth] = useState(0);
    const [originalx, setoriginalx] = useState(0);

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
        if (width > 258) {
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
                    <div className={classes.algo_head}>Given ALGORITHM</div>
                    <div className={classes.algo_desc}>
                        <p>
                            {  `void BFS(int n){  
                                boolean nodes[] = new boolean[node];        
                                int a = 0;  
                                nodes[n]=true;                    
                                que.add(n);      
                                while (que.size() != 0)  
                                {  
                                    n = que.poll();        
                                    System.out.print(n+" ");    
                                    for (int i = 0; i < adj[n].size(); i++)  
                                    {  
                                        a = adj[n].get(i);  
                                        if (!nodes[a])      
                                        {  
                                            nodes[a] = true;  
                                            que.add(a);  
                                        }  
                                    }    
                                }  
                            }  `}
                        </p>
                    </div>
                    <div className={classes.algo_lang}>
                        <button>JAVA</button>
                        <button>C++</button>
                    </div>
                </div>
            </div>
        </>
    );
}
