import React from 'react'
import { Instagram, Linkedin, Github, Send, Mail } from 'lucide-react'

const links = [
  { href: 'https://www.instagram.com/jeremaennena/', label: 'Instagram', Icon: Instagram },
  { href: 'https://www.linkedin.com/in/jeremaennena/', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://github.com/maennenajere', label: 'GitHub', Icon: Github },
  { href: 'https://t.me/maeennenae', label: 'Telegram', Icon: Send },
    { href: 'mailto:jere.maennena@gmail.com', label: 'Email', Icon: Mail },
]

const Socials = () => {
  return (
    <div className="flex gap-5 justify-center">
      {links.map(({ href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-gray-400 hover:text-white transition-colors"
          title={label}
        >
          <Icon size={25} className="stroke-current" aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}

export default Socials
