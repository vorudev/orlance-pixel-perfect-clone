import React from "react";
import { Section1 } from "./section1";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Section2 } from "./section2";
import { Section3Smart } from "./section3";
import { Section4 } from "./section4";
export default function Store() {
    return ( 
<div className="bg-[rgb(251,251,239)]">
<Header />
<Section1 />
<Section2 />
<Section3Smart/>
<Section4 />
<Footer />
</div>
    );
}