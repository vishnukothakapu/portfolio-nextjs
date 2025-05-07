"use client"
import React, {useState} from 'react'
import {BackgroundLines} from "@/components/ui/background-lines";
import {BookTextIcon, ClipboardCheckIcon, ClipboardIcon, TerminalIcon} from "lucide-react";
import {FlipWords} from "@/components/ui/flip-words";
import {ShimmerButton} from "@/components/magicui/shimmer-button";
import {toast} from "sonner";
import {LinkPreview} from "@/components/ui/link-preview";
const words = ["MERN Stack Developer", "React Native Developer", "Web3 Enthusiast"];

const Hero = () => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard?.writeText("npx vishnuu");
        setCopied(true);
        toast("Copied to Clipboard!");
        setTimeout(() => setCopied(false), 2000);
    };
    return (
       <section id="home">
           <div className="min-h-screen flex items-center justify-center bg-white/[0.96] dark:bg-black/[0.96] relative overflow-hidden px-4 pb-4" id="#">
               <div className="absolute inset-0 flex items-center justify-center">
                   <BackgroundLines className="w-full h-full" />
               </div>

               <div className="relative z-10 text-center max-w-3xl">

                   <button
                       onClick={handleCopy}
                       className="mx-auto group relative flex items-center space-x-2 px-4 py-2 mb-6 text-sm font-bold text-white rounded-full shadow-2xl shadow-zinc-900 bg-zinc-950 ring-1 ring-white/10 transition-all duration-300 hover:ring-white/30"
                   >

                       <TerminalIcon className="w-4 h-4 text-blue-700" />


                       <span>npx vishnuu</span>


                       {copied ? (
                           <ClipboardCheckIcon className="w-4 h-4 text-blue-700 transition-all duration-300" />
                       ) : (
                           <ClipboardIcon className="w-4 h-4 text-gray-400 group-hover:text-white transition-all duration-300" />
                       )}
                   </button>
                   <h1 className="text-4xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-slate-950 to-black dark:from-neutral-50 dark:to-neutral-400">
                       Hello, I'm <br /> <LinkPreview url="https://github.com/vishnukothakapu">Vishnu Kothakapu</LinkPreview>{" "}
                   </h1>
                   <div className="mt-4 font-bold text-lg md:text-xl dark:text-neutral-300 text-black">
                        <span className="inline-flex items-center">
                            I'm a <FlipWords words={words} />
                        </span>
                   </div>
                   <ShimmerButton className="shadow-2xl mx-auto mt-6 flex items-center gap-2"  onClick={() => window.open('/my_resume.pdf', '_blank')}>
                       <BookTextIcon className="stroke-white "/>
                       <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
My Resume
      </span>
                   </ShimmerButton>

               </div>
           </div>
       </section>
    )
}
export default Hero
