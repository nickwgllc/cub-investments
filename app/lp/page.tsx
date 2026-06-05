import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Private Equity Deal Flow | Cub Investments",
  description: "Gain access to direct private equity investment opportunities through the Cub Investments network.",
};

export default function LpPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="text-center mb-10">
        <p className="text-[var(--cub-crimson)] font-semibold text-sm uppercase tracking-widest mb-3">
          LP Investors
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Private Equity Deal Flow</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Gain access to direct private equity investment opportunities through the Cub Investments
          network. Complete the form below to receive opportunities directly to your inbox.
        </p>
      </div>

      <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white mb-16">
        <div className="h-1" style={{ background: "linear-gradient(to right, var(--cub-crimson-700), var(--cub-crimson))" }} />
        <iframe
          id="JotFormIFrame-212977344334056"
          title="Get LP Deal Flow"
          src="https://form.jotform.com/212977344334056?transparentBackground=1"
          allow="geolocation; microphone; camera"
          allowFullScreen
          className="w-full border-0"
          style={{ minHeight: "600px" }}
        />
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Where to Next?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/" className="block p-4 bg-white border border-gray-200 rounded-xl hover:border-[var(--cub-crimson)]300 transition-colors">
            <p className="font-semibold text-gray-900 mb-1">Cub Investments Home</p>
            <p className="text-sm text-gray-500">Learn about our portfolio and approach</p>
          </Link>
          <Link href="/investors" className="block p-4 bg-white border border-gray-200 rounded-xl hover:border-[var(--cub-crimson)]300 transition-colors">
            <p className="font-semibold text-gray-900 mb-1">For Investors</p>
            <p className="text-sm text-gray-500">Learn more about co-investing with Cub</p>
          </Link>
          <Link href="/library" className="block p-4 bg-white border border-gray-200 rounded-xl hover:border-[var(--cub-crimson)]300 transition-colors">
            <p className="font-semibold text-gray-900 mb-1">Resource Library</p>
            <p className="text-sm text-gray-500">Podcasts, writings &amp; resources</p>
          </Link>
          <Link href="/contact" className="block p-4 bg-white border border-gray-200 rounded-xl hover:border-[var(--cub-crimson)]300 transition-colors">
            <p className="font-semibold text-gray-900 mb-1">Contact Us</p>
            <p className="text-sm text-gray-500">Get in touch directly</p>
          </Link>
        </div>
      </div>

      <p className="text-xs text-gray-400 leading-relaxed">
        Disclaimers: Unless otherwise noted and explicitly marked as such, Cub Investments does not
        offer, solicit or recommend any offers to buy or sell any securities, investment products or
        investment advisory services. Information shared by Cub Investments is not intended to
        provide, and should not be relied upon for, accounting, legal, or tax advice or investment
        recommendations. Each recipient should consult its own tax, legal, accounting, financial, or
        other advisors about the issues discussed herein.
      </p>
    </div>
  );
}
