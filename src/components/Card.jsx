export default function Card() {
    const items = [
        { cardTitle: 'Professional / Work', title: 'LinkedIn', description: 'Connect with my professional profile', link: 'https://www.linkedin.com/in/jeremaennena' },
        { cardTitle: '', title: 'Portfolio', description: 'WIP', link: 'https://www.hillnose.xyz' },
        { cardTitle: '', title: 'GitHub', description: 'where I git push --force my code', link: 'https://github.com/maennenajere' },
        { cardTitle: 'Projects', title: 'Discover Beaky', description: '', link: 'https://beaknet.eu/' },
        { cardTitle: 'Contact ☎️', title: 'Get in touch', description: '', link: 'mailto:contact@hillnose.xyz' },
        { cardTitle: '', title: 'Telegram', description: '', link: 'https://t.me/maeennenae' },
    ];

    return (
        <div className="w-full space-y-4">
            {items.map(({ cardTitle, title, description, link }) => {
                const content = (
                    <div>
                        {cardTitle ? <div className="mb-2"><h1 className="text-sm font-semibold text-zinc-300 uppercase tracking-wide mb-3">{cardTitle}</h1></div> : null}
                        <div className="rounded-full bg-transparent p-1 transition-all hover:bg-zinc-800 hover:shadow-lg border border-solid hover:border-zinc-600">
                            <h3 className="text-xl font-semibold mb-2">{title}</h3>
                            <p className="text-gray-400 text-sm mb-1">{description}</p>
                        </div>
                    </div>
                );

                return link ? (
                    <a key={title} href={link} target="_blank" rel="noopener noreferrer" className="block">
                        {content}
                    </a>
                ) : (
                    <div key={title}>{content}</div>
                );
            })}
        </div>
    );
}
