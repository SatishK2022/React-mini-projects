import { useState } from "react";
import { Link } from "react-router-dom";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = (
    <li className="my-2 bg-white rounded-md py-2 px-5 font-semibold">
      No Task Available
    </li>
  );

  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, i) => {
      return (
        <li
          key={i}
          className="flex items-center justify-between my-2 bg-white rounded-md py-2 px-5"
        >
          <div>
            <h2 className="text-xl font-semibold">{task.title}</h2>
            <h3>{task.desc}</h3>
          </div>
          <button
            onClick={() => deleteHandler(i)}
            className="py-1 px-4 bg-red-500 hover:bg-red-600 text-white rounded"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <div className="h-screen w-full flex flex-col gap-5 items-center justify-start pt-5 bg-gradient-to-r from-[#feada6] to-[#f5efef] dark:bg-gray-800">
      <Link
        className="bg-orange-500 hover:bg-orange-600 text-center px-5 py-2 font-semibold text-white text-lg rounded-md"
        to="/"
      >
        Home
      </Link>

      <div className="w-2/5 shadow-xl rounded-lg border-black flex flex-col items-center justify-center gap-5 bg-white overflow-hidden">
        <h1 className="text-2xl font-bold uppercase bg-orange-500 w-full text-center text-white py-2">
          Todo App
        </h1>
        <form
          onSubmit={submitHandler}
          className="w-full flex flex-col items-center gap-5 p-5"
        >
          <input
            className="outline-none border-b-2 border-gray-800 w-full py-1"
            type="text"
            placeholder="Enter Your Task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="outline-none border-b-2 border-gray-800 w-full py-1"
            type="text"
            placeholder="Enter Task Descripction"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 text-white font-bold uppercase rounded">
            Add Task
          </button>
        </form>
      </div>
      <ul className="w-2/5 rounded-md my-5">{renderTask}</ul>
    </div>
  );
};

export default Todo;
