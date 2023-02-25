const Item = ({ todo, handleDeleteTodo, handleOnComplete, handleEdit }) => {
  return (
    <div className="drop-shadow-md h-14 bg-slate-200 mb-5">
      <div className="flex align-center justify-between p-4 gap-5 w-[19rem] md:w-[26rem]">
        <div className="flex gap-5">
          <span
            className="material-symbols-outlined scale-125 text-teal-500 cursor-pointer"
            onClick={() => handleOnComplete(todo)}
          >
            check_box_outline_blank
          </span>
          <div className="">
            <p>{todo.todo}</p>
          </div>
        </div>
        <div className="flex gap-5">
          <span
            className="material-symbols-outlined scale-125 text-orange-500 cursor-pointer"
            onClick={() => handleEdit(todo)}
          >
            edit
          </span>
          <span
            className="material-symbols-outlined scale-125 text-green-500 cursor-pointer"
            onClick={() => handleDeleteTodo(todo)}
          >
            delete
          </span>
        </div>
      </div>
    </div>
  );
};

export default Item;
