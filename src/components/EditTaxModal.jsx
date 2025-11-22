import { useEffect, useState } from "react";

export default function EditTaxModal({
  isOpen,
  onClose,
  tax,
  countries,
  onSave,
  saving,
}) {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  // When a new row is selected, fill the form with its values
  useEffect(() => {
    if (tax) {
      setName(tax.name || "");
      setCountry(tax.country || "");
    }
  }, [tax]);

  // If modal is closed or no tax selected, render nothing
  if (!isOpen || !tax) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (!name.trim() || !country) return;

    // send only updated fields up to parent (App.jsx)
    onSave({
      name: name.trim(),
      country,
    });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Edit Tax</h2>
          <button className="icon-button" onClick={onClose} type="button">
            ✖
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-body">
          <div className="form-group">
            <label htmlFor="tax-name">Name</label>
            <input
              id="tax-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="tax-country">Country</label>
            <select
              id="tax-country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Select country</option>
              {countries.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn-secondary"
              onClick={onClose}
              disabled={saving}
            >
            Cancel
            </button>
            <button type="submit" className="btn-primary" disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}