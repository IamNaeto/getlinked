import Header from "../components/header";
import ContactUs from "../components/contact";
import TwinklingStars from "../components/twinklingstars";
const Contact = () => {
    return ( 
        <main>
            <TwinklingStars numStars={200} />
            <Header />
            <ContactUs />

        </main>
     );
}
 
export default Contact;