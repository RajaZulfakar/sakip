import "../styles/globals.css";
import Footer from "./footer";
import Header from "./header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-gray-50 min-h-screen w-full flex flex-col justify-between">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
