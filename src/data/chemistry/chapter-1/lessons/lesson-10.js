// الدرس 10: الفلزات الانتقالية
export default {
  id: 'lesson-10',
  number: 10,
  title: 'الفلزات الانتقالية',
  intro: 'مجموعة عناصر بين المجموعة II والمجموعة III، تتميز بتعدد حالات التأكسد والمركبات الملونة.',
  sections: [
    {
      id: 'l10-s1',
      type: 'text',
      title: 'الفلزات الانتقالية',
      body: [
        'توجد مجموعة من العناصر الانتقالية بين المجموعة II والمجموعة III في الجدول الدوري.',
        'من أمثلتها: الكروم، المنجنيز، الحديد، النيكل، النحاس.',
      ],
    },
    {
      id: 'l10-s2',
      type: 'infoGrid',
      title: 'خواص الفلزات الانتقالية',
      items: [
        { label: '', value: 'درجات انصهار عالية' },
        { label: '', value: 'درجات غليان عالية' },
        { label: '', value: 'كثافات عالية نسبيًا' },
        { label: '', value: 'مركبات ملونة غالبًا' },
        { label: '', value: 'حالات تأكسد متعددة' },
      ],
    },
    {
      id: 'l10-s3',
      type: 'example',
      title: 'أمثلة على حالات التأكسد',
      items: [
        { label: 'الحديد', equation: 'Fe²⁺ / Fe³⁺' },
        { label: 'النحاس', equation: 'Cu⁺ / Cu²⁺' },
      ],
    },
    {
      id: 'l10-s4',
      type: 'colorCompounds',
      title: 'مركبات الفلزات الانتقالية',
      note: 'ألوان المركبات تختلف حسب العنصر وحالة التأكسد.',
      items: [
        { label: 'مركبات النحاس II', color: 'زرقاء', hex: '#2563EB' },
        { label: 'مركبات الحديد II', color: 'خضراء', hex: '#16A34A' },
        { label: 'مركبات الحديد III', color: 'صفراء/بنية', hex: '#B45309' },
        { label: 'مركبات الكروم', color: 'ألوان مختلفة حسب المركب', hex: '#7C3AED' },
      ],
    },
    {
      id: 'l10-s5',
      type: 'usesCards',
      title: 'استخدامات الفلزات الانتقالية',
      items: [
        { title: 'الألومنيوم/التيتانيوم', text: 'الاستخدامات المرتبطة بخفة الوزن وقوة المواد حسب المحتوى.' },
        { title: 'الكروم', text: 'يستخدم في الطلاء الكهربائي وصناعة الفولاذ المقاوم للصدأ.' },
        { title: 'المنجنيز', text: 'يستخدم في صناعة الفولاذ.' },
        { title: 'النيكل', text: 'يستخدم في العملات وبعض السبائك.' },
        { title: 'النحاس', text: 'يستخدم بسبب خواصه وتطبيقاته المذكورة في المادة.' },
        { title: 'الفاناديوم', text: 'يستخدم في بعض التطبيقات الصناعية المذكورة.' },
      ],
    },
    {
      id: 'l10-s6',
      type: 'text',
      title: 'تشابه الصيغ الكيميائية',
      body: [
        'العناصر التي تنتمي إلى المجموعة نفسها تمتلك العدد نفسه من إلكترونات التكافؤ، ولذلك تتشابه صيغ مركباتها.',
        'مثلاً عناصر المجموعة I: Na, K تشكل مركبات بصيغ متشابهة.',
      ],
    },
    {
      id: 'l10-s7',
      type: 'formulaSimilarity',
      title: 'استكشف تشابه الصيغ حسب المجموعة',
      note: 'اختر مجموعة وشاهد التشابه بين صيغ مركبات عناصرها.',
      groups: [
        {
          group: 'I',
          rows: [
            { element: 'Na', oxide: 'Na₂O', hydroxide: 'NaOH', nitrate: 'NaNO₃', sulfate: 'Na₂SO₄', carbonate: 'Na₂CO₃', chloride: 'NaCl' },
            { element: 'K', oxide: 'K₂O', hydroxide: 'KOH', nitrate: 'KNO₃', sulfate: 'K₂SO₄', carbonate: 'K₂CO₃', chloride: 'KCl' },
          ],
        },
        {
          group: 'II',
          rows: [
            { element: 'Mg', oxide: 'MgO', hydroxide: 'Mg(OH)₂', nitrate: 'Mg(NO₃)₂', sulfate: 'MgSO₄', carbonate: 'MgCO₃', chloride: 'MgCl₂' },
            { element: 'Ca', oxide: 'CaO', hydroxide: 'Ca(OH)₂', nitrate: 'Ca(NO₃)₂', sulfate: 'CaSO₄', carbonate: 'CaCO₃', chloride: 'CaCl₂' },
          ],
        },
        {
          group: 'III',
          rows: [
            { element: 'B', oxide: 'B₂O₃', hydroxide: 'B(OH)₃', nitrate: 'B(NO₃)₃', sulfate: 'B₂(SO₄)₃', carbonate: 'B₂(CO₃)₃', chloride: 'BCl₃' },
            { element: 'Al', oxide: 'Al₂O₃', hydroxide: 'Al(OH)₃', nitrate: 'Al(NO₃)₃', sulfate: 'Al₂(SO₄)₃', carbonate: 'Al₂(CO₃)₃', chloride: 'AlCl₃' },
          ],
        },
      ],
    },
  ],
}
