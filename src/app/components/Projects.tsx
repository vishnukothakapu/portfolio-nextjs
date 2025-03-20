"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { SiReact, SiNextdotjs, SiTailwindcss, SiMongodb, SiNodedotjs,SiHtml5,SiCss3,SiTypescript,SiExpress,SiExpo,SiShadcnui } from "react-icons/si";
import { LinkPreview } from "@/components/ui/link-preview";

const projects = [
    {
        title: "Blogsy - Blogging Platform",
        description: "A feature-rich blogging platform that enables users to create, edit, and manage blog posts. Users can interact by liking and commenting on posts. The platform includes authentication and a visually appealing interface.",
        image: "/assets/images/blogsy_app.png",
        tech: [
            { Icon: SiHtml5, color: "text-[#E34F26]" },
            { Icon: SiCss3, color: "text-blue-500" },
            { Icon: SiNodedotjs, color: "text-[#5FA04E]" },
            { Icon: SiExpress, color: "text-black dark:text-white" },
            { Icon: SiMongodb, color: "text-[#47A248]" },
        ],
        link: "https://github.com/vishnukothakapu/Blogsy-Blogging-Web-App"
    },
    {
        title: "EasyStay - Online Rental Platform",
        description: "A full-stack MERN application inspired by Airbnb, where users can list, book, and manage rental properties. The platform supports authentication, room filtering, booking payments, and a user-friendly dashboard.",
        image: "/assets/images/easystay_app.png",
        tech: [
            { Icon: SiMongodb, color: "text-[#47A248]" },
            {Icon:SiExpress, color: "text-black dark:text-white" },
            { Icon: SiReact, color: "text-[#61DAFB]" },
            { Icon: SiTailwindcss, color: "text-[#38BDF8]" },
            { Icon: SiNodedotjs, color: "text-[#83CD29]" },
        ],
        link: "https://github.com/vishnukothakapu/EasyStay-MERN"
    },
    {
        title: "Events App - NextJS",
        description: "A dynamic event management platform built with Next.js that allows users to create, book, and manage events seamlessly. It includes user authentication, real-time event booking, and a responsive UI.",
        image: "/assets/images/events_app.png",
        tech: [
    { Icon: SiNextdotjs, color: "text-black dark:text-white" },
    { Icon: SiTailwindcss, color: "text-[#38BDF8]" },
            {Icon:SiShadcnui,color:"text-black dark:text-white" },
    { Icon: SiMongodb, color: "text-[#47A248]" },
    { Icon: SiNodedotjs, color: "text-[#83CD29]" },

],
        link: "https://github.com/vishnukothakapu/EventsApp-NextJS",
    },
    {
        title: "Recipe Finder App - MealDB API",
        description: "A mobile-friendly recipe discovery app that fetches data from the MealDB API. Users can search for recipes, view ingredients, and get step-by-step cooking instructions.",
        image: "/assets/images/recipe_app.jpg",
        tech: [
            { Icon: SiReact, color: "text-[#0088CC]" },
            { Icon: SiCss3, color: "text-blue-500" },
            { Icon: SiExpo, color: "text-black dark:text-white" },
            {Icon:SiTypescript,color:"text-[#3178C6]"},
        ],
        link: "https://github.com/vishnukothakapu/Recipe_Finder-Expo_App"
    }
];

const Projects = () => {
    return (
        <section className="py-20 bg-white dark:bg-black relative overflow-hidden" id="projects">
            <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    <LinkPreview url="https://github.com/vishnukothakapu">My Projects</LinkPreview>{" "}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                    Some of my featured works
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <CardContainer key={index} className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 border flex flex-col justify-between">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                {project.title}
                            </CardItem>

                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {project.description}
                            </CardItem>

                            <CardItem translateZ="100" className="w-full ">
                                <Image
                                    src={project.image}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                                    alt={project.title}
                                />
                            </CardItem>

                            <div className="flex justify-between items-center mt-8 w-full">
                                <div className="flex space-x-3">
                                    {project.tech.map(({ Icon, color }, i) => (
                                        <Icon key={i} className={`text-2xl ${color}`} />
                                    ))}
                                </div>

                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href={project.link}
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    View →
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </section>
    );
};

export default Projects;
