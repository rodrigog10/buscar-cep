"use client";
import { useState } from "react";


interface CepData {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export default function InputField() {
  const [cep, setCep] = useState("");
  const [data, setData] = useState<CepData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!cep) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`/api/cep?cep=${encodeURIComponent(cep)}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erro ao buscar CEP");
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 w-full mx-auto">
        <input
          type="text"
          placeholder="Digite o código do CEP"
          className="font-mono w-full md:max-w-md bg-white shadow-lg p-3 rounded-md"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="w-full md:w-auto text-lg bg-blue-500 font-mono text-white px-5 py-2 rounded-md transition duration-300 hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </div>

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {data && (
        <>
        <div className="font-mono text-base sm:text-lg md:text-xl p-4 mt-6 max-w-3xl mx-auto overflow-x-auto">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">Resultado:</h2>
          <ul className="space-y-2">
            <li>
              <strong>CEP:</strong> {data.cep}
            </li>
            <li>
              <strong>Logradouro:</strong> {data.logradouro}
            </li>
            <li>
              <strong>Bairro:</strong> {data.bairro}
            </li>
            <li>
              <strong>Cidade:</strong> {data.localidade}
            </li>
            <li>
              <strong>Estado:</strong> {data.uf}
            </li>
            {data.complemento && (
              <li>
                <strong>Complemento:</strong> {data.complemento}
              </li>
            )}
          </ul>
        </div>
        </>
      )}
    </>
  );
}
