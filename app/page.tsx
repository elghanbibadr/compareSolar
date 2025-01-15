
import BrandsWeWorkWith from "./componenets/BrandsWeWorkWith";
import EnergySavingsBenefits from "./componenets/EnergySavingsBenefits";
import Hero from "./componenets/Hero";
import OurServices from "./componenets/OurServices";
import Services from "./componenets/Services";
import Solar101 from "./componenets/Solar101";
import WhyChoseUs from "./componenets/WhyChoseUs";




export default function Home() {
  return (
    <>
    <Hero/>
    <BrandsWeWorkWith />
    <OurServices />
    <WhyChoseUs />
    <Services/>
    <EnergySavingsBenefits/>
    <Solar101/>

    </>
  );
}
