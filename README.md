# hillnoselinks

A modern, beautiful Linktree alternative built with Vite and React.

## ✨ Features

- 🎨 Modern gradient design with smooth animations
- 📱 Fully responsive (mobile and desktop)
- 🌓 Dark/light mode support
- ⚡ Lightning fast with Vite
- 🎯 Simple and clean interface
- 🔗 Easy to customize links and profile

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/maennenajere/hillnoselinks.git
cd hillnoselinks
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code with ESLint

### Customization

To customize your link hub, edit the `profileData` object in `src/App.jsx`:

```javascript
const profileData = {
  name: 'Your Name',
  bio: 'Your bio text',
  avatar: '🔗', // Any emoji or text
  links: [
    {
      id: 1,
      title: 'Link Title',
      url: 'https://your-url.com',
      icon: '🌟' // Any emoji
    },
    // Add more links...
  ]
}
```

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to deploy to any static hosting service.

## 🎨 Screenshots

### Desktop View
![Desktop Screenshot](https://github.com/user-attachments/assets/02b4cf94-1663-4520-aa8a-a8eee5d765cf)

### Mobile View
![Mobile Screenshot](https://github.com/user-attachments/assets/dc64672f-cddf-4bc3-b221-d1a1f21f6cb4)

## 🔧 Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features (gradients, animations)
- **ESLint** - Code linting

## 📄 License

MIT

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ using Vite + React
