import Link from "next/link";
import Image from "next/image";

const portfolioActive = [
  {
    name: "The Wright Gardner",
    url: "https://thewrightgardner.com",
    description: "Commercial landscaping services across the Bay Area.",
    img: "/images/portfolio-wright-gardner.jpg",
    imgW: 472, imgH: 474,
  },
  {
    name: "OnPoint Generators",
    url: "https://www.onpointgen.com",
    description: "Generator sales, service, and maintenance.",
    img: "/images/portfolio-onpoint-generators.png",
    imgW: 1102, imgH: 1106,
  },
  {
    name: "Wave2Wave",
    url: null,
    description: "Managed IT and network services.",
    img: "/images/portfolio-wave2wave.png",
    imgW: 1054, imgH: 609,
  },
  {
    name: "Washington Generators",
    url: "https://www.washgen.com",
    description: "Generator services in the Pacific Northwest.",
    img: "/images/portfolio-washington-generators.png",
    imgW: 1000, imgH: 630,
  },
  {
    name: "Sabre Pak",
    url: "https://sabrepak.com/",
    description: "Packaging and fulfillment services.",
    img: "/images/portfolio-sabrepak.png",
    imgW: 1125, imgH: 650,
  },
  {
    name: "CraneTech",
    url: null,
    description: "Crane inspection and maintenance services.",
    img: "/images/portfolio-cranetech.png",
    imgW: 1280, imgH: 807,
  },
  {
    name: "Steel River",
    url: "https://www.steelriver.co/",
    description: "Industrial coatings and surface preparation.",
    img: "/images/portfolio-steel-river.png",
    imgW: 1280, imgH: 1174,
  },
  {
    name: "New York Security Solutions",
    url: "https://nyss.us/",
    description: "Security services in the New York metro area.",
    img: "/images/portfolio-nyss.png",
    imgW: 355, imgH: 205,
  },
  {
    name: "J Blanton Plumbing",
    url: null,
    description: "Residential and commercial plumbing services.",
    img: "/images/portfolio-j-blanton.png",
    imgW: 915, imgH: 922,
  },
  {
    name: "Avenir Hospitality",
    url: null,
    description: "Hospitality management services.",
    img: "/images/portfolio-avenir.jpg",
    imgW: 200, imgH: 183,
  },
  {
    name: "Prove Partners",
    url: null,
    description: "Business services firm.",
    img: "/images/portfolio-prove-partners.png",
    imgW: 1280, imgH: 1179,
  },
  {
    name: "Blue Maple",
    url: null,
    description: "Field services company.",
    img: "/images/portfolio-blue-maple.png",
    imgW: 1044, imgH: 958,
  },
];

