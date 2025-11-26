import { useState } from "react";

export default function CreateCategoryModal({ onClose }) {
  const [value, setValue] = useState("");

  const handleCreate = () => {
    alert("Created: " + value);
    onClose();
  };

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.35)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{ background: "#fff", padding: 20, borderRadius: 6 }}>
        <h2>Create category</h2>

        <input
          style={{ width: "100%", padding: 8 }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {/* ← БАГ: кнопка всегда активна */}
        <button
          onClick={handleCreate}
          style={{ marginTop: 10, padding: "8px 16px" }}
          disabled={value.trim().length < 3}
        >
          Create
        </button>

        <button
          onClick={onClose}
          style={{ marginLeft: 10, padding: "8px 16px" }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
