import "./globals.css"
import ClientLoader from "./components/ClientLoader";

export const metadata = {
  title: "Portfolio",
  description: "My Portfolio Website",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLoader />
        {children}
      </body>
    </html>
  )
}
