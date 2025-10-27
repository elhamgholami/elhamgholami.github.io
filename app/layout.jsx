import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Elham Gholami | Personal Website",
  description: "Personal website hosted on GitHub Pages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="En" dir="ltr">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
