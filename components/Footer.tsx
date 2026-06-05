import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "var(--cub-navy-900, #23252e)" }} className="text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              {/* Light logo for dark bg: invert the wordmark */}
              <Image
                src="/images/logo-horizontal.png"
                alt="Cub Investments"
                width={200}
                height={28}
                className="h-6 w-auto brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              We invest to help small businesses flourish in their next generation. Pride of Ownership.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://www.linkedin.com/company/cub-investments", label: "LinkedIn", icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/> },
                { href: "https://twitter.com/Cub_Investments", label: "X / Twitter", icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/> },
                { href: "https://www.facebook.com/CubInvestments", label: "Facebook", icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/> },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">{icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">Navigate</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/library" className="hover:text-white transition-colors">Library</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/book" className="hover:text-white transition-colors">Book a Meeting</Link></li>
            </ul>
          </div>

          {/* Work With Us */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">Work With Us</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/entrepreneurs" className="hover:text-white transition-colors">For Entrepreneurs</Link></li>
              <li><Link href="/investors" className="hover:text-white transition-colors">For Investors</Link></li>
              <li><Link href="/debt" className="hover:text-white transition-colors">Debt &amp; Financing</Link></li>
              <li><Link href="/get-operator-opportunities" className="hover:text-white transition-colors">Operator Opportunities</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Cub Investments. All rights reserved.</p>
          <p className="text-gray-600">Investing in American small businesses since 2016.</p>
        </div>
      </div>
    </footer>
  );
}
