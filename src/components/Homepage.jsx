import { ArrowDown } from "lucide-react";

export const Homepage = () => {

  return ( 
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                <span className="text-primary opacity-0 animate-fade-in-delay-1"> Alekhya</span>
                <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Ayinam</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3">
                I'm a passionate software developer specializing in building web applications that are not only functional but also visually appealing. Welcome to my portfolio!
            </p>
            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                <a href="#projects" className="cosmic-button">
                    View My Work
                </a>
            </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col item items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <ArrowDown className="h-5 w-5 text-foreground/70" />
      </div>
    </section>
  );
};
