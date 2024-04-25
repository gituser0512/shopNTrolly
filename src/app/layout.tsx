import { Metadata } from "next"
import "styles/globals.css"
import { Work_Sans } from "next/font/google"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
})

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body className={`${workSans.className}`}>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
