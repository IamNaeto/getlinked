const Rules = () => {
    return (
        <main className="relative px-[5%] py-[120px] bg-darkpurple grid grid-cols-1 lg:grid-cols-2 place-items-center border-b border-1 border-gray-600 overflow-hidden" id="rules">
            <section className="relative z-10">
                <h1 className="text-[28px] md:text-4xl text-white font-bold mb-0 md:mb-3 text-center lg:text-left" data-aos="fade-down">Rules and</h1>
                <h1 className="text-[28px] md:text-4xl text-purple font-bold mb-3 text-center lg:text-left" data-aos="fade-down">Guidelines</h1>
                <p className="text-[14px] md:text-[16px] text-white font-medium font-mon leading-loose text-center lg:text-left" data-aos="fade-down">Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a
                    design maverick, or a concept wizard, you'll have the chance to transform
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!</p>
            </section>

            <section className="mb-10 lg:mb-0">
                <img src="./img/rules.png" alt="" className="w-full dangling-picture relative z-10" />
            </section>

            <img src="./img/whitestar.png" alt="" className="absolute top-40 left-[500px] animate-pulse w-4" />
            <img src="./img/greystar.png" alt="" className="absolute top-50 right-50 animate-pulse w-4" />

            <img src="./img/hero-purple-lens.png" alt="" className="absolute top-[500px] lg:top-[20px] lg:right-[-300px] right-[-200px] z-10 w-50 opacity-70" />
            <img src="./img/hero-purple-lens-left.png" alt="" className="absolute top-[50px] lg:top-[10px] left-[-100px] z-0 w-50 opacity-70" />
        </main>
    );
}

export default Rules;