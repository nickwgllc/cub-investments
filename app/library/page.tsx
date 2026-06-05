import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Library | Cub Investments",
  description: "The best stuff we've produced and found since starting in SMB in 2016.",
};

const podcasts = [
  {
    title: "How 1 Small Acquisition Led to 9 More on Acquiring Minds",
    url: "https://acquiringminds.co/articles/nick-haschka-the-wright-gardner-1",
    date: "June 2021",
    note: "Start here :-)",
  },
  {
    title: "Engineering 40% Carry on Minds Capital Podcast",
    url: "https://www.mindscapital.co/podcasts/engineering-40-carry",
    date: "April 2025",
  },
  {
    title: "Building a $10m EBITDA Leader in a Fragmented Space on Acquiring Minds",
    url: "https://acquiringminds.co/articles/nick-haschka-dillan-ferguson-onpoint-generators",
    date: "July 2024",
  },
  {
    title: "How I Bought 12 Service Companies (Without Investors) on HoldCo Builders",
    url: "https://www.youtube.com/watch?v=BBB5wZViaWE",
    date: "March 2024",
  },
  {
    title: "EO Silicon Valley Panel on Acquiring Minds",
    url: "https://acquiringminds.co/articles/nick-haschka-george-goates-corey-veverka-eo-silicon-valley",
    date: "Oct 2023",
  },
  {
    title: "12 Small Business Acquisitions on Top M&A Entrepreneurs Podcast",
    url: "https://www.youtube.com/watch?v=LHTDcIuD1IA",
    date: "Feb 2023",
  },
  {
    title: "Reversing Course on a Holding Company on Think Like an Owner (Episode 129)",
    url: "https://www.alexbridgeman.com/podcasts/nick-haschka-reversing-course-on-a-holding-company-ep-132/",
    date: "Aug 2022",
  },
  {
    title: "6 Ways Buying a Business Has Changed on Acquiring Minds",
    url: "https://acquiringminds.co/articles/nick-haschka-the-wright-gardner-2",
    date: "October 2021",
  },
  {
    title: "Scaling Through Programmatic Acquisitions on Circle of Competence Podcast (Episode 39)",
    url: "https://www.circleofcompetence.co/podcast-1/episode/203d2b35/39-scaling-a-service-business-through-programmatic-acquisitions-with-nick-haschka",
    date: "July 2021",
  },
  {
    title: "Buying Small on Think Like an Owner (Episode 49)",
    url: "https://alexbridgeman.com/podcasts/nick-haschka-buying-small-ep-49/",
    date: "Feb 2021",
  },
  {
    title: "Buying a Job on Value Hive (Episode 15)",
    url: "https://macro-ops.com/episode-15-buying-a-job-creating-a-platform-with-nick-haschka-the-wright-gardener-cub-investments/",
    date: "Mar 2020",
  },
  {
    title: "Nick Haschka Interview on Think Like an Owner (Episode 5)",
    url: "https://www.alexbridgeman.com/podcast/nick-haschka-cub-investments-ep-5",
    date: "Apr 2019",
  },
  {
    title: "Alternative Investor (Episode 38)",
    url: "https://shows.acast.com/the-alternative-investor/episodes/we-talk-to-a-guy-who-bought-a-business-with-an-sba-loan-ep38",
    date: "Mar 2019",
  },
  {
    title: "Enterprise Radio",
    url: "https://epodcastnetwork.com/acquisition-based-entrepreneurship-a-new-spin-on-growth/",
    date: "Jul 2018",
  },
];

const writings = [
  {
    title: "The Main Street Revival",
    url: "https://medium.com/@nick_haschka/from-unicorns-to-main-street-why-small-business-is-the-next-big-thing-c252aa3cc99",
    date: "Feb 2017",
  },
  {
    title: "Pricing External LP Equity",
    url: "https://docs.google.com/document/d/1B2twoApqU7O1OEGzeyBQ8DwIzP702lPnC6ODcwDnOOM/view",
    date: "Summer 2022",
  },
  {
    title: "You are a broker's worst nightmare",
    url: "/brokers-worst-nightmare",
    date: "Fall 2020",
  },
];

