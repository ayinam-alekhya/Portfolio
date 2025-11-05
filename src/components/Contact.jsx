import { Github, Linkedin, Mail, Phone, Copy, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const EMAIL = "alekhyaayinam3@gmail.com";
const PHONE = "+1 (656)-216-5627";

export const Contact = () => {
  const copy = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${label} copied`);
    } catch {
      toast.error(`Couldn't copy ${label}`);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I’m currently open to full-stack, software, or web development roles.  
          Feel free to reach out — I’d love to connect!
        </p>

        {/* Email + Phone side by side */}
        <div className="flex flex-col md:flex-row justify-center gap-16 mb-12">
          {/* Email */}
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="p-4 rounded-full bg-primary/10">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <h4 className="font-semibold text-lg">Email</h4>
            <a
              href={`mailto:${EMAIL}`}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {EMAIL}
            </a>
            <div className="mt-2 flex gap-2 justify-center">
              <button
                onClick={() => copy(EMAIL, "Email")}
                className="rounded-full border border-border px-3 py-1 text-sm hover:bg-primary/10 hover:text-primary transition-colors inline-flex items-center gap-2"
                aria-label="Copy email"
              >
                <Copy className="h-4 w-4" /> Copy
              </button>
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-full border border-primary text-primary px-3 py-1 text-sm hover:bg-primary/10 transition-colors inline-flex items-center gap-2"
              >
                <CheckCircle2 className="h-4 w-4" /> Email me
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="p-4 rounded-full bg-primary/10">
              <Phone className="h-7 w-7 text-primary" />
            </div>
            <h4 className="font-semibold text-lg">Phone</h4>
            <a
              href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {PHONE}
            </a>
            <div className="mt-2 flex gap-2 justify-center">
              <button
                onClick={() => copy(PHONE, "Phone number")}
                className="rounded-full border border-border px-3 py-1 text-sm hover:bg-primary/10 hover:text-primary transition-colors inline-flex items-center gap-2"
                aria-label="Copy phone"
              >
                <Copy className="h-4 w-4" /> Copy
              </button>
              <a
                href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}
                className="rounded-full border border-primary text-primary px-3 py-1 text-sm hover:bg-primary/10 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="pt-4 text-center">
          <h4 className="font-medium mb-4 text-lg">Connect With Me</h4>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="https://www.linkedin.com/in/alekhyaayinam/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-4 py-2 inline-flex items-center gap-2 hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
            <a
              href="https://github.com/ayinam-alekhya"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-4 py-2 inline-flex items-center gap-2 hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
