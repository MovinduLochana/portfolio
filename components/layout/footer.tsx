"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/20 border-t border-border/50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center gap-2">
            <span className="text-2xl">🇱🇰</span>
            <p className="text-muted-foreground">Made with ❤️ in Sri Lanka</p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
            <p>Copyright © {currentYear} Movindu Lochana. All Rights Reserved.</p>
            <div className="flex gap-4">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#achievements" className="hover:text-primary transition-colors">Achievements</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          <div className="pt-4 border-t border-border/30">
            <p className="text-xs text-muted-foreground">
              Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}