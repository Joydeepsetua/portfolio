import { ViewSwitcher } from "@/components/view-switcher"
import { experiences } from "@/lib/data"
import {
  MY_BIO,
  MY_EMAIL,
  MY_GITHUB_URL,
  MY_LINKEDIN_URL,
  MY_ROLE,
  MY_TWITTER_URL,
  SITE_DESCRIPTION,
  SITE_URL,
} from "@/lib/constants"

// Structured data so search engines understand who this site is about
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Joydeep Setua",
      url: SITE_URL,
      image: `${SITE_URL}/joydeepsetua.jpg`,
      jobTitle: MY_ROLE,
      description: MY_BIO,
      email: `mailto:${MY_EMAIL}`,
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      worksFor: {
        "@type": "Organization",
        name: experiences[0].company,
        url: experiences[0].website,
      },
      knowsAbout: [
        "React Native",
        "Android Development",
        "Mobile App Development",
        "Node.js",
        "TypeScript",
        "Kotlin",
      ],
      sameAs: [MY_GITHUB_URL, MY_LINKEDIN_URL, MY_TWITTER_URL],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Joydeep Setua",
      description: SITE_DESCRIPTION,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ViewSwitcher />
    </>
  )
}
