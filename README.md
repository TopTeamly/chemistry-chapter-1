# أطلس — الكيمياء | الباب الأول: الجدول الدوري للعناصر

موقع تعليمي تفاعلي (React + Vite + Tailwind CSS) للباب الأول من مادة الكيمياء — الثالثة ثانوي، القسم العلمي.
لا يحتوي المشروع على أي Backend أو قاعدة بيانات؛ كل الحالة (تمت الدراسة / المحفوظات) تُخزَّن محليًا في متصفح الطالب عبر LocalStorage.

---

## 1) تشغيل المشروع

يتطلب المشروع Node.js (الإصدار 18 أو أحدث).

```bash
npm install
npm run dev
```

سيعمل الموقع محليًا على العنوان الذي يظهر في الطرفية (عادة `http://localhost:5173`).

> **ملاحظة:** تم إعداد المشروع وكتابة كل الشيفرة والمكوّنات داخل بيئة عمل بلا اتصال إنترنت، لذلك لم يُشغَّل هنا فعليًا عبر `npm install`. راجع كل الشيفرة بعد التثبيت، وإن ظهر أي خطأ في الطرفية أو الـ Console أبلغني به لإصلاحه مباشرة.

## 2) تثبيت الاعتماديات (Dependencies)

`npm install` تكفي وحدها؛ كل الحزم المطلوبة (React، React Router، Tailwind، Lucide Icons) مذكورة في `package.json`.

## 3) البناء للإنتاج (Build)

```bash
npm run build
```

تُنشأ نسخة الإنتاج داخل مجلد `dist/`. يمكن معاينتها محليًا عبر:

```bash
npm run preview
```

يمكن رفع محتوى `dist/` مباشرة على أي استضافة ثابتة (Netlify، Vercel، GitHub Pages، إلخ). الموقع يستخدم `HashRouter`، لذلك يعمل بدون أي إعداد خاص بالخادم لإعادة التوجيه.

## 4) مكان المحتوى العلمي

كل المحتوى العلمي منفصل تمامًا عن التصميم، داخل:

```
src/data/chemistry/chapter-1/
├── chapter.js          ← بيانات الباب العامة (العنوان، الأهداف، قائمة الدروس)
├── lessons/             ← ملف مستقل لكل درس (lesson-01.js ... lesson-10.js)
│   └── index.js          ← يجمع كل الدروس في مصفوفة واحدة
├── quizzes/
│   └── quiz.js           ← أسئلة "اختبر فهمك" لكل درس
└── review.js            ← خلاصة الباب + بيانات خريطة المفاهيم
```

## 5) إضافة درس جديد

1. أنشئ ملفًا جديدًا مثل `src/data/chemistry/chapter-1/lessons/lesson-11.js` بالبنية نفسها الموجودة في أي درس حالي:
   ```js
   export default {
     id: 'lesson-11',
     number: 11,
     title: 'عنوان الدرس',
     intro: 'مقدمة قصيرة',
     sections: [ /* أقسام الدرس */ ],
   }
   ```
2. أضفه إلى `src/data/chemistry/chapter-1/lessons/index.js` (استيراد + إضافة إلى مصفوفة `lessons`).
3. أضف بيانات الدرس (id, number, slug, title) إلى مصفوفة `lessons` في `src/data/chemistry/chapter-1/chapter.js` حتى يظهر في خريطة الباب.

### أنواع الأقسام (Section types) المتاحة حاليًا
`text`, `twoLists`, `keyPoint`, `tip`, `familiesReveal`, `elementTable`, `shellTable`, `infoGrid`,
`orbitalDiagram` (mode: `pauli` أو `hund`), `fillingOrderPath`, `example`, `ionCompare`, `configBuilder`,
`compareColumns`, `metalGradient`, `dataTable`, `reactionGroup`, `flameColors`, `stateStrip`, `halogenLab`,
`nobleShell`, `boilingTimeline`, `usesCards`, `colorCompounds`, `formulaSimilarity`.

