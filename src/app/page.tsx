"use client";
import React from "react";

import { useRouter } from "next/navigation";

import MenuBar from "@/app/components/Menubar";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import Hero from "@/app/components/Hero";
import Contact from "@/app/components/Contact";
import Skills from "./components/Skills";
import Projects from "@/app/components/Projects";
import { SiX, SiLinkedin, SiGithub } from "react-icons/si";

const Page = () => {
    const router = useRouter();

    const handleLink = (link: string) => {
        window.open(link, "_blank");
    };

    return (
        <>

            <ScrollProgress className="fixed top-0 left-0 w-full" />

            <Hero />
            <Skills />
            <Projects />
            <Contact />

            <footer className="dark:bg-black bg-gray-50 text-gray-900 dark:text-white py-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left text-md md:text-base">
                    Made with ❤️ by Vishnu.
                </div>

                <div className="flex items-center gap-6 mt-4 md:mt-0">
                    <SiX
                        className="cursor-pointer text-black dark:text-white hover:text-gray-500 transition-transform transform hover:scale-110"
                        onClick={() => handleLink("https://twitter.com/VishnuKothakapu")}
                        size={20}
                    />
                    <SiLinkedin
                        className="cursor-pointer text-[#0077B5] hover:text-[#005a8c] transition-transform transform hover:scale-110"
                        onClick={() => handleLink("https://linkedin.com/in/kothakapuvishnukiran")}
                        size={20}
                    />
                    <SiGithub
                        className="cursor-pointer text-black dark:text-white hover:text-gray-500 transition-transform transform hover:scale-110"
                        onClick={() => handleLink("https://github.com/vishnukothakapu")}
                        size={20}
                    />
                </div>
            </footer>
            <MenuBar />
        </>
    );
};

export default Page;
