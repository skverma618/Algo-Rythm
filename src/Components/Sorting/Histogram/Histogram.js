import { margin } from "@mui/system";
import React, { useState, useEffect } from "react";
import classes from "./Histogram.module.css";
const Histogram = ({ array }) => {
    return (
        <div className={classes.arraycontainer} id="array-container">
            {array.map((value, idx) => {
                let margin, width;

                if(array.length <= 15){
                    margin = 10;
                    width = 30;
                }else if(array.length <= 30){
                    margin = 5;
                    width = 20;
                }else if(array.length <= 50){
                    width = 10;
                    margin = 5;
                }else if(array.length <= 70){
                    width = 8;
                    margin = 3;
                }else if(array.length <= 90){
                    width = 6;
                    margin = 2;
                }else if(array.length <= 110){
                    width = 5;
                    margin = 2;
                }else if(array.length <= 125){
                    width = 4;
                    margin = 2;
                }else{
                    width = 5;
                    margin = 1.2;
                }

                return (
                    <div
                        className={classes.arraybar}
                        key={idx}
                        style={{
                            height: `${value}px`,
                            width: `${width}px`,
                            margin: `0 ${margin}px`,
                        }}
                    ></div>
                );
            })}
        </div>
    );
};

export default Histogram;
