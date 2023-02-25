import { useState } from "react";
import Container from "./Container";
import Form from "./Form";
import Navbar from "./Navbar";

const LandingPage = () => {
  const [todos, setTodos] = useState([
    {
      id: "1",
      todo: "Buy Milk",
      status: "active",
      edit: false,
    },
    {
      id: "2",
      todo: "Buy Eggs",
      status: "active",
      edit: false,
    },
  ]);
  const [todo, setTodo] = useState("");
  const [btnLabel, setBtnLabel] = useState("Add");
  const handleAddTodo = (e) => {
    e.preventDefault();
    let todoObj = {
      id: `${Math.random()}`,
      todo: todo,
      status: "active",
      edit: false,
    };
    setTodos([...todos, todoObj]);
    setBtnLabel("Add");
    setTodo("");
  };
  const handleDeleteTodo = (todo) => {
    todos.forEach((t) => {
      if (t.id === todo.id) {
        todo.status = "deleted";
      }
    });
    let filteredTodos = todos.filter((item) => item.id !== todo.id);
    setTodos(filteredTodos);
  };
  const handleOnComplete = (todo) => {
    todos.forEach((t) => {
      if (t.id === todo.id) {
        todo.status = "completed";
      }
    });
    let filteredTodos = todos.filter((item) => item.id !== todo.id);
    setTodos(filteredTodos);
  };
  const handleEdit = (selectedTodo) => {
    setTodo(selectedTodo.todo);
    setBtnLabel("Edit");
    handleDeleteTodo(selectedTodo);
  };

  return (
    <div className="mx-[5%] md:mx-[15%]">
      <Navbar />
      <Form
        todo={todo}
        setTodo={setTodo}
        todos={todos}
        setTodos={setTodos}
        btnLabel={btnLabel}
        handleAddTodo={handleAddTodo}
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
