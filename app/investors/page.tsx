import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Investors | Cub Investments",
  description: "Get SMB deal flow and co-invest alongside Cub Investments in durable small businesses.",
};

export default function InvestorsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="max-w-3xl mb-20">
        <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
          For Investors
        </p>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Invest in Durable
          <br />
          Small Businesses
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          We source, evaluate, and operate small business acquisitions. Join us as an LP investor
          to get access to deal flow and invest alongside experienced operators.
        </p>
      </div>

      {/* Why SMBs */}
      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-10 mb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Small Businesses?</h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
          <div>
            <p className="mb-4">
              Main Street businesses — landscaping, generators, packaging, industrial services —
              are the backbone of the American economy. They are largely ignored by institutional
              investors, which creates opportunity.
            </p>
            <p>
              These businesses generate real cash flow, serve durable niches, and often sell at
              attractive multiples because their owners lack access to professional buyers. We
              are those buyers.
            </p>
          </div>
          <div>
            <p className="mb-4">
              Baby Boomers own trillions in small business wealth and are retiring in record numbers.
              The wave of succession needs creates a generational opportunity for patient, hands-on
              operators like Cub Investments.
            </p>
            <p>
              We are not passive investors. We roll up our sleeves, embed in our companies, and drive
              the operating improvements that create value.
            </p>
          </div>
        </div>
      </div>

      {/* What we look for */}
      <div className="grid md:grid-cols-2 gap-16 mb-20 items-start">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Deal Criteria</h2>
          <div className="space-y-4">
            {[
              { label: "Geography", value: "United States" },
              { label: "Sector", value: "Field services, blue-collar, industrial" },
              { label: "Revenue", value: "$2M–$20M annual revenue" },
              { label: "EBITDA", value: "Profitable, 10+ year operating history" },
              { label: "Employees", value: "10–100 employees" },
              { label: "Situation", value: "Owner retirement, buy-in, growth equity" },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                <span className="text-sm font-semibold text-gray-500 w-24 shrink-0">{item.label}</span>
                <span className="text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">LP Investor Benefits</h2>
          <ul className="space-y-5">
            {[
              {
                title: "Proprietary Deal Flow",
                desc: "Access deals sourced through our operator network, not brokers. Many of our best deals are never publicly listed.",
              },
              {
                title: "Operator-Led Due Diligence",
                desc: "We evaluate businesses the way an owner would — we kick the tires, talk to employees, and understand the real operations.",
              },
              {
                title: "Post-Close Value Creation",
                desc: "We stay engaged after close. We help our portfolio companies hire, grow, and compound for the long term.",
              },
              {
                title: "Tax-Efficient Structure",
                desc: "Investments are structured to be tax-efficient. We can discuss details with qualified investors.",
              },
            ].map((item) => (
              <li key={item.title} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Learn more */}
      <div className="bg-gray-50 rounded-2xl p-10 mb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Do Your Homework</h2>
        <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
          Before reaching out, we recommend getting familiar with our track record, philosophy, and
          approach. Our library has podcasts, writings, and resources going back to 2016.
        </p>
        <Link
          href="/library"
          className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700"
        >
          Explore the Library
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in Co-Investing?</h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
          We work with a small group of aligned LP investors. Reach out to start a conversation.
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
