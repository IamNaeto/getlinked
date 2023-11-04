import { FaInstagram, FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

const ContactUs = () => {
    return (
        <main className="relative grid items-center justify-center w-full bg-darkpurple overflow-hidden pt-[100px] pb-[100px] lg:pb-0 lg:h-[100vh] h-[100%] px-[5%]" id="contact">
            <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10 w-full py-auto">
                <div className="relative z-10 lg:grid gap-4 hidden">
                    <h1 className="text-[30px] text-purple font-medium">Get in touch</h1>
                    <p className="text-[16px] text-white w-[10%] font-mon">Contact Information</p>
                    <p className="text-[16px] text-white w-[60%] xl:w-[40%] font-mon">27,Alara Street Yaba 100012 Lagos State</p>
                    <p className="text-[16px] text-white w-[70%] xl:w-[50%] font-mon">Call Us : 07067981819</p>
                    <p className="text-[16px] text-white w-[95%] xl:w-[70%] font-mon">we are open from Monday-Friday
                        08:00am - 05:00pm</p>

                    <div className="relative z-10 flex flex-col gap-4">
                        <h3 className="text-purple text-[16px] font-medium">Share on</h3>
                        <div className="flex items-center gap-2">
                            <FaInstagram className="text-2xl text-white font-medium cursor-pointer hover:text-pink slow-transition" />
                            <FaXTwitter className="text-2xl text-white font-medium cursor-pointer hover:text-pink slow-transition" />
                            <FaFacebookF className="text-2xl text-white font-medium cursor-pointer hover:text-pink slow-transition" />
                            <FaLinkedinIn className="text-2xl text-white font-medium cursor-pointer hover:text-pink slow-transition" />
                        </div>
                    </div>

                    <img src="./img/hero-purple-lens-left.png" alt="" className="absolute top-[-100px] left-[-300px] z-0" />
                </div>

                <div className="relative z-10 p-2 lg:p-5 rounded-xl bg-none lg:bg-lite-grey ">
                    <div className="grid gap-2 mb-5">
                        <h3 className="text-[20px] text-purple font-medium">Questions or need assistance?</h3>
                        <h3 className="text-[20px] text-purple font-medium">Let us know  about it!</h3>
                    </div>

                    <form action="/" className="relative z-10">
                        <input type="text" placeholder="First Name" className="input font-mon" required />
                        <input type="email" placeholder="Mail" className="input font-mon" required />
                        <textarea name="" id="" cols={10} rows={5} placeholder="Message" required className="input font-mon"></textarea>

                        <div className="flex items-center justify-center">
                            <button className="px-16 py-3 btn text-white text-[16px] rounded-sm" >Submit</button>
                        </div>
                    </form>

                    <img src="./img/hero-purple-lens-left.png" alt="" className="absolute bottom-[400px] lg:bottom-[-200px] lg:right-[-350px] right-[200px] z-0" />

                    <div className="relative z-10 lg:hidden flex flex-col items-center justify-center gap-4 mt-12">
                        <h3 className="text-purple text-xl font-medium">Share on</h3>
                        <div className="flex items-center gap-2">
                            <FaInstagram className="text-xl text-white font-medium cursor-pointer hover:text-pink slow-transition" />
                            <FaXTwitter className="text-xl text-white font-medium cursor-pointer hover:text-pink slow-transition" />
                            <FaFacebookF className="text-xl text-white font-medium cursor-pointer hover:text-pink slow-transition" />
                            <FaLinkedinIn className="text-xl text-white font-medium cursor-pointer hover:text-pink slow-transition" />
                        </div>
                    </div>
                </div>
            </section>

            <img src="./img/whitestar.png" alt="" className="absolute top-[300px] right-[500px] animate-pulse" />
            <img src="./img/greystar.png" alt="" className="absolute bottom-[350px] left-[150px] animate-pulse" />

            <img src="./img/litepurplestar.png" alt="" className="absolute top-[250px] left-[200px] animate-pulse" />
            <img src="./img/purplestar.png" alt="" className="absolute bottom-[200px] right-[100px] animate-pulse" />

        </main>
    );
}

export default ContactUs;