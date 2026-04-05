export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer style={{
        marginTop: "40px",
        padding: "20px",
        textAlign: "center",
        borderTop: "1px solid #e0e0e0",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: "16px",
        color: "white",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.1)"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "12px",
          flexWrap: "wrap"
        }}>
          <span>📝 Todo App</span>
          <span>✨ Productivity</span>
          <span>🎯 Goals</span>
        </div>
        
        <p style={{ margin: "5px 0", fontSize: "14px", opacity: 0.9 }}>
          Сделано с ❤️ для продуктивной жизни
        </p>
        
        <p style={{ margin: "5px 0", fontSize: "12px", opacity: 0.7 }}>
          © {currentYear} Todo App. Все права защищены.
        </p>
      </footer>
    );
  }