const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace physical classes with logical classes
html = html.replace(/\bml-(\d+)\b/g, 'ms-$1');
html = html.replace(/\bmr-(\d+)\b/g, 'me-$1');
html = html.replace(/\bpl-(\d+)\b/g, 'ps-$1');
html = html.replace(/\bpr-(\d+)\b/g, 'pe-$1');
html = html.replace(/\bleft-0\b/g, 'start-0');
html = html.replace(/\bright-0\b/g, 'end-0');
html = html.replace(/\btext-left\b/g, 'text-start');
html = html.replace(/\btext-right\b/g, 'text-end');
html = html.replace(/\bborder-l\b/g, 'border-s');
html = html.replace(/\bborder-r\b/g, 'border-e');

// Remove RTL specific CSS that is no longer needed
html = html.replace(/\/\* RTL Specific styles \*\/[\s\S]*?\/\* Additional RTL social icons fix \*\//, '/* RTL Specific styles removed, using logical properties */');
html = html.replace(/html\[dir="rtl"\] \.flex\.space-x-4 \{[\s\S]*?\}/g, '');
html = html.replace(/html\[dir="rtl"\] \.scroll-reveal-left \{[\s\S]*?\}/g, '');
html = html.replace(/html\[dir="rtl"\] \.scroll-reveal-right \{[\s\S]*?\}/g, '');

// Update Arabic translations
const newArabicTranslations = `ar: {
                    navServices: "الخدمات", navAbout: "من نحن", navCaseStudies: "دراسات الحالة", navInsights: "الرؤى", navContact: "تواصل معنا",
                    navServicesMobile: "الخدمات", navAboutMobile: "من نحن", navCaseStudiesMobile: "دراسات الحالة", navInsightsMobile: "الرؤى", navContactMobile: "تواصل معنا",
                    heroTitle: 'تمكين اتخاذ قرارات أذكى عبر البيانات، الذكاء الاصطناعي، والتحول الرقمي',
                    heroSubtitle: "نبني منصات بيانات متطورة وجاهزة للذكاء الاصطناعي باستخدام Microsoft Fabric و Azure لتسريع استخلاص الرؤى، تحسين العمليات، وتحقيق نمو ملموس في مؤسستك.",
                    heroBtnTalk: "احجز مكالمة استكشافية مجانية", heroBtnWork: "اطلع على أعمالنا",
                    cred1Title: "Microsoft Fabric", cred1Sub: "خبراء ورواد في التبني",
                    cred2Title: "معتمدون من Azure", cred2Sub: "حلول البيانات والذكاء الاصطناعي",
                    cred3Title: "Power BI", cred3Sub: "تحليلات متقدمة وتصوير للبيانات",
                    cred4Title: "Professional Scrum Master™", cred4Sub: "تسليم المشاريع بمنهجية أجايل",
                    cred5Title: "Databricks", cred5Sub: "منصة التحليلات الموحدة",
                    testimonialsTitle: "ماذا يقول شركاؤنا",
                    testimonial1Text: '"تمتلك BRUXINNOV قدرة فريدة على ترجمة تحديات البيانات المعقدة إلى استراتيجيات واضحة وقابلة للتنفيذ. قيادتهم المتفهمة وخبرتهم التقنية كانت حاسمة لنجاح مشروعنا."',
                    testimonial1Name: "سارة م.", testimonial1Role: "رئيسة قسم التحليلات",
                    testimonial2Text: '"العمل مع BRUXINNOV ساهم في تسريع خارطة طريق التحول الرقمي لدينا بأشهر. رؤاهم العميقة حول Microsoft Fabric ونماذج التسليم المرنة كانت لا تقدر بثمن."',
                    testimonial2Name: "إيما ر.", testimonial2Role: "المديرة التقنية",
                    servicesTitle: 'استشارات تركز على تحقيق النتائج <span class="gradient-text">لسد الفجوة بين الاستراتيجية والتنفيذ</span>',
                    service1Title: "الذكاء الاصطناعي وذكاء اتخاذ القرار", service1Desc: "نشر وكلاء قرار على Microsoft Fabric لأتمتة تحضير البيانات، توقع الطلب، وتقديم إجراءات إرشادية في Power BI.", service1Outcome: "الأثر: تقليل وقت الوصول للرؤية ↓ 40%، تقليل خطأ التنبؤ ↓ 12-18%، تقليل دورة القرار ↓ 30%",
                    service2Title: "الاستراتيجية الرقمية والتحول", service2Desc: "مواءمة الأهداف التجارية مع خرائط طريق التكنولوجيا لتحقيق نمو مستدام.", service2Outcome: "النتائج: خارطة طريق واضحة، تحسين عائد الاستثمار في التكنولوجيا.",
                    service3Title: "الحلول السحابية وهندسة المنصات", service3Desc: "بناء أنظمة قابلة للتطوير باستخدام Microsoft Azure و Microsoft Fabric.", service3Outcome: "النتائج: تكاليف أقل، أمان وقابلية توسع معززة.",
                    service4Title: "تحليلات التسويق الرقمي", service4Desc: "تعزيز النمو بتحليلات تسويق جاهزة لاتخاذ القرار، وربط القنوات بالإيرادات باستخدام Power BI وخطوط بيانات نظيفة.", service4Outcome: "النتائج: زيادة في الزيارات المؤهلة وربط التسويق بالإيرادات.",
                    aboutTitle: 'لماذا تختار الفرق <span class="gradient-text">BRUXINNOV</span>؟',
                    aboutMission: '"أسست BRUXINNOV لسد الفجوة بين الاستراتيجية والتنفيذ. تفشل الكثير من المشاريع الرقمية لأن الرؤية لا تترجم إلى تأثير — مهمتنا هي تغيير ذلك."',

                    caseStudiesTitle: 'التحدي ← الحل ← <span class="gradient-text">النتيجة</span>',
                    caseStudyChallenge: "التحدي", caseStudySolution: "الحل", caseStudyOutcome: "النتيجة",
                    caseStudy1Title: "الاتصالات", caseStudy1Challenge: "تدفقات عمل تشغيلية مجزأة وتقارير بطيئة.", caseStudy1Solution: "بنية بيانات أساسية على Azure Fabric + نموذج تشغيل Scrum.", caseStudy1Outcome: '+<span class="count-up" data-target="25">0</span>% كفاءة, -<span class="count-up" data-target="15">0</span>% تكاليف',
                    caseStudy2Title: "السلع الاستهلاكية (FMCG)", caseStudy2Challenge: "بيانات تسويق ومبيعات منعزلة تحد من استخلاص الرؤى.", caseStudy2Solution: "نموذج دلالي موحد في Power BI + وكيل تنبؤ بالذكاء الاصطناعي.", caseStudy2Outcome: '+<span class="count-up" data-target="18">0</span>% كفاءة, +<span class="count-up" data-target="7">0</span>% إيرادات',
                    caseStudy3Title: "التكنولوجيا المالية (Fintech)", caseStudy3Challenge: "تقييم يدوي للمخاطر وفحوصات امتثال بطيئة.", caseStudy3Solution: "خط أنابيب آلي لوكيل ذكاء اصطناعي مع إشراف بشري.", caseStudy3Outcome: '-<span class="count-up" data-target="40">0</span>% وقت اتخاذ القرار, +<span class="count-up" data-target="12">0</span>% تقليل المخاطر',
                    insightsTitle: 'قيادة فكرية <span class="gradient-text">من أرض الواقع</span>',
                    blog1Title: "كيف يمكن للشركات الأوروبية الاستفادة من Microsoft Fabric في 2025", blog1Desc: "نظرة على التطبيقات العملية والمزايا الاستراتيجية لاعتماد منصة البيانات الموحدة من مايكروسوفت.",
                    blog2Title: "ذكاء القرار مقابل ذكاء الأعمال", blog2Desc: "فهم التطور من إعداد التقارير بأثر رجعي إلى اتخاذ القرارات الاستباقية المدعومة بالذكاء الاصطناعي.",
                    blog3Title: "وكلاء الذكاء الاصطناعي: حالات استخدام في المالية وسلاسل التوريد", blog3Desc: "استكشاف كيف يُحدث وكلاء الذكاء الاصطناعي المستقلون ثورة في الكفاءة والدقة ضمن وظائف الأعمال الحيوية.",
                    blogReadMore: "اقرأ المزيد &larr;",
                    contactTitle: 'هل أنت مستعد لتحويل <span class="gradient-text">بياناتك إلى ميزة استراتيجية</span>؟',
                    contactSubtitle: "شاركنا تحديات بياناتك وأهدافك التجارية. سنقدم لك رؤى مخصصة خلال 24 ساعة.",
                    contactAddressTitle: "العنوان", contactEmailTitle: "البريد الإلكتروني", contactBtnWhatsapp: "تحدث معنا فوراً",
                    formTitle: "احجز استشارة", formName: "الاسم الكامل", formEmail: "البريد الإلكتروني للعمل", formCompany: "الشركة", formRole: "المسمى الوظيفي", formMessage: "ما هو التحدي الذي يمكننا مساعدتك فيه؟", formButton: "احجز استشارة", formConsent: 'أوافق على <a href="/privacy.html" class="underline">سياسة الخصوصية</a>',
                    footerDesc: "استشارات متميزة للشركات الكبرى والناشئة عند تقاطع البيانات، الذكاء الاصطناعي، والتحول الرقمي.",
                    footerLinks: "روابط سريعة", footerServices: "الخدمات", footerAbout: "من نحن", footerCaseStudies: "دراسات الحالة", footerInsights: "الرؤى", footerContact: "تواصل معنا",
                    footerLegal: "الشؤون القانونية", footerPrivacy: "سياسة الخصوصية", footerTerms: "شروط الخدمة", footerDesigned: "صُمم في بروكسل",
                    faqTitle: "الأسئلة الشائعة", faqSubtitle: "كل ما تحتاج لمعرفته حول العمل مع BRUXINNOV وحلولنا المؤسسية للبيانات.",
                    faq1Question: "ما هو نموذج المشاركة النموذجي لـ BRUXINNOV؟", faq1Answer: "نبدأ عادة بمرحلة اكتشاف من 1-2 أسبوع لفهم أهدافك التجارية ومشهد البيانات، تليها مرحلة التخطيط لتصميم البنية المستهدفة. ثم ننتقل إلى مرحلة تجريبية من 4-6 أسابيع لتقديم قيمة فورية مع 1-2 حالة استخدام عالية التأثير، قبل التوسع إلى النشر المؤسسي الكامل مع الدعم والتمكين المستمر.",
                    faq2Question: "هل تعملون عن بُعد عبر الاتحاد الأوروبي والولايات المتحدة ومنطقة الشرق الأوسط وشمال أفريقيا؟", faq2Answer: "نعم، تعمل BRUXINNOV عالمياً بنهج العمل عن بُعد أولاً. نخدم العملاء عبر أوروبا وأمريكا الشمالية ومنطقة الشرق الأوسط وشمال أفريقيا. للمراحل الحرجة مثل ورش الاكتشاف ودعم الإطلاق، يمكننا ترتيب زيارات ميدانية عند الحاجة. فريقنا موزع عبر مناطق زمنية متعددة لتوفير تغطية مثلى للعملاء الدوليين.",
                    faq3Question: "في أي تقنيات مايكروسوفت تتخصص BRUXINNOV؟", faq3Answer: "نحن متخصصون في Microsoft Fabric مع خبرة عميقة في Power BI و Azure Data Factory و Azure SQL و Databricks و Azure OpenAI و Microsoft Purview. يحمل فريقنا شهادات متقدمة في حلول Azure للبيانات والذكاء الاصطناعي ويتبع أحدث أفضل الممارسات من مايكروسوفت لمنصات البيانات الحديثة، بما في ذلك OneLake و Direct Lake وتكامل Copilot.",
                    faq4Question: "ما هي الصناعات التي تخدمها BRUXINNOV؟", faq4Answer: "تخدم BRUXINNOV عملاء المؤسسات في قطاعات التصنيع، السلع الاستهلاكية، الاتصالات، الخدمات المالية، الرعاية الصحية، والبرمجيات كخدمة (B2B SaaS). لدينا خبرة خاصة في تحليلات سلاسل التوريد، ذكاء العملاء، التقارير المالية، ولوحات المعلومات التشغيلية. حلولنا مصممة لتلبية المتطلبات التنظيمية الصارمة بما في ذلك GDPR و SOX ومعايير الامتثال الخاصة بالصناعة.",
                    faq5Question: "كيف تضمن BRUXINNOV حوكمة البيانات والأمان؟", faq5Answer: "الأمان والحوكمة مدمجان في كل حل نقدمه. نطبق التحكم في الوصول القائم على الأدوار (RBAC)، أمان مستوى الصف (RLS)، تتبع مسار البيانات، ومراقبة جودة البيانات الآلية. جميع الحلول تتبع بنية Zero Trust من مايكروسوفت وتشمل عقود البيانات، مبادئ الخصوصية بالتصميم، ومسارات تدقيق شاملة للامتثال التنظيمي.",
                    faq6Question: "ما نوع العائد على الاستثمار الذي يمكننا توقعه من التعاون مع BRUXINNOV؟", faq6Answer: "يشهد عملاؤنا عادة انخفاضاً بنسبة 30-40% في وقت الحصول على الرؤى، وتحسناً بنسبة 12-18% في دقة التنبؤ، ودورات قرار أسرع بنسبة 20-30%. نقيس العائد على الاستثمار من خلال مؤشرات أداء محددة متفق عليها خلال مرحلة الاكتشاف، بما في ذلك توفير التكاليف من التقارير الآلية، وتأثير الإيرادات من التنبؤ الأفضل، ومكاسب الكفاءة من اعتماد التحليلات الذاتية.",
                    faq7Question: "هل تقدم BRUXINNOV دعماً مستمراً بعد إنجاز المشروع؟", faq7Answer: "نعم، نقدم حزم دعم مرنة تشمل الخدمات المدارة، الدعم عند الطلب، وإنشاء مركز التميز. نقدم أيضاً برامج تدريبية لرفع مهارات فرقكم الداخلية، وجلسات نقل المعرفة، ويمكننا الاندماج مع فريقكم خلال فترة الانتقال لضمان الاعتماد المستدام والتحسين المستمر.",
                    cookieTitle: "نحن نستخدم ملفات تعريف الارتباط لتحسين تجربتك", cookieMessage: "نستخدم ملفات تعريف الارتباط الأساسية لضمان عمل موقعنا. نود أيضاً استخدام ملفات تعريف ارتباط تحليلية اختيارية لمساعدتنا في تحسينه. لن نستخدم الملفات الاختيارية إلا إذا قمت بالموافقة عليها.",
                    cookieSettings: "إعدادات ملفات تعريف الارتباط", cookieReject: "رفض الكل", cookieAccept: "قبول الكل", cookieCancel: "إلغاء", cookieSave: "حفظ التفضيلات",
                    cookieModalTitle: "إعدادات ملفات تعريف الارتباط", cookieEssentialTitle: "ملفات تعريف الارتباط الأساسية", cookieRequired: "مطلوبة", cookieEssentialDesc: "هذه الملفات ضرورية لعمل الموقع ولا يمكن إيقاف تشغيلها.",
                    cookieAnalyticsTitle: "ملفات تعريف الارتباط التحليلية", cookieAnalyticsDesc: "تساعدنا هذه الملفات في فهم كيفية تفاعل الزوار مع موقعنا من خلال جمع معلومات مجهولة المصدر.",
                    privacyModalTitle: "سياسة الخصوصية", privacyDataCollection: "جمع البيانات", privacyDataCollectionText: "تجمع BRUXINNOV SRL المعلومات الشخصية عندما تقدمها طواعية من خلال نماذج الاتصال، طلبات الاستشارة، أو الاشتراكات في النشرة الإخبارية. يشمل ذلك اسمك، عنوان بريدك الإلكتروني، معلومات الشركة، وأي تفاصيل تشاركها حول تحديات البيانات الخاصة بك.",
                    privacyDataUse: "كيف نستخدم بياناتك", privacyDataUseText: "نستخدم معلوماتك للرد على استفساراتك، تقديم خدمات الاستشارة، إرسال رؤى صناعية ذات صلة، وتحسين خدماتنا. نحن لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة إلا إذا اقتضى القانون ذلك أو بموافقتك الصريحة.",
                    privacyDataSecurity: "أمان البيانات", privacyDataSecurityText: "نطبق تدابير تقنية وتنظيمية مناسبة لحماية بياناتك الشخصية من الوصول غير المصرح به، التعديل، الإفصاح، أو التدمير. تتم معالجة جميع البيانات وفقاً لمتطلبات اللائحة العامة لحماية البيانات (GDPR) وتُحفظ بأمان داخل الاتحاد الأوروبي.",
                    privacyRights: "حقوقك", privacyRightsText: "بموجب اللائحة العامة لحماية البيانات (GDPR)، يحق لك الوصول إلى بياناتك الشخصية، تصحيحها، مسحها، تقييد معالجتها، ونقلها. يمكنك أيضاً سحب موافقتك في أي وقت. لممارسة هذه الحقوق، تواصل معنا عبر info@bruxinnov.com.",
                    privacyContact: "معلومات الاتصال", privacyContactText: "للأسئلة المتعلقة بالخصوصية أو لممارسة حقوقك، تواصل مع BRUXINNOV SRL عبر info@bruxinnov.com أو على العنوان: Chaussée d’Alsemberg 897 1180 BRUXELLES (Uccle).",
                    termsModalTitle: "شروط الخدمة", termsAcceptance: "قبول الشروط", termsAcceptanceText: "من خلال الوصول إلى خدمات BRUXINNOV SRL واستخدامها، فإنك تقبل وتوافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام خدماتنا.",
                    termsCompanyInfo: "معلومات الشركة", termsCompanyInfoText: "BRUXINNOV SRL هي شركة بلجيكية مسجلة تحت رقم الشركة BE 1002.714.833، ومقرها المسجل في Chaussée d’Alsemberg 897 1180 BRUXELLES (Uccle). رقم ضريبة القيمة المضافة: BE 1002.714.833.",
                    termsServices: "وصف الخدمات", termsServicesText: "نقدم خدمات استشارية في Microsoft Fabric، Power BI، Azure، وتحويل البيانات بالذكاء الاصطناعي. تشمل خدماتنا الاستشارات الاستراتيجية، التنفيذ، التدريب، والدعم المستمر.",
                    termsIntellectualProperty: "الملكية الفكرية", termsIntellectualPropertyText: "جميع حقوق الملكية الفكرية في خدماتنا ومنهجياتنا ومخرجاتنا تبقى ملكاً لـ BRUXINNOV SRL. أنت تحتفظ بحقوق بيانات أعمالك وأي حلول مخصصة تم تطويرها خصيصاً لمؤسستك.",
                    termsConfidentiality: "السرية", termsConfidentialityText: "نحافظ على سرية تامة لمعلومات أعمالك وبياناتك. تُعامل جميع المعلومات المشتركة خلال فترة تعاوننا على أنها سرية ومحمية بموجب قوانين حماية البيانات البلجيكية والأوروبية.",
                    termsPayment: "شروط الدفع", termsPaymentText: "تُحدد شروط الدفع في اتفاقيات الخدمة الفردية. تُستحق الفواتير خلال 30 يوماً ما لم يُتفق على خلاف ذلك. قد تترتب على المدفوعات المتأخرة رسوم فائدة كما يسمح به القانون البلجيكي.",
                    termsLiability: "المسؤولية والحدود", termsLiabilityText: "تقتصر مسؤوليتنا على المبلغ المدفوع للخدمة المحددة المعنية. نحن لسنا مسؤولين عن الأضرار غير المباشرة أو التبعية أو العقابية. ينطبق هذا التقييد إلى أقصى حد يسمح به القانون البلجيكي.",
                    termsTermination: "إنهاء الخدمة", termsTerminationText: "يجوز لأي من الطرفين إنهاء الخدمات بإشعار كتابي كما هو محدد في اتفاقية الخدمة. عند الإنهاء، تظل مسؤولاً عن دفع تكاليف الخدمات المقدمة حتى تاريخ الإنهاء.",
                    termsGoverningLaw: "القانون الحاكم", termsGoverningLawText: "تخضع هذه الشروط للقانون البلجيكي. تُحل أي نزاعات في محاكم بروكسل، بلجيكا، ما لم يُتفق على خلاف ذلك كتابياً.",
                    termsChanges: "تغييرات الشروط", termsChangesText: "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. ستكون التغييرات سارية المفعول فور نشرها. استمرارك في استخدام خدماتنا يُعد قبولاً للشروط المعدلة.",
                    termsContact: "معلومات الاتصال", termsContactText: "للأسئلة حول هذه الشروط، تواصل مع BRUXINNOV SRL عبر info@bruxinnov.com أو على العنوان: Chaussée d’Alsemberg 897 1180 BRUXELLES (Uccle).",
                    servicesMainTitle: 'خدمات تركز على النتائج عبر دورة حياة <span class="gradient-text">البيانات ← القرارات</span>',
                    servicesMainDesc: "من هندسة البيانات إلى وكلاء الذكاء الاصطناعي واعتماد الأنظمة، نوائم التكنولوجيا مع القرارات الأكثر أهمية لعملك.",
                    mainService1Title: "تنفيذ وتحديث ذكاء الأعمال", mainService1Desc: "نترجم متطلبات الأعمال إلى نماذج دلالية قوية وتقارير موثقة - من أعلى إلى أسفل أو العكس.", mainService1Outcome: "النتائج: مؤشرات أداء متسقة، نماذج محكومة، قرارات أسرع.",
                    mainService2Title: "تمكين التحليلات الذاتية", mainService2Desc: "نمكّن مستخدمي الأعمال بمجموعات بيانات محكومة وقوالب وتجربة استخدام آمنة وسريعة وقابلة للتوسع.", mainService2Outcome: "النتائج: تقليل الطلبات المخصصة، اعتماد أعلى للأنظمة.",
                    mainService3Title: "هندسة البيانات وبحيرات البيانات (Lakehouse)", mainService3Desc: "بناء خطوط أنابيب موثوقة للمعالجة المجمعة واللحظية، توحيد الصيغ والسرعات، وإدارة نمو البيانات بكفاءة.", mainService3Outcome: "النتائج: بيانات موثوقة، تكلفة إجمالية أقل، توسع منظم.",
                    mainService4Title: "علوم البيانات وعمليات تعلم الآلة (MLOps)", mainService4Desc: "اكتشاف الاحتيال، تجزئة العملاء، تحسين العمليات، وتشغيل النماذج في بيئة الإنتاج بخطوط أنابيب قابلة للتكرار.", mainService4Outcome: "النتائج: تحسن قابل للقياس، نماذج مراقبة، شفافية أعلى.",
                    mainService5Title: "وكلاء الذكاء الاصطناعي لاتخاذ القرار", mainService5Desc: "وكلاء يتنبؤون ويحاكون ويوصون - مدمجون في Power BI مع حواجز أمان تضمن الإشراف البشري.", mainService5Outcome: "الأثر: تقليل وقت الوصول للرؤية ↓ 40%، تقليل خطأ التنبؤ ↓ 12-18%.",
                    mainService6Title: "مركز التميز لـ Power BI", mainService6Desc: "الحوكمة، أمان مستوى الصف/الكائن (RLS/OLS)، مجموعات بيانات معتمدة، ضبط الأداء، ونموذج تشغيل مستدام.", mainService6Outcome: "النتائج: مقاييس موثوقة، تقارير أسرع، مخاطر أقل.",
                    mainService7Title: "استراتيجية البيانات والحوكمة", mainService7Desc: "القرارات في صميم العمل: عقود البيانات، كتالوج مؤشرات الأداء، تتبع مسار البيانات، اتفاقيات مستوى الجودة، والخصوصية بالتصميم.", mainService7Outcome: "النتائج: ملكية واضحة، امتثال تنظيمي، رؤية واضحة لعائد الاستثمار.",
                    mainService8Title: "سرد البيانات واعتمادها", mainService8Desc: "تقليل الاعتماد المفرط على لوحات المعلومات والتركيز على السرد القصصي. نعلم الفرق كيفية إيصال الرؤى التي تقود إلى اتخاذ إجراءات.", mainService8Outcome: "النتائج: فهم أعمق، تفاعل أكبر، قرارات حاسمة.",
                    catalogTitle: "دليل الخدمات",
                    catalog1Title: "انطلاقة سريعة مع Fabric", catalog1Desc: "4 أسابيع لبناء بحيرة بيانات (Lakehouse) محكومة ونموذج دلالي قابل لإعادة الاستخدام.",
                    catalog2Title: "لوحات معلومات تنفيذية عبر Power BI", catalog2Desc: "3 أسابيع من تصميم مؤشرات الأداء إلى التحليل العميق، السرديات، وتطبيق أمان مستوى الصف (RLS).",
                    catalog3Title: "وكلاء الذكاء الاصطناعي لاتخاذ القرار", catalog3Desc: "6 أسابيع لتطوير وكيل تجريبي يتنبأ ويوصي بالإجراءات المناسبة.",
                    catalog4Title: "مسرّع التحليلات الذاتية", catalog4Desc: "3 أسابيع لتمكين خدمة ذاتية آمنة وقابلة للتوسع.",
                    catalog5Title: "حوكمة ذكاء الأعمال ونموذج التشغيل", catalog5Desc: "أسبوعان لوضع سياسات وحواجز حماية مستدامة.",
                    catalog6Title: "تحديث هندسة البيانات", catalog6Desc: "6 أسابيع لبناء خطوط أنابيب بيانات مرنة وموثوقة.",
                    catalog7Title: "سباق القيمة لعلوم البيانات", catalog7Desc: "4 أسابيع لإثبات القيمة التنبؤية للبيانات.",
                    catalog8Title: "معسكر تدريبي لسرد البيانات", catalog8Desc: "أسبوعان لتعلم صياغة سرديات بيانات مقنعة ومؤثرة.",
                    industriesTitle: "الصناعات وحالات الاستخدام",
                    industry1Title: "التصنيع", industry1Desc: "تحليلات الهدر، الإنتاجية، الصيانة التنبؤية، وإدارة مخاطر الموردين.",
                    industry2Title: "السلع الاستهلاكية (FMCG)", industry2Desc: "تخطيط الطلب، عائد العروض الترويجية، إدارة الإنفاق التجاري، واستراتيجيات الوصول للسوق.",
                    industry3Title: "الاتصالات", industry3Desc: "مؤشرات أداء مركز العمليات، توقع تسرب العملاء، لوحات معلومات اتفاقيات مستوى الخدمة (SLA)، وضمان الإيرادات.",
                    industry4Title: "التكنولوجيا المالية (Fintech)", industry4Desc: "تقييم المخاطر، كشف الاحتيال، جودة تأهيل العملاء، وفحوصات الامتثال.",
                    industry5Title: "البرمجيات كخدمة (B2B SaaS)", industry5Desc: "تحليلات المنتج، مسارات النمو الموجه بالمنتج (PLG)، ولوحات معلومات التوسع والاحتفاظ بالعملاء.",
                    industry6Title: "الرعاية الصحية", industry6Desc: "مؤشرات الأداء التشغيلية، توقع السعة الاستيعابية، وتحليلات تحافظ على خصوصية المرضى.",
                    aboutSubtitle: "نحول البيانات إلى قرارات حاسمة باستخدام Microsoft Fabric و Azure و Power BI — بدءاً من المكاسب السريعة وصولاً إلى النطاق المؤسسي الشامل.",
                    aboutFeature1Title: "نتائج الأعمال أولاً", aboutFeature1Desc: "تحديد مؤشرات الأداء مسبقاً — وقت الوصول للرؤية، خطأ التنبؤ، وقت الدورة، وتكلفة الخدمة.",
                    aboutFeature2Title: "مخططات أصلية لـ Fabric", aboutFeature2Desc: "أنماط جاهزة للتكيف لـ Lakehouse و Warehouse وأمان OneLake و Power BI.",
                    aboutFeature3Title: "تسليم مرن (Agile)", aboutFeature3Desc: "دورات عمل (Sprints) كل أسبوعين، عرض توضيحي كل جمعة، وقائمة مهام شفافة لأصحاب المصلحة.",
                    aboutFeature4Title: "حوكمة بمعايير أوروبية", aboutFeature4Desc: "تحكم في الوصول (RBAC)، تتبع مسار البيانات، اتفاقيات مستوى الجودة، ومعالجة البيانات الشخصية (PII) مدمجة.",
                    deliveryTitle: "كيف نقدم خدماتنا",
                    deliveryStep1: "<strong>الاستكشاف (1-2 أسبوع)</strong> — فهم الأهداف التجارية، مشهد البيانات، والقيود؛ واختيار أهم حالات الاستخدام.",
                    deliveryStep2: "<strong>المخطط (أسبوع واحد)</strong> — تصميم البنية المستهدفة، خطة الطبقة الدلالية، الحوكمة، ونموذج عائد الاستثمار.",
                    deliveryStep3: "<strong>التجريب (4-6 أسابيع)</strong> — تقديم 1-2 حالة استخدام عالية التأثير مع لوحات معلومات ووكلاء ذكاء اصطناعي فعالة.",
                    deliveryStep4: "<strong>التوسع (مستمر)</strong> — تعزيز خطوط الأنابيب والنماذج والمراقبة؛ وتمكين الخدمة الذاتية والاعتماد.",
                    deliveryNote: "منهجية أجايل مزدوجة المسار: عرض توضيحي كل جمعة، قائمة مهام شفافة، ومؤشرات أداء قابلة للقياس.",
                    stackTitle: "الأدوات والتقنيات",
                    catalog1Detail1: "OneLake + مناطق الميداليات، خطوط الأنابيب والمراقبة", catalog1Detail2: "نموذج الأمان، مساحات العمل وتدفق الإصدار", catalog1Detail3: "لوحة معلومات مؤشرات الأداء التنفيذية + خطة الاعتماد", catalog1Impact: "الأثر النموذجي: تقليل وقت الوصول للرؤية ↓ 30-40%",
                    catalog2Detail1: "كتالوج المقاييس وعقود مؤشرات الأداء", catalog2Detail2: "نموذج محسن، RLS/OLS، ضبط الأداء", catalog2Detail3: "قصص الرؤى مع مطالبات القرار", catalog2Impact: "الأثر النموذجي: تقليل دورة القرار ↓ 20-30%",
                    catalog3Detail1: "اختيار حالة الاستخدام، حواجز الحماية ونموذج عائد الاستثمار", catalog3Detail2: "متجر الميزات ومنصة التقييم", catalog3Detail3: "مركز عمل Power BI (بإشراف بشري)", catalog3Impact: "الأثر النموذجي: تقليل خطأ التنبؤ (MAPE) ↓ 12-18%",
                    catalog4Detail1: "مجموعات بيانات وقوالب معتمدة", catalog4Detail2: "أنماط الوصول، الحوكمة والفهرسة", catalog4Detail3: "ورش تمكين للمحللين", catalog4Impact: "الأثر: تقليل المهام المتراكمة ↓، زيادة الاعتماد ↑",
                    catalog5Detail1: "الأدوار، مصفوفة الصلاحيات (RACI)، المراجعة وتدفق الإصدار", catalog5Detail2: "عقود البيانات، اتفاقيات مستوى الجودة، وتتبع المسار", catalog5Detail3: "مجتمع الممارسة وأدلة العمل", catalog5Impact: "الأثر: تقليل الانعزال، مؤشرات أداء موثوقة",
                    catalog6Detail1: "معالجة مجمعة + بث (CDC، أحداث)", catalog6Detail2: "معالجة تدريجية وتحكم في التكلفة", catalog6Detail3: "المراقبة: الجودة، المسار، وأهداف مستوى الخدمة (SLOs)", catalog6Impact: "الأثر: زيادة الموثوقية ↑، تقليل التكلفة الإجمالية ↓",
                    catalog7Detail1: "تأطير المشكلة ومقاييس النجاح", catalog7Detail2: "خط الأساس ← هندسة الميزات ← النموذج", catalog7Detail3: "الرفع، المخاطر، وخيارات النشر", catalog7Impact: "الأثر: رفع موثق، خارطة طريق واضحة",
                    catalog8Detail1: "أطر القصة والإطارات الشبكية", catalog8Detail2: "أفضل الممارسات البصرية وإمكانية الوصول", catalog8Detail3: "دليل 'من الرؤية إلى العمل'", catalog8Impact: "الأثر: زيادة التفاعل ↑، اتخاذ إجراءات ↑",
                    stack1Title: "<strong>منصة البيانات</strong>", stack1Desc: "Microsoft Fabric (Lakehouse، Warehouse، Real-Time)",
                    stack2Title: "<strong>استيعاب البيانات والبث</strong>", stack2Desc: "Data Factory، Event Hubs، IoT Hub، Dataflow Gen2",
                    stack3Title: "<strong>التخزين والبحيرة</strong>", stack3Desc: "OneLake، Delta، Parquet، Shortcuts",
                    stack4Title: "<strong>التحويل والنمذجة</strong>", stack4Desc: "Fabric Notebooks، SQL، أنماط dbt، النموذج الدلالي",
                    stack5Title: "<strong>التحليلات</strong>", stack5Desc: "Power BI (RLS/OLS، نماذج مركبة، Direct Lake)",
                    stack6Title: "<strong>الذكاء الاصطناعي والتعلم الآلي</strong>", stack6Desc: "Azure OpenAI، MLflow، Feature Store، أنماط Prompt/Agent",
                    stack7Title: "<strong>الحوكمة</strong>", stack7Desc: "Purview، Entra ID، عقود البيانات، النسب واتفاقيات مستوى جودة البيانات",
                    stack8Title: "<strong>DevOps</strong>", stack8Desc: "GitHub Actions / Azure DevOps، IaC (Bicep/Terraform)",
                    stack9Title: "<strong>المراقبة</strong>", stack9Desc: "مراقبة Fabric، Log Analytics، ضوابط التكلفة"
                }`;

html = html.replace(/ar: \{[\s\S]*?\},[\s]*fr:/, newArabicTranslations + ',\n                fr:');

// Let's also make the English text more professional
html = html.replace('Ship <span class="text-white">Microsoft Fabric</span> decision intelligence in weeks — not quarters.', 'Deliver <span class="text-white">Microsoft Fabric</span> decision intelligence in weeks, not quarters.');
html = html.replace('We build AI-ready data platforms on Microsoft Fabric & Azure that cut time-to-insight by 40% and unlock growth across commercial, ops, and finance.', 'We engineer AI-ready data platforms on Microsoft Fabric and Azure, reducing time-to-insight by 40% and unlocking scalable growth across commercial, operations, and finance.');

fs.writeFileSync('index.html', html);
console.log('Done');
