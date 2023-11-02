import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import { useState } from 'react';
import faqData from "./faqData";

const FAQs = () => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const toggleQuestion = (index: number) => {
        if (expandedIndex === index) {
            // Clicking on the currently expanded question should close it.
            setExpandedIndex(-1);
        } else {
            // Clicking on a different question should expand it.
            setExpandedIndex(index);
        }
    };

    return (
        <main className="relative px-[5%] py-[120px] bg-darkpurple grid grid-cols-1 lg:grid-cols-2 items-center justify-between border-b border-1 border-gray-600 overflow-hidden" id="faqs">
            <section>
                <h1 className="text-[28px] md:text-4xl text-white font-bold mb-3 text-center lg:text-left">Frequently Ask</h1>
                <h1 className="text-[28px] md:text-4xl text-purple font-bold mb-3 text-center lg:text-left">Question</h1>
                <p className="text-lg text-white font-medium font-mon leading-loose text-center lg:text-left w-full lg:w-[60%]">We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>

                <div className="relative z-10 w-full mt-10">
                    {faqData.map((item, index) => (
                        <div key={index} className="w-full py-4 lg:py-6 border-b-4 border-purple">
                            <div className="flex justify-between gap-4">
                                <p className="text-lg text-white font-medium font-mon leading-loose text-left lg:text-left">{item.question}</p>

                                {expandedIndex === index ?
                                    <HiMinusSm
                                        className="text-4xl text-purple font-mon font-medium cursor-pointer"
                                        onClick={() => toggleQuestion(index)}
                                    />
                                    :
                                    <HiPlusSm
                                        className="text-4xl text-purple font-mon font-medium cursor-pointer"
                                        onClick={() => toggleQuestion(index)}
                                    />
                                }
                            </div>

                            {expandedIndex === index && (
                                <p className="text-md text-gray-400 font-medium font-mon leading-relaxed text-justify lg:text-justify mt-5 pr-8 transition-all duration-500">{item.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-10 lg:mb-0">
                <img src="./img/faq.png" alt="" className="w-full dangling-picture relative z-10 mt-10 lg:mt-0" />
            </section>

            <img src="./img/whitestar.png" alt="" className="absolute top-[1200px] lg:top-40 left-10 lg:left-[1700px] animate-pulse" />
            <img src="./img/greystar.png" alt="" className="absolute top-[100px] lg:top-[500px] left-10 lg:left-[1000px] animate-pulse" />
            <img src="./img/litepurplestar.png" alt="" className="absolute top-40 left-[200px] lg:left-[400px] animate-pulse" />
            <img src="./img/purplestar.png" alt="" className="absolute top-[1500px] lg:top-50 right-20 animate-pulse" />

            <img src="./img/hero-purple-lens.png" alt="" className="absolute bottom-[-300px] lg:bottom-[-400px] lg:right-[-300px] right-[-100px] z-10 w-50 opacity-70" />
            <img src="./img/hero-purple-lens-left.png" alt="" className="absolute top-[50px] lg:top-[-100px] left-[-100px] z-0 w-50 opacity-70" />

        </main>
    );
}

export default FAQs;