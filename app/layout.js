import "./globals.css";

export const metadata = {
  title: "Tectum",
  description: "A social learning platform for medical students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
