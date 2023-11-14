import { FaInstagram, FaXTwitter, FaFacebookF, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <main className="relative px-[5%] py-[30px] bg-darkpurple overflow-hidden" id="terms">
            <section className="w-full flex-col lg:flex-row flex justify-between gap-8">
            <div className="relative z-10 flex flex-col justify-between mb-6 lg:mb-0">
                <div>
                    <Link to="/" >
                        <h2 className="text-4xl font-bold text-white" data-aos="fade-down">get<span className="text-purple">linked</span></h2>
                    </Link>
                    <p className="text-[14px] md:text-[16px] text-white font-mon leading-relaxed text-left my-4 w-full lg:w-[450px]" data-aos="fade-down">Getlinked Tech Hackathon is a technology innovation program
                        established by a group of organizations with the aim of showcasing
                        young and talented individuals in the field of technology</p>
                </div>

                <p className="text-[14px] md-text-[16px] text-white font-medium font-mon leading-relaxed text-left w-full" data-aos="fade-down"><span className="border-r-[3px] border-r-purple mr-4 pr-4">Terms of Use </span> <span>Privacy Policy</span></p>
            </div>

            <div className="relative z-10 mb-6 lg:mb-0">
                <h3 className="text-16px md:text-lg text-purple font-medium font-mon leading-loose text-left mb-5 w-full" data-aos="fade-down">Useful Links</h3>

                <div className="flex flex-col gap-4 mb-8">
                    <a href="#timeline" className="text-white text-[14px] md:text-[16px] hover:text-pink slow-transition" data-aos="fade-down">Timeline</a>
                    <a href="#overview" className="text-white text-[14px] md:text-[16px] hover:text-pink slow-transition" data-aos="fade-down">Overview</a>
                    <a href="#faqs" className="text-white text-[14px] md:text-[16px] hover:text-pink slow-transition" data-aos="fade-down">FAQs</a>
                    <Link to="/contact" className="text-white text-[14px] md:text-[16px] hover:text-pink slow-transition" data-aos="fade-down">Contact</Link>
                </div>

                <div className="relative z-10 flex items-center gap-4">
                    <h3 className="text-purple text-[16px] md:text-lg font-medium" data-aos="fade-down">Follow us</h3>
                    <div className="flex items-center gap-2" data-aos="fade-down">
                        <FaInstagram className="text-lg md:text-2xl text-white font-medium cursor-pointer hover:text-pink slow-transition" />
                        <FaXTwitter className="text-lg md:text-2xl text-white font-medium cursor-pointer hover:text-pink slow-transition" />
                        <FaFacebookF className="text-lg md:text-2xl text-white font-medium cursor-pointer hover:text-pink slow-transition" />
                        <FaLinkedinIn className="text-lg md:text-2xl text-white font-medium cursor-pointer hover:text-pink slow-transition" />
                    </div>
                </div>
            </div>

            <div className="font-mon">
                <h3 className="text-purple text-[16px] md:text-lg font-medium mb-6" data-aos="fade-down">Contact Us</h3>
                <div className="flex gap-4 mb-4" data-aos="fade-down">
                    <BiSolidPhoneCall className="text-lg md:text-2xl text-white font-bold" />
                    <p className="text-[14px] md:text-[16px] text-white">+234 6707653444</p>
                </div>
                <div className="flex gap-4" data-aos="fade-down">
                    <FaLocationDot className="text-lg md:text-2xl text-white font-bold" />
                    <p className="text-[14px] md:text-[16px] text-white">27, Alara Street Yaba 100012 Lagos State</p>
                </div>
            </div>
            </section>

            <section className=" relative z-10 flex flex-col items-center justify-center w-full mt-10">
            <p className="text-[14px] md:text-[16px] text-white font-mon leading-loose text-center w-full" data-aos="fade-down">All rights reserved. © getlinked Ltd.</p>
            <p className="text-[14px] md:text-[16px] text-white font-mon leading-loose text-center w-full" data-aos="fade-down">Developed by Charles Obimnaetochukwu Egesionu</p>
            </section>


            <img src="./img/whitestar.png" alt="" className="absolute top-[400px] lg:top-[300px] right-[100px] lg:right-[500px] animate-pulse w-4" />
            <img src="./img/greystar.png" alt="" className="absolute bottom-[400px] left-[350px] lg:bottom-[200px] lg:left-[500px] animate-pulse w-4" />

            <img src="./img/litepurplestar.png" alt="" className="absolute top-[300px] left-[200px] animate-pulse w-4" />
            <img src="./img/purplestar.png" alt="" className="absolute bottom-[200px] right-[100px] animate-pulse w-4" />
        </main>
    );
}

export default Footer;