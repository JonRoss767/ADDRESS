import DrugTable from "./components/DrugTable";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6">
        <h1 className="text-3xl font-bold text-center">ADDRESS</h1>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            ADDRESS Scores
          </h2>
        </section>

        {/* Drug Table */}
        <section className="bg-white shadow-lg rounded-lg p-4">
          <DrugTable />
        </section>
      </main>
    </div>
  );
}
