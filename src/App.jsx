import { useState } from "react";
import CreateCategoryModal from "./components/CreateCategoryModal";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: 30 }}>
      <button onClick={() => setOpen(true)}>Open modal</button>

      {open && <CreateCategoryModal onClose={() => setOpen(false)} />}
    </div>
  );
}
