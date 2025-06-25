import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "@/context/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();
  
  // Apply theme class to body for full-page styling
  useEffect(() => {
    document.body.className = theme === "dark" ? "dark bg-gray-950" : "bg-gray-50";
  }, [theme]);

  return (
    <div className="flex min-h-screen flex-col w-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}