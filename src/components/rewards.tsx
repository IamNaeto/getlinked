const Rewards = () => {
    return ( 
        <main className="relative px-[5%] py-[150px] bg-darkpurple border-b border-1 border-gray-600 grid grid-cols-1 overflow-hidden" id="rewards">
            <section className="relative z-10 flex items-end justify-end">
                <div className="w-full lg:w-[50%]">
                    <h1 className="w-full text-[28px] md:text-4xl text-white font-bold text-center mb-0 md:mb-3  lg:text-left" data-aos="fade-down">Prizes and</h1>
                    <h1 className="w-full text-[28px] md:text-4xl text-purple font-bold text-center  mb-0 md:mb-3 lg:text-left" data-aos="fade-down">Rewards</h1>
                    <p className="text-lg text-white font-medium font-mon leading-loose text-center lg:text-left w-full lg:w-[60%]" data-aos="fade-down">Highlight of the prizes or rewards for winners and for participants.</p>
                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center mt-[50px] lg:mt-[100px]">
                <div className="flex items-center md:items-start justify-center md:justify-start">
                    <img src="./img/prize.png" alt="" className="dangling-picture relative z-10" />
                </div>

                <div className="grid grid-cols-3 gap-2 md:gap-4 mt-[150px] md:mt-[200px] lg:mt-0">
                    <div className="relative z-10 max-h-[180px] sm:max-h-[200px] md:max-h-[250px] flex flex-col items-center justify-end px-5 py-5 md:py-10 silver rounded-xl border-2 border-purple">
                        <img src="./img/silver_medal.png" alt="" className="absolute top-[-70px] md:top-[-100px]"/>

                        <h1 className="text-lg sm:text-xl md:text-4xl text-white font-bold font-mon text-center" data-aos="fade-down" >2nd</h1>
                        <p className="text[16px] sm:text-lg md:text-2xl font-medium text-white font-mon text-center my-2" data-aos="fade-down" >Runner</p>
                        <h1 className="text-lg sm:text-xl md:text-3xl text-purple font-bold font-mon text-center" data-aos="fade-down" >N300,000</h1>
                    </div>

                    <div className="relative z-10 min-h-[200px] sm:min-h-[220px] md:min-h-[280px] flex flex-col items-center justify-end px-5 py-5 md:py-10 gold rounded-xl border-2 border-purpleblue">
                        <img src="./img/gold_medal.png" alt="" className="absolute top-[-70px] md:top-[-150px]"/>

                        <h1 className="text-lg sm:text-xl md:text-4xl text-white font-bold font-mon text-center" data-aos="fade-down" >1st</h1>
                        <p className="text[16px] sm:text-lg md:text-2xl font-medium text-white font-mon text-center mt-2 mb-4 md:mb-6" data-aos="fade-down" >Runner</p>
                        <h1 className="text-lg sm:text-xl md:text-3xl text-purpleblue font-bold font-mon text-center" data-aos="fade-down" >N400,000</h1>
                    </div>

                    <div className="relative z-10 max-h-[180px] sm:max-h-[200px] md:max-h-[250px] flex flex-col items-center justify-end px-5 py-5 md:py-10 bronze rounded-xl border-2 border-purple">
                        <img src="./img/bronze_medal.png" alt="" className="absolute top-[-70px] md:top-[-100px]"/>

                        <h1 className="text-lg sm:text-xl md:text-4xl text-white font-bold font-mon text-center" data-aos="fade-down">3rd</h1>
                        <p className="text[16px] sm:text-lg md:text-2xl font-medium text-white font-mon text-center my-2" data-aos="fade-down">Runner</p>
                        <h1 className="text-lg sm:text-xl md:text-3xl text-purple font-bold font-mon text-center" data-aos="fade-down">N150,000</h1>
                    </div>
                </div>

                <img src="./img/hero-purple-lens.png" alt="" className="absolute top-[500px] lg:top-[20px] lg:right-[-300px] right-[-200px] z-10 w-50 opacity-70"/>
                <img src="./img/hero-purple-lens-left.png" alt="" className="absolute top-[50px] lg:top-[150px] left-[-100px] z-0 w-50 opacity-70"/>

                <img src="./img/whitestar.png" alt="" className="absolute top-[300px] right-[500px] animate-pulse w-4"/>
                <img src="./img/greystar.png" alt="" className="absolute bottom-[350px] left-[150px] animate-pulse w-4"/>

                <img src="./img/litepurplestar.png" alt="" className="absolute top-[250px] left-[200px] animate-pulse w-4"/>
                <img src="./img/purplestar.png" alt="" className="absolute bottom-[200px] right-[100px] animate-pulse w-4"/>
            </section>
        </main>
     );
}
 
export default Rewards;