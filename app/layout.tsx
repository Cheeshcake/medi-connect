import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              {/* <nav className="w-full flex justify-center border-b border-b-foreground/10 ">
                <div className="w-full max-w-7xl flex flex-col gap-3 md:flex-row justify-between items-center p-3 px-5 text-sm">
                  <h1 className="text-2xl text-primary font-medium">
                    Welcome to MediConnect!
                  </h1>
                  <div className="flex gap-2 items-center">
                    <HeaderAuth />
                    <ThemeSwitcher />
                  </div>
                </div>
              </nav> */}
              <div className="w-full">{children}</div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
