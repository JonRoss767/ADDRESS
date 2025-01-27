"use client";
import { useState } from "react";

type Drug = {
  drugName: string;
  latency: number;
  drugPresent: number;
  preRechallenge: number;
  dechallenge: number;
  drugNotoriety: number;
  intermediateScore: number;
};

const DrugTable = () => {
  const [drugs, setDrugs] = useState<Drug[]>([
    {
      drugName: "Acetaminophen",
      latency: -1,
      drugPresent: 0,
      preRechallenge: -2,
      dechallenge: 0,
      drugNotoriety: 2,
      intermediateScore: -1,
    },
  ]);

  const handleAddDrug = () => {
    setDrugs([
      ...drugs,
      {
        drugName: "",
        latency: 0,
        drugPresent: 0,
        preRechallenge: 0,
        dechallenge: 0,
        drugNotoriety: 0,
        intermediateScore: 0,
      },
    ]);
  };

  const handleRemoveDrug = (index: number) => {
    setDrugs(drugs.filter((_, i) => i !== index));
  };

  const getRowTotal = (drug: Drug) => {
    return (
      drug.latency +
      drug.drugPresent +
      drug.preRechallenge +
      drug.dechallenge +
      drug.drugNotoriety +
      drug.intermediateScore
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: keyof Drug
  ) => {
    const updatedDrugs = [...drugs];
    updatedDrugs[index] = {
      ...updatedDrugs[index],
      [field]: Number(e.target.value),
    };
    setDrugs(updatedDrugs);
  };

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">Drug Name</th>
            <th className="border px-4 py-2 text-left">Latency</th>
            <th className="border px-4 py-2 text-left">Drug Present</th>
            <th className="border px-4 py-2 text-left">Pre Rechallenge</th>
            <th className="border px-4 py-2 text-left">Dechallenge</th>
            <th className="border px-4 py-2 text-left">Drug Notoriety</th>
            <th className="border px-4 py-2 text-left">Intermediate Score</th>
            <th className="border px-4 py-2 text-left">Final Value</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {drugs.map((drug, index) => (
            <tr key={index} className="bg-white hover:bg-gray-50">
              <td className="border px-4 py-2">
                <input
                  type="text"
                  value={drug.drugName}
                  onChange={(e) => {
                    const updatedDrugs = [...drugs];
                    updatedDrugs[index].drugName = e.target.value;
                    setDrugs(updatedDrugs);
                  }}
                  className="w-full border px-2 py-1 rounded-md"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="number"
                  value={drug.latency}
                  onChange={(e) => handleInputChange(e, index, "latency")}
                  className="w-full border px-2 py-1 rounded-md"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="number"
                  value={drug.drugPresent}
                  onChange={(e) => handleInputChange(e, index, "drugPresent")}
                  className="w-full border px-2 py-1 rounded-md"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="number"
                  value={drug.preRechallenge}
                  onChange={(e) =>
                    handleInputChange(e, index, "preRechallenge")
                  }
                  className="w-full border px-2 py-1 rounded-md"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="number"
                  value={drug.dechallenge}
                  onChange={(e) => handleInputChange(e, index, "dechallenge")}
                  className="w-full border px-2 py-1 rounded-md"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="number"
                  value={drug.drugNotoriety}
                  onChange={(e) => handleInputChange(e, index, "drugNotoriety")}
                  className="w-full border px-2 py-1 rounded-md"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="number"
                  value={drug.intermediateScore}
                  onChange={(e) =>
                    handleInputChange(e, index, "intermediateScore")
                  }
                  className="w-full border px-2 py-1 rounded-md"
                />
              </td>
              <td className="border px-4 py-2">
                <span>{getRowTotal(drug)}</span>
              </td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleRemoveDrug(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button
          onClick={handleAddDrug}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add Drug
        </button>
      </div>
    </div>
  );
};

export default DrugTable;
