
import React from 'react';

export function Footer() {
  return (
    <footer className="bg-codigosujo-darker py-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono font-bold text-xl text-codigosujo-red">
            CÓDIGO<span className="text-white">/</span>SUJO
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CÓDIGO SUJO. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
