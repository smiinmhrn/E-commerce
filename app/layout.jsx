import "@/styles/globals.css";

export const metadata = {
  title: "E Commerce",
  description: "فروشگاه اینترنتی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
