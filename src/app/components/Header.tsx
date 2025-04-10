import { Search } from "lucide-react";

export function Header() {
    return (
      <h1 className="text-3xl font-mono font-bold p-6 flex items-center justify-center gap-x-3">
        Buscar CEP <Search size={25} />
      </h1>
    );
  }