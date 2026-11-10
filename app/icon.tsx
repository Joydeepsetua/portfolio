import { ImageResponse } from "next/og"

export const size = { width: 48, height: 48 }
export const contentType = "image/png"

// Favicon — also shown next to the site in Google results
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 12,
          background: "linear-gradient(135deg, #22d3ee, #2563eb)",
          color: "#ffffff",
          fontSize: 24,
          fontWeight: 800,
        }}
      >
        JS
      </div>
    ),
    size,
  )
}
