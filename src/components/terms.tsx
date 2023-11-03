import { IoCheckmarkSharp } from "react-icons/io5";

const Terms = () => {
    return (
        <main className="relative px-[5%] py-[150px] bg-darkpurple border-b border-1 border-gray-600 grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between overflow-hidden" id="terms">
            <section>
                <div className="w-full">
                    <h1 className="w-full text-[28px] md:text-4xl text-white font-bold mb-3 text-center     lg:text-left">Privacy Policy and </h1>
                    <h1 className="w-full text-[28px] md:text-4xl text-purple font-bold mb-3 text-center    lg:text-left">Terms</h1>

                    <p className="text-[14px] text-white font-medium font-mon leading-loose text-center lg:text-left my-8 w-full">Last updated on September 12, 2023</p>

                    <p className="text[16px] md:text-lg text-white font-medium font-mon leading-loose text-center lg:text-left    w-full">Below are our privacy & policy, which outline a lot of goodies. </p>
                    <p className="text-[16px] md:text-lg text-white font-medium font-mon leading-loose text-center lg:text-left    w-full">it’s our aim to always take of our participant</p>
                </div>

                <div className="relative z-10 p-5 md:p-10 lg:p-20 rounded-lg border-[2px] mt-16 border-purple card-bg">
                    <p className="text-[14px] md:text-lg text-white font-medium font-mon leading-loose text-center lg:text-left    w-full">At getlinked tech Hackathon 1.0, we value your privacy
                        and are committed to protecting your personal information.
                        This Privacy Policy outlines how we collect, use, disclose,
                        and safeguard your data when you participate in our tech
                        hackathon event. By participating in our event, you consent
                        to the practices described in this policy.</p>

                    <h3 className="text-lg md:text-xl text-purple font-bold font-mon leading-loose text-center lg:text-left    w-full mt-10">Licensing Policy</h3>
                    <p className="text-[14px] md:text-lg text-white font-medium font-mon leading-loose text-center lg:text-left    w-full">Here are terms of our Standard License:</p>

                    <div className="mt-10 grid gap-8">
                        <div className="flex gap-2 md:gap-4">
                            <IoCheckmarkSharp className="text-xl md:text-3xl text-white bg-green-600 rounded-full p-1" /> <p className="text-[14px] md:text-lg text-white font-medium font-mon leading-loose text-center lg:text-left    w-full">The Standard License grants you a non-exclusive right to
                                navigate and register for our event</p>
                        </div>

                        <div className="flex gap-2 md:gap-4">
                            <IoCheckmarkSharp className="text-xl md:text-3xl text-white bg-green-600 rounded-full p-1" /> <p className="text-[14px] md:text-lg text-white font-medium font-mon leading-loose text-center lg:text-left w-full">You are licensed to use the item available at any free source
                                sites, for your project developement</p>
                        </div>

                        <div className="flex items-center justify-center">
                            <a href="" className="relative btn py-5 px-10 text-white text-xl font-medium z-10 rounded-md">Read More</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex items-center justify-center">
                <img src="./img/terms.png" alt="" className="dangling-picture relative z-10" />
            </section>

            <img src="./img/hero-purple-lens-left.png" alt="" className="absolute bottom-[800px] lg:bottom-[-200px] lg:left-[-200px] left-[-200px] z-0 w-50 opacity-70" />
            <img src="./img/hero-purple-lens-left.png" alt="" className="absolute top-[-100px] lg:top-[-200px] right-[-200px] z-0 w-50 opacity-70" />

            <img src="./img/whitestar.png" alt="" className="absolute top-[300px] right-[500px] animate-pulse" />
            <img src="./img/greystar.png" alt="" className="absolute bottom-[350px] left-[150px] animate-pulse" />

            <img src="./img/litepurplestar.png" alt="" className="absolute top-[250px] left-[200px] animate-pulse" />
            <img src="./img/purplestar.png" alt="" className="absolute bottom-[200px] right-[100px] animate-pulse" />
        </main>
    );
}

export default Terms;