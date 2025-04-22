
import { CustomButton } from "@/components/ui/custom-button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full py-6 z-50 bg-codigosujo-darker/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="font-mono font-bold text-xl text-codigosujo-red">
          CÓDIGO<span className="text-white">/</span>SUJO
        </div>
        <div>
          <CustomButton href="#pricing" className="text-sm px-4 py-2">
            Assinar
          </CustomButton>
        </div>
      </div>
    </header>
  );
}
