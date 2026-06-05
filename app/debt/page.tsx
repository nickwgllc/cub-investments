import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shortcut Your Loan Shopping | Cub Investments",
  description: "We've scoured the earth for motivated, experienced lenders actively financing cash-flow based business loans. Get lender recommendations from Cub Investments.",
};

export default function DebtPage() {
  const faqs = [
    {
      q: "What's in this for Cub Investments?",
      a: "We get a small cut of the broker's loan fee, which is paid at closing and covers our costs. More importantly, we use this program to nurture our SMB ecosystem ties. We get to know searchers at the most critical moments of their search. Monitoring the loan market also provides valuable intelligence for our own searching, investing, and operating activities.",
    },
    {
      q: "Why did you do this?",
      a: "In early 2023 we were working on a few different loan sourcing projects for our investments. We started observing larger than usual variances across loan term sheets, even among reputable lenders we believed had very competitive rates. It turned out that the loan market had changed, and that was confirmed from our analysis of the SBA loan data and other sources. That set us off on a path canvassing as much of the SMB loan market as we could.",
    },
    {
      q: "What types of loans do you have?",
      a: "We have products for a wide range of SBA and non-SBA-backed loan programs including various forms of SBA 7(a) loans, 504, conventional term loans, revolving lines of credit, working capital loans, equipment financing, and more. We have products with different repayment structures including PIK, interest-only, and fully or partially amortizing term loans.",
    },
    {
      q: "Won't this mean I pay more fees?",
      a: "Fee structures are fixed at the project level and channel agnostic from the standpoint of the borrower. The lender will make a bit less in fees because those fees get shared with the broker, but you won't end up paying more for entering the loan process using a broker channel. You will likely save money through the better rate and reduced risk.",
    },
    {
      q: "Isn't it better to cut out all the middlemen and go directly to the lender?",
      a: "Not necessarily. Brokers add value by scanning for the best rate and holding the lender accountable through the entire loan process. As an ongoing source of business for the lender, the broker relationship is far more important to the bank than your one-off loan, so having them in the middle is often helpful. Plus, the broker will help you prepare for a smooth process and avoid making mistakes with the lender that would put your loan in jeopardy.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Hero */}
      <div className="max-w-3xl mb-16">
        <p className="text-[var(--cub-crimson)] font-semibold text-sm uppercase tracking-widest mb-3">
          Debt &amp; Financing
        </p>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Shortcut your loan shopping
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          We&apos;ve scoured the earth for motivated, experienced lenders actively financing
          cash-flow based business loans. Our process will save you countless hours and put you
          on a path to getting your debt arranged so you can be confident you&apos;re getting
          the best deal with a lender you can trust to close.
        </p>
        <a
          href="#form"
          className="inline-block bg-[var(--cub-crimson)] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[var(--cub-crimson-700)] transition-colors"
        >
          Get Lender Recommendations
        </a>
      </div>

      {/* Problem */}
      <div className="bg-[var(--cub-cream-50)] border border-[var(--cub-cream-50)] rounded-2xl p-10 mb-16">
        <p className="text-[var(--cub-crimson)] font-semibold text-sm uppercase tracking-widest mb-3">The Problem</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          The small business loan market is the most challenging it has been in years
        </h2>
        <p className="text-gray-700 leading-relaxed">
          SBA 7(a) interest rates are increasing and lender pricing is all over the place. Loan
          shopping and lender selection has never been more critical to searcher success.
        </p>
        <p className="text-xs text-gray-400 mt-4">Source: SBA 7(a) Loan Database as of 6/30/23</p>
      </div>

      {/* Close with Confidence */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Close with Confidence</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            You&apos;ve found your perfect acquisition, but you need a lender to get the deal done
            on the best possible terms and pricing. The problem is: lender criteria are opaque and
            continuously shifting. A borrower usually spends $5–10K just to get an underwriting
            decision that remains non-binding until closing. Shopping for the best debt deal is time
            consuming and costly. Selecting a lender who can&apos;t execute or who waffles late in
            the process can ultimately kill a deal.
          </p>
          <p>
            We use our experience, relationships, market intelligence, and knowledge of the SMB loan
            market to build your short list of prospective lenders. This allows you to skip the
            costly and time consuming process of a thorough debt sourcing effort. It instantly puts
            you onto the right path toward confidently closing your debt financing!
          </p>
        </div>
        <div className="mt-8">
          <a
            href="#form"
            className="inline-flex items-center gap-2 text-[var(--cub-crimson)] font-semibold hover:text-[var(--cub-crimson-700)]"
          >
            Get Lender Recommendations
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
              <p className="text-gray-700 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div id="form" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Let&apos;s Do It</h2>
        <p className="text-gray-600 mb-8">Fill out the form below to get lender recommendations.</p>
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white">
          <div className="h-1" style={{ background: "linear-gradient(to right, var(--cub-crimson-700), var(--cub-crimson))" }} />
          <iframe
            id="JotFormIFrame-232770329609057"
            title="Get Lender Recommendations"
            src="https://form.jotform.com/232770329609057?transparentBackground=1"
            allow="geolocation; microphone; camera"
            allowFullScreen
            className="w-full border-0"
            style={{ minHeight: "700px" }}
          />
        </div>
      </div>

      <div className="border-t border-gray-100 pt-12">
        <div className="grid sm:grid-cols-3 gap-4">
          <Link href="/" className="block p-5 border border-gray-200 rounded-xl hover:border-[var(--cub-crimson)]300 transition-colors">
            <p className="font-semibold text-gray-900 mb-1">Home</p>
            <p className="text-sm text-gray-500">Back to Cub Investments</p>
          </Link>
          <Link href="/entrepreneurs" className="block p-5 border border-gray-200 rounded-xl hover:border-[var(--cub-crimson)]300 transition-colors">
            <p className="font-semibold text-gray-900 mb-1">For Entrepreneurs</p>
            <p className="text-sm text-gray-500">Buying a business with our support</p>
          </Link>
          <Link href="/contact" className="block p-5 border border-gray-200 rounded-xl hover:border-[var(--cub-crimson)]300 transition-colors">
            <p className="font-semibold text-gray-900 mb-1">Contact</p>
            <p className="text-sm text-gray-500">Get in touch with Nick</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
