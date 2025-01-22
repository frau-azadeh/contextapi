import "./globals.css"; // استایل‌های عمومی
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "Context API Theme Example",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {/* ارائه ThemeProvider به کل اپلیکیشن */}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
