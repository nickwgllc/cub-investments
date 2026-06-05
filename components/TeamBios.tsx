"use client";

import Image from "next/image";
import { useState } from "react";

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

function BioCard({
  photo, name, title, firstParagraph, restParagraphs, links,
}: {
  photo: string;
  name: string;
  title: string;
  firstParagraph: string;
  restParagraphs: string[];
  links: { href: string; label: string; icon: React.ReactNode }[];
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm">
      <div className="flex items-start gap-5 mb-6">
        <Image
          src={photo}
          alt={name}
          width={72}
          height={72}
          className="rounded-full object-cover shrink-0"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="text-[var(--cub-crimson)] font-medium">{title}</p>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed mb-3">{firstParagraph}</p>

      {expanded && restParagraphs.map((p, i) => (
        <p key={i} className="text-gray-600 leading-relaxed mb-3">{p}</p>
      ))}

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-[var(--cub-crimson)] hover:text-[var(--cub-crimson-700)] text-sm font-medium mb-6 transition-colors"
      >
        {expanded ? "− Show less" : "+ Read more"}
      </button>

      <div className="flex gap-4 pt-2 border-t border-gray-100">
        {links.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[var(--cub-crimson)] transition-colors flex items-center gap-2 text-sm font-medium"
          >
            {icon}
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function TeamBios() {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <BioCard
        photo="/images/nick-haschka.png"
        name="Nick Haschka"
        title="Partner"
        firstParagraph="Nick is an experienced entrepreneur, investor, executive, and business owner. Nick is CEO of OnPoint Generators, Inc., a northern California-based backup power rollup venture. He co-founded Cub Investments in 2016 and led its first acquisition of San Francisco-based The Wright Gardner, a commercial interior office plant company, in early 2017. He led the ownership transition, modernization, and acquisition of 9 local competitors over its first 5 years. In 2020, Nick led a similar effort taking over Vargas Gardening to expand into the commercial landscaping business, and proceeded to turn around, grow, and successfully exit the business to private equity 2022. He is a shareholder, board member and/or advisor to numerous small business ventures across a range of industries."
        restParagraphs={[
          "Prior to his small business career, Nick was Chief Commercial Officer at Evercar, where he led strategy, business development, and its commercial P&Ls. He developed and closed strategic deals with two auto OEMs, a large insurance company, the US Government, Uber, and Lyft.",
          "Before Evercar, Nick was Director of Strategy with NRG Energy's internal innovation group, Station A, where he launched strategic innovation projects and investments in solar, storage, microgrids, and energy software. His early career years were spent as a consultant at McKinsey & Company, where he advised Fortune 500 and private equity clients in a variety of growth strategy and operational improvement engagements. Nick was also co-founder of 532 Solar, a solar project developer acquired by Amonix, a solar PV system manufacturer in 2010.",
          "Nick holds a Master of Business Administration degree from Northwestern University and a Bachelor of Science degree in Operations Research from MIT. He lives in Los Gatos, CA with his wife Christina, and 3 kids, Jack, Luke and Emmy.",
        ]}
        links={[
          { href: "https://www.linkedin.com/in/nhaschka", label: "LinkedIn", icon: <LinkedInIcon /> },
          { href: "https://twitter.com/NickHaschka", label: "Twitter", icon: <TwitterIcon /> },
        ]}
      />

      <BioCard
        photo="/images/anu-sharma.png"
        name="Anupam Sharma"
        title="Partner"
        firstParagraph="Anu is co-owner and CEO at Wright Gardner, LLC, a family-owned business operating horticulture services brands in Northern California. He is a seasoned investor and finance executive with over 15 years of finance experience and over $2B of complex transactions."
        restParagraphs={[
          "Anu was previously Chief Financial Officer at Evercar where he raised over $30M in financing and coordinated all aspects of the company's corporate financial management.",
          "Anu was a senior director at Sunrun Inc. where he structured and negotiated tax equity transactions resulting in over $1 billion of financing commitments leading up to the company's IPO in 2015 at a valuation of $1.4 billion. He built and led Sunrun's Asset Management function with overall responsibility for timely deployment of open tax equity funds and investor reporting.",
          "Before Sunrun, he worked as part of Wind Capital Group (acquired by Pattern Energy) and E.ON Climate and Renewables raising construction debt, term loans and tax equity for over 2,000 MW's of wind projects across the US. Earlier in his career Anu worked as a strategy consultant for Accenture in the manufacturing and retail sectors.",
          "Anu holds a Master of Business Administration degree from Yale University and a Bachelor of Science degree in Electrical Engineering and Masters in Engineering Management from Case Western Reserve University. Anu lives in Pleasanton, CA with his wife Neha and son Ari.",
        ]}
        links={[
          { href: "https://www.linkedin.com/in/anupamsharma7", label: "LinkedIn", icon: <LinkedInIcon /> },
        ]}
      />
    </div>
  );
}
