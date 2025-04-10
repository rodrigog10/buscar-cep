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
  return (
    <>
      <div className="flex justify-center items-center gap-2">
      <input
        type="text"
        placeholder="Digite o código do CEP"
        className="font-mono w-130 bg-white shadow-lg p-3 rounded-md m-1.5"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <div>
        <button
          onClick={handleSearch}
          disabled={loading}
          className=" cursor-pointer text-2xl bg-blue-500 font-mono text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? "Buscando..." : "Buscar"}
        </button>

      </div>
      
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {data && (
        <div className=" text-2xl p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Resultado:</h2>
          <ul className="space-y-2">
            <li>
              <strong>CEP: {data.cep} </strong>
            </li>
            <li>
              <strong>Logradouro: {data.logradouro} </strong>
            </li>
            <li>
              <strong>Bairro: {data.bairro} </strong>
            </li>
            <li>
              <strong>Cidade: {data.localidade} </strong>
            </li>
            <li>
              <strong>Estado: {data.uf} </strong>
            </li>
            {data.complemento && (
              <li>
                <strong>Complemento: {data.complemento} </strong>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
}
