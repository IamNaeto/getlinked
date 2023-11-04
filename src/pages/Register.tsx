import Header from "../components/header";
import RegisterForm from "../components/register";
import TwinklingStars from "../components/twinklingstars";

const Register = () => {
    return ( 
        <main>
            <TwinklingStars numStars={200} />
            <Header />
            <RegisterForm />
        </main>
     );
}
 
export default Register;