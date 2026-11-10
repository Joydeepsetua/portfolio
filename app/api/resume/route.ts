import { CV_URL } from "@/lib/constants"

// Proxies the Google Docs PDF export through our own domain so the browser gets
// a single same-origin PDF response (no Google redirect / stray download.html).
export async function GET() {
  const res = await fetch(CV_URL, { next: { revalidate: 3600 } })

  if (!res.ok || !res.headers.get("content-type")?.includes("application/pdf")) {
    return new Response("Resume is unavailable right now.", { status: 502 })
  }

  return new Response(res.body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Joydeep-Setua-Resume.pdf"',
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}
