import React, { useRef, useState, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const ContactForm = lazy(() => import("@/components/ContactForm.jsx"));

export default function Card() {
    const { t } = useTranslation();
    const audioRef = useRef(null);
    const [isContactOpen, setContactOpen] = useState(false);

    const click = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio("/sound/pop.mp3");
        }
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    };

    const handleSuccess = () => {
        setTimeout(() => {
            setContactOpen(false);
        }, 5000);
    };

    const items = [
        { cardTitle: t("card.professional"), title: "Portfolio", description: t("card.portfolio_description"), link: "https://hillnose.xyz" },
        { cardTitle: "", title: "LinkedIn", description: t("card.linkedin_description"), link: "https://linkedin.com/in/jeremaennena" },
        { cardTitle: "", title: "GitHub", description: t("card.github_description"), link: "https://github.com/maennenajere" },
        { cardTitle: t("card.projects"), title: "Beaky", description: t("card.beaky_description"), link: "https://beaknet.eu/" },
        { cardTitle: t("card.contact"), title: t("contactForm.open"), description: t("contactForm.open_description"), action: "contact" },
        { cardTitle: "", title: "Telegram", description: "", link: "https://t.me/maeennenae" },
    ];

    return (
        <>
            <div className="w-full space-y-4">
                {items.map(({ cardTitle, title, description, link, action }) => {
                    const content = (
                        <div>
                            {cardTitle && (
                                <div className="mb-2">
                                    <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-3">
                                        {cardTitle}
                                    </h2>
                                </div>
                            )}

                            <div className="rounded-full bg-transparent p-1 transition-all hover:bg-zinc-800 hover:shadow-lg border border-solid hover:border-zinc-600">
                                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                                <p className="text-gray-400 text-sm mb-1">{description}</p>
                            </div>
                        </div>
                    );

                    if (action === "contact") {
                        return (
                            <Dialog key={title} open={isContactOpen} onOpenChange={setContactOpen}>
                                <DialogTrigger asChild>
                                    <div
                                        onClick={click}
                                        className="cursor-pointer"
                                    >
                                        {content}
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="bg-zinc-900 border border-zinc-700 rounded-lg w-[90vw] sm:max-w-lg">
                                    <DialogHeader>
                                        <DialogTitle className="tracking-wider text-white">{t("contactForm.title")}</DialogTitle>
                                        <DialogDescription className="text-white">
                                            {t("contactForm.description")}
                                        </DialogDescription>
                                    </DialogHeader>
                                    <Suspense fallback={<div className="text-white text-center py-4">Loading...</div>}>
                                        <ContactForm onSuccess={handleSuccess} />
                                    </Suspense>
                                </DialogContent>
                            </Dialog>
                        );
                    }

                    return (
                        <a
                            key={title}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                            onClick={click}
                            data-umami-event={`${action || title}-link`}
                        >
                            {content}
                        </a>
                    );
                })}
            </div>
        </>
    );
}