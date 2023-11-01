const Criteria = () => {
    return ( 
        <main className="relative px-[5%] py-[120px] bg-darkpurple grid grid-cols-1 lg:grid-cols-2 place-items-center border-b border-1 border-gray-600 overflow-hidden" id="criteria">
            <section className="mb-10 lg:mb-0">
                <img src="./img/criteria.png" alt="" className="w-full dangling-picture relative z-10 "/>
            </section>

            <section>
                <h1 className="text-[28px] md:text-4xl text-white font-bold mb-3 text-center lg:text-left">Judging Criteria</h1>
                <h1 className="text-[28px] md:text-4xl text-purple font-bold mb-3 text-center lg:text-left">Key attributes</h1>
                <p className="text-lg text-white font-medium font-mon leading-loose text-center lg:text-left mb-5"><span className="text-purple">Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
solution. Consider whether it addresses a real-world problem in a novel 
way or introduces innovative features.</p>
                <p className="text-lg text-white font-medium font-mon leading-loose text-center lg:text-left mb-5"><span className="text-purple">Functionality:</span> Assess how well the solution works. Does it perform its 
intended functions effectively and without major issues? Judges would
consider the completeness and robustness of the solution.</p>
                <p className="text-lg text-white font-medium font-mon leading-loose text-center lg:text-left mb-5"><span className="text-purple">Impact and Relevance:</span> Determine the potential impact of the solution 
in the real world. Does it address a significant problem, and is it relevant 
to the target audience? Judges would assess the potential social, 
economic, or environmental benefits.</p>
                <p className="text-lg text-white font-medium font-mon leading-loose text-center lg:text-left mb-5"><span className="text-purple">Technical Complexity:</span>  Evaluate the technical sophistication of the solution. 
Judges would consider the complexity of the code, the use of advanced 
technologies or algorithms, and the scalability of the solution.</p>
                <p className="text-lg text-white font-medium font-mon leading-loose text-center lg:text-left mb-10"><span className="text-purple">Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered 
to the rules and guidelines of the hackathon, including deadlines, use of 
specific technologies or APIs, and any other competition-specific requirements.</p>

                <div className="flex items-center justify-center lg:items-start lg:justify-start">
                    <a href="" className="relative btn py-5 px-10 text-white text-xl z-10">Read More</a>
                </div>
            </section>

            <img src="./img/litepurplestar.png" alt="" className="absolute top-40 left-20 animate-pulse"/>
            <img src="./img/purplestar.png" alt="" className="absolute top-50 right-20 animate-pulse"/>

            <img src="./img/hero-purple-lens.png" alt="" className="absolute bottom-[-300px] lg:bottom-[-500px] lg:right-[-200px] right-0 z-0 w-50 opacity-70"/>
            <img src="./img/hero-purple-lens-left.png" alt="" className="absolute top-[300px] lg:top-[300px] left-[-100px] z-0 w-50 opacity-70"/>
        </main>
     );
}
 
export default Criteria;