import Header from "./components/header";
import Hero from "./components/hero";
import TwinklingStars from "./components/twinklingstars";
import Overview from "./components/overview";
import Rules from "./components/rules";
import Criteria from "./components/criteria";
import FAQs from "./components/faq";
import Timeline from "./components/timeline";
import Rewards from "./components/rewards";
import Partners from "./components/partners";

const App = () => {
  return ( 
    <main>
        <TwinklingStars numStars={200} />
        <Header />
        <Hero />
        <Overview />
        <Rules />
        <Criteria />
        <FAQs />
        <Timeline />
        <Rewards />
        <Partners />
    </main>
   );
}
 
export default App;