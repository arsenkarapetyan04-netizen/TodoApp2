import { useState, useEffect } from 'react';
import useToggle from './Hooks/useToggle';

export default function App() {

  const [darkMOde, setDarkMode] = useState(false)
  const modal = useToggle(false);
  const darkMode = useToggle(true);
  const menu = useToggle(false);

  return (
    <div style={{ background: darkMode.value ? "#1a1a1a" : "#fff", color: darkMode.value ? "#fff" : "#333", minHeight: "100vh", padding: "20px" }}>
      <button onClick={darkMode.toggle}>{darkMode.value ? "☀️ Light" : "🌙 Dark"}</button>
      <button onClick={menu.toggle}>{menu.value ? "Close Menu" : "Open Menu"}</button>
      <button onClick={modal.setTrue}>Open Modal</button>

      {menu.value && <nav style={{ padding: "10px", background: "#f0f0f0" }}><p>Menu items here</p></nav>}
      {modal.value && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "white", padding: "30px", borderRadius: "12px", color: "#333" }}>
            <h2>Modal</h2>
            <button onClick={modal.setFalse}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

