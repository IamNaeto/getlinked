import Header from "./components/header";
import Hero from "./components/hero";
import TwinklingStars from "./components/twinklingstars";
import Overview from "./components/overview";
import Rules from "./components/rules";
import Criteria from "./components/criteria";
import FAQs from "./components/faq";

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
    </main>
   );
}
 
export default App;