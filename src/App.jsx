import './App.css'
import LinkCard from './components/LinkCard'

function App() {
  const profileData = {
    name: 'hillnoselinks',
    bio: 'Your awesome link hub',
    avatar: '🔗',
    links: [
      {
        id: 1,
        title: 'GitHub',
        url: 'https://github.com',
        icon: '🐙'
      },
      {
        id: 2,
        title: 'Twitter',
        url: 'https://twitter.com',
        icon: '🐦'
      },
      {
        id: 3,
        title: 'LinkedIn',
        url: 'https://linkedin.com',
        icon: '💼'
      },
      {
        id: 4,
        title: 'Portfolio',
        url: 'https://example.com',
        icon: '🌐'
      },
      {
        id: 5,
        title: 'Blog',
        url: 'https://example.com/blog',
        icon: '📝'
      },
      {
        id: 6,
        title: 'Email',
        url: 'mailto:hello@example.com',
        icon: '📧'
      }
    ]
  }

  return (
    <div className="container">
      <div className="profile">
        <div className="avatar">{profileData.avatar}</div>
        <h1 className="name">{profileData.name}</h1>
        <p className="bio">{profileData.bio}</p>
      </div>
      
      <div className="links">
        {profileData.links.map(link => (
          <LinkCard
            key={link.id}
            url={link.url}
            title={link.title}
            icon={link.icon}
          />
        ))}
      </div>

      <footer className="footer">
        Made with ❤️ using Vite + React
      </footer>
    </div>
  )
}

export default App
