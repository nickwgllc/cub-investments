import Link from "next/link";
import Image from "next/image";
import TeamBios from "@/components/TeamBios";

const portfolioActive = [
  {
    name: "The Wright Gardner",
    url: "https://thewrightgardner.com",
    urlLabel: "TWGPlants.com",
    description: "Originally acquired in 2017 from retiring owner and founder Matthew Gardner, WG has since expanded its operation through the acquisition and integration of several Northern California horticulture services companies including Nelou's Greenery, the San Francisco Plant Company, SF Greenscapes, Barry Brown & Associates, Bay Plant Company, Peninsula Plant Company, Elite Interiorscapes, and The Plant Fairies. The Wright Gardner provides a full range of horticultural services that make indoor and outdoor environments more vibrant, healthy, and productive.",
    img: "/images/portfolio-wright-gardner.jpg",
    imgW: 472, imgH: 474,
  },
  {
    name: "OnPoint Generators",
    url: "https://www.onpointgen.com",
    urlLabel: "OnPointGen.com",
    description: "Founded in 2023, OnPoint Generators, Inc. is a California-based regional acquisition venture designed to acquire and grow sales, service, and rental businesses in the backup power space. OnPoint's promise is to help keep customers Always On!",
    img: "/images/portfolio-onpoint-generators.png",
    imgW: 1102, imgH: 1106,
  },
  {
    name: "Wave2Wave",
    url: "https://wave2wave.io",
    urlLabel: "Wave2Wave.io",
    description: "Wave2Wave simplifies data center infrastructure—from design to deployment—by delivering custom-engineered cabling, power, networking, kitting, and DCIM services tailored for enterprise, colocation, HPC, OEMs, and system integrators. The company was acquired from its founder in 2025 and led by Mark Crandon.",
    img: "/images/portfolio-wave2wave.png",
    imgW: 1054, imgH: 609,
  },
  {
    name: "Washington Generators",
    url: "https://www.washingtongenerators.com",
    urlLabel: "WashGen.com",
    description: "Washington Generators is a Seattle-based electrical contractor specializing in backup power applications. In 2021, entrepreneur Corey Gilgan acquired WashGen from its founding family with limited partner participation from Cub Investments. Gilgan became CEO and majority owner and is now leading the company's next phase of growth.",
    img: "/images/portfolio-washington-generators.png",
    imgW: 1000, imgH: 630,
  },
  {
    name: "Sabre Pak",
    url: "https://sabrepak.com/",
    urlLabel: "Sabrepak.com",
    description: "Sabrepak supplies customized packaging and labelling products to industrial clients and distributors across Canada. The company was acquired from its founders in the summer of 2023 by small business entrepreneur Oskar Borzyminski to facilitate a retirement transition.",
    img: "/images/portfolio-sabrepak.png",
    imgW: 1125, imgH: 650,
  },
  {
    name: "CraneTech",
    url: "https://www.cranetechusa.com",
    urlLabel: "CraneTechUSA.com",
    description: "CraneTech offers clients field installation, maintenance, repair, and compliance services of overhead cranes and hoists. CraneTech was acquired by the partners at Steel River in 2021 in an entrepreneur-led buyout transaction.",
    img: "/images/portfolio-cranetech.png",
    imgW: 1280, imgH: 807,
  },
  {
    name: "Steel River",
    url: "https://www.steelriver.co/",
    urlLabel: "SteelRiver.co",
    description: "Founded by entrepreneurs Austin King and Eric Factor, Steel River is an entrepreneurial venture focused on acquiring, running, and growing US-based family-owned industrial services businesses. The Steel River family of businesses is building the backbone of American Infrastructure.",
    img: "/images/portfolio-steel-river.png",
    imgW: 1280, imgH: 1174,
  },
  {
    name: "New York Security Solutions",
    url: "https://nyss.us/",
    urlLabel: "NYSS.us",
    description: "NYSS is a leading commercial public safety and security systems integrator and service provider operating in the New York City area. In September 2020, Cub Investments acquired a minority interest equity stake in NYSS as part of an entrepreneurial acquisition led by Earl Gordon.",
    img: "/images/portfolio-nyss.jpg",
    imgW: 355, imgH: 205,
  },
  {
    name: "J Blanton Plumbing",
    url: "https://www.jblantonplumbing.com",
    urlLabel: "JBlantonPlumbing.com",
    description: "J. Blanton Plumbing is one of the leading residential plumbing companies serving the greater Chicagoland region. In 2022 Cub Investments made a limited partner investment into JBP as part of an entrepreneurial searcher-led succession takeover transaction led by Aizik Zimerman of Ternopil Group.",
    img: "/images/portfolio-j-blanton.png",
    imgW: 915, imgH: 922,
  },
  {
    name: "Avenir Hospitality",
    url: "https://avenirhospitality.com",
    urlLabel: "AvenirHospitality.com",
    description: "Avenir is a hospitality-focused investment and management group that is elevating the boutique hospitality industry by providing highly unique and differentiated guest-centric experiences.",
    img: "/images/portfolio-avenir.jpg",
    imgW: 200, imgH: 183,
  },
  {
    name: "Prove Partners",
    url: "https://provepartners.com",
    urlLabel: "ProvePartners.com",
    description: "Prove Partners is a nationwide leader in lien-based financing for doctors. PP reimburses quality medical care for patients who have been injured as a result of a personal injury accident, including worker's comp cases. In 2019 Cub Investments acquired a minority interest in Med+Care Solutions (re-branded Prove Partners) as part of an entrepreneurial searcher-led buyout transaction.",
    img: "/images/portfolio-prove-partners.png",
    imgW: 1280, imgH: 1179,
  },
  {
    name: "Blue Maple",
    url: "https://staybluemaple.com",
    urlLabel: "StayBlueMaple.com",
    description: "Blue Maple offers beautifully finished, high-quality cabins available for short term stays in outdoorsy \"get-away\" destinations near major US cities. Cub Investments invested as a limited partner in Blue Maple's second structured fund in 2022 to finance the company's first major scale up of its own-operate short-term rental portfolio. The company is led by serial entrepreneur Tony Cappaert.",
    img: "/images/portfolio-blue-maple.png",
    imgW: 1044, imgH: 958,
  },
];

