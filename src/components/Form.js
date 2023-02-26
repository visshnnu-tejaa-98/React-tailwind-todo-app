const Form = ({ input, setInput, btnLabel, handleAddTodo, handleEditTodo }) => {
  return (
    <div className="mx-10 flex justify-center md:mx-0 drop-shadow-lg">
      <form>
        <div className="flex items-center font-semibold">
          <input
            type="text"
            placeholder="Add Todo"
            className="h-12 w-60 focus:outline-none bg-slate-200 text-slate-600 md:h-12 md:w-80 p-2"
            value={input || ""}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="h-12 w-24 focus:outline-none text-neutral-700 md:h-12 md:w-32 bg-teal-400 hover:bg-teal-500"
            onClick={
              btnLabel === "Add" ? handleAddTodo : (e) => handleEditTodo(e)
            }
          >
            {btnLabel}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
