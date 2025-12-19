import React from 'react'
import { Instagram, Linkedin, Github, Send, Mail } from 'lucide-react'

const links = [
	{ href: 'https://www.instagram.com/jeremaennena/', label: 'Instagram', eventName: 'instagram', icon: Instagram },
	{ href: 'https://www.linkedin.com/in/jeremaennena/', label: 'LinkedIn', eventName: 'linkedin', icon: Linkedin },
	{ href: 'https://github.com/maennenajere', label: 'GitHub', eventName: 'github', icon: Github },
	{ href: 'https://t.me/maeennenae', label: 'Telegram', eventName: 'telegram', icon: Send },
	{ href: 'mailto:contact@hillnose.xyz', label: 'Email', eventName: 'email', icon: Mail },
]

const Socials = () => {
	return (
		<div className="flex gap-5 justify-center">
			{links.map((link) => {
				const Icon = link.icon;
				return (
					<a
						key={link.label}
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={link.label}
						title={link.label}
						className="text-gray-400 hover:text-white transition-colors"
						data-umami-event={`badge_${link.eventName}`}
					>
						<Icon size={25} className="stroke-current" aria-hidden="true" />
					</a>
				);
			})}
		</div>
	)
}

export default Socials
