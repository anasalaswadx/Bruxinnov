const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Add sections to HTML
const aboutEndIndex = html.indexOf('</section>', html.indexOf('id="about"')) + 10;

const caseStudiesAndInsightsHTML = `
        <!-- Case Studies Section -->
        <section id="case-studies" class="py-24 bg-gray-50 border-t border-gray-100 fade-in-section">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6" data-lang-key="caseStudiesTitle">Case Studies</h2>
                    <p class="text-lg text-gray-600" data-lang-key="caseStudiesSubtitle">Real-world impact and measurable ROI delivered for our clients.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-container">
                    <div class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover group">
                        <div class="h-48 bg-gradient-to-r from-primary to-accent-blue relative overflow-hidden">
                            <div class="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/manufacturing/800/400')] bg-cover bg-center mix-blend-overlay"></div>
                            <div class="absolute bottom-4 left-4 right-4">
                                <span class="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full" data-lang-key="cs1Tag">Manufacturing</span>
                            </div>
                        </div>
                        <div class="p-8">
                            <h3 class="text-xl font-bold text-primary mb-3 group-hover:text-accent-cyan transition-colors" data-lang-key="cs1Title">Global Manufacturer Reduces Scrap by 15%</h3>
                            <p class="text-gray-600 mb-6" data-lang-key="cs1Desc">Implemented a real-time IoT analytics platform on Microsoft Fabric, enabling plant managers to identify and resolve quality issues before they escalate.</p>
                            <div class="flex items-center text-accent-cyan font-semibold text-sm">
                                <span data-lang-key="readMore">Read Full Story</span>
                                <svg class="w-4 h-4 ml-2 rtl:rotate-180 rtl:mr-2 rtl:ml-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover group">
                        <div class="h-48 bg-gradient-to-r from-accent-cyan to-accent-blue relative overflow-hidden">
                            <div class="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/retail/800/400')] bg-cover bg-center mix-blend-overlay"></div>
                            <div class="absolute bottom-4 left-4 right-4">
                                <span class="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full" data-lang-key="cs2Tag">FMCG & Retail</span>
                            </div>
                        </div>
                        <div class="p-8">
                            <h3 class="text-xl font-bold text-primary mb-3 group-hover:text-accent-cyan transition-colors" data-lang-key="cs2Title">Retailer Accelerates Reporting by 80%</h3>
                            <p class="text-gray-600 mb-6" data-lang-key="cs2Desc">Modernized legacy BI with a governed Power BI Center of Excellence, empowering 500+ users with self-service analytics and trusted metrics.</p>
                            <div class="flex items-center text-accent-cyan font-semibold text-sm">
                                <span data-lang-key="readMore">Read Full Story</span>
                                <svg class="w-4 h-4 ml-2 rtl:rotate-180 rtl:mr-2 rtl:ml-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Insights Section -->
        <section id="insights" class="py-24 bg-white fade-in-section">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-end mb-12">
                    <div class="max-w-2xl">
                        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-lang-key="insightsTitle">Latest Insights</h2>
                        <p class="text-lg text-gray-600" data-lang-key="insightsSubtitle">Perspectives on data strategy, AI, and Microsoft Fabric.</p>
                    </div>
                    <a href="#" class="hidden md:flex items-center text-accent-cyan font-semibold hover:text-primary transition-colors">
                        <span data-lang-key="viewAllInsights">View All</span>
                        <svg class="w-4 h-4 ml-2 rtl:rotate-180 rtl:mr-2 rtl:ml-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-container">
                    <div class="group cursor-pointer">
                        <div class="rounded-2xl overflow-hidden mb-4 relative h-48">
                            <img src="https://picsum.photos/seed/fabric/600/400" alt="Microsoft Fabric" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer">
                        </div>
                        <div class="flex items-center gap-3 text-xs text-gray-500 mb-3">
                            <span data-lang-key="insight1Date">Oct 15, 2023</span>
                            <span>•</span>
                            <span class="text-accent-cyan font-medium" data-lang-key="insight1Category">Architecture</span>
                        </div>
                        <h3 class="text-lg font-bold text-primary mb-2 group-hover:text-accent-cyan transition-colors" data-lang-key="insight1Title">Why Microsoft Fabric is a Game Changer for Enterprise Data</h3>
                    </div>
                    <div class="group cursor-pointer">
                        <div class="rounded-2xl overflow-hidden mb-4 relative h-48">
                            <img src="https://picsum.photos/seed/ai/600/400" alt="AI Agents" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer">
                        </div>
                        <div class="flex items-center gap-3 text-xs text-gray-500 mb-3">
                            <span data-lang-key="insight2Date">Nov 02, 2023</span>
                            <span>•</span>
                            <span class="text-accent-cyan font-medium" data-lang-key="insight2Category">Artificial Intelligence</span>
                        </div>
                        <h3 class="text-lg font-bold text-primary mb-2 group-hover:text-accent-cyan transition-colors" data-lang-key="insight2Title">Deploying AI Decision Agents: A Practical Guide</h3>
                    </div>
                    <div class="group cursor-pointer">
                        <div class="rounded-2xl overflow-hidden mb-4 relative h-48">
                            <img src="https://picsum.photos/seed/governance/600/400" alt="Data Governance" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer">
                        </div>
                        <div class="flex items-center gap-3 text-xs text-gray-500 mb-3">
                            <span data-lang-key="insight3Date">Nov 18, 2023</span>
                            <span>•</span>
                            <span class="text-accent-cyan font-medium" data-lang-key="insight3Category">Governance</span>
                        </div>
                        <h3 class="text-lg font-bold text-primary mb-2 group-hover:text-accent-cyan transition-colors" data-lang-key="insight3Title">Building a Power BI Center of Excellence That Actually Works</h3>
                    </div>
                </div>
                <div class="mt-8 text-center md:hidden">
                    <a href="#" class="inline-flex items-center text-accent-cyan font-semibold hover:text-primary transition-colors">
                        <span data-lang-key="viewAllInsights">View All</span>
                        <svg class="w-4 h-4 ml-2 rtl:rotate-180 rtl:mr-2 rtl:ml-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                </div>
            </div>
        </section>
`;

