import { clsx } from "clsx";
import type { Metadata } from "next";
import { Outfit, Young_Serif } from "next/font/google";
import "./globals.css";
import { memo, ReactNode } from "react";

const outfit = Outfit({
  weight: ["400", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-outfit",
});

const youngSerif = Young_Serif({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-young-serif",
});

const APP_NAME = "Recipe page";
const DESCRIPTION = "Frontend Mentor challenge: Recipe page";

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: DESCRIPTION,
  icons: [
    {
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
      url: "/images/favicon-32x32.png",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://example.com/placeholder",
    siteName: APP_NAME,
    title: APP_NAME,
    description: DESCRIPTION,
  },
};

type Props = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: Props) => {
  return (
    <html
      className={clsx(
        outfit.variable,
        youngSerif.variable,
        "font-sans antialiased",
      )}
      lang="en-US"
    >
      <body className="bg-stone-100">
        <div className="grid min-h-screen place-items-center">{children}</div>
        <noscript>
          <div
            style={{
              position: "fixed",
              zIndex: 1000,
              top: 0,
              left: 0,
              right: 0,
              padding: "1rem",
              backgroundColor: "#fff4f4",
              color: "#d32f2f",
              borderBottom: "2px solid currentColor",
              textAlign: "center",
            }}
            role="alert"
          >
            <p>
              JavaScript is required for this website to function properly.
              Please ensure that it is supported and enabled in your browser
              settings.
              <br />
              To learn more, check out{" "}
              <a
                style={{ textDecorationLine: "underline", color: "LinkText" }}
                href="https://enable-javascript.com/"
              >
                How to enable JavaScript in your browser
              </a>
              .
            </p>
          </div>
        </noscript>
      </body>
    </html>
  );
};

export default memo(RootLayout);
