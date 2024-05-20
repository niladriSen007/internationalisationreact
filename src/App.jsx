import { useTranslation } from "react-i18next"
import LanguageSelector from "./components/languageSelector"

const App = () => {

  const {t} = useTranslation()
  const {info1} = t('information',{   
    term: "Localization and Internationalization"
  })
  return (
    <div className="w-screen h-screen bg-slate-900 text-white text-4xl p-12">
      <LanguageSelector />
      {t('Welcome to React')}
      <div className="mt-4">
        {info1}
      </div>
    </div>
  )
}
export default App