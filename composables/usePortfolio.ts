/**
 * Portfolio companies — content for the portfolio grid + modal.
 *
 * Edit company entries here. Order in this array determines display order
 * on the page. The `id` field is preserved from the original HTML for
 * stable anchors but isn't structurally required — feel free to renumber
 * if you start fresh.
 */

export interface PortfolioCompany {
  /** Stable numeric id (used for modal `pfm-{id}` and anchor links). */
  id: number
  /** Display name of the company. */
  name: string
  /** Sector tag, e.g. "Fintech · Banking". Center dot is U+00B7. */
  tag: string
  /** Banner image used on both the card and the modal. */
  image: string
  /** Long-form description shown in the modal. */
  desc: string
  /** Investment stage label, e.g. "Seed", "Series A". */
  stage: string
  /** Headquarters or geographic focus. */
  hq: string
  /** External link to the company's site. */
  url: string
}

const portfolioCompanies: PortfolioCompany[] = [
  {
    "id": 0,
    "image": "https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/deals.png",
    "tag": "CPaaS \u00b7 Communications",
    "name": "Termii",
    "desc": "Termii is a Communications Platform as a Service (CPaaS) providing businesses with access to communication tools globally \u2014 SMS, voice, email, and in-app messaging across 200+ networks.",
    "stage": "Series A",
    "hq": "California, USA",
    "url": "https://termii.com"
  },
  {
    "id": 2,
    "image": "https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/sotelban.png",
    "tag": "eSIM \u00b7 Connectivity",
    "name": "Sotel",
    "desc": "Sotel is an eSIM provider that offers businesses and employees access to data connectivity globally \u2014 enabling seamless international data roaming without physical SIM cards.",
    "stage": "Seed",
    "hq": "Global",
    "url": "https://sotel.com"
  },
  {
    "id": 3,
    "image": "https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/telroiban%20(3).png",
    "tag": "AI \u00b7 Telecom Infrastructure",
    "name": "Telroi",
    "desc": "Telroi provides MNOs, MVNOs, and CPaaS companies with AI-powered direct-to-telco voice infrastructure \u2014 reducing call termination costs and improving quality at scale.",
    "stage": "Seed",
    "hq": "Global",
    "url": "https://telroi.com"
  },
  {
    "id": 5,
    "image": "https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/mercury-bn.png",
    "tag": "Fintech \u00b7 Banking",
    "name": "Mercury",
    "desc": "Mercury is building a modern banking stack and empowering the next generation of startups with tools for banking, treasury management, and financial operations.",
    "stage": "Series B+",
    "hq": "California, USA",
    "url": "https://mercury.com"
  },
  {
    "id": 6,
    "image": "https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/plan-formal.png",
    "tag": "Security \u00b7 Data Access",
    "name": "Formal",
    "desc": "Formal empowers security teams to enforce granular access policies to real-time data flows \u2014 providing a proxy layer that monitors and controls who can access what data and when.",
    "stage": "Series A",
    "hq": "California, USA",
    "url": "https://www.joinformal.com"
  },
  {
    "id": 7,
    "image": "https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/rank-log.png",
    "tag": "Fintech \u00b7 Community Banking",
    "name": "Rank",
    "desc": "Rank is a community finance bank powered by people who share a common goal to redefine how money works \u2014 building cooperative financial infrastructure for underserved communities.",
    "stage": "Seed",
    "hq": "Global",
    "url": "https://userank.com"
  },
  {
    "id": 8,
    "image": "https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/rivy-lo.png",
    "tag": "CleanTech \u00b7 Lending",
    "name": "Rivy",
    "desc": "Rivy provides homes and businesses with quick loans for clean energy access across emerging markets \u2014 making solar and renewable energy financially accessible to everyone.",
    "stage": "Seed",
    "hq": "Global",
    "url": "https://rivy.co"
  },
  {
    "id": 9,
    "image": "https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/plan_1661112808.jpg",
    "tag": "SaaS \u00b7 Asset Management",
    "name": "Rayda",
    "desc": "Rayda helps businesses ship, track, and recover work tools from employees globally \u2014 solving the fragmented world of IT asset management for remote and distributed teams.",
    "stage": "Seed",
    "hq": "Global",
    "url": "https://www.rayda.co"
  },
  {
    "id": 10,
    "image": "https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/grey-log.png",
    "tag": "Fintech \u00b7 Payments",
    "name": "Grey",
    "desc": "Grey helps freelancers and remote workers send and receive client payments in multiple currencies \u2014 providing African professionals with seamless cross-border financial infrastructure.",
    "stage": "Seed",
    "hq": "Global",
    "url": "https://grey.co"
  },
  {
    "id": 15,
    "image": "https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/newl.png",
    "tag": "AgriTech \u00b7 Food Security",
    "name": "Newllyon",
    "desc": "Newllyon is building a network of automated greenhouse farms across emerging markets \u2014 combining precision agriculture and technology to address food security challenges at scale.",
    "stage": "Pre-seed",
    "hq": "Global",
    "url": "https://newllyon.com"
  },
  {
    "id": 16,
    "image": "https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/plan_1659641458%20(1).png",
    "tag": "SaaS \u00b7 SMB Tools",
    "name": "Bumpa",
    "desc": "Bumpa provides SMBs with tools to manage their business operations \u2014 helping small and medium businesses run inventory, sales, and customer engagement from a single platform.",
    "stage": "Seed",
    "hq": "Global",
    "url": "https://www.getbumpa.com/"
  },
  {
    "id": 17,
    "image": "https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/plan_1641980708%20(1).jpg",
    "tag": "Fintech \u00b7 Identity Verification",
    "name": "CreditChek",
    "desc": "CreditChek helps businesses verify the identity of clients to prevent bad debt \u2014 providing credit insights and KYC infrastructure for lenders, fintechs, and merchants across Africa.",
    "stage": "Seed",
    "hq": "Global",
    "url": "https://www.creditchek.africa/"
  },
  {
    "id": 18,
    "image": "https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/convoy.png",
    "tag": "DevTools \u00b7 Webhooks Infrastructure",
    "name": "Convoy",
    "desc": "Convoy enables businesses to send, receive, and manage millions of webhooks reliably \u2014 providing the infrastructure layer for event-driven systems at scale.",
    "stage": "Seed",
    "hq": "Global",
    "url": "https://www.getconvoy.io/"
  },
  {
    "id": 19,
    "image": "https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/afelabu-ban%20(1).png",
    "tag": "E-Commerce \u00b7 African Diaspora",
    "name": "Afelabu",
    "desc": "Afelabu gives Africans in the diaspora access to authentic African groceries hard to find in most Western cities \u2014 bridging the cultural distance through reliable, fast delivery of pantry staples and ingredients.",
    "stage": "Pre-seed",
    "hq": "Texas, USA",
    "url": "https://afelabu.com/"
  },
  {
    "id": 20,
    "image": "https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/nigenius.png",
    "tag": "EdTech \u00b7 STEM Education",
    "name": "Nigenius",
    "desc": "Nigenius provides schools with STEM tutors for specialized courses like coding and robotics \u2014 closing the talent gap in technical education for the next generation of African builders.",
    "stage": "Pre-seed",
    "hq": "Global",
    "url": "https://nigenius.com.ng/"
  }
]

/**
 * Composable returning the portfolio company list and modal state.
 *
 * Modal state is held in a single shared ref via Nuxt's `useState` so the
 * portfolio grid and modal stay in sync without prop-drilling.
 */
export function usePortfolio() {
  const activeCompanyId = useState<number | null>('portfolio-active-id', () => null)

  const activeCompany = computed<PortfolioCompany | null>(() =>
    portfolioCompanies.find((c) => c.id === activeCompanyId.value) ?? null,
  )

  function open(id: number) {
    activeCompanyId.value = id
    if (import.meta.client) document.body.style.overflow = 'hidden'
  }

  function close() {
    activeCompanyId.value = null
    if (import.meta.client) document.body.style.overflow = ''
  }

  return {
    companies: portfolioCompanies,
    activeCompany,
    activeCompanyId,
    open,
    close,
  }
}