const portfolioExited = [
  {
    name: "Vargas Gardening",
    description: "Landscaping and gardening services. Acquired in 2020, turned around, grown, and successfully exited to private equity in 2022.",
    img: "/images/portfolio-vargas.jpg",
    imgW: 1000, imgH: 910,
  },
  {
    name: "Credit Parent",
    description: "Financial services.",
    img: "/images/portfolio-credit-parent.png",
    imgW: 420, imgH: 385,
  },
  {
    name: "Echelon Medical Capital",
    description: "Medical capital solutions.",
    img: "/images/portfolio-echelon.png",
    imgW: 600, imgH: 546,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--cub-navy-900)] text-white min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-banner.png"
            alt=""
            fill
            className="object-cover object-center opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-gray-950/20 to-gray-950/70" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-32 w-full">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-8 h-px bg-[var(--cub-crimson)]" />
            <p className="text-[#e8a0a8] font-semibold text-xs uppercase tracking-[0.25em]">
              Cub Investments · Since 2016
            </p>
          </div>

          {/* Headline */}
          <h1 className="font-display text-6xl md:text-8xl font-bold leading-[1.0] mb-8 max-w-3xl">
            Pride of<br />
            <em className="not-italic text-[#e8a0a8]">Ownership</em>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-xl mb-12 leading-relaxed font-light">
            We acquire and operate small field-services businesses — giving great companies
            a new generation of leadership, capital, and growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-[var(--cub-crimson)] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[var(--cub-crimson-700)] transition-colors text-center shadow-lg shadow-black/30"
            >
              Let&apos;s Talk
            </Link>
            <Link
              href="#investment-criteria"
              className="border border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:border-white/60 hover:bg-white/5 transition-all text-center"
            >
              Our Criteria
            </Link>
          </div>

          {/* Stats strip */}
          <div className="mt-20 flex flex-wrap divide-x divide-white/15">
            {[
              { value: "12+", label: "Portfolio companies" },
              { value: "2016", label: "Year founded" },
              { value: "$2M–$20M", label: "Target revenue" },
              { value: "US-based", label: "Field services focus" },
            ].map(({ value, label }, i) => (
              <div key={label} className={`${i === 0 ? "pr-10" : "px-10"} py-2`}>
                <p className="font-display text-3xl font-bold text-white">{value}</p>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Investment Criteria ───────────────────────────────────── */}
      <section id="investment-criteria" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-[var(--cub-crimson)] font-semibold text-xs uppercase tracking-[0.2em] mb-4">What We Look For</p>
            <h2 className="font-display text-5xl font-bold text-gray-900 mb-6 leading-tight">Investment Criteria</h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              We make long-term buy &amp; build equity investments in durable, growth-oriented field
              services companies — customizing our approach to drive each company toward true excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Typical Situations */}
            <div className="relative bg-[var(--cub-navy)] text-white rounded-2xl p-10 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--cub-crimson)]" />
              <h3 className="font-display text-2xl font-bold mb-8">Typical Situations</h3>
              <ul className="space-y-6">
                {[
                  { label: "Buy-Out", desc: "Majority owner-operator needs a successor to facilitate owner retirement and exit" },
                  { label: "Buy-In", desc: "Owner-operator needs a business partner to help professionalize the business and grow to the next level" },
                  { label: "Growth Equity", desc: "Entrepreneur raising equity to complete a business acquisition, seeking investors for mentorship and advisory support" },
                ].map(({ label, desc }) => (
                  <li key={label} className="flex gap-4">
                    <span className="text-[var(--cub-crimson)] font-bold text-lg leading-tight mt-0.5">—</span>
                    <div>
                      <span className="font-bold text-white">{label}:</span>{" "}
                      <span className="text-gray-300">{desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Checklist */}
            <div className="bg-[var(--cub-cream-50)] rounded-2xl p-10 border border-[var(--cub-cream)]">
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-8">Eligibility Checklist</h3>
              <ul className="space-y-4">
                {[
                  "US-based private company",
                  "10+ year profitable operating history",
                  "Total annual sales of $2M–$20M and 10–100 employees",
                  "Durable customer niche with strong growth potential",
                  "Desire of current ownership to fully or partially exit and/or capitalize the business for growth",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-[var(--cub-crimson)] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────── */}
      <section id="team" className="py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--cub-crimson)] font-semibold text-xs uppercase tracking-[0.2em] mb-4">The People</p>
          <h2 className="font-display text-5xl font-bold text-gray-900 mb-16">Team</h2>
          <TeamBios />
        </div>
      </section>

      {/* ── How Can We Help ───────────────────────────────────────── */}
      <section id="how-we-help" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--cub-crimson)] font-semibold text-xs uppercase tracking-[0.2em] mb-4">Work With Us</p>
          <h2 className="font-display text-5xl font-bold text-gray-900 mb-16">How can we help you?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 — featured */}
            <div className="bg-[var(--cub-crimson)] text-white rounded-2xl p-8 flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold mb-4">Planning to buy a business?</h3>
              <ul className="space-y-3 text-sm mt-auto">
                <li><Link href="/entrepreneurs" className="text-white/90 hover:text-white font-semibold flex items-center gap-1">For Entrepreneurs <span>&rarr;</span></Link></li>
                <li><Link href="/contact" className="text-white/70 hover:text-white font-medium">Raising equity?</Link></li>
                <li><Link href="/debt" className="text-white/70 hover:text-white font-medium">Raising debt?</Link></li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="group border border-gray-200 rounded-2xl p-8 hover:border-[var(--cub-crimson)]/40 hover:shadow-lg transition-all flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-[var(--cub-crimson-50)] flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-[var(--cub-crimson)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-4">Already own a business?</h3>
              <ul className="space-y-3 text-sm mt-auto">
                <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium">Looking to sell?</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium">Looking for an operating partner?</Link></li>
                <li><a href="https://operators.mn.co/" target="_blank" rel="noopener noreferrer" className="text-[var(--cub-crimson)] hover:text-[var(--cub-crimson-700)] font-semibold flex items-center gap-1">Join our community <span>&rarr;</span></a></li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="group border border-gray-200 rounded-2xl p-8 hover:border-[var(--cub-crimson)]/40 hover:shadow-lg transition-all flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-[var(--cub-crimson-50)] flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-[var(--cub-crimson)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-4">Looking to invest in SMBs?</h3>
              <ul className="space-y-3 text-sm mt-auto">
                <li><Link href="/investors" className="text-[var(--cub-crimson)] hover:text-[var(--cub-crimson-700)] font-semibold flex items-center gap-1">For Investors <span>&rarr;</span></Link></li>
                <li><Link href="/lp" className="text-gray-600 hover:text-gray-900 font-medium">Get deal flow</Link></li>
                <li><Link href="/library" className="text-gray-600 hover:text-gray-900 font-medium">Read up first</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio ─────────────────────────────────────────────── */}
      <section id="portfolio" className="py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--cub-crimson)] font-semibold text-xs uppercase tracking-[0.2em] mb-4">Our Companies</p>
          <h2 className="font-display text-5xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <p className="text-gray-500 mb-14">Companies we have invested in and partnered with.</p>

          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 pb-3 border-b border-gray-200">Active</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {portfolioActive.map((company) => (
              <div key={company.name} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[var(--cub-crimson)]/25 hover:shadow-lg transition-all group">
                <div className="h-36 bg-[var(--cub-cream-50)] flex items-center justify-center p-5">
                  <div className="relative w-full h-full">
                    <Image
                      src={company.img}
                      alt={company.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="p-5 border-t border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-1">{company.name}</h4>
                  {company.url && (
                    <a href={company.url} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-[var(--cub-crimson)] hover:text-[var(--cub-crimson-700)] font-medium mb-3 inline-block">
                      {company.urlLabel}
                    </a>
                  )}
                  <p className="text-sm text-gray-500 leading-relaxed">{company.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 pb-3 border-b border-gray-200">Exited</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolioExited.map((company) => (
              <div key={company.name} className="bg-white rounded-2xl overflow-hidden border border-gray-100 opacity-60">
                <div className="h-28 bg-gray-50 flex items-center justify-center p-5">
                  <div className="relative w-full h-full">
                    <Image
                      src={company.img}
                      alt={company.name}
                      fill
                      className="object-contain grayscale"
                    />
                  </div>
                </div>
                <div className="p-5 border-t border-gray-100">
                  <h4 className="font-bold text-gray-600 mb-1">{company.name}</h4>
                  <p className="text-sm text-gray-400">{company.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deal Types ────────────────────────────────────────────── */}
      <section id="deal-types" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--cub-crimson)] font-semibold text-xs uppercase tracking-[0.2em] mb-4">How We Invest</p>
          <h2 className="font-display text-5xl font-bold text-gray-900 mb-20">Deal Types</h2>

          <div className="space-y-24">
            {/* 01 — Retirement Buyout */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/deal-retirement-buyout.jpg" alt="Retirement buyout" fill className="object-cover object-top" />
              </div>
              <div>
                <p className="font-display text-7xl font-bold text-gray-100 leading-none mb-4 select-none">01</p>
                <p className="text-[var(--cub-crimson)] font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                  Retirement Buyout
                </p>
                <h3 className="font-display text-3xl font-bold text-gray-900 mb-5 leading-snug">
                  We invest for the next generation, giving small businesses a new lease on life.
                </h3>
                <div className="text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    Baby Boomers are retiring in droves. As the most entrepreneurial generation our nation
                    has ever seen, their retirement raises a vitally important question: what&apos;s happening
                    to all these Boomer-owned businesses?
                  </p>
                  <p>
                    Cub Investments is working to create a better alternative. We help owners exit with
                    pride, allow employees to continue on, and bring new capital, talent, and energy for the
                    business to grow for another generation.
                  </p>
                </div>
                <Link href="/library" className="inline-flex items-center gap-2 mt-6 text-[var(--cub-crimson)] font-semibold hover:text-[var(--cub-crimson-700)] text-sm">
                  Read our writings <span>&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* 02 — Partnership Buy-In */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <p className="font-display text-7xl font-bold text-gray-100 leading-none mb-4 select-none">02</p>
                <p className="text-[var(--cub-crimson)] font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                  Partnership Buy-In
                </p>
                <h3 className="font-display text-3xl font-bold text-gray-900 mb-5 leading-snug">
                  Already own a business and looking for a partner to help ignite growth?
                </h3>
                <div className="text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    You already own a small business you know has tremendous potential, but you&apos;re
                    feeling stuck. We get it. It&apos;s lonely. It&apos;s hard. There&apos;s a reason in
                    business people say if you want to go fast, go alone. If you want to go far, go together.
                  </p>
                  <p>
                    We invest and partner with like-minded, high energy industry experts looking to scale
                    their business to the next level and elevate their leadership.
                  </p>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 mt-6 text-[var(--cub-crimson)] font-semibold hover:text-[var(--cub-crimson-700)] text-sm">
                  Let&apos;s talk <span>&rarr;</span>
                </Link>
              </div>
              <div className="order-1 md:order-2 relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/deal-partnership-buyin.jpg" alt="Partnership buy-in" fill className="object-cover object-top" />
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* 03 — LP Investor */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/deal-lp-investor.jpg" alt="LP investor" fill className="object-cover object-top" />
              </div>
              <div>
                <p className="font-display text-7xl font-bold text-gray-100 leading-none mb-4 select-none">03</p>
                <p className="text-[var(--cub-crimson)] font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                  LP Investor
                </p>
                <h3 className="font-display text-3xl font-bold text-gray-900 mb-5 leading-snug">
                  Have a great acquisition opportunity, but need seasoned investors to help guide growth?
                </h3>
                <div className="text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    You&apos;ve been hunting for the perfect deal and finally found it. Now you just need to
                    find some private investors able to provide more than just cash to close your acquisition.
                  </p>
                  <p>
                    We invest and partner with acquisition entrepreneurs, and then serve them in an advisory
                    capacity helping transform their acquired company into a durable, high-quality
                    compounding growth machine.
                  </p>
                </div>
                <Link href="/library" className="inline-flex items-center gap-2 mt-6 text-[var(--cub-crimson)] font-semibold hover:text-[var(--cub-crimson-700)] text-sm">
                  Check out our library <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-32 bg-[var(--cub-navy)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="block w-8 h-px bg-[var(--cub-crimson)]" />
            <p className="text-[#e8a0a8] font-semibold text-xs uppercase tracking-[0.25em]">Get in Touch</p>
            <span className="block w-8 h-px bg-[var(--cub-crimson)]" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let&apos;s build something<br />
            <em className="not-italic text-[#e8a0a8]">worth owning.</em>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Fill out our contact form and follow the prompts to book a meeting.
            We look forward to talking with you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--cub-crimson)] text-white font-semibold px-12 py-5 rounded-lg text-lg hover:bg-[var(--cub-crimson-700)] transition-colors shadow-lg shadow-black/30"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </>
  );
}
