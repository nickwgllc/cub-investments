import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Cub Investments",
  description: "Get in touch with Cub Investments. Fill out our contact form and book a meeting.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Let&apos;s Talk</h1>
      <p className="text-lg text-gray-600 mb-12 leading-relaxed">
        Whether you&apos;re a business owner looking to sell or partner, an entrepreneur looking for
        equity investors, or an investor looking for deal flow — we&apos;d love to connect.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Business Owners</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Looking to sell your business or find an operating partner? We&apos;d love to hear about
            your company and understand if there&apos;s a fit.
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Entrepreneurs &amp; Investors</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Raising equity for an acquisition? Looking for LP investors with operating experience?
            We work with acquisition entrepreneurs and co-investors.
          </p>
        </div>
      </div>

      <div className="bg-gray-900 text-white rounded-2xl p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Connect?</h2>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Click below to fill out our contact form, then follow the prompts to book a meeting.
          We look forward to talking with you!
        </p>
        <a
          href="mailto:nick@cubinvestments.com"
          className="inline-block bg-amber-600 text-white font-semibold px-10 py-4 rounded-lg text-lg hover:bg-amber-700 transition-colors"
        >
          Great, Let&apos;s Talk!
        </a>
      </div>

      <div className="mt-16 border-t border-gray-100 pt-12">
        <h3 className="text-lg font-bold text-gray-900 mb-6">More ways to engage</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <Link
            href="/entrepreneurs"
            className="block p-5 border border-gray-200 rounded-xl hover:border-amber-300 transition-colors"
          >
            <p className="font-semibold text-gray-900 mb-1">For Entrepreneurs</p>
            <p className="text-sm text-gray-500">Buying a business with our support</p>
          </Link>
          <Link
            href="/investors"
            className="block p-5 border border-gray-200 rounded-xl hover:border-amber-300 transition-colors"
          >
            <p className="font-semibold text-gray-900 mb-1">For Investors</p>
            <p className="text-sm text-gray-500">Get SMB deal flow and co-invest</p>
          </Link>
          <Link
            href="/library"
            className="block p-5 border border-gray-200 rounded-xl hover:border-amber-300 transition-colors"
          >
            <p className="font-semibold text-gray-900 mb-1">Library</p>
            <p className="text-sm text-gray-500">Podcasts, writings &amp; resources</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
