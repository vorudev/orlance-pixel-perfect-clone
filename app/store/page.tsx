import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Section1 } from "./section1";
import { Section2 } from "./section2";
export default function Store() {
    return ( 
        <div className="bg-[rgb(251,251,239)]">
<Header />
<Section1 />
<Section2 />
<Footer />

        </div>
    );
}