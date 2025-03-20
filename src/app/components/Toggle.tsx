"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, Monitor } from "lucide-react";

export function Toggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;


    const getThemeIcon = () => {
        switch (theme) {
            case "dark":
                return <Moon className="w-5 h-5 text-yellow-500" />;
            case "light":
                return <Sun className="w-5 h-5 text-orange-500" />;
            default:
                return <Monitor className="w-5 h-5 text-gray-300" />;
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="float-right">
                <Button variant="outline" className="flex items-center gap-2 border border-gray-600 rounded-md">
                    {getThemeIcon()}

                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 dark:text-white cursor-pointer">
                <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer">
                    <Sun className="w-4 h-4 mr-2 text-orange-500" /> Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}  className="cursor-pointer">
                    <Moon className="w-4 h-4 mr-2 text-yellow-500" /> Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}  className="cursor-pointer">
                    <Monitor className="w-4 h-4 mr-2 text-gray-500" /> System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
