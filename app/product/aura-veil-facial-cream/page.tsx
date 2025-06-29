import React from "react";
import { Header } from "@/app/components/header-shop";
import { Section1Full } from "./section1-included";
import { Section2Item  } from "./section2";
import { Footer } from "@/app/components/footer";
import { Section3Item } from "./section3";
import { CardsItem } from "../lumen-toning-serum/cardsitems";
export default function AuraVeilFacialCream() {
    return (
        <div className="bg-[rgb(251,251,239)]">
<Header />
<Section1Full />
<Section2Item />
<Section3Item />
<CardsItem />
<Footer />


        </div>
    );
}