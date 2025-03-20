"use client";

import {
    AtSignIcon,
    BrainIcon,
    HomeIcon,
    ScrollTextIcon,
    UserRoundIcon,
    SunIcon,
    MoonIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

import { useTheme } from "next-themes";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";

const DATA = {
    navbar: [
        { href: "#home", icon: HomeIcon, label: "Home" },
        { href: "#skills", icon: BrainIcon, label: "Skills" },
        { href: "#projects", icon: ScrollTextIcon, label: "Projects" },
        { href: "#contact", icon: AtSignIcon, label: "Contact" },
    ],
};
const handleScroll = (e:React.MouseEvent<HTMLElement, MouseEvent>, id:string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};
const MenuBar = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
            <TooltipProvider>
                <Dock
                    direction="middle"
                    className={cn(
                        "px-4 py-2 rounded-xl shadow-lg transition-all duration-300",
                        theme === "dark"
                            ? "bg-[#111213] border border-gray-800"
                            : "bg-white border border-gray-300"
                    )}
                >
                    {DATA.navbar.map((item) => (
                        <DockIcon key={item.label} className="group">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button
                                        onClick={(e) => handleScroll(e, item.href.substring(1))}
                                        aria-label={item.label}
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-12 rounded-full flex items-center justify-center"
                                        )}
                                    >
                                        <item.icon className="size-6 text-gray-700 dark:text-gray-200 transition-transform duration-300 group-hover:scale-150" />
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="font-bold text-sm bg-[#111213] text-white dark:bg-white dark:text-black px-2 py-1 rounded-xl">
                                        {item.label}
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}



                    <Separator orientation="vertical" className="h-10 w-[2px] bg-gray-300 dark:bg-gray-800 mx-2" />


                    <DockIcon className="group">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                    className="size-12 rounded-full border-none flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                >
                                    {theme === "dark" ? (
                                        <SunIcon className="size-6 text-yellow-500 transition-transform duration-300 group-hover:scale-110 " />
                                    ) : (
                                        <MoonIcon className="size-6 text-blue-700 transition-transform duration-300 group-hover:scale-110" />
                                    )}
                                </button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="font-bold text-sm bg-black text-white dark:bg-white dark:text-black px-2 py-1 rounded-xl">
                                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                </Dock>
            </TooltipProvider>
        </div>
    );
};

export default MenuBar;
