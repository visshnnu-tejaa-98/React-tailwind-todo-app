import { useState } from "react";
import Container from "./Container";
import Form from "./Form";
import Navbar from "./Navbar";

const LandingPage = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [btnLabel, setBtnLabel] = useState("Add");
  const [selectedTodo, setSelectedTodo] = useState({});
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.length) {
      let todoObj = {
        id: `${Math.random()}`,
        todo: input,
        completed: false,
      };
      setTodos([...todos, todoObj]);
      setBtnLabel("Add");
      setInput("");
    }
  };
  const handleDeleteTodo = (todo) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };
  const handleOnComplete = (todo) => {
    console.log("Hello");
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return { ...t, completed: !t.completed };
        }
        return t;
      })
    );
  };
  const handleEdit = (item) => {
    setInput(item.todo);
    setSelectedTodo(item);
    setBtnLabel("Edit");
  };

  const handleEditTodo = (e) => {
    console.log(e);
    e.preventDefault();
    if (input.length) {
      setTodos(
        todos.map((item) => {
          if (item.id === selectedTodo.id) {
            return { ...item, todo: input };
          }
          return item;
        })
      );
      setInput("");
      setBtnLabel("Add");
    }
  };

  return (
    <div className="mx-[5%] md:mx-[15%]">
      <Navbar />
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        btnLabel={btnLabel}
        handleAddTodo={handleAddTodo}
        handleEditTodo={handleEditTodo}
      />
      <Container
        todos={todos}
        setTodos={setTodos}
        handleDeleteTodo={handleDeleteTodo}
        handleOnComplete={handleOnComplete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default LandingPage;
