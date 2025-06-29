import react from 'react';
import { Section1 } from './sections/section1'
import { Header } from '../components/header-nos';
import { Footer } from '../components/footer';
export default function ShopPage() {
    return (
      <div className="bg-[rgb(251,251,239)]">
        <Header />
        <Section1 />
        <Footer />
        {/* You can add more sections here as needed */}
      </div>
    );
} 