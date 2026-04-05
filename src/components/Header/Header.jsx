export default function Header({stats}){
  const progress = stats.total > 0 ? (stats.completed / stats.total) * 100 : 0;

  return(
    <div style={{textAlign: "center", marginBottom: "24px"}}>
      <h1 style={{fontSize: "32px", margin: " 0 0 8px"}}>✅ Todo App</h1>
      <p style={{color: "#666"}}>
          {stats.active} задач осталось • {stats.completed} выполнено
      </p>

      <div style={{background: "#eee", borderRadius: "4px", height: "8px", marginTop: "8px"}}>
          <div style={{width: `${progress}%`, height: "100%", background: "#4CAF50", borderRadius: "4px", transition: "width 0.3s"}}></div>
      </div>
    </div>
  )
}


