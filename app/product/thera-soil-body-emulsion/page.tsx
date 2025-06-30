import React from "react";
import { ImageSlider } from "./slider";
import { Header } from "@/app/components/header-shop";
import { Section1Item  } from "./section1";
import { Section1Full  } from "./section1-included";
import { Section2Item } from "./section2";
import { Section3Item } from "./section3";
import { Cards } from "../lumen-toning-serum/cardsitems";
import { Footer } from "@/app/components/footer";

export default function LumenToningSerum() {

    return (
       <div className="bg-[rgb(251,251,239)]">
<Header />
<Section1Full />
<Section2Item />
<Section3Item />
<Cards />
<Footer />

       </div>
    );
}