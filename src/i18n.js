
import i18next from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    lng: "hi",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next",
          information: {
            info1: "This is a sample text to show how {{term}} works in react.",
          },
        },
      },
      fr: {
        translation: {
          "Welcome to React": "Bienvenue à React et react-i18next",
          information: {
            info1:
              "Ceci est un texte d'exemple pour montrer comment {{term}} fonctionne dans react.",
          },
        },
      },
      gc: {
        translation: {
          "Welcome to React": "Willkommen bei React und react-i18next",
          information: {
            info1:
              "Dies ist ein Beispieltext, der zeigt, wie {{term}} in React funktioniert.",
          },
        },
      },
      hi: {
        translation: {
          "Welcome to React": "React और react-i18next में आपका स्वागत है",
          information: {
            info1:
              "यह एक नमूना पाठ है जो दिखाता है कि रिएक्ट में {{term}} कैसे काम करता है।",
          },
        },
      },
      ar: {
        translation: {
          "Welcome to React": "مرحبًا بك في React و react-i18next",
          information: {
            info1:
              "هذا نص عينة لإظهار كيف يعمل {{term}} في رياكت.",
          },
        },
      },
      bn: {
        translation: {
          "Welcome to React": "React এবং react-i18next এ আপনাকে স্বাগতম",
          information: {
            info1:
              "এটি একটি নমুনা পাঠ যা দেখায় কীভাবে {{term}} রিয়েক্টে কাজ করে।",
          },
        },
      },
    },
  })
