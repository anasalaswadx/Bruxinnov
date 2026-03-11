const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// We need to inject the catalog and industries sections back into the HTML
// Let's find the right place to put them. After the services section.
const servicesEndIndex = html.indexOf('</section>', html.indexOf('id="services"')) + 10;

const catalogAndIndustriesHTML = `
        <!-- Service Catalog -->
        <section id="catalog" class="py-24 bg-white fade-in-section">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6" data-lang-key="catalogTitle">Service Catalog</h2>
                    <p class="text-lg text-gray-600" data-lang-key="catalogSubtitle">Packaged sprints designed for rapid time-to-value and measurable ROI.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-container">
                    <!-- Catalog Item 1 -->
                    <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 card-hover group relative overflow-hidden">
                        <div class="absolute top-0 end-0 bg-accent-cyan text-white text-xs font-bold px-3 py-1 rounded-bl-xl" data-lang-key="catalog1Duration">4 Weeks</div>
                        <h3 class="text-lg font-bold text-primary mb-2 mt-4 group-hover:text-accent-cyan transition-colors" data-lang-key="catalog1Title">Fabric Fast-Start</h3>
                        <p class="text-gray-600 text-sm mb-4" data-lang-key="catalog1Desc">A governed Lakehouse and reusable semantic model.</p>
                        <ul class="space-y-2 mb-4 text-sm text-gray-500">
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog1Detail1">OneLake + medallion zones</span></li>
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog1Detail2">Security model & workspaces</span></li>
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog1Detail3">Executive KPI dashboard</span></li>
                        </ul>
                        <div class="pt-4 border-t border-gray-200 mt-auto">
                            <p class="text-xs font-semibold text-primary" data-lang-key="catalog1Impact">Impact: time-to-insight ↓ 30-40%</p>
                        </div>
                    </div>

                    <!-- Catalog Item 2 -->
                    <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 card-hover group relative overflow-hidden">
                        <div class="absolute top-0 end-0 bg-accent-cyan text-white text-xs font-bold px-3 py-1 rounded-bl-xl" data-lang-key="catalog2Duration">3 Weeks</div>
                        <h3 class="text-lg font-bold text-primary mb-2 mt-4 group-hover:text-accent-cyan transition-colors" data-lang-key="catalog2Title">Power BI Exec Dashboards</h3>
                        <p class="text-gray-600 text-sm mb-4" data-lang-key="catalog2Desc">From KPI canvas to drill-through, narratives, and RLS.</p>
                        <ul class="space-y-2 mb-4 text-sm text-gray-500">
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog2Detail1">Metrics catalog & contracts</span></li>
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog2Detail2">Optimized model & RLS/OLS</span></li>
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog2Detail3">Insight stories & prompts</span></li>
                        </ul>
                        <div class="pt-4 border-t border-gray-200 mt-auto">
                            <p class="text-xs font-semibold text-primary" data-lang-key="catalog2Impact">Impact: decision cycle ↓ 20-30%</p>
                        </div>
                    </div>

                    <!-- Catalog Item 3 -->
                    <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 card-hover group relative overflow-hidden">
                        <div class="absolute top-0 end-0 bg-accent-cyan text-white text-xs font-bold px-3 py-1 rounded-bl-xl" data-lang-key="catalog3Duration">6 Weeks</div>
                        <h3 class="text-lg font-bold text-primary mb-2 mt-4 group-hover:text-accent-cyan transition-colors" data-lang-key="catalog3Title">AI Decision Agents</h3>
                        <p class="text-gray-600 text-sm mb-4" data-lang-key="catalog3Desc">A pilot agent that forecasts and recommends actions.</p>
                        <ul class="space-y-2 mb-4 text-sm text-gray-500">
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog3Detail1">Use-case & ROI model</span></li>
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog3Detail2">Feature store & evaluation</span></li>
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog3Detail3">Power BI action center</span></li>
                        </ul>
                        <div class="pt-4 border-t border-gray-200 mt-auto">
                            <p class="text-xs font-semibold text-primary" data-lang-key="catalog3Impact">Impact: forecast MAPE ↓ 12-18%</p>
                        </div>
                    </div>

                    <!-- Catalog Item 4 -->
                    <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 card-hover group relative overflow-hidden">
                        <div class="absolute top-0 end-0 bg-accent-cyan text-white text-xs font-bold px-3 py-1 rounded-bl-xl" data-lang-key="catalog4Duration">3 Weeks</div>
                        <h3 class="text-lg font-bold text-primary mb-2 mt-4 group-hover:text-accent-cyan transition-colors" data-lang-key="catalog4Title">Self-Service Accelerator</h3>
                        <p class="text-gray-600 text-sm mb-4" data-lang-key="catalog4Desc">Safe, scalable self-service analytics enablement.</p>
                        <ul class="space-y-2 mb-4 text-sm text-gray-500">
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog4Detail1">Certified datasets & templates</span></li>
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog4Detail2">Access patterns & governance</span></li>
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog4Detail3">Enablement workshops</span></li>
                        </ul>
                        <div class="pt-4 border-t border-gray-200 mt-auto">
                            <p class="text-xs font-semibold text-primary" data-lang-key="catalog4Impact">Impact: backlog ↓, adoption ↑</p>
                        </div>
                    </div>

                    <!-- Catalog Item 5 -->
                    <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 card-hover group relative overflow-hidden">
                        <div class="absolute top-0 end-0 bg-accent-cyan text-white text-xs font-bold px-3 py-1 rounded-bl-xl" data-lang-key="catalog5Duration">2 Weeks</div>
                        <h3 class="text-lg font-bold text-primary mb-2 mt-4 group-hover:text-accent-cyan transition-colors" data-lang-key="catalog5Title">BI Governance & Ops Model</h3>
                        <p class="text-gray-600 text-sm mb-4" data-lang-key="catalog5Desc">Guardrails that stick and scale with your team.</p>
                        <ul class="space-y-2 mb-4 text-sm text-gray-500">
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog5Detail1">Roles, RACI & release workflow</span></li>
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog5Detail2">Data contracts & quality SLAs</span></li>
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog5Detail3">Community of practice</span></li>
                        </ul>
                        <div class="pt-4 border-t border-gray-200 mt-auto">
                            <p class="text-xs font-semibold text-primary" data-lang-key="catalog5Impact">Impact: fewer silos, trusted KPIs</p>
                        </div>
                    </div>

                    <!-- Catalog Item 6 -->
                    <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 card-hover group relative overflow-hidden">
                        <div class="absolute top-0 end-0 bg-accent-cyan text-white text-xs font-bold px-3 py-1 rounded-bl-xl" data-lang-key="catalog6Duration">6 Weeks</div>
                        <h3 class="text-lg font-bold text-primary mb-2 mt-4 group-hover:text-accent-cyan transition-colors" data-lang-key="catalog6Title">Data Eng. Modernization</h3>
                        <p class="text-gray-600 text-sm mb-4" data-lang-key="catalog6Desc">Resilient pipelines for modern data workloads.</p>
                        <ul class="space-y-2 mb-4 text-sm text-gray-500">
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog6Detail1">Batch + streaming (CDC)</span></li>
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog6Detail2">Incremental processing</span></li>
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog6Detail3">Observability & lineage</span></li>
                        </ul>
                        <div class="pt-4 border-t border-gray-200 mt-auto">
                            <p class="text-xs font-semibold text-primary" data-lang-key="catalog6Impact">Impact: reliability ↑, TCO ↓</p>
                        </div>
                    </div>

                    <!-- Catalog Item 7 -->
                    <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 card-hover group relative overflow-hidden">
                        <div class="absolute top-0 end-0 bg-accent-cyan text-white text-xs font-bold px-3 py-1 rounded-bl-xl" data-lang-key="catalog7Duration">4 Weeks</div>
                        <h3 class="text-lg font-bold text-primary mb-2 mt-4 group-hover:text-accent-cyan transition-colors" data-lang-key="catalog7Title">Data Science Value Sprint</h3>
                        <p class="text-gray-600 text-sm mb-4" data-lang-key="catalog7Desc">Prove predictive value before scaling.</p>
                        <ul class="space-y-2 mb-4 text-sm text-gray-500">
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog7Detail1">Problem framing & metrics</span></li>
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog7Detail2">Baseline & feature engineering</span></li>
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog7Detail3">Uplift, risk & deployment</span></li>
                        </ul>
                        <div class="pt-4 border-t border-gray-200 mt-auto">
                            <p class="text-xs font-semibold text-primary" data-lang-key="catalog7Impact">Impact: validated uplift, roadmap</p>
                        </div>
                    </div>

                    <!-- Catalog Item 8 -->
                    <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 card-hover group relative overflow-hidden">
                        <div class="absolute top-0 end-0 bg-accent-cyan text-white text-xs font-bold px-3 py-1 rounded-bl-xl" data-lang-key="catalog8Duration">2 Weeks</div>
                        <h3 class="text-lg font-bold text-primary mb-2 mt-4 group-hover:text-accent-cyan transition-colors" data-lang-key="catalog8Title">Data Storytelling Bootcamp</h3>
                        <p class="text-gray-600 text-sm mb-4" data-lang-key="catalog8Desc">Compelling narratives that drive business action.</p>
                        <ul class="space-y-2 mb-4 text-sm text-gray-500">
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog8Detail1">Story frameworks & wireframes</span></li>
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog8Detail2">Visual best practices</span></li>
                            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span data-lang-key="catalog8Detail3">Insight-to-action playbook</span></li>
                        </ul>
                        <div class="pt-4 border-t border-gray-200 mt-auto">
                            <p class="text-xs font-semibold text-primary" data-lang-key="catalog8Impact">Impact: engagement ↑, action ↑</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Industries Section -->
        <section id="industries" class="py-24 bg-gray-50 border-t border-gray-100 fade-in-section">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6" data-lang-key="industriesTitle">Industries & Use Cases</h2>
                    <p class="text-lg text-gray-600" data-lang-key="industriesSubtitle">Tailored data solutions for complex sector challenges.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-container">
                    <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm card-hover">
                        <div class="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center text-accent-cyan mb-4">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                        </div>
                        <h3 class="font-bold text-primary mb-2" data-lang-key="industry1Title">Manufacturing</h3>
                        <p class="text-gray-600 text-sm" data-lang-key="industry1Desc">Scrap analytics, throughput optimization, predictive maintenance, and supplier risk management.</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm card-hover">
                        <div class="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center text-accent-cyan mb-4">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                        </div>
                        <h3 class="font-bold text-primary mb-2" data-lang-key="industry2Title">FMCG & Retail</h3>
                        <p class="text-gray-600 text-sm" data-lang-key="industry2Desc">Demand planning, promo ROI, trade spend optimization, and route-to-market analytics.</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm card-hover">
                        <div class="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center text-accent-cyan mb-4">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg>
                        </div>
                        <h3 class="font-bold text-primary mb-2" data-lang-key="industry3Title">Telecommunications</h3>
                        <p class="text-gray-600 text-sm" data-lang-key="industry3Desc">NOC KPIs, churn prediction, SLA dashboards, and revenue assurance monitoring.</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm card-hover">
                        <div class="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center text-accent-cyan mb-4">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 class="font-bold text-primary mb-2" data-lang-key="industry4Title">Financial Services</h3>
                        <p class="text-gray-600 text-sm" data-lang-key="industry4Desc">Risk scoring, fraud signals, onboarding quality, and automated compliance checks.</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm card-hover">
                        <div class="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center text-accent-cyan mb-4">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                        </div>
                        <h3 class="font-bold text-primary mb-2" data-lang-key="industry5Title">B2B SaaS</h3>
                        <p class="text-gray-600 text-sm" data-lang-key="industry5Desc">Product analytics, PLG funnels, expansion tracking, and retention dashboards.</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm card-hover">
                        <div class="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center text-accent-cyan mb-4">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <h3 class="font-bold text-primary mb-2" data-lang-key="industry6Title">Healthcare</h3>
                        <p class="text-gray-600 text-sm" data-lang-key="industry6Desc">Operational KPIs, capacity forecasting, and privacy-preserving patient analytics.</p>
                    </div>
                </div>
            </div>
        </section>
`;

const newHtml = html.slice(0, servicesEndIndex) + catalogAndIndustriesHTML + html.slice(servicesEndIndex);

// Now we need to update the translations object in the script tag
// We will replace the entire translations object string with a fetch from our external file
// Wait, we can't easily fetch a local file in a static HTML without a server.
// Let's just replace the translations object in the HTML string directly.

// Read the translations from the file we just created
const translationsJs = fs.readFileSync('translations.js', 'utf8');
const translationsObjectString = translationsJs.replace('export default ', '').replace(/;$/, '');

// Replace the old translations object in the HTML
const startMarker = 'const translations = {';
const endMarker = '            }'; // End of the fr object
const startIndex = newHtml.indexOf(startMarker);
// Find the end of the translations object. It's followed by `        };` and then `        // Language Switcher Logic`
const endIndex = newHtml.indexOf('        // Language Switcher Logic', startIndex);

// Extract the exact string to replace to be safe
const oldTranslationsString = newHtml.substring(startIndex, endIndex);

// Replace it
const finalHtml = newHtml.replace(oldTranslationsString, `const translations = ${translationsObjectString};\n\n`);

fs.writeFileSync('index.html', finalHtml);
console.log('Done');
