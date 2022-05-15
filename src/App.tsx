import React, {useState} from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { ItemsProps } from './interfaces/Items';


function loadTasks(): ItemsProps["items"] {
  // fetch from localStorage
  const tasksJSON = localStorage.getItem("Items");
  // check if localStorage returns null
  if (tasksJSON == null) return []
  // force JSON.parse to parse to an array of tasks
  return JSON.parse(tasksJSON)
}



function App() {

  const [items, setItems] = useState<ItemsProps["items"]>(loadTasks())

  return (
    <div className="App">
      <Header />
      <section className="section">
        <TodoForm
          items={items}
          setItems={setItems}
        />
        <TodoList
          items={items}
          setItems={setItems}
        />
      </section>
      <Footer />
    </div>
  );
}

export default App;
