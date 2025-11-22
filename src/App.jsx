import { useEffect, useState } from "react";
import { getTaxes, getCountries, updateTax } from "./api";
import DataTable from "./components/DataTable";
import EditTaxModal from "./components/EditTaxModal";

export default function App() {
  const [taxes, setTaxes] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError("");
        const [taxData, countryData] = await Promise.all([
          getTaxes(),
          getCountries(),
        ]);
        setTaxes(taxData);
        setCountries(countryData);
      } catch (err) {
        console.error(err);
        setError("Failed to load data. Please refresh.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const handleEditClick = (row) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRow(null);
  };

  const handleSave = async (updatedFields) => {
    if (!selectedRow) return;
    try {
      setSaving(true);
      setError("");

      const payload = { ...selectedRow, ...updatedFields };

      const updated = await updateTax(selectedRow.id, payload);

      setTaxes((prev) =>
        prev.map((t) => (t.id === updated.id ? updated : t))
      );

      handleCloseModal();
    } catch (err) {
      console.error(err);
      setError("Failed to save changes. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="app-root">
      <header className="app-header">
        <h1>Taxes</h1>
        <p className="app-subtitle">Manage tax records with inline editing</p>
      </header>

      {error && <div className="error-banner">{error}</div>}

      {loading ? (
        <div className="center-text">Loading data...</div>
      ) : (
        <DataTable data={taxes} onEdit={handleEditClick} />
      )}

      <EditTaxModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        tax={selectedRow}
        countries={countries}
        onSave={handleSave}
        saving={saving}
      />
    </div>
  );
}
