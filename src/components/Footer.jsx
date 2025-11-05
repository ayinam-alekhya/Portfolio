import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="px-4 py-6 bg-background border-t border-border mt-12 text-center">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-3">
        {/* Copyright */}
        <p className="text-xs md:text-sm text-foreground/60">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-primary font-medium">Alekhya Ayinam</span>.  
          All rights reserved.
        </p>

        {/* Scroll to top */}
        <a
          href="#home"
          className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
};
