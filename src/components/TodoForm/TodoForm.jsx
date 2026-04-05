import { useState } from "react";

export default function TodoForm({ onAdd }) {
    const [text, setText] = useState("");
    const [priority, setPriority] = useState("medium");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!text.trim()) return;
      onAdd(text.trim(), priority);
      setText("");
      setPriority("medium");
    };
  
    return (
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Что нужно сделать?"
          style={{ flex: 1, padding: "12px", borderRadius: "8px", border: "2px solid #ddd", fontSize: "16px" }}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)} style={{ padding: "8px", borderRadius: "8px" }}>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
        <button type="submit" style={{ padding: "12px 24px", background: "#2196F3", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "16px" }}>
          Добавить
        </button>
      </form>
    );
}