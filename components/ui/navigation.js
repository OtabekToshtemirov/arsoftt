"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "/src/img_1.png"
import Image from "next/image";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const { resolvedTheme, setTheme } = useTheme(); // resolvedTheme is used instead of theme
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // Ensure the theme is applied after the component is mounted
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark"); // Use resolvedTheme for correct system-based switching
    };

    // Only show theme toggle button after mounted to prevent mismatch
    if (!mounted) return null;

    return (
        <nav
            className={`bg-background text-primary border-b-2 ${resolvedTheme === "dark" ? "border-primary" : "border-secondary-foreground"}`}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                        {/* Logo */}
                        <div>
                            <Link href="/" className="flex items-center py-5 text-white">
                                <Image src={logo} alt={"logo"} width={50} height={50} />
                            </Link>
                        </div>
                        {/* Primary Nav */}
                        <div className="hidden md:flex items-center space-x-1">
                            <Link href="/" className="py-5 px-3 hover:text-gray-300">Asosiy</Link>
                            <Link href="/about" className="py-5 px-3 hover:text-gray-300">Biz haqimizda</Link>
                            <Link href="/employers" className="py-5 px-3 hover:text-gray-300">Jamoa</Link>
                            <Link href="/news" className="py-5 px-3 hover:text-gray-300">Yangiliklar</Link>
                            <Link href="/gallery" className="py-5 px-3 hover:text-gray-300">Galereya</Link>
                            <Link href="/contact" className="py-5 px-3 hover:text-gray-300">Kontaktlar</Link>
                        </div>
                    </div>
                    {/* Theme switcher and Mobile menu button */}
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            className="text-primary  hover:text-gray-300"
                            aria-label="Toggle theme"
                        >
                            {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </Button>
                        <div className="md:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleMenu}
                                className="text-primary hover:text-gray-300"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
                <Link href="/" className="block py-2 px-4 text-sm hover:bg-primary-foreground/10">Asosiy</Link>
                <Link href="/about" className="block py-2 px-4 text-sm hover:bg-primary-foreground/10">Biz haqimizda</Link>
                <Link href="/employers" className="block py-2 px-4 text-sm hover:bg-primary-foreground/10">Jamoa</Link>
                <Link href="/news" className="block py-2 px-4 text-sm hover:bg-primary-foreground/10">Yangiliklar</Link>
                <Link href="/gallery" className="block py-2 px-4 text-sm hover:bg-primary-foreground/10">Galereya</Link>
                <Link href="/contact" className="block py-2 px-4 text-sm hover:bg-primary-foreground/10">Kontaktlar</Link>
            </div>
        </nav>
    );
}
