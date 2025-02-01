"use client";
import { useState } from "react";

interface Drug {
  id?: number;
  drugName: string;
  latency: number;
  drugPresent: number;
  preRechallenge: number;
  dechallenge: number;
  drugNotoriety: number;
  intermediateScore: number;
}

function DrugTable() {
  const [drugs, setDrugs] = useState<Drug[]>([]);
  const [selectedDrug, setSelectedDrug] = useState<Drug | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddDrug = () => {
    setSelectedDrug({
      drugName: "",
      latency: 0,
      drugPresent: 0,
      preRechallenge: 0,
      dechallenge: 0,
      drugNotoriety: 0,
      intermediateScore: 0,
    });
    setIsFormOpen(true);
  };

  const handleEditDrug = (drug: Drug) => {
    setSelectedDrug(drug);
    setIsFormOpen(true);
  };

  const handleSaveDrug = (drug: Drug) => {
    if (drug.id) {
      setDrugs(drugs.map((d) => (d.id === drug.id ? drug : d)));
    } else {
      setDrugs([...drugs, { ...drug, id: Date.now() }]);
    }
    setIsFormOpen(false);
  };

  const calculateFinalValue = (drug: Drug) => {
    return (
      drug.latency +
      drug.drugPresent +
      drug.preRechallenge +
      drug.dechallenge +
      drug.drugNotoriety +
      drug.intermediateScore
    );
  };

  return (
    <div className="p-6">
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={handleAddDrug}
      >
        Add Drug
      </button>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Drug Name</th>
            <th className="border border-gray-300 px-4 py-2">Latency</th>
            <th className="border border-gray-300 px-4 py-2">Drug Present</th>
            <th className="border border-gray-300 px-4 py-2">
              Pre-Rechallenge
            </th>
            <th className="border border-gray-300 px-4 py-2">Dechallenge</th>
            <th className="border border-gray-300 px-4 py-2">Drug Notoriety</th>
            <th className="border border-gray-300 px-4 py-2">
              Intermediate Score
            </th>
            <th className="border border-gray-300 px-4 py-2">Final Score</th>
          </tr>
        </thead>
        <tbody>
          {drugs.map((drug) => (
            <tr
              key={drug.id}
              className="hover:bg-gray-100 cursor-pointer"
              onClick={() => handleEditDrug(drug)}
            >
              <td className="border border-gray-300 px-4 py-2">
                {drug.drugName}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {drug.latency}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {drug.drugPresent}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {drug.preRechallenge}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {drug.dechallenge}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {drug.drugNotoriety}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {drug.intermediateScore}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {calculateFinalValue(drug)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isFormOpen && selectedDrug && (
        <DrugForm
          drug={selectedDrug}
          onSave={handleSaveDrug}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
}

interface DrugFormProps {
  drug: Drug;
  onSave: (drug: Drug) => void;
  onClose: () => void;
}

function DrugForm({ drug, onSave, onClose }: DrugFormProps) {
  const [formData, setFormData] = useState<Drug>(drug);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-lg font-semibold mb-4">
          {drug.id ? "Edit Drug" : "Add Drug"}
        </h3>
        {Object.entries(formData).map(
          ([key, value]) =>
            key !== "id" && (
              <div key={key} className="mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </label>
                <input
                  name={key}
                  type="number"
                  value={value as number}
                  onChange={handleChange}
                  placeholder={key.replace(/([A-Z])/g, " $1").trim()}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            )
        )}
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
            onClick={() => onSave(formData)}
          >
            Save
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DrugTable;

`
TO-DO
- Fix Name such that you can type and it is saved
- Fix Final Calculation 

`;
