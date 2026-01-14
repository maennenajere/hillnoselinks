import React from 'react';
import { useTranslation } from "react-i18next";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation();

    return (
        <footer className="border-t border-white/5 flex flex-col items-center gap-2 pt-4">

            <div className="flex flex-wrap items-center justify-center gap-x-2 text-sm tracking-widest">
                <a
                    href="https://hillnose.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-2"
                    data-umami-event="footer-main-link"
                >
                    © {currentYear} hillnose.xyz
                </a>
                <span>❤️</span>
                <span>{t('footer.rights')}</span>
            </div>

            <p className="text-[11px] text-gray-500">
                {t('footer.analytics')}{' '}
                <a
                    href="https://umami.is"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white underline underline-offset-4 decoration-white/10"
                    data-umami-event="footer-umami-link"
                >
                    Umami Analytics
                </a>
            </p>
        </footer>

    );
}