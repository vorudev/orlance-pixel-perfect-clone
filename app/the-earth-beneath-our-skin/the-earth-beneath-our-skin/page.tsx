import React from "react";
import { Header } from "@/app/components/header-shop";
import { Footer } from "@/app/components/footer";
import { Section1grid } from "./section1";
import { Section2grid } from "./section2";
import { Section3grid } from "./section3";
export default function Page() {
    return ( 
        <div className="bg-[rgb(251,251,239)]">
<Header />
<Section1grid />
<Section2grid />
<Section3grid />
<Footer />
        </div>
    );
}