const searchfunderWritings = [
  { title: "Searchfunder Interview Part I", url: "https://www.searchfunder.com/post/redesigning-a-plant-services-company-for-growth" },
  { title: "Part II", url: "https://www.searchfunder.com/post/redesigning-a-plant-services-company-for-growth-part-ii", date: "Jun 2018" },
  { title: "Reflection on 4-Years", url: "https://www.searchfunder.com/post/considering-search-a-reflection-on-4-years-in-the-trenches", date: "Jan 2021" },
  { title: "On competing with PE", url: "https://www.searchfunder.com/post/the-best-brutally-honest-search-advice-i-ever-received" },
  { title: "On deal criteria", url: "https://www.searchfunder.com/post/big-fish-small-pond" },
  { title: "On making growth easier", url: "https://www.searchfunder.com/post/finding-the-tailwinds" },
  { title: "On evaluating deals", url: "https://www.searchfunder.com/post/are-you-a-performance-taker-or-a-performance-maker" },
  { title: "On building trust with main street sellers", url: "https://www.searchfunder.com/post/going-main-street-thoughts-on-how-to-be-less-sophisticated" },
  { title: "On using SBA loans", url: "https://www.searchfunder.com/post/sba-pro-tips-for-searchers" },
  { title: "On pricing equity for outside investors", url: "https://www.searchfunder.com/post/pricing-external-equity-on-self-funded-search-acquisitions" },
  { title: "On proprietary sourcing via cold email", url: "https://www.searchfunder.com/post/setting-up-a-partial-or-fully-automated-outbound-email-lead-gen-system-updated-with-results" },
  { title: "On feeding your brain with content", url: "https://www.searchfunder.com/post/share-your-best-reading-content-sources-heres-my-list" },
  { title: "On getting PR", url: "https://www.searchfunder.com/post/operator-pro-tip-get-news-stories-written-about-your-company-via-haro" },
  { title: "On building custom software with 'no code'", url: "https://www.searchfunder.com/post/customizable-operations-software" },
];

const recommendedBooks = [
  { title: "Buy Then Build", url: "https://smile.amazon.com/gp/product/1544501137" },
  { title: "HBR Guide to Buying a Small Business", url: "https://smile.amazon.com/HBR-Guide-Buying-Small-Business-ebook/dp/B01KP33K4Y" },
  { title: "Small Giants by Bo Burlingham", url: "https://smile.amazon.com/Small-Giants-Companies-Instead-10th-Anniversary/dp/014310960X" },
];

const recommendedPodcasts = [
  { title: "Think Like an Owner by Alex Bridgeman", url: "https://www.alexbridgeman.com/podcast/" },
  { title: "Invest Like the Best by Patrick O'Shaughnessy", url: "https://www.joincolossus.com/episodes" },
  { title: "The Fort Podcast by Chris Powers", url: "https://fortcapitallp.com/category/podcasts/" },
  { title: "Acquisitions Anonymous", url: "https://www.acquanon.com/" },
  { title: "Owned and Operated", url: "https://www.ownedandoperated.com/" },
  { title: "Acquiring Minds", url: "https://acquiringminds.co/episodes" },
];

const recommendedNewsletters = [
  { title: "Little Engine Ventures", url: "https://us13.campaign-archive.com/home/?u=c19f32bb019a99ac6985e2ba0&id=5c738aa50c" },
  { title: "Permanent Equity", url: "https://www.permanentequity.com/newsletter" },
  { title: "GuessworkInvesting", url: "https://bigdealsmallbusiness.substack.com/" },
  { title: "Buy Small Sell High", url: "https://buysmallsellhigh.substack.com/" },
];

const tools = [
  { title: "ETA Operator Community", url: "http://operators.mn.co/", note: "[Request Access Required]" },
  { title: "Business School ETA Case Library", url: "https://drive.google.com/drive/folders/1utqKQ3vE1JVrZ_d5kKcKGB4e-j34iJtZ" },
  { title: "PPP Data Files Cleaned Up for Searchers", url: "https://drive.google.com/drive/folders/1ZmEFmo02jV8J-v8EMy3CTdnubqEQVkg3" },
  { title: "Search Deal Data", url: "https://docs.google.com/spreadsheets/d/12BYXfAzxCkcZB8D_h_57b8mmCRst_Kjy7rlBo-ww_Hw" },
  { title: "2020 Stanford Search Fund Primer with Editable Legal Document Templates", url: "https://drive.google.com/drive/folders/1CmgzVD9LBkZbAE3FFMpoJ38bWPY0UDOj", note: "[Request Access Required]" },
];

const products = [
  { title: "QuickBooks Online", url: "https://quickbooks.grsm.io/nickhaschka7598", note: "**affiliate" },
  { title: "Google Workspace", url: "https://referworkspace.app.goo.gl/wRwQ" },
  { title: "Mercury — business banking", url: "https://mercury.com/r/opg", note: "**affiliate" },
  { title: "Ramp — corporate credit card", url: "https://ramp.com/?rc=O8ZT1D&referral_location=referral_page", note: "**affiliate" },
  { title: "Dialpad — cloud VOIP", url: "https://refer.dialpad.com/73dfHm" },
  { title: "Gusto — payroll, benefits, HR", url: "https://gusto.com/i/nicholas3ac0f7de", note: "**affiliate" },
  { title: "Jotform — low-code forms", url: "https://link.jotform.com/cubinvestments-iwOEpSJgTo", note: "**affiliate" },
  { title: "Pipedrive CRM", url: "https://pipedrive.grsm.io/nickhaschka7598", note: "**affiliate" },
  { title: "Glide — mobile apps without code", url: "https://www.glideapps.com/r/TcVNtIdAe3ZxRF4G1fvy" },
  { title: "Apollo.io — B2B prospecting", url: "https://app.apollo.io/api/v1/referrals/referral_link_click?referral_code=9CCBuR1oynoQ-HVXyMtanA", note: "**affiliate" },
  { title: "Airtable — databases with rich content", url: "https://airtable.com/invite/r/UFrma4vR", note: "**affiliate" },
  { title: "Google Colab — Python starter", url: "https://colab.research.google.com/" },
];

