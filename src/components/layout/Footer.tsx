
import React from 'react';

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
              <span className="text-white">&lt;</span>code<span className="text-white">&gt;</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} EQUIPE CÓDIGO SUJO. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
