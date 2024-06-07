import Hero from "@/components/Hero/Hero";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="rubik">
      <div className="upper-deck">
        <p className="text">Leverage Edu Scholarship Worth ₹ 7,00,00,000</p> 
        <button className="upper-deck-button">Apply Now</button>
      </div>
      <Navbar />
      <Hero />
    </main>
  );
}
