import { Link } from "react-router-dom";

import CountdownTimer from "./time";
const Hero = () => {
    return (
        <main className="relative z-6 grid items-center w-full bg-darkpurple overflow-hidden pt-[90px] bg-matrix bg-cover bg-right bg-no-repeat border-b border-1 border-gray-600" id="home">

            <div className="flex flex-col items-end justify-end">
                <h4 className="text-[16px] md:text-2xl text-white font-mon font-semibold z-10 pr-3 md:pr-[5%]" data-aos="fade-down">Igniting a Revolution in HR Innovation</h4>
                <img src="./img/stroke.png" alt="" className="pr-[5%] w-[100px] md:w-[250px]" />
            </div>
            <section className="grid grid-cols-1 lg:grid-cols-2 ml-0 md:ml-[5%] relative z-16">
                <div className="relative z-10 flex flex-col items-center lg:items-start lg:text-left md:text-center">
                    <div className="flex flex-col">
                        <div className="flex items-end justify-end w-full pr-[3%] lg:pr-[5%]">
                            <img src="./img/bulb.png" alt="" className="w-10 md:w-50 dangling-picture" />
                        </div>
                        <h1 className="text-white font-extrabold text-4xl md:text-5xl relative z-1" data-aos="fade-down">getlinked Tech</h1>
                    </div>
                    <div className="flex mb-2 md:mb-5">
                        <h1 className="text-white font-extrabold text-4xl md:text-5xl relative z-1" data-aos="fade-down">Hackathon <span className="text-purple">1.0</span></h1>
                        <img src="./img/chainexplosion.png" alt="" className="w-20 md:w-50" />
                    </div>
                    <p className="text-[16px] md:text-[20px] lg:text-left text-center text-white font-medium w-[95%] lg:w-[65%] mb-4 px-[2%] lg:px-0" data-aos="fade-down">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>

                    <Link to="/register" className="btn py-3 px-10 text-white text-[16px] font-medium rounded-sm relative z-10" data-aos="fade-down">Register</Link>

                    <CountdownTimer />
                </div>

                <div className="relative mt-5 lg:mt-0">
                    <img src="./img/hero-img.png" alt="" className="relative z-5 z-10"/>
                    <img src="./img/globe.png" alt="" className="globe absolute top-0 z-5 z-10"/>
                </div>

                <img src="./img/hero-purple-lens.png" alt="" className="absolute top-[200px] lg:top-[-200px] right-100 lg:right-[-100px] w-50 opacity-70 z-0" />
                <img src="./img/hero-purple-lens-left.png" alt="" className="absolute top-[-100px] lg:top-[-400px] left-[-100px] lg:left-[-200px] z-0 w-50 opacity-70" />

                <img src="./img/whitestar.png" alt="" className="absolute top-5 left-20 z-0 w-4 animate-pulse" />
                <img src="./img/greystar.png" alt="" className="absolute top-50 lg:top-20 right-10 lg:right-100 z-0 w-4 animate-pulse" />
                <img src="./img/greystar.png" alt="" className="absolute bottom-40 right-100 z-0 w-4 animate-pulse" />

            </section>

        </main>
    );
}

export default Hero;