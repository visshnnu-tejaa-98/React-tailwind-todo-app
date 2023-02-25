import Item from "./Item";
const Container = ({
  todos,
  setTodos,
  handleDeleteTodo,
  handleOnComplete,
  handleEdit,
}) => {
  return (
    <div className="flex justify-center">
      {todos.length !== 0 && (
        <div className="bg-slate-800 drop-shadow-md p-5 my-10 max-w-lg max-h-[400px] overflow-auto">
          {todos &&
            todos.map((todo) => (
              <Item
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                todos={todos}
                handleDeleteTodo={handleDeleteTodo}
                handleOnComplete={handleOnComplete}
                handleEdit={handleEdit}
              />
            ))}
          <p className="text-teal-300 text-center">
            {todos.length && `${todos.length} Items`}
          </p>
        </div>
      )}
    </div>
  );
};

export default Container;
