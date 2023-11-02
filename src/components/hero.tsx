import CountdownTimer from "./time";
const Hero = () => {
    return ( 
        <main className="relative w-full bg-darkpurple overflow-hidden pt-[130px] bg-matrix bg-cover bg-right bg-no-repeat border-b border-1 border-gray-600" id="home">
            
            <div className="flex flex-col items-end justify-end">
                <h4 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white font-mon font-semibold z-10 pr-3 md:pr-[5%]">Igniting a Revolution in HR Innovation</h4>
                <img src="./img/stroke.png" alt=""  className="pr-[5%] w-30 md:w-50"/>
            </div>
            <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center ml-0 md:ml-[5%] relative">
                <div className="z-10 flex flex-col items-center lg:items-start lg:text-left md:text-center">                       
                        <div className="flex flex-col">
                            <div className="flex items-end justify-end w-full pr-[3%] lg:pr-[5%]">
                                <img src="./img/bulb.png" alt="" className="w-10 md:w-50 dangling-picture"/>
                            </div>
                            <h1 className="text-white font-extrabold text-5xl md:text-6xl lg:text-5xl xl:text-7xl relative z-1">getlinked Tech</h1>
                        </div>
                        <div className="flex">
                            <h1 className="text-white font-extrabold text-[40px] md:text-6xl lg:text-5xl xl:text-7xl relative z-1">Hackathon <span className="text-purple">1.0</span></h1>
                            <img src="./img/chainexplosion.png" alt="" className="w-20 md:w-50"/>
                        </div>
                        <p className="text-xl md:text-2xl lg:text-left text-center text-white font-medium w-[95%] lg:w-[80%] mb-10 px-[2%] lg:px-0">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                    
                        <a href="" className="btn py-5 px-10 text-white text-xl font-medium">Register</a>

                        <CountdownTimer />
                </div>

                <div className="relative mt-10 lg:mt-0">
                    <img src="./img/hero-img.png" alt="" className="relative z-10"/>
                    <img src="./img/globe.png" alt="" className="globe absolute top-0 z-10"/>
                </div>

                <img src="./img/hero-purple-lens.png" alt="" className="absolute top-400 lg:top-[-200px] right-100 lg:right-[-100px] z-10 w-50 opacity-70"/>
                <img src="./img/hero-purple-lens-left.png" alt="" className="absolute top-[-300px] lg:top-[-400px] left-[-200px] z-0 w-50 opacity-70"/>

                <img src="./img/whitestar.png" alt="" className="absolute top-10 left-20 z-0 w-50 animate-pulse"/>
                <img src="./img/greystar.png" alt="" className="absolute top-50 lg:top-20 right-10 lg:right-100 z-0 w-50 animate-pulse"/>
                <img src="./img/greystar.png" alt="" className="absolute bottom-40 right-100 z-0 w-50 animate-pulse"/>

            </section>

        </main>
     );
}
 
export default Hero;