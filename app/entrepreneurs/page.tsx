import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Entrepreneurs | Cub Investments",
  description: "Buying a business? We invest alongside acquisition entrepreneurs and provide operating expertise.",
};

export default function EntrepreneursPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="max-w-3xl mb-20">
        <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
          For Entrepreneurs
        </p>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Buying a Business?
          <br />
          We&apos;ve Done It Dozens of Times.
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          We invest and partner with acquisition entrepreneurs, bringing more than just capital —
          we bring on-the-ground operating experience from building a 12-company portfolio from scratch.
        </p>
      </div>

      {/* What we offer */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          {
            title: "LP Investment",
            desc: "We invest equity alongside you and take a minority stake. You stay in the driver's seat — we're here when you need us.",
          },
          {
            title: "Operating Experience",
            desc: "We've acquired and operated field services companies across landscaping, generators, packaging, and more. Practical advice, not theory.",
          },
          {
            title: "Network Access",
            desc: "Tap into our network of entrepreneurs, operators, lenders, and subject matter experts who have been where you're going.",
          },
        ].map((item) => (
          <div key={item.title} className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Who we work with */}
      <div className="grid md:grid-cols-2 gap-16 mb-20 items-start">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Work With</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We work with self-funded searchers, ETA entrepreneurs, and acquisition-minded operators
            who are:
          </p>
          <ul className="space-y-4">
            {[
              "Closing their first or early acquisition and looking for a co-investor with operating experience",
              "Buying a field services or blue-collar services business in the US",
              "Looking for more than money — they want genuine advice from someone who has been in the trenches",
              "Raising LP equity to complement their own capital (SBA, seller financing, etc.)",
            ].map((item) => (
              <li key={item} className="flex gap-3 items-start text-gray-700">
                <svg className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Investment Structure</h2>
          <div className="space-y-5">
            {[
              { label: "Check Size", value: "$50K–$500K equity investment" },
              { label: "Ownership", value: "Minority stake, entrepreneur keeps control" },
              { label: "Business Type", value: "US-based field / blue-collar services" },
              { label: "Deal Size", value: "$2M–$20M in annual revenue" },
              { label: "Involvement", value: "Advisory, not operational — you run it" },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 p-4 bg-white border border-gray-100 rounded-xl">
                <span className="text-sm font-semibold text-gray-500 w-28 shrink-0">{item.label}</span>
                <span className="text-gray-900 font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why work with us */}
      <div className="bg-gray-900 text-white rounded-2xl p-12 mb-20">
        <h2 className="text-3xl font-bold mb-4">Why Work With Cub?</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl">
          We&apos;ve been in your shoes. Nick Haschka started with zero experience, one landscaping
          company, and a dream. Since 2016, he has grown Cub Investments into a portfolio of 12
          service companies — bootstrapped, no institutional capital.
        </p>
        <p className="text-gray-300 leading-relaxed max-w-3xl">
          We know what it feels like to close your first deal, hire your first GM, and navigate the
          messy reality of running a small business. When we invest in your deal, you get a partner
          who has walked the walk.
        </p>
        <div className="mt-8">
          <Link
            href="/library"
            className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-2"
          >
            Read our writings &amp; listen to podcasts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Have a Deal in Mind?</h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
          Tell us about the business you&apos;re looking to buy. We respond to every inquiry.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-amber-600 text-white font-semibold px-10 py-4 rounded-lg text-lg hover:bg-amber-700 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
