import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

export const alt = "Joydeep Setua – Senior Software Developer, React Native & Android Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Social share preview (WhatsApp, LinkedIn, X, etc.)
export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/joydeepsetua.jpg"))
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 90px",
          background: "linear-gradient(135deg, #020617 0%, #0b1a2e 60%, #062c3d 100%)",
          color: "#f8fafc",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          width={300}
          height={300}
          alt=""
          style={{ borderRadius: 9999, border: "8px solid rgba(34,211,238,0.45)", objectFit: "cover" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, color: "#22d3ee" }}>Joydeep Setua</div>
          <div style={{ fontSize: 42, fontWeight: 600, marginTop: 8 }}>Senior Software Developer</div>
          <div style={{ fontSize: 32, color: "#94a3b8", marginTop: 20 }}>React Native · Android · iOS · Node.js</div>
          <div style={{ fontSize: 30, color: "#38bdf8", marginTop: 28 }}>joydeep.in</div>
        </div>
      </div>
    ),
    size,
  )
}
