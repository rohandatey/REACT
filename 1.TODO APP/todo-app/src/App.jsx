import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  const [desc, setDesc] = useState("");

  const [mainTask, setMainTask] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(title, desc);

    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  };

  let renderTask = <h2>No Task Now</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, idx) => {
      return (
        <li key={idx} className="flex items-center justify-between">
          <div className="flex justify-between mb-5 w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(idx);
            }}
            className="bg-red-500 text-white px-4 py-2 rounded font-bold">
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-4 text-2xl text-center font-bold">
        TODO APP
      </h1>

      <form onSubmit={SubmitHandler}>
        <input
          className="px-4 py-2 m-8 border-zinc-700 border-2 "
          type="text"
          placeholder="enter you title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);}}/>

        <input
          className="px-4 py-2 m-8 border-zinc-700 border-2 "
          type="text"
          placeholder="enter you description"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />

        <button className="bg-black text-white px-3 py-3 text-2xl font-bold rounded-xl cursor-pointer">
          Add task
        </button>
      </form>

      <hr />

      <div className="bg-slate-200 p-8">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default App;
