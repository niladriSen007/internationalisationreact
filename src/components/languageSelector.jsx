import i18next from "i18next"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'French' },
  { code: 'gc', name: 'German' },
  { code: 'hi', name: 'Hindi' },
  { code: 'ar', name: 'Arabic' },
  { code: 'bn', name: 'Bengali' },
]

const LanguageSelector = () => {
  const {i18n} = useTranslation()
  const changeLanguage = (code) =>{
    i18n.changeLanguage(code)
  }

  useEffect(()=>{
      document.body.dir = i18next.dir()
  },[i18n,i18n.language])
  return (
    <div>
      {
        languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() =>changeLanguage(lang.code)}
            className={`m-2 p-2 bg-slate-700 ${i18n.language == lang.code && "bg-blue-700"} text-white`}
          >
            {lang.name}
          </button>
        ))
      }
    </div>
  )
}
export default LanguageSelector