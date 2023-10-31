import Header from "./components/header";
import Hero from "./components/hero";
import TwinklingStars from "./components/twinklingstars";

const App = () => {
  return ( 
    <main>
        <TwinklingStars numStars={200} />
        <Header />
        <Hero />
    </main>
   );
}
 
export default App;