export interface DrugInformation {
  name: string;
  riskNumber: number;
  riskLevel: string;
  atc: string | null;
  halfLife: number | null;
}

export async function getDrugsList(): Promise<DrugInformation[]> {
  return [
    {
      name: "A",
      riskNumber: 1,
      riskLevel: "Low",
      atc: null,
      halfLife: null,
    },
    {
      name: "B",
      riskNumber: 0,
      riskLevel: "None",
      atc: null,
      halfLife: null,
    },
    {
      name: "C",
      riskNumber: 3,
      riskLevel: "High",
      atc: null,
      halfLife: null,
    },
  ];
}
