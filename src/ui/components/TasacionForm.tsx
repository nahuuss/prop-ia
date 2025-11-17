"use client";

import { useState } from "react";
import { PropiedadData } from "@/domain/entities/PropiedadData";
import { CalcularTasacionUseCase } from "@/application/usecases/CalcularTasacionUseCase";
import { TasacionRepositoryMock } from "@/infrastructure/repositories/TasacionRepositoryMock";

export default function TasacionForm() {
  const repo = new TasacionRepositoryMock();
  const usecase = new CalcularTasacionUseCase(repo);

  const [form, setForm] = useState<PropiedadData>({
    ubicacion: "",
    metrosCuadrados: 0,
    ambientes: 1,
    antiguedad: 0,
  });

  const [result, setResult] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const calcular = async () => {
    const res = await usecase.execute({
      ...form,
      metrosCuadrados: Number(form.metrosCuadrados),
      ambientes: Number(form.ambientes),
      antiguedad: Number(form.antiguedad),
    });
    setResult(res);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Tasador de Inmubles - PropIA</h2>

      <div className="grid gap-4">
        <input
  name="ubicacion"
  placeholder="Ubicación"
  className="border p-2 rounded text-black"
  onChange={handleChange}
/>

<input
  name="metrosCuadrados"
  type="number"
  placeholder="Metros cuadrados"
  className="border p-2 rounded text-black"
  onChange={handleChange}
/>

<input
  name="ambientes"
  type="number"
  placeholder="Ambientes"
  className="border p-2 rounded text-black"
  onChange={handleChange}
/>

<input
  name="antiguedad"
  type="number"
  placeholder="Antigüedad (años)"
  className="border p-2 rounded text-black"
  onChange={handleChange}
/>

      </div>

      <button
        onClick={calcular}
        className="w-full mt-6 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
      >
        Calcular Tasación
      </button>

      {result && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border text-sm">
          <p className="font-semibold text-black">
            Valor estimado: USD {result.valorEstimadoUSD}
          </p>
          <p className="text-gray-600 mt-1">{result.detalleCalculo}</p>
        </div>
      )}
    </div>
  );
}
