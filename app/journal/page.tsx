import React from "react";
import { Header } from "../components/header-nos";
import { Section1 } from "./sections/section1";
import { Footer } from "../components/footer";
export default function JournalPage() {
    return (
       <div className="bg-[rgb(251,251,239)]">
<Header />
<Section1 />
<Footer />
       </div>
    );
}