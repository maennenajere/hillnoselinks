import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Card() {
    const { t } = useTranslation()

    const items = [
        { cardTitle: t('card.professional'), title: 'Portfolio', description: t('card.portfolio_description'), link: 'https://www.hillnose.xyz' },
        { cardTitle: '', title: 'LinkedIn', description: t('card.linkedin_description'), link: 'https://www.linkedin.com/in/jeremaennena' },
        { cardTitle: '', title: 'GitHub', description: t('card.github_description'), link: 'https://github.com/maennenajere' },
        { cardTitle: t('card.projects'), title: 'Beaky', description: t('card.beaky_description'), link: 'https://beaknet.eu/' },
        { cardTitle: t('card.contact'), title: t('card.getInTouch'), description: t('card.getInTouch_description'), link: 'mailto:contact@hillnose.xyz' },
        { cardTitle: '', title: 'Telegram', description: '', link: 'https://t.me/maeennenae' },
    ];

    return (
        <div className="w-full space-y-4">
            {items.map(({ cardTitle, title, description, link }) => {

                const eventName = `card_${title.toLowerCase().replace(/\s+/g, '_')}`;

                const content = (
                    <div>
                        {cardTitle ? (
                            <div className="mb-2">
                                <h1 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-3">
                                    {cardTitle}
                                </h1>
                            </div>
                        ) : null}

                        <div className="rounded-full bg-transparent p-1 transition-all hover:bg-zinc-800 hover:shadow-lg border border-solid hover:border-zinc-600">
                            <h3 className="text-xl font-semibold mb-2">{title}</h3>
                            <p className="text-gray-400 text-sm mb-1">{description}</p>
                        </div>
                    </div>
                );

                return link ? (
                    <a
                        key={title}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                        data-umami-event={eventName}
                    >
                        {content}
                    </a>
                ) : (
                    <div key={title}>{content}</div>
                );
            })}
        </div>
    );
}
