const Overview = () => {
    return (
        <main className="relative px-[5%] py-[150px] bg-darkpurple grid grid-cols-1 lg:grid-cols-2 place-items-center border-b border-1 border-gray-600" id="overview">
            <section className="mb-10 lg:mb-0">
                <img src="./img/thebigidea.png" alt="" className="w-full dangling-picture " />
            </section>

            <section className="relative z-10">
                <h1 className="text-[28px] md:text-4xl text-white font-bold mb-0 md:mb-3 text-center lg:text-left">Introduction to getlinked</h1>
                <h1 className="text-[28px] md:text-4xl text-purple font-bold mb-3 text-center lg:text-left">tech Hackathon 1.0</h1>
                <p className="text-[14px] md:text-[16px] text-white font-medium font-mon leading-loose text-center lg:text-left">Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a
                    design maverick, or a concept wizard, you'll have the chance to transform
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!</p>
            </section>

            <img src="./img/litepurplestar.png" alt="" className="absolute top-40 left-20 animate-pulse" />
            <img src="./img/purplestar.png" alt="" className="absolute top-50 right-20 animate-pulse" />
        </main>
    );
}

export default Overview;