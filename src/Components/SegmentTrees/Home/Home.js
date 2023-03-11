import React, { useState, useEffect } from "react";
import Header from "../../Graph/Header/Header";
import SideNav from "../SideNav/SideNav";
import AlgoBox from "../../AlgoBox/AlgoBox";
import classes from "./Home.module.css";
import { valueToPercent } from "@mui/base";
import { style } from "@mui/system";

const Home = () => {
    const drawcircle = (ctx, x, y) => {
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.font = "20px sans-serif";
        ctx.fillText("100", x, y);
    };

    const createtreehelper = (cur, nl, nr, temptree, lines) => {
        if (nl == nr) {
            temptree[cur].x = (nl + 1) * 100;
            temptree[cur].y = 500;
            return 1;
        }
        let nm = Math.floor((nl + nr) / 2);
        createtreehelper(2 * cur + 1, nl, nm, temptree, lines);
        createtreehelper(2 * cur + 2, nm + 1, nr, temptree, lines);

        temptree[cur].x =
            (temptree[2 * cur + 1].x + temptree[2 * cur + 2].x) / 2;
        temptree[cur].y = temptree[2 * cur + 1].y - 100;
        lines.push([temptree[cur], temptree[2 * cur + 1]]);
        lines.push([temptree[cur], temptree[2 * cur + 2]]);
    };

    const createtree = (n) => {
        const temptree = [];
        const lines = [];
        for (let i = 0; i < 4 * n; i++) {
            temptree.push({ x: -1, y: -1 });
        }
        createtreehelper(0, 0, n - 1, temptree, lines);
        return [temptree, lines];
    };

    useEffect(() => {
        let [tree, lines] = createtree(8);
        console.log(tree);
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        for (let i = 0; i < tree.length; i++) {
            let x = tree[i].x,
                y = tree[i].y;
            if (x != -1 && y != -1) {
                console.log("ho");
                drawcircle(ctx, x, y);
            }
        }
        for (let i = 0; i < lines.length; i++) {
            let [node1, node2] = lines[i];
            ctx.beginPath();
            ctx.moveTo(node1.x, node1.y + 25);
            ctx.lineTo(node2.x, node2.y - 25);
            ctx.stroke();
        }
    }, []);

    return (
        <div className={classes.container}>
            <Header></Header>
            <div className={classes.midsection}>
                <SideNav></SideNav>
                <div>
                    <canvas
                        width={950}
                        height={600}
                        id="myCanvas"
                        style={{ border: "1px solid black" }}
                    ></canvas>
                </div>
                <AlgoBox algo="segement trees"></AlgoBox>
            </div>
        </div>
    );
};

export default Home;
