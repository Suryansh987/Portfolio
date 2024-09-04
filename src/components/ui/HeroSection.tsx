"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";
import TypingAnimation from "../magicui/typing-animation";
import { MagicCard } from "../magicui/magic-card";
import Image from "next/image";


const HeroSection = () => {
    const { theme } = useTheme();
    const [color, setColor] = useState<string>("#ffffff");

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

    return (
        <>
            <div className="relative flex h-full w-full items-center sm:justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl gap-14 px-11 max-lg:flex-col-reverse py-24  pointer-events-none">
                <span className="pointer-events-none lg:w-2/3 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                    <TypingAnimation
                        className="xl:text-7xl md:text-5xl text-2xl font-bold text-gray-700 dark:text-white text-justify mb-6   "
                        text="Hello, I'm Suryansh"
                    />
                    <p className="text-gray-700 text-lg mb-6">
                        I'm a passionate <strong> Full Stack Developer</strong> with hands-on
                        experience in building custom web applications. With a strong
                        foundation in programming languages like Python, JavaScript, Java and C++,
                        I have developed and contributed to several impactful projects.
                    </p>

                    <p className="text-gray-700 text-lg mb-6">
                        From creating a personalized search engine to developing AI-powered
                        web apps, I strive to deliver innovative and efficient solutions.
                        Explore my work and let's connect!
                    </p>
                    <div className="flex sm:gap-7 gap-3" onClick={()=>(console.log('btn'))}>
                        <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" className="text-white px-4 py-2 rounded-lg sm:text-xl text-base bg-gradient-to-b from-gray-500 via-black to-gray-500 z-20 cursor-pointer pointer-events-auto">
                            View Resume
                        </a>
                        <a
                            href="mailto:suryanshsharma987@gmail.com?subject=Contacting You&body=Hello,"
                            target="_blank"
                            className=" text-white px-4 py-2 rounded-lg sm:text-xl bg-gradient-to-b from-gray-500 via-black to-gray-500 cursor-pointer pointer-events-auto text-base"
                        >
                            Contact Me
                        </a>
                    </div>
                </span>
                <div className="z-10 lg:w-1/3 w-1/2 ">
                    <MagicCard
                        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl rounded-full"
                        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                    >
                        <Image
                            src='/Suryansh.jpg'
                            alt="pp"
                            width={600}
                            height={600}
                        />
                    </MagicCard>
                </div>
            </div>
            <Particles
                className="absolute inset-0 top-5 pointer-events-none"
                quantity={200}
                ease={100}
                color={color}
                refresh
            />

        </>
    );
};


export default HeroSection;