راجع `src/components/Section.jsx` لمعرفة الحقول التي يتوقعها كل نوع، أو انسخ قسمًا مشابهًا من درس موجود.

## 6) إضافة سؤال "اختبر فهمك"

في `src/data/chemistry/chapter-1/quizzes/quiz.js`، أضف كائن السؤال داخل مصفوفة معرّف الدرس المناسب (أنشئ مفتاحًا جديدًا إن لزم، مثل `'lesson-11': [...]`):

```js
{
  id: 'q15',
  question: 'نص السؤال؟',
  options: ['اختيار 1', 'اختيار 2', 'اختيار 3', 'اختيار 4'],
  answer: 0, // فهرس الاختيار الصحيح (يبدأ من 0)
}
```

## 7) إضافة صورة

ضع الصورة داخل `src/assets/images/` (أو `public/assets/images/` إذا أردت مسارًا ثابتًا لا يمر عبر Vite bundler)، ثم استوردها أو أشر إليها بمسارها داخل بيانات الدرس أو داخل المكوّن المناسب.

## 8) تغيير الشعار

استبدل الملف:

```
public/assets/logo/atlas-logo.png
```

بنفس الاسم، مع الحفاظ على أبعاد مناسبة (الشعار يُعرض بحجم متغير مع الحفاظ على أبعاده الأصلية تلقائيًا).

## 9) تغيير رابط اختبار Telegram

في `src/data/chemistry/chapter-1/chapter.js`، غيّر القيمة:

```js
telegramTestLink: 'TELEGRAM_TEST_LINK',
```

إلى رابط Telegram الفعلي، مثل: `https://t.me/your_channel`.

## 10) تغيير الألوان

الألوان معرّفة كمتغيرات Tailwind في `tailwind.config.js` ضمن `theme.extend.colors`:

- `navy` (الأزرق الداكن) — تدرجات 950 إلى 700
- `royal` (الأزرق الملكي/الأساسي) — 600 إلى 400
- `sky` (الأزرق الفاتح) — 300 إلى 100

عدّل قيم الـ hex هناك ليتغيّر لون الموقع بالكامل تلقائيًا (كل المكوّنات تستخدم هذه الأسماء بدل قيم hex مباشرة).

## 11) تغيير اسم الباب

في `src/data/chemistry/chapter-1/chapter.js`، عدّل الحقول:

```js
title: 'الباب الأول',
subtitle: 'الجدول الدوري للعناصر',
```

---

## بنية المشروع الكاملة

```
atlas-chemistry-chapter-1/
├── public/
│   └── assets/logo/atlas-logo.png
├── src/
│   ├── components/     ← كل مكوّنات الواجهة (قابلة لإعادة الاستخدام في أبواب لاحقة)
│   ├── pages/           ← صفحات الموقع (Home, ChapterMapPage, Lesson, Review, Bookmarks, Complete...)
│   ├── data/chemistry/chapter-1/  ← المحتوى العلمي (منفصل تمامًا عن التصميم)
│   ├── hooks/           ← خطافات React (useLocalProgress: تمت الدراسة + المحفوظات)
│   ├── utils/           ← أدوات مساعدة (LocalStorage، البحث)
│   ├── App.jsx / main.jsx / index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

هذه البنية مصمَّمة بحيث يمكن لاحقًا إضافة أبواب أخرى (مثل `chapter-2`) بإنشاء مجلد بيانات مشابه داخل `src/data/chemistry/` وإعادة استخدام المكوّنات نفسها دون تعديلها.

## ملاحظات مهمة

- **لا يوجد Backend ولا تسجيل دخول ولا نظام نقاط.** كل التفاعل (تمت الدراسة، المحفوظات) يُخزَّن في `localStorage` الخاص بمتصفح الطالب فقط.
- **الاختبار الكامل خارج الموقع** عبر رابط Telegram القابل للتغيير (انظر البند 9).
- المحتوى العلمي بأكمله مأخوذ حرفيًا من المصدر المزوَّد عند بناء الموقع، دون إضافة معلومات خارجية.
