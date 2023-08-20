import ChooseByCategory from "@/components/ChooseByCategory/ChooseByCategory";
import FlashSale from "@/components/FlashSale/FlashSale";
import Hero from "@/components/Hero/Hero";
import PopularProducts from "@/components/PopularProducts/PopularProducts";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <FlashSale />
      <ChooseByCategory />
      <PopularProducts />
      <Services/>
    </main>
  );
}
