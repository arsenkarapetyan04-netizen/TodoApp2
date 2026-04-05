import { useState } from "react"; 

export default function TodoItem({todo, onToggle, onDelete, onEdit}){
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const priorityColors = {high: "#f44336", medium: "#FF9800", low: "#4CAF50"};
  const priorityLabels = {high: "high", medium: "medium", low: "low"}; 

  const handleSave = () => {
    if(editText.trim()) {
      onEdit(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  return(
    <div style={{display: "flex", alignItems: "center", gap: "12px", padding: "12px", borderBottom: "1px solid #f0f0f0", background: todo.completed ? "#fafafa" : "white"}}>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} style={{width: "20px", height: "20px"}}/>
      <span style={{width: "8px", height: "8px", borderRadius: "50%",background: priorityColors[todo.priority]}} title={priorityLabels[todo.priority]}/>
    
      {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
            onBlur={handleSave}
            autoFocus
            style={{ flex: 1, padding: "4px 8px", fontSize: "16px" }}
          />
        ) : (
          <span
            onDoubleClick={() => setIsEditing(true)}
            style={{ flex: 1, textDecoration: todo.completed ? "line-through" : "none", color: todo.completed ? "#999" : "#333", cursor: "pointer", fontSize: "16px" }}
          >
            {todo.text}
          </span>
        )}
  
        <button onClick={() => setIsEditing(true)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "18px" }}>✏️</button>
        <button onClick={() => onDelete(todo.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "18px" }}>🗑️</button>
    </div>
  )
}