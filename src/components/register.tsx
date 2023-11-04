const RegisterForm = () => {
    return ( 
        <main className="relative grid items-center justify-center w-full bg-darkpurple overflow-hidden pt-[100px] pb-[100px] lg:pb-0 lg:h-[100vh] h-[100%] px-[5%]" id="contact">
        <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10 w-full pb-[10px] lg:pb-0">
            <div className="relative z-10">
                <img src="./img/register.png" alt="" className="dangling-picture relative z-10"/>

                <img src="./img/hero-purple-lens-left.png" alt="" className="absolute top-[-100px] left-[200px] lg:left-[-300px] z-0" />
            </div>

            <div className="relative z-10 p-2 lg:p-5 rounded-xl bg-none lg:bg-lite-grey ">
                    <div className="grid gap-2 mb-5">
                        <h3 className="text-[20px] text-purple font-bold">Register</h3>
                        <div className="flex items-center">
                            <p className="text-[14px] text-white font-mon">Be part of this movement!</p>
                            <img src="./img/movement.png" alt="" />
                        </div>

                        <h1 className="text-white text-[20px] font-mon">CREATE YOUR ACCOUNT</h1>
                    </div>

                    <form action="/" className="relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
                            <label htmlFor="" className="labels font-mon">Team Name 
                                <input type="text" placeholder="Enter the name of your group" className="input font-mon" required />
                            </label>
                            <label htmlFor="" className="labels font-mon">Phone 
                                <input type="text" placeholder="Enter your phone number" className="input font-mon" required />
                            </label>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
                            <label htmlFor="" className="labels font-mon">Email
                                <input type="email" placeholder="Enter your email address" className="input font-mon" required />
                            </label>
                            <label htmlFor="" className="labels font-mon">Project Topic
                                <input type="text" placeholder="What is your group project topic" className="input font-mon" required />
                            </label>
                        </div>

                        <div className="grid grid-cols-2 items-center gap-6">
                            <label htmlFor="" className="labels font-mon">Category
                                <select name="" id="" className="select" required>
                                    <option value="" className="bg-darkpurple">--Select--</option>
                                    <option value="" className="bg-darkpurple">Frontend</option>
                                    <option value="" className="bg-darkpurple">Backend</option>
                                    <option value="" className="bg-darkpurple">UI/UX</option>
                                    <option value="" className="bg-darkpurple">DevOps</option>
                                </select>
                            </label>
                            <label htmlFor="" className="labels font-mon">Group Size
                                <select name="" id="" className="select" required>
                                    <option value="" className="bg-darkpurple rounded-sm">--Select--</option>
                                    <option value="" className="bg-darkpurple">2</option>
                                    <option value="" className="bg-darkpurple">4</option>
                                    <option value="" className="bg-darkpurple">6</option>
                                    <option value="" className="bg-darkpurple">8</option>
                                </select>
                            </label>                            
                        </div>

                        <p className="text-[12px] text-pink font-mon">Please review your registration details before submitting</p>
                        
                        <div className="flex my-2">
                        <label htmlFor="" className="labels font-mon flex flex-row-reverse gap-2 items-center">I agreed with the event terms and conditions  and privacy policy
                            <input type="checkbox" required/>
                        </label>
                        </div>

                        <div className="flex items-center justify-center">
                            <button className="px-16 py-3 btn text-white text-[16px] rounded-sm w-full" >Register Now</button>
                        </div>
                    </form>

                    <img src="./img/hero-purple-lens-left.png" alt="" className="absolute bottom-[-100px] lg:bottom-[-200px] lg:right-[-350px] right-[200px] z-0" />
                </div>
        </section>

            <img src="./img/whitestar.png" alt="" className="absolute top-[300px] right-[500px] animate-pulse" />
            <img src="./img/greystar.png" alt="" className="absolute bottom-[350px] left-[150px] animate-pulse" />

            <img src="./img/litepurplestar.png" alt="" className="absolute top-[250px] left-[200px] animate-pulse" />
            <img src="./img/purplestar.png" alt="" className="absolute bottom-[200px] right-[100px] animate-pulse" />
        </main>
     );
}
 
export default RegisterForm;