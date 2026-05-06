import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
  type?: string
}

export default function SEOHead({ title, description, image = '/logo.png', url, type = 'website' }: SEOProps) {
  useEffect(() => {
    document.title = title

    const upsert = (attr: string, val: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${val}"]`) as HTMLMetaElement
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, val)
        document.head.appendChild(el)
      }
      el.content = content
    }

    upsert('name', 'description', description)
    upsert('property', 'og:title', title)
    upsert('property', 'og:description', description)
    upsert('property', 'og:image', image)
    upsert('property', 'og:type', type)
    if (url) upsert('property', 'og:url', url)
    upsert('name', 'twitter:card', 'summary_large_image')
    upsert('name', 'twitter:title', title)
    upsert('name', 'twitter:description', description)
    upsert('name', 'twitter:image', image)
  }, [title, description, image, url, type])

  return null
}
