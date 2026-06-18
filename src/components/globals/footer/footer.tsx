import Image from "next/image";
import Link from "next/link";
import { styles } from "./footer.styles";
import { FooterProps } from "@/interface/globals/footer.interface";

export default function Footer({ variant = "default" }: FooterProps) {
    const activeStyles = styles[variant];

    return (
        <footer className={activeStyles.footer}>
            <div className={activeStyles.container}>
                <div className={activeStyles.infoSection}>
                    <div className={activeStyles.brandWrapper}>
                        <div className={activeStyles.logoWrapper}>
                            <Image
                                src="/images/hwa-logo.png"
                                alt="Harish World of Accounts Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h2 className={activeStyles.brandName}>
                            <span className={activeStyles.brandTitle}>Harish World of Accounts</span>
                        </h2>
                    </div>
                    <p className={activeStyles.brandDesc}>
                        Defining the pedagogical standards for high-stakes digital markets since 2026.
                    </p>
                    <div className={activeStyles.socialsWrapper}>
                        <Link href="#" className={activeStyles.socialLink} aria-label="Instagram">
                            <Image
                                src="/icons/instagram.svg"
                                alt="Instagram"
                                width={20}
                                height={20}
                            />
                        </Link>
                        <Link href="#" className={activeStyles.socialLink} aria-label="WhatsApp">
                            <Image
                                src="/icons/whatsapp.svg"
                                alt="WhatsApp"
                                width={20}
                                height={20}
                            />
                        </Link>
                        <Link href="#" className={activeStyles.socialLink} aria-label="Email">
                            <Image
                                src="/icons/email.svg"
                                alt="Email"
                                width={20}
                                height={20}
                            />
                        </Link>
                        <Link href="#" className={activeStyles.socialLink} aria-label="LinkedIn">
                            <Image
                                src="/icons/linkedin.svg"
                                alt="LinkedIn"
                                width={20}
                                height={20}
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={activeStyles.bottomBar}>
                <p className={activeStyles.copyright}>
                    © 2026 Core Circle. All Rights Reserved.
                </p>
                <div className={activeStyles.bottomLinks}>
                    <Link href="#" className={activeStyles.bottomLink}>
                        Privacy
                    </Link>
                    <Link href="#" className={activeStyles.bottomLink}>
                        Terms
                    </Link>
                    <Link href="#" className={activeStyles.bottomLink}>
                        Cookies
                    </Link>
                </div>
            </div>
        </footer>
    );
}