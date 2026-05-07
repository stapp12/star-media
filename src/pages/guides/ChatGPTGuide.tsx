import { useLang } from '../../context/LangContext'
import GuidePage from './GuidePage'

export default function ChatGPTGuide() {
  const { lang } = useLang()
  const L = (he: string, en: string) => lang === 'he' ? he : en

  return (
    <GuidePage
      emoji="💡"
      badge="free"
      title={L('מדריך ChatGPT לעסקים', 'ChatGPT for Business Guide')}
      subtitle={L('תחסוך שעות בכל שבוע - מהיום', 'Save Hours Every Week - Starting Today')}
      description={L(
        'המדריך המעשי ביותר לשימוש ב-ChatGPT ו-Claude לצמיחה עסקית. כלים, פרומפטים ואסטרטגיות שעובדות.',
        'The most practical guide to using ChatGPT and Claude for business growth. Tools, prompts and strategies that work.'
      )}
      sections={[
        {
          emoji: '🚀',
          title: L('ה-10 שימושים הכי שימושיים לעסק', 'The 10 Most Useful Business Applications'),
          content: L(
            '1. כתיבת פוסטים לסושיאל\n2. תשובה למיילים קשים\n3. יצירת תוכן שיווקי\n4. ניתוח מתחרים\n5. כתיבת תיאורי מוצרים\n6. יצירת FAQ לאתר\n7. תכנון קמפיינים\n8. כתיבת ביוגרפיה מקצועית\n9. סיכום מסמכים ארוכים\n10. רעיונות לתוכן חדשים',
            '1. Writing social media posts\n2. Replying to difficult emails\n3. Creating marketing content\n4. Competitor analysis\n5. Writing product descriptions\n6. Creating website FAQs\n7. Planning campaigns\n8. Writing a professional bio\n9. Summarizing long documents\n10. Generating new content ideas'
          ),
        },
        {
          emoji: '✍️',
          title: L('פרומפטים מנצחים שתעתיק', 'Winning Prompts to Copy'),
          content: L(
            'לפוסט אינסטגרם:\n"כתוב פוסט אינסטגרם ב[עברית] על [נושא]. הקהל: [תאר]. סגנון: [מקצועי/קליל/מניע]. כלול CTA לסוף. מקסימום 150 מילה."\n\nלמייל שיווקי:\n"כתוב מייל שיווקי קצר (200 מילה) שמציע [שירות] ל[קהל]. הדגש את [תועלת עיקרית]. CTA: [פעולה רצויה]."\n\nלניתוח מתחרה:\n"נתח את [שם מתחרה]. מה חזק? מה חלש? מה ההזדמנות שלי?"',
            'For an Instagram post:\n"Write an Instagram post in [English] about [topic]. Audience: [describe]. Style: [professional/casual/motivating]. Include a CTA at the end. Maximum 150 words."\n\nFor a marketing email:\n"Write a short marketing email (200 words) offering [service] to [audience]. Highlight [main benefit]. CTA: [desired action]."\n\nFor competitor analysis:\n"Analyze [competitor name]. What are their strengths? Weaknesses? What is my opportunity?"'
          ),
        },
        {
          emoji: '⚡',
          title: L('Prompt Engineering - הטריקים', 'Prompt Engineering - The Tricks'),
          content: L(
            '• תמיד ציין את קהל היעד\n• בקש פורמט ספציפי (רשימה, פסקאות, טבלה)\n• הוסף "בסגנון [מותג/אדם]" לסגנון מדויק\n• השתמש ב"Act as" - "פעל כמומחה שיווק"\n• בקש אופציות: "תן לי 5 גרסאות"\n• הוסף מגבלות: "מקסימום 100 מילה, ללא ז׳רגון"\n• Iterate: "עשה את זה יותר דרמטי/מקצועי/מצחיק"',
            '• Always specify the target audience\n• Request a specific format (list, paragraphs, table)\n• Add "in the style of [brand/person]" for precise style\n• Use "Act as" - "Act as a marketing expert"\n• Ask for options: "Give me 5 versions"\n• Add constraints: "Maximum 100 words, no jargon"\n• Iterate: "Make it more dramatic/professional/funny"'
          ),
        },
        {
          emoji: '🔄',
          title: L('אוטומציה עם AI', 'Automation with AI'),
          content: L(
            'הצרף AI לתהליכי העבודה שלך:\n\n• Zapier + ChatGPT: פוסטים אוטומטיים מRSS\n• Make + Claude: מיילים אוטומטיים\n• Notion AI: ניהול משימות חכם\n• Canva AI: עיצוב מהטקסט\n• Buffer AI: תזמון תוכן חכם\n\nהמטרה: לבנות "מפעל תוכן" שעובד גם כשאתה ישן.',
            'Integrate AI into your workflows:\n\n• Zapier + ChatGPT: automatic posts from RSS\n• Make + Claude: automatic emails\n• Notion AI: smart task management\n• Canva AI: design from text\n• Buffer AI: smart content scheduling\n\nThe goal: build a "content factory" that works even while you sleep.'
          ),
        },
        {
          emoji: '⚠️',
          title: L('טעויות נפוצות שיש להימנע', 'Common Mistakes to Avoid'),
          content: L(
            '• לסמוך על AI בלי לבדוק עובדות\n• להשתמש בתוצר הגולמי ללא עריכה\n• פרומפטים כלליים מדי ("כתוב לי משהו טוב")\n• לא להוסיף קול אישי לתוצר\n• לשכוח לבדוק לפלגיאריזם\n\nכלל: AI הוא העוזר, לא הבוס.',
            '• Trusting AI without fact-checking\n• Using raw output without editing\n• Prompts that are too generic ("write me something good")\n• Not adding your personal voice to the output\n• Forgetting to check for plagiarism\n\nRule: AI is the assistant, not the boss.'
          ),
        },
      ]}
    />
  )
}
