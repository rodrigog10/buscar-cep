import { TriangleAlert } from "lucide-react";

export default function AlertBox() {
  return (
    <div className=" w-full items-start text-left flex flex-col mt-8 p-5">
      <h2 className="text-3xl font-bold text-red-600 mb-4 flex gap-x-2">
        Fique atento <TriangleAlert size={33} />
      </h2>
      <div className="font-bold">
        <h1 className="text-2xl mb-4">
          Para uma melhor experiência à busca dos dados, experimente:{" "}
        </h1>
        <p className="mb-2">
          Não inserir caracteres especiais (com excessão do hífen "-") ao
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
      <h1 className="text-3xl mt-15 text-red-500">
        Veja algumas informações sobre o CEP abaixo!{" "}
      </h1>
    </div>
  );
}
