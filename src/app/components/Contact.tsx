"use client";

import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/magicui/terminal";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Contact = () => {
    return (
        <section id="contact" className="relative py-20 bg-white dark:bg-black overflow-hidden">
            <BackgroundBeams />

            <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    Let's Connect 🚀
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                    Have a project in mind, looking to hire,<br/> or just want to say hi? Drop me a message!
                </p>
            </div>


            <div className="mt-12 flex flex-col items-center justify-center">
                <Terminal className="border border-gray-800 w-full max-w-xl  p-6 rounded-xl shadow-lg">
                    <TypingAnimation>&gt; Initializing Contact...</TypingAnimation>

                    <AnimatedSpan delay={1500} className="text-green-500">
                        <span>✔ Checking availability...</span>
                    </AnimatedSpan>

                    <AnimatedSpan delay={2000} className="text-green-500">
                        <span>✔ Ready to collaborate.</span>
                    </AnimatedSpan>

                    <AnimatedSpan delay={2500} className="text-green-500">
                        <span>✔ Opening communication channels...</span>
                    </AnimatedSpan>

                    <AnimatedSpan delay={3000} className="text-yellow-500">
                        <span>⚡ Email: <Link href="mailto:kothakapuvishnukiran@gmail.com" className="underline">vishnukothakapu@example.com</Link></span>
                    </AnimatedSpan>

                    <AnimatedSpan delay={3500} className="text-blue-500">
                        <span>🔗 LinkedIn: <Link href="https://linkedin.com/in/kothakapuvishnukiran" className="underline">linkedin.com/in/vishnukothakapu</Link></span>
                    </AnimatedSpan>

                    <AnimatedSpan delay={4000} className="text-pink-500">
                        <span>📂 GitHub: <Link href="https://github.com/vishnukothakapu" className="underline">github.com/vishnukothakapu</Link></span>
                    </AnimatedSpan>


                </Terminal>
            </div>
       </section>
    );
}

export default Contact;
