import "./App.css";
import TodoItem from "./components/learn_code_tokyo/todoItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoItem title="Learn Code" />
        <TodoItem title="Todo" />
        <TodoItem title="GoodLuck" />
      </header>
    </div>
  );
}

export default App;