const aiTools = [
  { title: "AudioPen — voice notes to essays", url: "http://audiopen.ai/?aff=nAkR0", note: "**affiliate" },
  { title: "Fireflies AI — meeting transcription & summaries", url: "https://app.fireflies.ai/login?referralCode=SChA578cu6", note: "**affiliate" },
  { title: "ChatGPT — AI writing and coding", url: "https://chat.openai.com/chat" },
  { title: "Claude AI by Anthropic — research, analysis, writing", url: "https://claude.ai/" },
  { title: "ChatPDF — upload PDFs and ask away", url: "https://www.chatpdf.com/?via=nick" },
];

function LinkList({ items }: { items: { title: string; url: string; date?: string; note?: string }[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.url} className="flex items-baseline gap-2 text-gray-700">
          <a
            href={item.url}
            target={item.url.startsWith("http") ? "_blank" : undefined}
            rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-[var(--cub-crimson-700)] hover:text-[var(--cub-crimson-700)] hover:underline font-medium"
          >
            {item.title}
          </a>
          {(item.date || item.note) && (
            <span className="text-sm text-gray-500">
              {item.date && `(${item.date})`}
              {item.note && ` — ${item.note}`}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">{title}</h3>
      {children}
    </div>
  );
}

export default function LibraryPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-12">
        <p className="text-[var(--cub-crimson)] font-semibold text-xs uppercase tracking-[0.2em] mb-3">Reading List</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Content Library</h1>
        <p className="text-lg text-gray-500">
          The best stuff we&apos;ve produced and found since starting in SMB in 2016.
        </p>
      </div>

      {/* Nick's content */}
      <div className="grid lg:grid-cols-[2fr_3fr] gap-12 mb-20">
        <div className="space-y-10">
          <Section title="Podcasts">
            <LinkList items={podcasts} />
          </Section>
        </div>

        <div className="space-y-10">
          <Section title="Writings">
            <LinkList items={writings} />
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">
                On{" "}
                <a href="http://searchfunder.com" target="_blank" rel="noopener noreferrer" className="text-[var(--cub-crimson-700)] hover:underline font-medium">
                  Searchfunder
                </a>{" "}
                (account required):
              </p>
              <ul className="space-y-2">
                {searchfunderWritings.map((item) => (
                  <li key={item.url}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--cub-crimson-700)] hover:text-[var(--cub-crimson-700)] hover:underline font-medium text-sm"
                    >
                      {item.title}
                    </a>
                    {item.date && <span className="text-gray-500 text-sm"> ({item.date})</span>}
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <Section title="Social Media">
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="https://twitter.com/NickHaschka" target="_blank" rel="noopener noreferrer" className="text-[var(--cub-crimson-700)] hover:underline font-medium">
                  Follow Nick Haschka on Twitter
                </a>
              </li>
              <li>
                <a href="https://www.linktr.ee/NickHaschka" target="_blank" rel="noopener noreferrer" className="text-[var(--cub-crimson-700)] hover:underline font-medium">
                  Nick Haschka on Linktr.ee
                </a>
              </li>
            </ul>
          </Section>

          <Section title="Press">
            <ul className="space-y-2">
              <li>
                <a href="https://www.apnews.com/4a8e96a6b5394693806e732b3d22b354" target="_blank" rel="noopener noreferrer" className="text-[var(--cub-crimson-700)] hover:underline font-medium">
                  TWG in the Associated Press
                </a>{" "}
                <span className="text-gray-500 text-sm">(Feb 2019)</span>
              </li>
            </ul>
          </Section>
        </div>
      </div>

      <hr className="border-gray-200 mb-20" />

      {/* Recommended */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Recommended Content, Tools &amp; Products</h2>
        <p className="text-sm text-gray-500">** Those marked with ** are affiliate links which compensate us when used.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        <Section title="Books">
          <LinkList items={recommendedBooks} />
        </Section>

        <Section title="Podcasts">
          <LinkList items={recommendedPodcasts} />
        </Section>

        <Section title="Newsletters">
          <LinkList items={recommendedNewsletters} />
        </Section>

        <Section title="Data, Tools & Templates">
          <LinkList items={tools} />
        </Section>

        <Section title="Products We Use and Love">
          <LinkList items={products} />
        </Section>

        <Section title="Amazing AI Tools">
          <LinkList items={aiTools} />
        </Section>
      </div>
    </div>
  );
}
