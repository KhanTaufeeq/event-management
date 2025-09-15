"use client"
import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

function Navigation() {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/aboutus" },
        { name: "Services", href: "/services" },
        { name: "Gallery", href: "/gallery" },
        { name: "Testimonials", href: "/testimonial" },
        { name: "Contact Us", href: "/contactus" },
    ];
    const [isOpen, setIsOpen] = useState(false);

        return (
            <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-700/80 via-pink-600/80 to-red-500/80 backdrop-blur-none shadow-lg border-b border-white/20">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                    {/* Logo */}
                    <motion.h1
                        className="text-2xl font-extrabold text-white tracking-wider"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Grandeur Gatherings
                    </motion.h1>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 text-lg font-medium">
                        {navLinks.map((link, idx) => (
                            <motion.a
                                key={idx}
                                href={link.href}
                                className="relative text-white hover:text-yellow-300 transition"
                                whileHover={{ scale: 1.1 }}
                            >
                                {link.name}
                                {/* Animated underline */}
                                <motion.span
                                    className="absolute left-0 bottom-0 h-[2px] bg-yellow-300 w-full"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden text-white">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={30} /> : <Menu size={30} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="md:hidden bg-black/80 backdrop-blur-md px-6 py-4 space-y-4"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={idx}
                                    href={link.href}
                                    className="block text-lg text-white hover:text-yellow-300 transition"
                                    whileHover={{ x: 10 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        );
    }

export default Navigation;
