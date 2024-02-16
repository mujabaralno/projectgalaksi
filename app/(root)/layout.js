import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
          <body>{children}</body>
      </html>
    );
  }