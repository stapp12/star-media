import { useLang } from '../../context/LangContext'
import GuidePage from './GuidePage'

export default function WebCourseGuide() {
  const { lang } = useLang()
  const L = (he: string, en: string) => lang === 'he' ? he : en

  return (
    <GuidePage
      emoji="🌐"
      badge="paid"
      title={L('בניית אתרים עם AI', 'Building Websites with AI')}
      subtitle={L('מ-0 לאתר מקצועי תוך יום אחד', 'From Zero to a Professional Website in One Day')}
      description={L(
        'למד לבנות אתר מרשים ומקצועי עם כלי AI מתקדמים - ללא קידוד, ללא ניסיון קודם.',
        'Learn to build an impressive professional website with advanced AI tools - no coding, no prior experience needed.'
      )}
      sections={[
        {
          emoji: '🤖',
          title: L('AI שינה את עולם בניית האתרים', 'AI Changed the World of Web Development'),
          content: L(
            'עד לפני שנתיים, אתר מקצועי עלה עשרות אלפי שקלים ולקח חודשים. היום, עם כלי AI נכונים, כל אחד יכול לבנות אתר מרשים תוך יום.\n\nהכלים כוללים: Lovable, Bolt, v0, Framer, Webflow + AI - כל אחד מהם מאפשר בנייה מהירה ויפה.',
            'Until two years ago, a professional website cost tens of thousands of dollars and took months. Today, with the right AI tools, anyone can build an impressive website in a day.\n\nTools include: Lovable, Bolt, v0, Framer, Webflow + AI - each enabling fast and beautiful building.'
          ),
        },
        {
          emoji: '📐',
          title: L('תכנון לפני הבנייה', 'Planning Before Building'),
          content: L(
            '• הגדר מטרה: מה האתר צריך לעשות? (מכירות, לידים, פורטפוליו)\n• קהל יעד: מי יגיע לאתר? מה הוא מחפש?\n• עמודים הכרחיים: דף בית, שירותים, עלינו, צור קשר\n• CTA ברור: מה הפעולה שאתה רוצה שהמבקר יעשה?\n• תכנן wireframe פשוט - גם על נייר',
            '• Define goal: what should the website do? (sales, leads, portfolio)\n• Target audience: who will visit? What are they looking for?\n• Essential pages: home, services, about, contact\n• Clear CTA: what action do you want the visitor to take?\n• Plan a simple wireframe - even on paper'
          ),
        },
        {
          emoji: '🎨',
          title: L('עיצוב עם AI', 'Designing with AI'),
          content: L(
            'כלים לעיצוב:\n• Midjourney/DALL·E - תמונות ייחודיות לאתר\n• Canva AI - לוגו, באנרים, גרפיקה\n• Adobe Firefly - עריכת תמונות חכמה\n• Remove.bg - הסרת רקע תוך שניות\n\nטיפ: אחידות בצבעים וגופנים = אתר מקצועי. בחר 2 צבעים ו-2 גופנים ותישאר איתם.',
            'Design tools:\n• Midjourney/DALL·E - unique images for the site\n• Canva AI - logo, banners, graphics\n• Adobe Firefly - smart image editing\n• Remove.bg - background removal in seconds\n\nTip: consistency in colors and fonts = professional website. Choose 2 colors and 2 fonts and stick with them.'
          ),
        },
        {
          emoji: '⚡',
          title: L('בנייה מהירה עם Lovable/Bolt', 'Fast Building with Lovable/Bolt'),
          content: L(
            '1. כתוב prompt מפורט: "בנה לי אתר לעסק X עם דף בית, שירותים וצור קשר. סגנון: כהה, מינימליסטי, עם זהב"\n2. הוסף את הלוגו והתמונות שלך\n3. ערוך טקסטים\n4. בדוק במובייל\n5. פרסם\n\nכל השלבים - פחות מיום.',
            '1. Write a detailed prompt: "Build me a website for business X with a homepage, services and contact. Style: dark, minimalist, with gold"\n2. Add your logo and images\n3. Edit texts\n4. Test on mobile\n5. Publish\n\nAll steps - less than a day.'
          ),
        },
        {
          emoji: '🔍',
          title: L('SEO בסיסי לאתר חדש', 'Basic SEO for a New Website'),
          content: L(
            '• כותרת H1 ברורה עם מילת מפתח\n• Meta description בכל עמוד (עד 160 תווים)\n• תמונות עם alt text\n• מהירות טעינה: אל תעלה תמונות מעל 500KB\n• Google Search Console: הגש sitemap\n• Google My Business: חיוני לעסקים מקומיים',
            '• Clear H1 title with keyword\n• Meta description on every page (up to 160 characters)\n• Images with alt text\n• Loading speed: don\'t upload images above 500KB\n• Google Search Console: submit sitemap\n• Google My Business: essential for local businesses'
          ),
        },
        {
          emoji: '📊',
          title: L('מדידה ושיפור', 'Measurement and Improvement'),
          content: L(
            'חבר Google Analytics מיד:\n• כמה מבקרים מגיעים\n• מאיפה הם מגיעים\n• אילו עמודים הכי פופולריים\n• כמה אחוז יוצאים מיד (Bounce Rate)\n\nיעד ריאלי: 3 חודשים לאחר השקה - 500 מבקרים/חודש.',
            'Connect Google Analytics immediately:\n• How many visitors are coming\n• Where they\'re coming from\n• Which pages are most popular\n• What percentage leave immediately (Bounce Rate)\n\nRealistic goal: 3 months after launch - 500 visitors/month.'
          ),
        },
      ]}
    />
  )
}
