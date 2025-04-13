"use client";

import { TriangleAlert } from "lucide-react";
import { FadeInSection } from "./FadeInSection";

export default function AlertBox() {
  return (
    <FadeInSection>
      <div className="w-full items-start text-left flex flex-col mt-8 p-5">
        <h2 className="text-3xl font-bold drop-shadow-[0_0_9px_red] text-red-600  mb-4 flex gap-x-2">
          Atenção <TriangleAlert size={33} />
        </h2>
        <div className="font-bold">
          <h1 className="text-2xl mb-4">
            Para uma melhor experiência com a busca dos dados, experimente:
          </h1>
          <p className="mb-2">
            Não inserir caracteres especiais (com exceção do hífen "-") ao
            digitar o CEP.
          </p>
          <p className="mb-2">
            Certificar-se que o CEP possui 8 dígitos numéricos.
          </p>
          <p>
            Caso o CEP não seja encontrado, verifique se ele foi digitado
            corretamente.
          </p>
        </div>
        <h1 className="text-3xl mt-16 text-red-500">
          Veja algumas informações sobre o CEP abaixo!
        </h1>
      </div>
    </FadeInSection>
  );
}
