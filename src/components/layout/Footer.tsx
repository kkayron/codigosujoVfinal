
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-codigosujo-darker py-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/09d558d1-fac1-425c-8925-4d1e2a89d9df.png" 
              alt="Código Sujo Logo" 
              className="h-10 w-10 mr-3"
            />
            <div className="font-mono font-bold text-xl text-codigosujo-red">
              CÓDIGO<span className="text-white">/</span>SUJO
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-codigosujo-red transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-codigosujo-red transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-codigosujo-red transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-codigosujo-red transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} CÓDIGO SUJO. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
