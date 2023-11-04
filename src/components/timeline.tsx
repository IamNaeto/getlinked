const Timeline = () => {
    return ( 
        <main className="relative px-[5%] py-[150px] bg-darkpurple border-b border-1 border-gray-600 grid grid-cols-1 overflow-hidden" id="timeline">
            <section className="relative z-10 w-full flex flex-col items-center justify-center mb-20">
                <h1 className="text-[28px] md:text-4xl text-white font-bold mb-3 text-center">Timeline</h1>
                <p className="text-lg text-white font-medium font-mon leading-loose text-center w-full lg:w-[40%]">Here is the breakdown of the time we anticipate 
using for the upcoming event.</p>
            </section>

            <section className=" relative z-10 flex flex-col lg:flex-row items-center justify-center border-r-0 lg:border-l-0 border-l-4 border-purple pl-10 lg:pl-0 gap-8 lg:gap-0 mb-20 lg:mb-0 ml-5 md:ml-10 lg:ml-0">
                <div className="relative p-0 lg:p-[50px] w-full lg:w-[50%] border-r-0 lg:border-r-4 border-purple flex flex-col items-start lg:items-end">
                    <h1 className="text-2xl font-medium text-purple text-left lg:text-right">Hackathon Announcement</h1>
                    <p className="text-[16px] text-mon text-left lg:text-right text-white tracking-wider w-full lg:w-[70%]">The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>

                    <div className="hidden absolute bottom-[60px] right-[-33px] rounded-full bubblering text-3xl font-medium  text-white lg:flex items-center justify-center">1</div>
                </div>


                <div className=" flex items-center p-0 lg:p-[50px] w-full lg:w-[50%] h-full">
                    <h1 className="text-2xl font-medium text-purple text-left">November 18, 2023</h1>
                </div>

                <div className="lg:hidden absolute bottom-[-10px] left-[-33px] rounded-full bubblering text-3xl font-medium  text-white flex items-center justify-center">1</div>
            </section>

            <section className="relative z-10 flex lg:flex-row flex-col-reverse items-center justify-center border-r-0 lg:border-l-0 border-l-4 border-purple pl-10 lg:pl-0 gap-8 lg:gap-0 mb-20 lg:mb-0 ml-5 md:ml-10 lg:ml-0">
                <div className="relative flex items-center justify-start lg:justify-end p-0 lg:p-[50px] w-full lg:w-[50%] h-full border-r-0 lg:border-r-4 border-purple">
                    <h1 className="text-2xl font-medium text-purple text-left lg:text-right">November 18, 2023</h1>

                    <div className="hidden absolute bottom-[60px] right-[-33px] rounded-full bubblering text-3xl font-medium  text-white lg:flex items-center justify-center">2</div>
                </div>


                <div className="p-0 lg:p-[50px] w-full lg:w-[50%] h-full">
                    <h1 className="text-2xl font-medium  text-purple">Teams Registration begins</h1>
                    <p className="text-[16px] text-mon text-left text-white tracking-wider w-full lg:w-[80%]">Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                </div>

                <div className="lg:hidden absolute bottom-[-10px] left-[-33px] rounded-full bubblering text-3xl font-medium  text-white flex items-center justify-center">2</div>
            </section>

            <section className=" relative z-10 flex flex-col lg:flex-row items-center justify-center border-r-0 lg:border-l-0 border-l-4 border-purple pl-10 lg:pl-0 gap-8 lg:gap-0 mb-20 lg:mb-0 ml-5 md:ml-10 lg:ml-0">
                <div className="relative p-0 lg:p-[50px] w-full lg:w-[50%] border-r-0 lg:border-r-4 border-purple flex flex-col items-start lg:items-end">
                    <h1 className="text-2xl font-medium text-purple text-left lg:text-right">Teams Registration ends</h1>
                    <p className="text-[16px] text-mon text-left lg:text-right text-white tracking-wider w-full lg:w-[60%]">Interested Participants are no longer Allowed to register</p>

                    <div className="hidden absolute bottom-[60px] right-[-33px] rounded-full bubblering text-3xl font-medium  text-white lg:flex items-center justify-center">3</div>
                </div>


                <div className="p-0 lg:p-[50px] w-full lg:w-[50%] h-full flex items-center">
                    <h1 className="text-2xl font-medium text-purple text-left">November 18, 2023</h1>
                </div>

                <div className="lg:hidden absolute bottom-[-10px] left-[-33px] rounded-full bubblering text-3xl font-medium  text-white flex items-center justify-center">3</div>
            </section>

            <section className="relative z-10 flex lg:flex-row flex-col-reverse items-center justify-center border-r-0 lg:border-l-0 border-l-4 border-purple pl-10 lg:pl-0 gap-8 lg:gap-0 mb-20 lg:mb-0 ml-5 md:ml-10 lg:ml-0">
                <div className="relative flex items-center justify-start lg:justify-end p-0 lg:p-[50px] w-full lg:w-[50%] h-full border-r-0 lg:border-r-4 border-purple">
                    <h1 className="text-2xl font-medium text-purple text-right">November 18, 2023</h1>

                    <div className="hidden absolute bottom-[60px] right-[-33px] rounded-full bubblering text-3xl font-medium  text-white lg:flex items-center justify-center">4</div>
                </div>


                <div className="p-0 lg:p-[50px] w-full lg:w-[50%] h-full">
                    <h1 className="text-2xl font-medium text-purple text-left">Announcement of the accepted teams
and ideas</h1>
                    <p className="text-[16px] text-mon text-left text-white tracking-wider w-full lg:w-[80%]">All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
                </div>

                <div className="lg:hidden absolute bottom-[-10px] left-[-33px] rounded-full bubblering text-3xl font-medium  text-white flex items-center justify-center">4</div>
            </section>

            <section className="relative z-10 flex flex-col lg:flex-row items-center justify-center border-r-0 lg:border-l-0 border-l-4 border-purple pl-10 lg:pl-0 gap-8 lg:gap-0 mb-20 lg:mb-0 ml-5 md:ml-10 lg:ml-0">
                <div className="relative p-0 lg:p-[50px] w-full lg:w-[50%] border-r-0 lg:border-r-4 border-purple flex flex-col items-start lg:items-end">
                    <h1 className="text-2xl font-medium text-purple text-left lg:text-right">Getlinked Hackathon 1.0 Offically Begins</h1>
                    <p className="text-[16px] text-mon text-left lg:text-right text-white tracking-wider w-full lg:w-[60%]">Accepted teams can now proceed to build their ground breaking skill driven solutions</p>

                    <div className="hidden absolute bottom-[60px] right-[-33px] rounded-full bubblering text-3xl font-medium  text-white lg:flex items-center justify-center">5</div>
                </div>


                <div className="p-0 lg:p-[50px] w-full lg:w-[50%] h-full flex items-center">
                    <h1 className="text-2xl font-medium text-purple text-left">November 18, 2023</h1>
                </div>

                <div className="lg:hidden absolute bottom-[-10px] left-[-33px] rounded-full bubblering text-3xl font-medium  text-white flex items-center justify-center">5</div>
            </section>

            <section className="relative z-10 flex lg:flex-row flex-col-reverse items-center justify-center border-r-0 lg:border-l-0 border-l-4 border-purple pl-10 lg:pl-0 gap-8 lg:gap-0 mb-20 lg:mb-0 ml-5 md:ml-10 lg:ml-0">
                <div className="relative flex items-center justify-start lg:justify-end p-0 lg:p-[50px] lg:pb-0 w-full lg:w-[50%] h-full border-r-0 lg:border-r-4 border-purple">
                    <h1 className="text-2xl font-medium text-purple text-left lg:text-right">November 18, 2023</h1>
                    <div className="hidden absolute bottom-[10px] right-[-33px] rounded-full bubblering text-3xl font-medium  text-white lg:flex items-center justify-center">6</div>
                </div>


                <div className="p-0 lg:p-[50px] lg:pb-0 w-full lg:w-[50%] h-full">
                    <h1 className="text-2xl font-medium text-purple text-left">Demo Day</h1>
                    <p className="text-[16px] text-mon text-left text-white w-full lg:w-[70%]">Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on
this day</p>
                </div>

                <div className="lg:hidden absolute bottom-[-10px] left-[-33px] rounded-full bubblering text-3xl font-medium  text-white flex items-center justify-center">6</div>
            </section>


            <img src="./img/whitestar.png" alt="" className="absolute top-[300px] right-[500px] animate-pulse"/>
            <img src="./img/greystar.png" alt="" className="absolute bottom-[350px] left-[150px] animate-pulse"/>

            <img src="./img/litepurplestar.png" alt="" className="absolute top-[250px] left-[200px] animate-pulse"/>
            <img src="./img/purplestar.png" alt="" className="absolute bottom-[200px] right-[100px] animate-pulse"/>
        </main>
     );
}
 
export default Timeline;