import { useLang } from '../../context/LangContext'
import GuidePage from './GuidePage'

export default function PresentationGuide() {
  const { lang } = useLang()
  const L = (he: string, en: string) => lang === 'he' ? he : en

  return (
    <GuidePage
      emoji="🎨"
      badge="free"
      title={L('מדריך מצגות', 'Presentation Guide')}
      subtitle={L('מצגות שמוכרות ומשכנעות', 'Presentations That Sell and Persuade')}
      description={L(
        'למד לבנות מצגות מרהיבות שלוכדות את תשומת הלב, מעבירות את המסר ומניעות לפעולה. בין אם זה לקוחות, משקיעים או הרצאות.',
        'Learn to build stunning presentations that capture attention, deliver the message and drive action. Whether for clients, investors or lectures.'
      )}
      sections={[
        {
          emoji: '🧠',
          title: L('הפסיכולוגיה מאחורי מצגת טובה', 'The Psychology Behind a Great Presentation'),
          content: L(
            'המוח האנושי מעבד תמונות 60,000 פעמים מהר יותר מטקסט. מצגת טובה מדברת לשני חלקי המוח:\n\n• השכל (לוגי): נתונים, עובדות, ROI\n• הרגש: סיפורים, תמונות, צבעים\n\nכלל 10-20-30 של גאי קוואסאקי: מקסימום 10 שקפים, 20 דקות, פונט 30.',
            'The human brain processes images 60,000 times faster than text. A great presentation speaks to both parts of the brain:\n\n• Logic: data, facts, ROI\n• Emotion: stories, images, colors\n\nGuy Kawasaki\'s 10-20-30 rule: maximum 10 slides, 20 minutes, font size 30.'
          ),
        },
        {
          emoji: '🎯',
          title: L('מבנה מצגת מנצחת', 'Winning Presentation Structure'),
          content: L(
            '1. Hook - פתיחה שמושכת (שאלה, מספר מפתיע, סיפור)\n2. הבעיה - הצג את הכאב של הקהל\n3. פתרון - הציג את הפתרון שלך\n4. הוכחה - נתונים, Case Studies, המלצות\n5. CTA - מה אתה רוצה שיעשו עכשיו\n\nכל שקף = רעיון אחד בלבד.',
            '1. Hook - compelling opening (question, surprising number, story)\n2. Problem - present the audience\'s pain\n3. Solution - present your solution\n4. Proof - data, case studies, testimonials\n5. CTA - what you want them to do now\n\nOne slide = one idea only.'
          ),
        },
        {
          emoji: '🎨',
          title: L('עיצוב ויזואלי', 'Visual Design'),
          content: L(
            '• פלטת צבעים: מקסימום 3 צבעים (עיקרי, משני, אקסנט)\n• פונטים: 2 לכל היותר (כותרת + גוף)\n• Rule of Thirds: אל תמרכז הכל\n• White Space: ריק זה כוח, לא בזבוז\n• תמונות: איכות גבוהה מ-Unsplash, Pexels\n• אייקונים: עקביים מאותה ספריה (Lucide, Phosphor)',
            '• Color palette: maximum 3 colors (primary, secondary, accent)\n• Fonts: 2 at most (heading + body)\n• Rule of Thirds: don\'t center everything\n• White Space: empty space is power, not waste\n• Images: high quality from Unsplash, Pexels\n• Icons: consistent from the same library (Lucide, Phosphor)'
          ),
        },
        {
          emoji: '⚡',
          title: L('כלים מומלצים', 'Recommended Tools'),
          content: L(
            '• Canva: הכי קל לשימוש, תבניות מוכנות\n• Google Slides: שיתוף פעולה בזמן אמת\n• PowerPoint: הכי גמיש לאנימציות\n• Gamma AI: מצגת מלאה מפסקה אחת!\n• Beautiful.ai: עיצוב אוטומטי חכם\n\nהמלצה: Canva + Gamma AI לתוצאה מטורפת.',
            '• Canva: easiest to use, ready-made templates\n• Google Slides: real-time collaboration\n• PowerPoint: most flexible for animations\n• Gamma AI: full presentation from one paragraph!\n• Beautiful.ai: smart automatic design\n\nRecommendation: Canva + Gamma AI for amazing results.'
          ),
        },
        {
          emoji: '💡',
          title: L('טיפים של מקצוענים', 'Pro Tips'),
          content: L(
            '• הכן "Slide Zero" - שקף שמוכן לפני ההרצאה\n• תרגל בקול רם לפחות 3 פעמים\n• הכן גרסת PDF לשליחה אחרי\n• אל תקרא מהשקפים - הם תמיכה, לא הנאום\n• סיים תמיד עם שאלה שפותחת דיאלוג\n• השתמש ב-AI לכתיבת דברי הסבר (Claude, ChatGPT)',
            '• Prepare a "Slide Zero" - a slide ready before the talk\n• Practice out loud at least 3 times\n• Prepare a PDF version to send afterwards\n• Don\'t read from the slides - they\'re support, not the speech\n• Always end with a question that opens dialogue\n• Use AI to write speaker notes (Claude, ChatGPT)'
          ),
        },
      ]}
    />
  )
}