const portfolioExited = [
  {
    name: "Vargas Gardening",
    description: "Landscaping and gardening services.",
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
      {/* Hero */}
      <section className="relative bg-gray-900 text-white min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero-banner.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Cub Investments
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Pride of Ownership
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
            We invest to help small businesses flourish in their next generation.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors text-center"
            >
              Let&apos;s Talk
            </Link>
            <Link
              href="#investment-criteria"
              className="border border-gray-600 text-gray-200 font-semibold px-8 py-4 rounded-lg hover:border-gray-400 hover:text-white transition-colors text-center"
            >
              Our Criteria
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section id="investment-criteria" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Investment Criteria</h2>
          <p className="text-lg text-gray-600 max-w-3xl mb-16 leading-relaxed">
            We make long term buy &amp; build equity investments in durable, growth-oriented field
            services companies. We maintain a tight network of entrepreneurial operators and investors.
            We customize our approach and help drive our companies toward true excellence so we can be
            Proud to Own.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-5 uppercase tracking-wide">
                Typical Situations
              </h3>
              <ul className="space-y-4 text-gray-700">
                {[
                  { label: "Buy-Out", desc: "Majority owner-operator needs a successor to facilitate owner retirement and exit" },
                  { label: "Buy-In", desc: "Owner-operator needs a business partner to help professionalize the business to grow to the next level, requiring investment capital and new talent" },
                  { label: "Growth Equity", desc: "Entrepreneur raising equity to complete a business acquisition, seeking investors for mentorship and advisory support" },
                ].map(({ label, desc }) => (
                  <li key={label} className="flex gap-3">
                    <span className="text-amber-600 font-bold mt-0.5">&#8212;</span>
                    <div><span className="font-semibold">{label}:</span> {desc}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-5 uppercase tracking-wide">
                Eligibility Checklist
              </h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  "US-based private company",
                  "10+ year profitable operating history",
                  "Total annual sales of $2M–$20M and 10–100 employees",
                  "Durable customer niche with strong growth potential",
                  "Desire of current ownership to fully or partially exit and/or capitalize the business for growth",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <svg className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Team</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Nick */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-5 mb-6">
                <Image
                  src="/images/nick-haschka.png"
                  alt="Nick Haschka"
                  width={72}
                  height={72}
                  className="rounded-full object-cover shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Nick Haschka</h3>
                  <p className="text-amber-600 font-medium">Partner</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nick has been acquiring and operating small businesses since 2016. Starting with a single
                acquisition via SBA loan, he has grown Cub Investments into a portfolio of a dozen
                field services companies. He is passionate about helping great small businesses reach their
                next generation of success.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/nhaschka" target="_blank" rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-2 text-sm font-medium">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="https://twitter.com/NickHaschka" target="_blank" rel="noopener noreferrer"
                  className="text-gray-500 hover:text-sky-500 transition-colors flex items-center gap-2 text-sm font-medium">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Twitter
                </a>
              </div>
            </div>

            {/* Anu */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-5 mb-6">
                <Image
                  src="/images/anu-sharma.png"
                  alt="Anupam Sharma"
                  width={72}
                  height={72}
                  className="rounded-full object-cover shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Anupam Sharma</h3>
                  <p className="text-amber-600 font-medium">Partner</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Anu brings deep operational and strategic expertise to the Cub Investments team. He works
                closely with portfolio companies to drive growth, improve operations, and help owner-operators
                reach the next level of their business journey.
              </p>
              <a href="https://www.linkedin.com/in/anupamsharma7" target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-2 text-sm font-medium w-fit">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How Can We Help */}
      <section id="how-we-help" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">How can we help you?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-2xl p-8 hover:border-amber-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Planning to buy a business?</h3>
              <ul className="space-y-3">
                <li><Link href="/entrepreneurs" className="text-amber-600 hover:text-amber-700 font-medium">Learn more &rarr;</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium">Raising equity?</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium">Raising debt?</Link></li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-2xl p-8 hover:border-amber-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Already own a business?</h3>
              <ul className="space-y-3">
                <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium">Looking to sell?</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium">Looking for an operating partner?</Link></li>
                <li><a href="https://operators.mn.co/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-medium">Join our operator community &rarr;</a></li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-2xl p-8 hover:border-amber-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Looking to invest in SMBs?</h3>
              <ul className="space-y-3">
                <li><Link href="/investors" className="text-amber-600 hover:text-amber-700 font-medium">Get deals &rarr;</Link></li>
                <li><Link href="/library" className="text-gray-600 hover:text-gray-900 font-medium">Read up</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <p className="text-gray-500 mb-12">Companies we have invested in and partnered with.</p>

          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Active</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {portfolioActive.map((company) => (
              <div key={company.name} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 bg-gray-100 flex items-center justify-center p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src={company.img}
                      alt={company.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">{company.name}</h4>
                    {company.url && (
                      <a href={company.url} target="_blank" rel="noopener noreferrer"
                        className="text-amber-600 hover:text-amber-700" aria-label={`Visit ${company.name}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{company.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Inactive / Exited</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioExited.map((company) => (
              <div key={company.name} className="bg-white rounded-2xl overflow-hidden shadow-sm opacity-70">
                <div className="h-32 bg-gray-50 flex items-center justify-center p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src={company.img}
                      alt={company.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-gray-700 mb-1">{company.name}</h4>
                  <p className="text-sm text-gray-500">{company.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deal Types */}
      <section id="deal-types" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Deal Types</h2>

          <div className="space-y-20">
            {/* Retirement Buyout */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/deal-retirement-buyout.jpg"
                  alt="Retirement buyout"
                  width={1280}
                  height={922}
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
              <div>
                <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-2">
                  Situation: Retirement Buyout
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
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
                  <p className="text-sm">
                    Just here to learn?{" "}
                    <Link href="/library" className="text-amber-600 hover:underline font-medium">
                      Read our writings or listen to podcast episodes on our library page.
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Partnership Buy-In */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="order-2 md:order-1">
                <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-2">
                  Situation: Partnership Buy-In
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
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
              </div>
              <div className="order-1 md:order-2 rounded-2xl overflow-hidden">
                <Image
                  src="/images/deal-partnership-buyin.jpg"
                  alt="Partnership buy-in"
                  width={1280}
                  height={979}
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* LP Investor */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/deal-lp-investor.jpg"
                  alt="LP investor"
                  width={1280}
                  height={935}
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
              <div>
                <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-2">
                  Situation: LP Investor
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
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
                  <p className="text-sm">
                    <Link href="/library" className="text-amber-600 hover:underline font-medium">
                      Check out our library
                    </Link>{" "}
                    for loads of resources about our experience, values, insights, and tactics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Talk</h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Click below to fill out our contact form, then follow the prompts to book a meeting.
            We look forward to talking with you!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber-600 text-white font-semibold px-10 py-5 rounded-lg text-lg hover:bg-amber-700 transition-colors"
          >
            Great, Let&apos;s Talk!
          </Link>
        </div>
      </section>
    </>
  );
}
