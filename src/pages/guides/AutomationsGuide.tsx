import { useLang } from '../../context/LangContext'
import GuidePage from './GuidePage'

export default function AutomationsGuide() {
  const { lang } = useLang()
  const L = (he: string, en: string) => lang === 'he' ? he : en

  return (
    <GuidePage
      emoji="⚡"
      badge="paid"
      title={L('אוטומציות לעסקים', 'Business Automations')}
      subtitle={L('תהליכים אוטומטיים שחוסכים שעות עבודה בשבוע', 'Automated Processes That Save Hours of Work Per Week')}
      description={L(
        'למד לבנות אוטומציות חכמות שרצות לבד - כך תוכל להתמקד בצמיחה במקום בעבודה שגרתית.',
        'Learn to build smart automations that run themselves - so you can focus on growth instead of routine work.'
      )}
      sections={[
        {
          emoji: '🤔',
          title: L('מה זה אוטומציה ולמה זה משנה?', 'What is Automation and Why Does it Matter?'),
          content: L(
            'אוטומציה היא תהליך שרץ לבד - ללא התערבות אנושית. מייל שנשלח אוטומטית, משימה שנוצרת לבד, נתונים שמועברים בין מערכות.\n\nעסק ממוצע בזבז 30% מזמנו על משימות שחוזרות על עצמן. אוטומציות מחזירות לך את הזמן הזה.',
            'Automation is a process that runs by itself - without human intervention. An email sent automatically, a task created on its own, data transferred between systems.\n\nThe average business wastes 30% of its time on repetitive tasks. Automations give you that time back.'
          ),
        },
        {
          emoji: '🛠️',
          title: L('הכלים המובילים לאוטומציה', 'Leading Automation Tools'),
          content: L(
            '• Make (לשעבר Integromat) - הכי גמיש וחזק\n• Zapier - הכי קל לשימוש, אלפי אינטגרציות\n• n8n - קוד פתוח, בחינם על שרת שלך\n• Google Apps Script - אוטומציות ב-Google Workspace\n• Airtable + Automations - לניהול נתונים חכם',
            '• Make (formerly Integromat) - most flexible and powerful\n• Zapier - easiest to use, thousands of integrations\n• n8n - open source, free on your own server\n• Google Apps Script - automations in Google Workspace\n• Airtable + Automations - for smart data management'
          ),
        },
        {
          emoji: '📋',
          title: L('5 אוטומציות שכל עסק צריך', '5 Automations Every Business Needs'),
          content: L(
            '1. לקוח חדש ב-CRM - שלח מייל קבלת פנים אוטומטי\n2. טופס יצירת קשר - צור משימה ב-Trello/Notion + שלח SMS\n3. פוסט חדש ב-Blog - שתף אוטומטית בכל הרשתות החברתיות\n4. חשבונית שולמה - שלח קבלה + עדכן גיליון אלקטרוני\n5. ביקורת חדשה ב-Google - שלח התראה לטלגרם',
            '1. New client in CRM - send automatic welcome email\n2. Contact form - create a task in Trello/Notion + send SMS\n3. New blog post - automatically share to all social networks\n4. Invoice paid - send receipt + update spreadsheet\n5. New Google review - send Telegram notification'
          ),
        },
        {
          emoji: '🔗',
          title: L('בניית האוטומציה הראשונה שלך', 'Building Your First Automation'),
          content: L(
            '• הגדר Trigger: מה מפעיל את האוטומציה? (טופס, מייל, תאריך)\n• הגדר Action: מה קורה אחר כך? (שלח מייל, צור שורה, עדכן רשומה)\n• בדוק: הרץ את האוטומציה ידנית פעם אחת\n• הפעל: חבר לנתונים אמיתיים\n• נטר: בדוק שבוע ראשון שהכל עובד',
            '• Define Trigger: what activates the automation? (form, email, date)\n• Define Action: what happens next? (send email, create row, update record)\n• Test: run the automation manually once\n• Activate: connect to real data\n• Monitor: check the first week that everything works'
          ),
        },
        {
          emoji: '💰',
          title: L('חישוב ROI של אוטומציה', 'Calculating Automation ROI'),
          content: L(
            'דוגמה: שליחת הצעות מחיר ידנית לוקחת 20 דקות × 30 לקוחות/חודש = 10 שעות\nאוטומציה: 0 דקות × 30 = 0 שעות\n\nאם שעת העבודה שלך שווה ₪200 - חסכת ₪2,000 בחודש.\nהאוטומציה עולה ₪50/חודש.\nROI: 3,900%',
            'Example: manual quote sending takes 20 minutes × 30 clients/month = 10 hours\nAutomation: 0 minutes × 30 = 0 hours\n\nIf your hourly rate is $50 - you saved $500/month.\nThe automation costs $15/month.\nROI: 3,233%'
          ),
        },
        {
          emoji: '🚀',
          title: L('שלב הבא - AI + אוטומציה', 'Next Level - AI + Automation'),
          content: L(
            'שלב AI לתוך האוטומציות שלך:\n• לקוח שולח שאלה - AI כותב תשובה מותאמת - נשלח אוטומטית\n• פוסט חדש - AI מייצר 5 גרסאות לרשתות שונות - פרסום מתוזמן\n• נתוני מכירות - AI מנתח ומייצר דו"ח - נשלח למנהל\n\nזו הרמה הבאה של עסק חכם.',
            'Integrate AI into your automations:\n• Client sends a question - AI writes a tailored reply - sent automatically\n• New post - AI generates 5 versions for different networks - scheduled publishing\n• Sales data - AI analyzes and generates a report - sent to manager\n\nThis is the next level of a smart business.'
          ),
        },
      ]}
    />
  )
}
