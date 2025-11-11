import React from 'react'
import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n } = useTranslation()

  const change = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
      <div className="flex gap-2">
          <button
              onClick={() => i18n.changeLanguage('en')}
              className={`text-sm px-2 py-1 rounded transition  ${i18n.language === 'en' ? 'bg-white text-black' : 'bg-transparent border text-white hover:bg-zinc-700 '}`}
          >
              EN
          </button>
          <button
              onClick={() => i18n.changeLanguage('fi')}
              className={`text-sm px-2 py-1 rounded transition  ${i18n.language === 'fi' ? 'bg-white text-black' : 'bg-transparent border text-white hover:bg-zinc-700 '}`}
          >
              FI
          </button>
      </div>
  )
}

