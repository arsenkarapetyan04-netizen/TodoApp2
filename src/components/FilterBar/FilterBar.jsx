export default function FilterBar({ filter, onFilterChange, searchTerm, onSearchChange }) {
    const filters = [
      { value: "all", label: "all" },
      { value: "active", label: "active" },
      { value: "completed", label: "completed" }
    ];
  
    return (
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px", alignItems: "center" }}>
        <input
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="🔍 Поиск..."
          style={{ flex: 1, padding: "8px 12px", borderRadius: "20px", border: "1px solid #ddd" }}
        />
        {filters.map(f => (
          <button
            key={f.value}
            onClick={() => onFilterChange(f.value)}
            style={{
              padding: "6px 16px", borderRadius: "20px", border: "none", cursor: "pointer",
              background: filter === f.value ? "#2196F3" : "#e0e0e0",
              color: filter === f.value ? "white" : "#333"
            }}
          >
            {f.label}
          </button>
        ))}
      </div>
    );
}