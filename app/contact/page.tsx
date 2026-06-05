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
      <p className="text-lg text-gray-600 mb-10 leading-relaxed">
        Whether you&apos;re a business owner looking to sell or partner, an entrepreneur looking for
        equity investors, or an investor looking for deal flow — we&apos;d love to connect.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Business Owners</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Looking to sell your business or find an operating partner? We&apos;d love to hear about
            your company and understand if there&apos;s a fit.
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Entrepreneurs &amp; Investors</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Raising equity for an acquisition? Looking for LP investors with operating experience?
            We work with acquisition entrepreneurs and co-investors.
          </p>
        </div>
      </div>

      {/* JotForm embed */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete the Form Below</h2>
        <p className="text-gray-500 mb-6 text-sm">
          Fill out the form and follow the prompts to book a meeting. We look forward to talking with you!
        </p>
        <iframe
          id="JotFormIFrame-222827316889166"
          title="Contact Cub Investments"
          src="https://form.jotform.com/222827316889166"
          allow="geolocation; microphone; camera"
          allowFullScreen
          className="w-full border-0 rounded-xl"
          style={{ minHeight: "700px" }}
        />
      </div>

      <div className="border-t border-gray-100 pt-12">
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
