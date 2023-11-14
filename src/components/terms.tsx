import { IoCheckmarkSharp } from "react-icons/io5";

const Terms = () => {
    return (
        <main className="relative px-[5%] py-[150px] bg-darkpurple border-b border-1 border-gray-600 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 justify-between overflow-hidden" id="terms">
            <section>
                <div className="w-full">
                    <h1 className="w-full text-[28px] md:text-4xl text-white font-bold mb-0 md:mb-3 text-center     lg:text-left" data-aos="fade-down">Privacy Policy and </h1>
                    <h1 className="w-full text-[28px] md:text-4xl text-purple font-bold mb-0 md:mb-3 text-center    lg:text-left" data-aos="fade-down">Terms</h1>

                    <p className="text-[13px] sm:text-[14px] text-white font-medium font-mon leading-loose text-center lg:text-left my-5 w-full" data-aos="fade-down">Last updated on September 12, 2023</p>

                    <p className="text-[14px] md:text-[16px] text-white font-medium font-mon leading-loose text-center lg:text-left    w-full" data-aos="fade-down">Below are our privacy & policy, which outline a lot of goodies. </p>
                    <p className="text-[14px] md:text-[16px] text-white font-medium font-mon leading-loose text-center lg:text-left w-full" data-aos="fade-down">it’s our aim to always take of our participant</p>
                </div>

                <div className="relative z-10 p-5 md:p-10 rounded-lg border-[2px] mt-5 md:mt-16 border-purple card-bg">
                    <p className="text-[14px] sm:text-[15px] text-white font-medium font-mon leading-relaxed lg:leading-loose text-center lg:text-left w-full" data-aos="fade-down">At getlinked tech Hackathon 1.0, we value your privacy
                        and are committed to protecting your personal information.
                        This Privacy Policy outlines how we collect, use, disclose,
                        and safeguard your data when you participate in our tech
                        hackathon event. By participating in our event, you consent
                        to the practices described in this policy.</p>

                    <h3 className="text-[14px] text-purple font-bold font-mon leading-relaxed lg:leading-loose text-center lg:text-left  w-full mt-10" data-aos="fade-down">Licensing Policy</h3>
                    <p className="text-[14px] sm:text-[15px] text-white font-medium font-mon leading-relaxed lg:leading-loose text-center lg:text-left w-full" data-aos="fade-down">Here are terms of our Standard License:</p>

                    <div className="mt-5 md:mt-10 grid gap-4 md:gap-6">
                        <div className="flex gap-1 md:gap-4">
                            <IoCheckmarkSharp className="text-2xl md:text-3xl text-white bg-green-600 rounded-full p-1" /> <p className="text-[14px] md:text-[15px] text-white font-medium font-mon leading-relaxed lg:leading-loose text-center lg:text-left w-full" data-aos="fade-down">The Standard License grants you a non-exclusive right to
                                navigate and register for our event</p>
                        </div>

                        <div className="flex gap-1 md:gap-4">
                            <IoCheckmarkSharp className="text-2xl md:text-3xl text-white bg-green-600 rounded-full p-1" /> <p className="text-[14px] md:text-[15px] text-white font-medium font-mon leading-relaxed lg:leading-loose text-center lg:text-left w-full" data-aos="fade-down">You are licensed to use the item available at any free source
                                sites, for your project developement</p>
                        </div>

                        <div className="flex items-center justify-center">
                            <a href="#rules" className="relative btn py-3 px-10 text-white text-[16px] font-medium z-10 rounded-sm" data-aos="fade-down">Read More</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex items-center justify-center">
                <img src="./img/terms.png" alt="" className="dangling-picture relative z-10" />
            </section>

            <img src="./img/hero-purple-lens-left.png" alt="" className="absolute bottom-[800px] lg:bottom-[-200px] lg:left-[-200px] left-[-200px] z-0 w-50 opacity-70" />
            <img src="./img/hero-purple-lens-left.png" alt="" className="absolute top-[-100px] lg:top-[-200px] right-[-200px] z-0 w-50 opacity-70" />

            <img src="./img/whitestar.png" alt="" className="absolute top-[300px] right-[500px] animate-pulse w-4" />
            <img src="./img/greystar.png" alt="" className="absolute bottom-[350px] left-[150px] animate-pulse w-4" />

            <img src="./img/litepurplestar.png" alt="" className="absolute top-[250px] left-[200px] animate-pulse w-4" />
            <img src="./img/purplestar.png" alt="" className="absolute bottom-[200px] right-[100px] animate-pulse w-4" />
        </main>
    );
}

export default Terms;