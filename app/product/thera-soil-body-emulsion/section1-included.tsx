import React from "react";
import { Section1Item  } from "./section1";
import { ImageSlider } from "./slider";
export const Section1Full = () => {
    return ( 
        <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 w-full"> <ImageSlider /></div>
            <div className="lg:w-1/2 w-full"> <Section1Item /></div>
        </div>
    )
}