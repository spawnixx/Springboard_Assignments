import { useState } from "react";
import "./ItemForm.css";
export default function ItemForm({ onSubmit }) {
  const INITIAL_STATE = {
    name: "",
    qty: "",
    purpose: "",
    confirmation: false,
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});

  function validateForm() {
    const newErrors = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.qty) newErrors.qty = true;
    if (isNaN(formData.qty)) newErrors.qty = true;
    if (!formData.purpose) newErrors.purpose = true;
    if (!formData.confirmation) newErrors.confirmation = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      const newItem = {
        ...formData,
        id: formData.name,
      };
      onSubmit(newItem);
      setFormData(INITIAL_STATE);
      setErrors({});
    }
  };

  return (
    <div>
      <h2>Add a piece of equipment</h2>

      <form className="item-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        {errors.name && (
          <span className="error" style={{ color: "red" }}>
            Name is required.
          </span>
        )}
        <div>
          <input
            type="text"
            id="qty"
            name="qty"
            placeholder="quantity"
            value={formData.qty}
            onChange={handleChange}
          />
          {errors.qty && (
            <span className="error" style={{ color: "red" }}>
              Quantity is required and must be a number.
            </span>
          )}
        </div>
        <div>
          <input
            type="text"
            id="purpose"
            name="purpose"
            placeholder="purpose"
            value={formData.purpose}
            onChange={handleChange}
          />
          {errors.purpose && (
            <span className="error" style={{ color: "red" }}>
              Purpose is required for approval.
            </span>
          )}
        </div>

        <div className="confirmation-row">
          <label htmlFor="confirmation">
            I confirm that this item is necessary for the mission:
          </label>
          <input
            type="checkbox"
            id="confirmation"
            name="confirmation"
            checked={formData.confirmation}
            onChange={handleChange}
          />
          {errors.confirmation && (
            <span className="error" style={{ color: "red" }}>
              You must confirm that this item is necessary for the mission.
            </span>
          )}
        </div>
        <div>
          <button type="submit" disabled={!formData.confirmation}>
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}
