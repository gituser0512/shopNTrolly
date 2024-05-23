import { Metadata } from "next"
import "styles/globals.css"
import { DM_Sans } from "next/font/google"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

const dmSans = DM_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans",
})

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" suppressHydrationWarning>
      <body className={`${dmSans.className}`}>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
