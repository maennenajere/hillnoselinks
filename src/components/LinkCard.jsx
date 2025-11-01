import './LinkCard.css'

function LinkCard({ url, title, icon }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="link-card">
      {icon && <span className="link-icon">{icon}</span>}
      <span className="link-title">{title}</span>
      <span className="link-arrow">→</span>
    </a>
  )
}

export default LinkCard
