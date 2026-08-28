import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { SITE } from "@/lib/constants";

export const alt = `${SITE.name} — Automação de divulgação de ofertas para afiliados`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const symbolBase64 = readFileSync(
    join(process.cwd(), "public/brand/symbol-mint.png")
  ).toString("base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#101418",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:image/png;base64,${symbolBase64}`}
            width={44}
            height={44}
            alt=""
          />
          <span style={{ fontSize: 38, fontWeight: 700, color: "#ffffff" }}>
            {SITE.name}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 48,
            maxWidth: 900,
          }}
        >
          <span style={{ fontSize: 60, fontWeight: 700, color: "#ffffff", lineHeight: 1.1 }}>
            Pare de postar oferta
          </span>
          <span style={{ fontSize: 60, fontWeight: 700, color: "#5ee7a5", lineHeight: 1.1 }}>
            link por link.
          </span>
        </div>

        <span style={{ fontSize: 26, color: "rgba(255,255,255,0.66)", marginTop: 28 }}>
          Automação de divulgação de ofertas para afiliados de marketplace
        </span>
      </div>
    ),
    { ...size }
  );
}
