const Partners = () => {
    return ( 
        <main className="relative px-[5%] py-[150px] bg-darkpurple border-b border-1 border-gray-600 grid grid-cols-1 items-center place-items-center overflow-hidden" id="timeline">
            <section className="relative z-10 w-full flex flex-col items-center justify-center mb-20">
                <h1 className="text-[28px] md:text-4xl text-white font-bold mb-3 text-center">Partners and Sponsors</h1>
                <p className="text-lg text-white font-medium font-mon leading-loose text-center w-full lg:w-[40%]">Getlinked Hackathon 1.0 is honored to have the following major 
companies as its partners and sponsors</p>
            </section>

            <section className="relative grid grid-cols-1 place-items-center border border-purple rounded-md p-5 lg:p-20 w-full lg:w-[80%]">
                <div className="grid grid-cols-3 items-center">
                    <div className="relative p-6 flex items-center justify-center border-r-[4px] border-b-[4px] border-b-purple border-r-purple">
                        <img src="./img/Liberty-Logo.png" alt="" className="relative z-10 transition-transform delay-300 slow-transition transform-gpu hover:scale-110"/>

                        <div className="absolute right-[-25px] bottom-[-20px] w-[40px] h-[40px] bg-darkpurple"></div>
                    </div>
                    <div className="p-6 flex items-center justify-center border-r-[4px] border-b-[4px] border-b-purple border-r-purple h-full">
                        <img src="./img/Liberty-Pay.png" alt="" className="relative z-10 transition-transform delay-300 slow-transition transform-gpu hover:scale-110"/>
                    </div>
                    <div className="p-6 flex items-center justify-center border-b-[4px] border-b-purple h-full">
                        <img src="./img/WinWise.png" alt="" className="relative z-10 transition-transform delay-300 slow-transition transform-gpu hover:scale-110"/>
                    </div>
                    <div className="p-6 flex items-center justify-center border-r-[4px] border-r-purple h-full">
                        <img src="./img/Whispersms.png" alt="" className="relative z-10 transition-transform delay-300 slow-transition transform-gpu hover:scale-110"/>
                    </div>
                    <div className="relative p-6 flex items-center justify-center border-r-[4px] border-r-purple h-full">
                        <img src="./img/Paybox.png" alt="" className="relative z-10 transition-transform delay-300 slow-transition transform-gpu hover:scale-110"/>
                        <div className="absolute right-[-25px] top-[-20px] w-[40px] h-[40px] bg-darkpurple"></div>
                    </div>
                    <div className="p-6 flex items-center justify-cente">
                        <img src="./img/Vizual-Plus.png" alt="" className="relative z-10 transition-transform delay-300 slow-transition transform-gpu hover:scale-110"/>
                    </div>
                </div>


                <img src="./img/hero-purple-lens-left.png" alt="" className="absolute bottom-[-300px] lg:bottom-[-400px] lg:right-[-400px] right-[-300px] z-0 w-50 opacity-70" />
                <img src="./img/hero-purple-lens-left.png" alt="" className="absolute top-[-200px] lg:top-[-400px] left-[-100px] z-0 w-50 opacity-70" />
            </section>

            <img src="./img/whitestar.png" alt="" className="absolute top-[300px] right-[500px] animate-pulse"/>
            <img src="./img/greystar.png" alt="" className="absolute bottom-[350px] left-[150px] animate-pulse"/>

            <img src="./img/litepurplestar.png" alt="" className="absolute top-[250px] left-[200px] animate-pulse"/>
            <img src="./img/purplestar.png" alt="" className="absolute bottom-[200px] right-[100px] animate-pulse"/>
        </main>
     );
}
 
export default Partners;