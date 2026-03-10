/* ===============================================
   translations.js - Loving Homes Dog Hotel
   Bilingual: Arabic (AR) + English (EN)
   =============================================== */

const TRANSLATIONS = {

    ar: {
        /* ── BRAND ── */
        brandName: 'لوفينغ هومز',
        brandTagline: 'فندق الكلاب',

        /* ── NAV ── */
        navHome: 'الرئيسية',
        navServices: 'خدماتنا',
        navPackages: 'الحزم',
        navFacilities: 'المرافق',
        navAbout: 'من نحن',
        navContact: 'تواصل معنا',
        navBook: 'احجز الآن',

        /* ── HOME HERO ── */
        heroBadge: 'رعاية احترافية تستحقها كلبك',
        heroLine1: 'مكانٌ يشعر فيه',
        heroLine2: 'كلبك',
        heroLine3: 'بالأمان والراحة',
        heroDesc: 'نوفّر بيئة آمنة وممتعة في قلب هونج كونج مع رعاية بيطرية متخصصة على مدار الساعة ومرافق عالمية تضمن لكلبك أفضل تجربة إقامة.',
        heroExplore: 'اكتشف حزمنا',
        heroContact: 'تواصل معنا',

        /* ── STATS ── */
        stat1Num: '+500', stat1Lbl: 'كلب سعيد',
        stat2Num: '24/7', stat2Lbl: 'رعاية بيطرية',
        stat3Num: '100%', stat3Lbl: 'رضا العملاء',
        stat4Num: '+5', stat4Lbl: 'سنوات خبرة',

        /* ── HOME PREVIEW ── */
        previewBadge: 'نظرة سريعة',
        previewTitle: 'كل ما تحتاجه في مكان واحد',
        previewDesc: 'اكتشف ما يجعل لوفينغ هومز الخيار الأول لأصحاب الكلاب في هونج كونج',
        prev1Title: 'خدماتنا',
        prev1Desc: 'رعاية شاملة تشمل التوصيل والرعاية البيطرية والإقامة المريحة',
        prev2Title: 'حزمنا',
        prev2Desc: 'ثلاث حزم مصممة لتلبية احتياجات كل كلب بأسعار تنافسية',
        prev3Title: 'مرافقنا',
        prev3Desc: 'مرافق عالمية المستوى مصممة لراحة وسعادة كلبك',
        prev4Title: 'من نحن',
        prev4Desc: 'تعرّف على فريقنا المتخصص والقيم التي نؤمن بها',

        /* ── HOME CTA ── */
        ctaTitle: 'هل أنت مستعد لتوفير أفضل رعاية لكلبك؟',
        ctaDesc: 'تواصل معنا الآن وسنساعدك في اختيار الحزمة المناسبة',
        ctaStartNow: 'ابدأ الآن',

        /* ── PAGE HEROES ── */
        servicesHeroTitle: 'خدماتنا المتكاملة',
        servicesHeroDesc: 'مجموعة شاملة من الخدمات المتميزة لضمان راحة وسعادة كلبك في كل وقت',

        packagesHeroTitle: 'اختر الحزمة المناسبة',
        packagesHeroDesc: 'حزم متنوعة تلبي احتياجات كل كلب بأسعار تنافسية وجودة لا مثيل لها',

        facilitiesHeroTitle: 'مرافق عالمية المستوى',
        facilitiesHeroDesc: 'بيئة مثالية مصممة خصيصًا لراحة وسعادة كلبك في كل لحظة',

        aboutHeroTitle: 'من نحن',
        aboutHeroDesc: 'شركاء كلبك الأمناء في هونج كونج، نجمع بين الخبرة البيطرية والبيئة الودية الآمنة',

        contactHeroTitle: 'تواصل معنا',
        contactHeroDesc: 'نحن هنا للإجابة على استفساراتك ومساعدتك في اختيار الحزمة الأنسب لكلبك',

        /* ── BREADCRUMB ── */
        breadHome: 'الرئيسية',

        /* ── SERVICES PAGE ── */
        servicesSec1Badge: 'ما نقدّمه',
        servicesSec1Title: 'كل ما يحتاجه كلبك',
        servicesSec1Desc: 'خدمات احترافية يقدمها فريق متخصص ذو خبرة واسعة',

        s1Title: 'غرف مجهزة بالكامل',
        s1Desc: 'غرف فاخرة مزودة بتدفئة وتبريد تحت الأرضية وتلفزيون لضمان أقصى درجات الراحة لكلبك.',
        s1f1: 'تدفئة/تبريد تحت الأرضية', s1f2: 'تلفزيون في كل غرفة', s1f3: 'بيئة هادئة ومريحة', s1f4: 'تهوية ممتازة',

        s2Title: 'خدمة التوصيل',
        s2Desc: 'نوفر خدمة التوصيل "من وإلى المكان" بسيارات مجهزة، حتى لا تقلق بشأن النقل.',
        s2f1: 'توصيل من وإلى المكان', s2f2: 'سيارات مجهزة ومريحة', s2f3: 'سائقون موثوقون ومدربون', s2f4: 'تغطية جغرافية واسعة',

        s3Title: 'مراعي خارجية آمنة',
        s3Desc: 'مساحات خضراء واسعة ومسوّرة تتيح لكلبك الترفيه والاستمتاع بالهواء الطلق بأمان.',
        s3f1: 'مساحات خضراء واسعة', s3f2: 'أسوار أمان متينة', s3f3: 'إضاءة ليلية آمنة', s3f4: 'مناطق لعب متعددة',

        s4Title: 'رعاية بيطرية 24/7',
        s4Desc: 'فريق بيطري متخصص متاح على مدار الساعة طوال أيام الأسبوع لضمان صحة وسلامة كلبك.',
        s4f1: 'أطباء بيطريون معتمدون', s4f2: 'متاح على مدار الساعة', s4f3: 'أدوية ومعدات طبية', s4f4: 'رعاية طارئة فورية',

        s5Title: 'حظيرة لعب داخلية',
        s5Desc: 'منطقة لعب داخلية مجهزة بالكامل بألعاب متنوعة للنشاط الذهني والبدني في جميع الأوقات.',
        s5f1: 'ألعاب متنوعة وممتعة', s5f2: 'مساحة داخلية مجهزة', s5f3: 'متاحة 24 ساعة', s5f4: 'مناسبة لجميع الأحجام',

        s6Title: 'تحديثات وصور يومية',
        s6Desc: 'نرسل لك تحديثات وصور يومية لكلبك حتى تطمئن عليه وتتابع يومه بشكل مستمر.',
        s6f1: 'تحديثات يومية منتظمة', s6f2: 'صور ومقاطع فيديو', s6f3: 'إشعارات فورية', s6f4: 'تقارير صحية دورية',

        servicesCta1Title: 'جاهز لتجربة أفضل رعاية لكلبك؟',
        servicesCta1Desc: 'احجز الآن واكتشف الفرق مع لوفينغ هومز',
        servicesCta1Btn1: 'اختر حزمتك',
        servicesCta1Btn2: 'تواصل معنا',

        /* ── PACKAGES PAGE ── */
        pkgBadge: 'قارن الحزم',
        pkgTitle: 'جدول مقارنة الحزم',
        pkgDesc: 'اختر الحزمة التي تناسب احتياجات كلبك بدقة',

        pkg1Name: 'حزمة اليوم',
        pkg1Tag: 'مثالية لإقامة قصيرة خلال النهار',
        pkg1f1: 'المشي مرتين يوميًا', pkg1f2: 'منطقة لعب خارجية',
        pkg1f3: 'مسار الرشاقة', pkg1f4: 'حفر حفرة في الرمل',
        pkg1m1: 'حظيرة لعب داخلية', pkg1m2: 'جلسة حلاقة وتنظيف', pkg1m3: 'تحديثات يومية',

        pkg2Name: 'الكلاسيكية',
        pkg2Tag: 'الخيار الأمثل للإقامات المتوسطة',
        pkg2Popular: '⭐ الأكثر شيوعاً',
        pkg2f1: 'المشي 3 مرات يوميًا', pkg2f2: 'ممارسة 3 أنشطة يوميًا',
        pkg2f3: 'حظيرة لعب داخلية', pkg2f4: 'منطقة للاسترخاء',
        pkg2f5: 'جلسة حلاقة وتنظيف',
        pkg2m1: 'مساحة عشب خاصة', pkg2m2: 'مكافآت مجانية',

        pkg3Name: 'المميزة',
        pkg3Tag: 'تجربة VIP لا مثيل لها',
        pkg3f1: 'المشي 4 مرات يوميًا', pkg3f2: 'ممارسة 4 أنشطة يوميًا',
        pkg3f3: 'مساحة عشب خاصة', pkg3f4: 'تحديثات وصور يومية',
        pkg3f5: 'مكافآت مجانية متفق عليها', pkg3f6: 'جلسة حلاقة وتنظيف',
        pkg3f7: 'منطقة استرخاء خاصة',

        pkgBookBtn: 'احجز هذه الحزمة',

        compareTitle: 'مقارنة تفصيلية',
        tblFeature: 'الميزة',
        tblDay: 'اليوم',
        tblClassic: 'الكلاسيكية',
        tblPremium: 'المميزة',
        tblWalks: 'المشي اليومي',
        tblActivities: 'الأنشطة اليومية',
        tblOutdoor: 'منطقة لعب خارجية',
        tblAgility: 'مسار الرشاقة',
        tblSand: 'حفرة الرمل',
        tblIndoor: 'حظيرة لعب داخلية',
        tblRelax: 'منطقة استرخاء',
        tblGrooming: 'جلسة حلاقة وتنظيف',
        tblGrass: 'مساحة عشب خاصة',
        tblUpdates: 'تحديثات وصور يومية',
        tblBonuses: 'مكافآت مجانية',
        tblDayVal: 'مرتان', tblClassicVal: '3 مرات', tblPremiumVal: '4 مرات',
        tblDayAct: 'مرتان', tblClassicAct: '3 أنشطة', tblPremiumAct: '4 أنشطة',

        customTitle: 'حزم مخصصة للإقامات الطويلة',
        customDesc: 'تتوفر حزم مخصصة للإقامات الطويلة أو للكلاب ذات المتطلبات الإضافية. يجب على العملاء الاتصال بالشركة لترتيب أي حزم مخصصة.',
        customBtn: 'تواصل للحزم المخصصة',

        pkgsCta1Title: 'لم تجد ما يناسبك؟',
        pkgsCta1Desc: 'تواصل معنا وسنصمم لك حزمة مخصصة تلبي احتياجاتك بالكامل',
        pkgsCta1Btn: 'تواصل معنا الآن',

        /* ── FACILITIES PAGE ── */
        facBadge: 'مرافقنا',
        facTitle: 'بيئة مصممة بعناية فائقة',
        facDesc: 'كل مرفق صُمِّم بدراسة علمية لضمان أقصى مستويات الراحة والنشاط',

        fac1Title: 'تدفئة/تبريد تحت الأرضية', fac1Desc: 'نظام متطور لضبط درجة الحرارة بشكل مثالي في كل غرفة.', fac1t1: 'تحكم ذكي بالحرارة', fac1t2: 'توزيع متساوٍ', fac1t3: 'موفر للطاقة',
        fac2Title: 'مسار الرشاقة', fac2Desc: 'مسار متكامل مجهز بعقبات ومحطات تمرين لتعزيز اللياقة البدنية.', fac2t1: 'تمارين متنوعة', fac2t2: 'تحفيز عقلي', fac2t3: 'مناسب لكل الأحجام',
        fac3Title: 'التمشية في الغابات', fac3Desc: 'مسارات طبيعية لجولات يومية ممتعة في الهواء الطلق النقي.', fac3t1: 'هواء نقي', fac3t2: 'روائح طبيعية', fac3t3: 'مسارات آمنة',
        fac4Title: 'مراقبة مستمرة', fac4Desc: 'نظام كاميرات متكامل يغطي جميع الأماكن لضمان السلامة على مدار الساعة.', fac4t1: 'تغطية كاملة', fac4t2: 'مراقبة 24/7', fac4t3: 'تسجيل مستمر',
        fac5Title: 'مساحة عشب خاصة', fac5Desc: 'حديقة عشب خضراء طبيعية مخصصة لكل كلب (الحزمة المميزة).', fac5t1: 'عشب طبيعي', fac5t2: 'مساحة خاصة', fac5t3: 'خالية من المبيدات',
        fac6Title: 'منطقة الرمال', fac6Desc: 'حوض رمال آمن ونظيف يتيح لكلبك ممارسة غريزة الحفر بحرية وسعادة.', fac6t1: 'رمال آمنة ونظيفة', fac6t2: 'مساحة كافية', fac6t3: 'ترفيه غريزي',
        fac7Title: 'حظيرة لعب داخلية', fac7Desc: 'صالة لعب داخلية مجهزة بألعاب تفاعلية ومتاحة على مدار الساعة.', fac7t1: 'ألعاب تفاعلية', fac7t2: 'مناخ معتدل', fac7t3: 'متاحة دائماً',
        fac8Title: 'منطقة الاسترخاء', fac8Desc: 'مكان هادئ ومريح مجهز بفراش فاخر لضمان نوم هانئ لكلبك.', fac8t1: 'فراش فاخر', fac8t2: 'بيئة هادئة', fac8t3: 'إضاءة خافتة',

        facCta1Title: 'احجز لكلبك الآن', facCta1Desc: 'تأكد من توفر المكان واحجز قبل امتلاء الطاقة الاستيعابية',
        facCta1Btn1: 'اختر حزمة', facCta1Btn2: 'تواصل معنا',

        /* ── ABOUT PAGE ── */
        aboutStoryBadge: 'قصتنا',
        aboutStoryTitle: 'شركاء كلبك الأمناء',
        aboutP1: 'لوفينغ هومز هو فندق للكلاب يقع في هونج كونج. شهدت الشركة مؤخراً زيادة في الطلب على المرافق والمنتجات التي تقدمها.',
        aboutP2: 'نجمع بين الخبرة البيطرية الاحترافية والبيئة الودية والآمنة لضمان أفضل تجربة لكلبك في غيابك، مع إبقائك على اطلاع دائم بتحديثات يومية.',
        aboutP3: 'منذ تأسيسنا، أصبحنا الخيار الأول والموثوق لمئات الأسر في هونج كونج التي تبحث عن ملجأ آمن ومريح لكلابها.',

        valuesBadge: 'قيمنا',
        valuesTitle: 'ما الذي يميزنا',
        valuesDesc: 'مبادئ راسخة نلتزم بها في كل تفاصيل عملنا',
        v1Title: 'الاهتمام والعناية', v1Desc: 'نعامل كل كلب كأحد أفراد عائلتنا بحب واهتمام حقيقي.',
        v2Title: 'الأمان والسلامة', v2Desc: 'نضمن بيئة آمنة ومراقبة مستمرة لأن سلامة كلبك أولويتنا.',
        v3Title: 'الاحترافية', v3Desc: 'فريق بيطري متخصص يضمن أعلى مستويات الرعاية الاحترافية.',
        v4Title: 'الشفافية والثقة', v4Desc: 'نبني ثقة مع الأصحاب من خلال التحديثات اليومية والتواصل.',
        v5Title: 'الاستدامة', v5Desc: 'نهتم بالبيئة ونستخدم مواد آمنة وصديقة للطبيعة.',
        v6Title: 'الابتكار المستمر', v6Desc: 'نطور خدماتنا لمواكبة أحدث الأساليب العلمية في الرعاية.',

        achBadge: 'إنجازاتنا',
        achTitle: 'أرقام تتحدث عن نفسها',
        ach1Num: '+500', ach1Lbl: 'كلب سعيد', ach1Desc: 'تجاوزنا خدمة خمسمئة كلب من أصحاب مختلفين',
        ach2Num: '24/7', ach2Lbl: 'رعاية بيطرية', ach2Desc: 'فريقنا البيطري متاح على مدار الساعة دون توقف',
        ach3Num: '100%', ach3Lbl: 'رضا العملاء', ach3Desc: 'نفخر بمعدل رضا كامل لدى جميع عملائنا',
        ach4Num: '+5', ach4Lbl: 'سنوات خبرة', ach4Desc: 'خبرة متراكمة في مجال رعاية الكلاب',

        aboutCta1Title: 'انضم إلى عائلة لوفينغ هومز',
        aboutCta1Desc: 'ثق بنا لرعاية أعز ما لديك ودعنا نثبت لك جدارتنا',
        aboutCta1Btn: 'تواصل معنا الآن',

        /* ── CONTACT PAGE ── */
        infoPanelTitle: 'معلومات التواصل',
        infoPhone: 'الهاتف',
        infoEmail: 'البريد الإلكتروني',
        infoLocation: 'الموقع',
        infoLocationVal: 'هونج كونج',
        infoHours: 'ساعات العمل',
        infoHoursVal: '24/7 - على مدار الساعة',
        adviceTitle: 'مشورة مجانية',
        adviceDesc: 'فريقنا متاح للمساعدة العامة والمشورة بشأن الحزمة الأنسب لكلبك بناءً على احتياجاته.',
        qpkgTitle: 'اختر حزمة مباشرة',

        formTitle: 'أرسل لنا رسالتك',
        formIntro: 'سنرد على رسالتك في أقرب وقت ممكن وعادةً خلال أقل من ساعة',
        lblName: 'الاسم الكامل',
        lblPhone: 'رقم الهاتف',
        lblEmail: 'البريد الإلكتروني',
        lblPackage: 'الحزمة المطلوبة',
        lblPetInfo: 'معلومات عن كلبك',
        lblMessage: 'رسالتك',
        phName: 'أدخل اسمك الكامل',
        phPhone: '852-XXXX-XXXX',
        phEmail: 'example@email.com',
        phPetInfo: 'مثال: هاسكي، سنتان، يحتاج عناية خاصة',
        phMessage: 'اكتب استفسارك أو طلبك بالتفصيل هنا...',
        pkgOptDefault: 'اختر الحزمة...',
        pkgOptDay: '☀️ حزمة اليوم',
        pkgOptClassic: '⭐ الكلاسيكية',
        pkgOptPremium: '👑 المميزة',
        pkgOptCustom: '🎯 حزمة مخصصة',
        submitBtn: 'إرسال الرسالة 📬',
        submitting: '⏳ جارٍ الإرسال...',
        successMsg: 'تم إرسال رسالتك بنجاح! سنتواصل معك في أقرب وقت ممكن.',

        faqBadge: 'الأسئلة الشائعة',
        faqTitle: 'أسئلة يطرحها عملاؤنا',
        faq1Q: 'كيف يمكنني الحجز؟',
        faq1A: 'يمكنك الحجز عن طريق ملء نموذج التواصل أعلاه أو الاتصال بنا مباشرة. سيقوم فريقنا بالتواصل معك لتأكيد الحجز وترتيب التفاصيل.',
        faq2Q: 'ما هي سلالات الكلاب التي تقبلونها؟',
        faq2A: 'نقبل جميع سلالات الكلاب. تواصل معنا لمعرفة ما يناسب احتياجات كلبك تحديداً.',
        faq3Q: 'ما هي مستلزمات التسجيل المطلوبة؟',
        faq3A: 'نطلب سجل التطعيمات الخاص بكلبك المحدّث إضافة إلى معلومات الاتصال بطبيبك البيطري في حال الطوارئ.',
        faq4Q: 'هل يمكنني زيارة كلبي خلال فترة إقامته؟',
        faq4A: 'نعم، نرحب بزيارات أصحاب الكلاب. يُفضل التنسيق مسبقاً لضمان أفضل تجربة.',
        faq5Q: 'كيف تتم خدمة التوصيل؟',
        faq5A: 'نوفر خدمة التوصيل من وإلى موقعك في هونج كونج بسيارات مجهزة وآمنة. يمكنك الاتفاق على التوقيت عند الحجز.',

        /* ── FOOTER ── */
        footerDesc: 'فندق كلاب متخصص في هونج كونج مع خدمات بيطرية احترافية على مدار الساعة.',
        footerQuickLinks: 'روابط سريعة',
        footerContact: 'تواصل معنا',
        footerRights: 'جميع الحقوق محفوظة.',
        footerMadeWith: 'صُنع بـ ❤️ لأجل كلابنا الأليفة',

        /* ── FORM VALIDATION ── */
        errName: 'الاسم الكامل مطلوب',
        errNameMin: 'الاسم قصير جداً',
        errPhone: 'رقم الهاتف مطلوب',
        errPhoneInvalid: 'رقم الهاتف غير صالح',
        errEmailInvalid: 'البريد الإلكتروني غير صالح',
        errMsg: 'الرسالة مطلوبة',
        errMsgMin: 'الرسالة قصيرة جداً (5 أحرف على الأقل)',
    },

    /* ========================================================= */
    /*  ENGLISH                                                    */
    /* ========================================================= */

    en: {
        /* ── BRAND ── */
        brandName: 'Loving Homes',
        brandTagline: 'Dog Hotel',

        /* ── NAV ── */
        navHome: 'Home',
        navServices: 'Services',
        navPackages: 'Packages',
        navFacilities: 'Facilities',
        navAbout: 'About Us',
        navContact: 'Contact',
        navBook: 'Book Now',

        /* ── HOME HERO ── */
        heroBadge: 'Professional care your dog deserves',
        heroLine1: 'A place where',
        heroLine2: 'your dog',
        heroLine3: 'feels safe & loved',
        heroDesc: 'We provide a safe and fun environment in the heart of Hong Kong with specialist veterinary care around the clock and world-class facilities for the ultimate boarding experience.',
        heroExplore: 'Explore Packages',
        heroContact: 'Contact Us',

        /* ── STATS ── */
        stat1Num: '500+', stat1Lbl: 'Happy Dogs',
        stat2Num: '24/7', stat2Lbl: 'Vet Care',
        stat3Num: '100%', stat3Lbl: 'Client Satisfaction',
        stat4Num: '5+', stat4Lbl: 'Years Experience',

        /* ── HOME PREVIEW ── */
        previewBadge: 'Quick Look',
        previewTitle: 'Everything you need in one place',
        previewDesc: 'Discover what makes Loving Homes the #1 choice for dog owners in Hong Kong',
        prev1Title: 'Our Services',
        prev1Desc: 'Comprehensive care including pick-up, veterinary services and comfortable boarding',
        prev2Title: 'Our Packages',
        prev2Desc: 'Three packages designed to meet every dog\'s needs at competitive prices',
        prev3Title: 'Our Facilities',
        prev3Desc: 'World-class facilities designed for your dog\'s comfort and happiness',
        prev4Title: 'About Us',
        prev4Desc: 'Meet our expert team and the values we believe in',

        /* ── HOME CTA ── */
        ctaTitle: 'Ready to give your dog the best care?',
        ctaDesc: 'Contact us now and we\'ll help you choose the right package',
        ctaStartNow: 'Get Started',

        /* ── PAGE HEROES ── */
        servicesHeroTitle: 'Our Full Services',
        servicesHeroDesc: 'A comprehensive range of premium services to ensure your dog\'s comfort and happiness',

        packagesHeroTitle: 'Choose Your Package',
        packagesHeroDesc: 'Diverse packages tailored to every dog\'s needs with competitive pricing and unmatched quality',

        facilitiesHeroTitle: 'World-Class Facilities',
        facilitiesHeroDesc: 'An ideal environment designed specifically for your dog\'s comfort and happiness',

        aboutHeroTitle: 'About Us',
        aboutHeroDesc: 'Your dog\'s trusted partners in Hong Kong, combining veterinary expertise with a friendly, safe environment',

        contactHeroTitle: 'Contact Us',
        contactHeroDesc: 'We are here to answer your questions and help you choose the best package for your dog',

        /* ── BREADCRUMB ── */
        breadHome: 'Home',

        /* ── SERVICES PAGE ── */
        servicesSec1Badge: 'What We Offer',
        servicesSec1Title: 'Everything your dog needs',
        servicesSec1Desc: 'Professional services delivered by a specialist team with extensive experience',

        s1Title: 'Fully Equipped Rooms',
        s1Desc: 'Luxurious rooms with underfloor heating/cooling and TV for maximum comfort during your dog\'s stay.',
        s1f1: 'Underfloor heating/cooling', s1f2: 'TV in every room', s1f3: 'Quiet, comfortable setting', s1f4: 'Excellent ventilation',

        s2Title: 'Pick-Up & Drop-Off',
        s2Desc: 'We provide a pick-up and drop-off service with equipped vehicles, so you don\'t have to worry about transport.',
        s2f1: 'Door-to-door service', s2f2: 'Fitted, comfortable vehicles', s2f3: 'Reliable, trained drivers', s2f4: 'Wide coverage area',

        s3Title: 'Safe Outdoor Pastures',
        s3Desc: 'Spacious, fenced green areas where your dog can play and enjoy fresh air in complete safety.',
        s3f1: 'Spacious green areas', s3f2: 'Sturdy safety fencing', s3f3: 'Safe night lighting', s3f4: 'Multiple play zones',

        s4Title: '24/7 Veterinary Care',
        s4Desc: 'A specialist veterinary team available around the clock, every day, to ensure full health and safety.',
        s4f1: 'Qualified veterinarians', s4f2: 'Available 24 hours', s4f3: 'Medical supplies & equipment', s4f4: 'Immediate emergency care',

        s5Title: 'Indoor Play Area',
        s5Desc: 'A fully equipped indoor play area with a variety of toys promoting mental and physical activity at all times.',
        s5f1: 'Varied fun toys', s5f2: 'Equipped indoor space', s5f3: 'Available 24/7', s5f4: 'Suitable for all sizes',

        s6Title: 'Daily Updates & Photos',
        s6Desc: 'We send you daily updates and photos of your dog so you can follow their day and enjoy every moment.',
        s6f1: 'Regular daily updates', s6f2: 'Photos & videos', s6f3: 'Instant notifications', s6f4: 'Periodic health reports',

        servicesCta1Title: 'Ready to experience the best care for your dog?',
        servicesCta1Desc: 'Book now and discover the Loving Homes difference',
        servicesCta1Btn1: 'Choose a Package',
        servicesCta1Btn2: 'Contact Us',

        /* ── PACKAGES PAGE ── */
        pkgBadge: 'Compare Packages',
        pkgTitle: 'Package Comparison',
        pkgDesc: 'Choose the package that precisely meets your dog\'s needs',

        pkg1Name: 'Day Package',
        pkg1Tag: 'Perfect for a short daytime stay',
        pkg1f1: 'Walking twice a day', pkg1f2: 'Outdoor play area',
        pkg1f3: 'Agility track', pkg1f4: 'Sand digging pit',
        pkg1m1: 'Indoor play area', pkg1m2: 'Grooming session', pkg1m3: 'Daily updates',

        pkg2Name: 'Classic',
        pkg2Tag: 'The ideal choice for medium stays',
        pkg2Popular: '⭐ Most Popular',
        pkg2f1: 'Walking 3x daily', pkg2f2: '3 activities daily',
        pkg2f3: 'Indoor play area', pkg2f4: 'Relaxation zone',
        pkg2f5: 'Grooming session',
        pkg2m1: 'Private grass area', pkg2m2: 'Free bonuses',

        pkg3Name: 'Premium',
        pkg3Tag: 'An unrivalled VIP experience',
        pkg3f1: 'Walking 4x daily', pkg3f2: '4 activities daily',
        pkg3f3: 'Private grass area', pkg3f4: 'Daily updates & photos',
        pkg3f5: 'Free agreed bonuses', pkg3f6: 'Grooming session',
        pkg3f7: 'Private relaxation zone',

        pkgBookBtn: 'Book This Package',

        compareTitle: 'Detailed Comparison',
        tblFeature: 'Feature',
        tblDay: 'Day',
        tblClassic: 'Classic',
        tblPremium: 'Premium',
        tblWalks: 'Daily walks',
        tblActivities: 'Daily activities',
        tblOutdoor: 'Outdoor play area',
        tblAgility: 'Agility track',
        tblSand: 'Sand pit',
        tblIndoor: 'Indoor play area',
        tblRelax: 'Relaxation zone',
        tblGrooming: 'Grooming session',
        tblGrass: 'Private grass area',
        tblUpdates: 'Daily updates & photos',
        tblBonuses: 'Free bonuses',
        tblDayVal: '2x', tblClassicVal: '3x', tblPremiumVal: '4x',
        tblDayAct: '2x', tblClassicAct: '3 activities', tblPremiumAct: '4 activities',

        customTitle: 'Custom Packages for Long Stays',
        customDesc: 'Custom packages are available for extended stays or dogs with additional requirements. Clients must contact us to arrange any bespoke packages.',
        customBtn: 'Contact for Custom Packages',

        pkgsCta1Title: "Didn't find the right fit?",
        pkgsCta1Desc: "Contact us and we'll design a bespoke package that fully meets your needs",
        pkgsCta1Btn: 'Contact Us Now',

        /* ── FACILITIES PAGE ── */
        facBadge: 'Our Facilities',
        facTitle: 'Designed with meticulous care',
        facDesc: 'Every facility is scientifically designed to ensure maximum comfort and activity levels',

        fac1Title: 'Underfloor Heating/Cooling', fac1Desc: 'An advanced system for perfect temperature regulation in every room.', fac1t1: 'Smart temperature control', fac1t2: 'Even distribution', fac1t3: 'Energy efficient',
        fac2Title: 'Agility Track', fac2Desc: 'A full track with obstacles and exercise stations to boost fitness.', fac2t1: 'Varied exercises', fac2t2: 'Mental stimulation', fac2t3: 'All sizes welcome',
        fac3Title: 'Forest Walks', fac3Desc: 'Natural trails for enjoyable daily walks in clean fresh air.', fac3t1: 'Clean fresh air', fac3t2: 'Natural scents', fac3t3: 'Safe paths',
        fac4Title: 'Continuous Monitoring', fac4Desc: 'A comprehensive camera system covering all areas, ensuring safety 24/7.', fac4t1: 'Full coverage', fac4t2: '24/7 monitoring', fac4t3: 'Continuous recording',
        fac5Title: 'Private Grass Area', fac5Desc: 'A dedicated natural grass garden for each dog (Premium package).', fac5t1: 'Natural turf', fac5t2: 'Private space', fac5t3: 'Pesticide-free',
        fac6Title: 'Sand Zone', fac6Desc: 'A safe, clean sand pit allowing your dog to dig to their heart\'s content.', fac6t1: 'Safe, clean sand', fac6t2: 'Ample space', fac6t3: 'Natural instinct play',
        fac7Title: 'Indoor Play Area', fac7Desc: 'An indoor playroom with interactive toys, available around the clock.', fac7t1: 'Interactive toys', fac7t2: 'Moderate climate', fac7t3: 'Always available',
        fac8Title: 'Relaxation Zone', fac8Desc: 'A quiet, comfortable space with luxury bedding for restful sleep.', fac8t1: 'Luxury bedding', fac8t2: 'Quiet environment', fac8t3: 'Soft lighting',

        facCta1Title: 'Book for your dog now', facCta1Desc: 'Confirm availability and book before capacity is reached',
        facCta1Btn1: 'Choose a Package', facCta1Btn2: 'Contact Us',

        /* ── ABOUT PAGE ── */
        aboutStoryBadge: 'Our Story',
        aboutStoryTitle: "Your Dog's Trusted Partner",
        aboutP1: 'Loving Homes is a dog hotel located in Hong Kong. The company has recently seen increased demand for the facilities and products it offers.',
        aboutP2: 'We combine professional veterinary expertise with a friendly, safe environment to ensure the best experience for your dog while you\'re away, keeping you updated with daily reports.',
        aboutP3: 'Since our founding, we have become the first and most trusted choice for hundreds of families in Hong Kong looking for a safe and comfortable refuge for their dogs.',

        valuesBadge: 'Our Values',
        valuesTitle: 'What Sets Us Apart',
        valuesDesc: 'Firm principles we uphold in every detail of our work',
        v1Title: 'Care & Compassion', v1Desc: 'We treat every dog as a member of our own family with genuine love.',
        v2Title: 'Safety & Security', v2Desc: 'We ensure a safe environment with continuous monitoring — your dog\'s safety is our top priority.',
        v3Title: 'Professionalism', v3Desc: 'A specialist vet team guaranteeing the highest levels of professional care.',
        v4Title: 'Transparency & Trust', v4Desc: 'We build trust through daily updates and open communication with owners.',
        v5Title: 'Sustainability', v5Desc: 'We care for the environment and use safe, nature-friendly materials.',
        v6Title: 'Continuous Innovation', v6Desc: 'We continually develop our services to keep pace with the latest care practices.',

        achBadge: 'Our Achievements',
        achTitle: 'Numbers that speak for themselves',
        ach1Num: '500+', ach1Lbl: 'Happy Dogs', ach1Desc: 'We have cared for over five hundred dogs from various owners',
        ach2Num: '24/7', ach2Lbl: 'Vet Care', ach2Desc: 'Our vet team is available around the clock without interruption',
        ach3Num: '100%', ach3Lbl: 'Satisfaction', ach3Desc: 'We are proud of our full satisfaction rate among all clients',
        ach4Num: '5+', ach4Lbl: 'Years Experience', ach4Desc: 'Accumulated expertise in the field of dog care',

        aboutCta1Title: 'Join the Loving Homes family',
        aboutCta1Desc: 'Trust us with what matters most and let us prove our worth',
        aboutCta1Btn: 'Contact Us Now',

        /* ── CONTACT PAGE ── */
        infoPanelTitle: 'Contact Information',
        infoPhone: 'Phone',
        infoEmail: 'Email',
        infoLocation: 'Location',
        infoLocationVal: 'Hong Kong',
        infoHours: 'Working Hours',
        infoHoursVal: '24/7 — Around the clock',
        adviceTitle: 'Free Advice',
        adviceDesc: 'Our team is available for general assistance and advice on the most suitable package for your dog based on their specific needs.',
        qpkgTitle: 'Choose a package directly',

        formTitle: 'Send Us a Message',
        formIntro: "We'll reply as soon as possible — usually within under an hour",
        lblName: 'Full Name',
        lblPhone: 'Phone Number',
        lblEmail: 'Email Address',
        lblPackage: 'Requested Package',
        lblPetInfo: 'About Your Dog',
        lblMessage: 'Your Message',
        phName: 'Enter your full name',
        phPhone: '852-XXXX-XXXX',
        phEmail: 'example@email.com',
        phPetInfo: 'e.g. Husky, 2 years old, needs special care',
        phMessage: 'Write your query or request in detail here...',
        pkgOptDefault: 'Select a package...',
        pkgOptDay: '☀️ Day Package',
        pkgOptClassic: '⭐ Classic',
        pkgOptPremium: '👑 Premium',
        pkgOptCustom: '🎯 Custom Package',
        submitBtn: 'Send Message 📬',
        submitting: '⏳ Sending...',
        successMsg: 'Your message has been sent successfully! We will contact you shortly.',

        faqBadge: 'FAQ',
        faqTitle: 'Frequently Asked Questions',
        faq1Q: 'How do I book?',
        faq1A: 'You can book by filling in the contact form above or calling us directly. Our team will contact you to confirm the booking and arrange the details.',
        faq2Q: 'Which dog breeds do you accept?',
        faq2A: 'We accept all dog breeds. Contact us to find out what best suits your dog\'s specific needs.',
        faq3Q: 'What registration documents are required?',
        faq3A: "We require your dog's up-to-date vaccination records plus your vet's contact details in case of emergency.",
        faq4Q: 'Can I visit my dog during their stay?',
        faq4A: 'Yes, we welcome visits from owners. It\'s best to coordinate in advance to ensure the best experience.',
        faq5Q: 'How does the pick-up service work?',
        faq5A: 'We provide pick-up and drop-off from your location in Hong Kong in safe, fitted vehicles. You can agree on timing when booking.',

        /* ── FOOTER ── */
        footerDesc: 'A specialist dog hotel in Hong Kong with professional veterinary services around the clock.',
        footerQuickLinks: 'Quick Links',
        footerContact: 'Contact Us',
        footerRights: 'All rights reserved.',
        footerMadeWith: 'Made with ❤️ for our beloved dogs',

        /* ── FORM VALIDATION ── */
        errName: 'Full name is required',
        errNameMin: 'Name is too short',
        errPhone: 'Phone number is required',
        errPhoneInvalid: 'Invalid phone number',
        errEmailInvalid: 'Invalid email address',
        errMsg: 'Message is required',
        errMsgMin: 'Message is too short (at least 5 characters)',
    }
};
