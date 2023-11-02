const Rewards = () => {
    return ( 
        <main className="relative px-[5%] py-[150px] bg-darkpurple border-b border-1 border-gray-600 grid grid-cols-1 overflow-hidden" id="timeline">
            <section className="flex items-end justify-end">
                <div className="w-full lg:w-[50%]">
                    <h1 className="w-full text-[28px] md:text-4xl text-white font-bold mb-3 text-center lg:text-left">Prizes and</h1>
                    <h1 className="w-full text-[28px] md:text-4xl text-purple font-bold mb-3 text-center lg:text-left">Rewards</h1>
                    <p className="text-lg text-white font-medium font-mon leading-loose text-center lg:text-left w-full lg:w-[60%]">Highlight of the prizes or rewards for winners and for participants.</p>
                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 items-center mt-[50px] lg:mt-[150px]">
                <div className="flex items-center md:items-start justify-center md:justify-start">
                    <img src="./img/prize.png" alt="" className="dangling-picture relative z-10" />
                </div>

                <div className="grid grid-cols-3 gap-2 md:gap-4 mt-[150px] md:mt-[200px] lg:mt-0">
                    <div className="relative z-10 max-h-[200px] md:max-h-[300px] flex flex-col items-center justify-end px-5 py-5 md:py-10 silver rounded-xl border-2 border-purple">
                        <img src="./img/silver_medal.png" alt="" className="absolute top-[-70px] md:top-[-100px]"/>

                        <h1 className="text-xl md:text-4xl text-white font-bold font-mon text-center">2nd</h1>
                        <p className="text-lg md:text-2xl font-medium text-white font-mon text-center my-2">Runner</p>
                        <h1 className="text-xl md:text-3xl text-purple font-bold font-mon text-center">N300,000</h1>
                    </div>

                    <div className="relative z-10 min-h-[220px] md:min-h-[350px] flex flex-col items-center justify-end px-5 py-5 md:py-10 gold rounded-xl border-2 border-purpleblue">
                        <img src="./img/gold_medal.png" alt="" className="absolute top-[-70px] md:top-[-150px]"/>

                        <h1 className="text-xl md:text-4xl text-white font-bold font-mon text-center">1st</h1>
                        <p className="text-lg md:text-2xl font-medium text-white font-mon text-center mt-2 mb-4 md:mb-6">Runner</p>
                        <h1 className="text-xl md:text-3xl text-purpleblue font-bold font-mon text-center">N400,000</h1>
                    </div>

                    <div className="relative z-10 max-h-[200px] md:max-h-[300px] flex flex-col items-center justify-end px-5 py-5 md:py-10 bronze rounded-xl border-2 border-purple">
                        <img src="./img/bronze_medal.png" alt="" className="absolute top-[-70px] md:top-[-100px]"/>

                        <h1 className="text-xl md:text-4xl text-white font-bold font-mon text-center">3rd</h1>
                        <p className="text-lg md:text-2xl font-medium text-white font-mon text-center my-2">Runner</p>
                        <h1 className="text-xl md:text-3xl text-purple font-bold font-mon text-center">N150,000</h1>
                    </div>
                </div>

                <img src="./img/hero-purple-lens.png" alt="" className="absolute top-[500px] lg:top-[20px] lg:right-[-300px] right-[-200px] z-10 w-50 opacity-70"/>
                <img src="./img/hero-purple-lens-left.png" alt="" className="absolute top-[50px] lg:top-[150px] left-[-100px] z-0 w-50 opacity-70"/>
            </section>
        </main>
     );
}
 
export default Rewards;