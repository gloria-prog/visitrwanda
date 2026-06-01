import { reactive, toRef } from 'vue'

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      gallery: 'Gallery',
      images: 'Images',
      videos: 'Videos',
      destination: 'Destination',
      northern: 'Northern province',
      southern: 'Southern province',
      eastern: 'Eastern province',
      western: 'Western province',
      kigali: 'Kigali city',
      contact: 'Contact',
    },
    footer: {
      quickLinks: 'Quick links',
      destination: 'Destination',
      contact: 'Contact',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      gallery: 'Galerie',
      images: 'Images',
      videos: 'Vidéos',
      destination: 'Destination',
      northern: 'Province du Nord',
      southern: 'Province du Sud',
      eastern: 'Province de l\'Est',
      western: 'Province de l\'Ouest',
      kigali: 'Ville de Kigali',
      contact: 'Contact',
    },
    footer: {
      quickLinks: 'Liens rapides',
      destination: 'Destination',
      contact: 'Contact',
    },
  },
  rw: {
    nav: {
      home: 'Ahabanza',
      about: 'Kumenyekuza',
      services: 'Serivisi',
      gallery: 'Inyandiko z\'amashusho',
      images: 'Amashusho',
      videos: 'Videwo',
      destination: 'Inzira',
      northern: 'Akarere k\'Amajyaruguru',
      southern: 'Akarere k\'Amajyepfo',
      eastern: 'Akarere k\'Ubwepfu',
      western: 'Akarere k\'Iburengerazuba',
      kigali: 'Umujyi wa Kigali',
      contact: 'Kubaza',
    },
    footer: {
      quickLinks: 'Ihuza Vuba',
      destination: 'Inzira',
      contact: 'Kubaza',
    },
  },
}

export const i18n = reactive({
  locale: localStorage.getItem('locale') || 'en',
  translations,
  
  setLocale(locale) {
    this.locale = locale
    localStorage.setItem('locale', locale)
  },
  
  t(key) {
    const keys = key.split('.')
    let value = this.translations[this.locale]
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key
      }
    }
    
    return value || key
  },
})

export function useI18n() {
  return {
    locale: toRef(i18n, 'locale'),
    setLocale: (locale) => i18n.setLocale(locale),
    t: (key) => i18n.t(key),
  }
}
