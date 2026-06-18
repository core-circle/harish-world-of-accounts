"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { styles } from "./header.styles";
import { HeaderProps } from "@/interface/globals/header.interface";

export default function Header({ variant = "default" }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const activeStyles = styles[variant];

    return (
        <header className={activeStyles.header}>
            <div className={activeStyles.container}>
                <div className={activeStyles.brandWrapper}>
                    <Link href="/" className={activeStyles.brand}>
                        <div className={activeStyles.logoWrapper}>
                            <Image
                                src="/images/hwa-logo.png"
                                alt="HWA Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <h2 className={activeStyles.brandTitle}>
                            <span className={activeStyles.brandTitleSpan}>HWA</span>
                            <span className="text-[10px] font-bold tracking-widest text-on-surface-variant/70 uppercase hidden sm:inline-block border-l border-outline-variant/30 pl-3 ml-1">
                                World of Accounts
                            </span>
                        </h2>
                    </Link>
                </div>

                <nav className={activeStyles.nav}>
                    <Link href="#" className={activeStyles.navLink}>
                        Courses
                    </Link>
                    <Link href="#" className={activeStyles.navLink}>
                        Partners
                    </Link>
                    <Link href="#" className={activeStyles.navLink}>
                        Success Stories
                    </Link>
                    <Link href="#" className={activeStyles.navLink}>
                        FAQ
                    </Link>
                    <Link href="#" className={activeStyles.navLink}>
                        About
                    </Link>
                </nav>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={activeStyles.mobileMenuButton}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? (
                        <Image
                            src="/icons/close.svg"
                            alt="Close menu"
                            width={24}
                            height={24}
                        />
                    ) : (
                        <Image
                            src="/icons/menu.svg"
                            alt="Open menu"
                            width={24}
                            height={24}
                        />
                    )}
                </button>
            </div>

            <nav
                className={`${activeStyles.mobileNavOverlay} ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className={activeStyles.mobileNavLinkContainer}>
                    <Link
                        href="#"
                        className={activeStyles.mobileNavLink}
                        onClick={() => setIsOpen(false)}
                    >
                        Courses
                    </Link>
                    <Link
                        href="#"
                        className={activeStyles.mobileNavLink}
                        onClick={() => setIsOpen(false)}
                    >
                        Partners
                    </Link>
                    <Link
                        href="#"
                        className={activeStyles.mobileNavLink}
                        onClick={() => setIsOpen(false)}
                    >
                        Success Stories
                    </Link>
                    <Link
                        href="#"
                        className={activeStyles.mobileNavLink}
                        onClick={() => setIsOpen(false)}
                    >
                        FAQ
                    </Link>
                    <Link
                        href="#"
                        className={activeStyles.mobileNavLink}
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                </div>
            </nav>
        </header>
    );
}