const newHtml = html.slice(0, aboutEndIndex) + caseStudiesAndInsightsHTML + html.slice(aboutEndIndex);
fs.writeFileSync('index.html', newHtml);

// 2. Update translations.js
let transJs = fs.readFileSync('translations.js', 'utf8');

const enAdditions = \`
        navCaseStudies: "Case Studies", navInsights: "Insights",
        navCaseStudiesMobile: "Case Studies", navInsightsMobile: "Insights",
        
        caseStudiesTitle: "Case Studies",
        caseStudiesSubtitle: "Real-world impact and measurable ROI delivered for our clients.",
        cs1Tag: "Manufacturing", cs1Title: "Global Manufacturer Reduces Scrap by 15%", cs1Desc: "Implemented a real-time IoT analytics platform on Microsoft Fabric, enabling plant managers to identify and resolve quality issues before they escalate.",
        cs2Tag: "FMCG & Retail", cs2Title: "Retailer Accelerates Reporting by 80%", cs2Desc: "Modernized legacy BI with a governed Power BI Center of Excellence, empowering 500+ users with self-service analytics and trusted metrics.",
        readMore: "Read Full Story",
        
        insightsTitle: "Latest Insights",
        insightsSubtitle: "Perspectives on data strategy, AI, and Microsoft Fabric.",
        viewAllInsights: "View All",
        insight1Date: "Oct 15, 2023", insight1Category: "Architecture", insight1Title: "Why Microsoft Fabric is a Game Changer for Enterprise Data",
        insight2Date: "Nov 02, 2023", insight2Category: "Artificial Intelligence", insight2Title: "Deploying AI Decision Agents: A Practical Guide",
        insight3Date: "Nov 18, 2023", insight3Category: "Governance", insight3Title: "Building a Power BI Center of Excellence That Actually Works",
\`;

const arAdditions = \`
        navCaseStudies: "دراسات الحالة", navInsights: "رؤى وأفكار",
        navCaseStudiesMobile: "دراسات الحالة", navInsightsMobile: "رؤى وأفكار",
        
        caseStudiesTitle: "دراسات الحالة",
        caseStudiesSubtitle: "تأثير حقيقي وعائد استثمار ملموس حققناه لعملائنا.",
        cs1Tag: "التصنيع", cs1Title: "شركة تصنيع عالمية تقلل الهدر بنسبة 15%", cs1Desc: "تنفيذ منصة تحليلات إنترنت الأشياء في الوقت الفعلي على Microsoft Fabric، مما مكن مديري المصانع من تحديد وحل مشكلات الجودة قبل تفاقمها.",
        cs2Tag: "السلع الاستهلاكية والتجزئة", cs2Title: "شركة تجزئة تسرّع إعداد التقارير بنسبة 80%", cs2Desc: "تحديث ذكاء الأعمال القديم من خلال مركز تميز Power BI محكوم، مما مكّن أكثر من 500 مستخدم من التحليلات الذاتية والمقاييس الموثوقة.",
        readMore: "اقرأ القصة كاملة",
        
        insightsTitle: "أحدث الرؤى",
        insightsSubtitle: "وجهات نظر حول استراتيجية البيانات والذكاء الاصطناعي و Microsoft Fabric.",
        viewAllInsights: "عرض الكل",
        insight1Date: "15 أكتوبر 2023", insight1Category: "البنية التحتية", insight1Title: "لماذا يعتبر Microsoft Fabric نقطة تحول لبيانات المؤسسات",
        insight2Date: "02 نوفمبر 2023", insight2Category: "الذكاء الاصطناعي", insight2Title: "نشر وكلاء الذكاء الاصطناعي لاتخاذ القرار: دليل عملي",
        insight3Date: "18 نوفمبر 2023", insight3Category: "الحوكمة", insight3Title: "بناء مركز تميز Power BI فعال حقاً",
\`;

const frAdditions = \`
        navCaseStudies: "Études de Cas", navInsights: "Insights",
        navCaseStudiesMobile: "Études de Cas", navInsightsMobile: "Insights",
        
        caseStudiesTitle: "Études de Cas",
        caseStudiesSubtitle: "Impact réel et ROI mesurable pour nos clients.",
        cs1Tag: "Fabrication", cs1Title: "Un fabricant mondial réduit ses déchets de 15 %", cs1Desc: "Mise en œuvre d'une plateforme d'analyse IoT en temps réel sur Microsoft Fabric, permettant aux directeurs d'usine d'identifier et de résoudre les problèmes de qualité avant qu'ils ne s'aggravent.",
        cs2Tag: "Biens de consommation", cs2Title: "Un détaillant accélère son reporting de 80 %", cs2Desc: "Modernisation de la BI existante avec un Centre d'Excellence Power BI gouverné, offrant à plus de 500 utilisateurs des analyses en libre-service et des métriques fiables.",
        readMore: "Lire l'histoire complète",
        
        insightsTitle: "Derniers Insights",
        insightsSubtitle: "Perspectives sur la stratégie des données, l'IA et Microsoft Fabric.",
        viewAllInsights: "Voir tout",
        insight1Date: "15 Oct 2023", insight1Category: "Architecture", insight1Title: "Pourquoi Microsoft Fabric change la donne pour les données d'entreprise",
        insight2Date: "02 Nov 2023", insight2Category: "Intelligence Artificielle", insight2Title: "Déployer des agents de décision IA : Un guide pratique",
        insight3Date: "18 Nov 2023", insight3Category: "Gouvernance", insight3Title: "Construire un Centre d'Excellence Power BI qui fonctionne vraiment",
\`;

const nlAdditions = \`
        navCaseStudies: "Casestudies", navInsights: "Inzichten",
        navCaseStudiesMobile: "Casestudies", navInsightsMobile: "Inzichten",
        
        caseStudiesTitle: "Casestudies",
        caseStudiesSubtitle: "Echte impact en meetbare ROI geleverd voor onze klanten.",
        cs1Tag: "Productie", cs1Title: "Wereldwijde fabrikant vermindert afval met 15%", cs1Desc: "Implementatie van een real-time IoT analytics platform op Microsoft Fabric, waardoor plantmanagers kwaliteitsproblemen kunnen identificeren en oplossen voordat ze escaleren.",
        cs2Tag: "FMCG & Retail", cs2Title: "Retailer versnelt rapportage met 80%", cs2Desc: "Modernisering van legacy BI met een beheerd Power BI Center of Excellence, waardoor meer dan 500 gebruikers self-service analytics en vertrouwde metrics kregen.",
        readMore: "Lees het volledige verhaal",
        
        insightsTitle: "Laatste Inzichten",
        insightsSubtitle: "Perspectieven op datastrategie, AI en Microsoft Fabric.",
        viewAllInsights: "Bekijk alles",
        insight1Date: "15 Okt 2023", insight1Category: "Architectuur", insight1Title: "Waarom Microsoft Fabric een gamechanger is voor bedrijfsdata",
        insight2Date: "02 Nov 2023", insight2Category: "Kunstmatige Intelligentie", insight2Title: "AI-beslissingsagenten inzetten: Een praktische gids",
        insight3Date: "18 Nov 2023", insight3Category: "Governance", insight3Title: "Een Power BI Center of Excellence bouwen dat echt werkt",
\`;

transJs = transJs.replace('navContactMobile: "Let\\'s Talk",', 'navContactMobile: "Let\\'s Talk",\n' + enAdditions);
transJs = transJs.replace('navContactMobile: "تواصل معنا",', 'navContactMobile: "تواصل معنا",\n' + arAdditions);
transJs = transJs.replace('navContactMobile: "Contact",', 'navContactMobile: "Contact",\n' + frAdditions);
// For NL, we need to be careful as it's the last one
transJs = transJs.replace('navContactMobile: "Contact",', 'navContactMobile: "Contact",\n' + nlAdditions);

fs.writeFileSync('translations.js', transJs);

// 3. Update the inline translations object in index.html
let finalHtml = fs.readFileSync('index.html', 'utf8');
const translationsObjectString = transJs.replace('export default ', '').replace(/;$/, '');
const startMarker = 'const translations = {';
const startIndex = finalHtml.indexOf(startMarker);
const endIndex = finalHtml.indexOf('        // Language Switcher Logic', startIndex);
const oldTranslationsString = finalHtml.substring(startIndex, endIndex);
finalHtml = finalHtml.replace(oldTranslationsString, \`const translations = \${translationsObjectString}\\n\\n\`);

fs.writeFileSync('index.html', finalHtml);

console.log('Done');
