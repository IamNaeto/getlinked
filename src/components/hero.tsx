import CountdownTimer from "./time";
const Hero = () => {
    return ( 
        <main className="h-[100vh] w-full bg-darkpurple overflow-x-hidden pt-[120px] bg-matrix bg-cover bg-right bg-no-repeat">
            
            <div className="flex flex-col items-end justify-end">
                <h4 className="text-4xl text-white font-mon font-semibold z-10 pr-[5%]">Igniting a Revolution in HR Innovation</h4>
                <img src="./img/stroke.png" alt=""  className="pr-[5%] w-50"/>
            </div>
            <section className="flex items-center justify-between ml-[5%] relative">
                <div className="z-1">                       
                        <div className="flex flex-col">
                            <div className="flex items-end justify-end w-[55%]">
                                <img src="./img/bulb.png" alt=""/>
                            </div>
                            <h1 className="text-white font-extrabold text-7xl relative z-1">getlinked Tech</h1>
                        </div>
                        <div className="flex">
                            <h1 className="text-white font-extrabold text-7xl relative z-1">Hackathon <span className="text-purple">1.0</span></h1>
                            <img src="./img/chainexplosion.png" alt="" className="w-50"/>
                        </div>
                        <p className="text-2xl text-white font-medium w-[70%] mb-10">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                    
                        <a href="" className="btn py-5 px-10 text-white text-xl">Register</a>

                        <CountdownTimer />
                </div>

                <div className="relative">
                    <img src="./img/hero-img.png" alt="" className="relative z-5"/>
                    <img src="./img/globe.png" alt="" className="globe absolute top-0 "/>
                </div>

                <img src="./img/hero-purple-lens.png" alt="" className="absolute top-[-200px] right-[-100px] z-0 w-50 opacity-70"/>
                <img src="./img/hero-purple-lens-left.png" alt="" className="absolute top-[-400px] left-[-200px] z-0 w-50 opacity-70"/>

            </section>

        </main>
     );
}
 
export default Hero;