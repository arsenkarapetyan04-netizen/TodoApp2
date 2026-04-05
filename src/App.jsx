import './App.css'
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import FilterBar from './components/FilterBar/FilterBar';
import Footer from './components/Footer/Footer';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }

    return [
      {id: 1, text: "Изучить основы React", completed: true, priority: "high"},
      {id: 2, text: "Сделать todo приложение", completed: false, priority: "high"},
      {id: 3, text: "Изучить хуки", completed: false, priority: "medium"}
    ];
  });

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const stats = {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    active: todos.filter(t => !t.completed).length,
  }

  const filteredTodos = todos.filter(todo => {
    const matchesFilter = filter === "all" ? true : filter === "active" ? !todo.completed : todo.completed;
    const matchesSearch = todo.text.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const addTodo = (text, priority) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
      priority: priority
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, text: newText} : todo));
  }

  return(
    <div style={{maxWidth: "600px", margin: "0 auto", padding: "20px"}}>
      <Header stats={stats}/>
      <TodoForm onAdd={addTodo}/>
      <FilterBar filter={filter} onFilterChange={setFilter} searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} onEdit={editTodo}/>
      <Footer/>
    </div>
  )
}

export default App