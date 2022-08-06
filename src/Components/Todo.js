import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const Add = (e) => {
    if (task !== "") {
      const taskDetail = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false
      };
      if (taskList.length === 0) {
        setTaskList([...taskList, taskDetail]);
        return;
      }
      var flag = 0;

      for (const t of taskList) {
        if (t.value === task) {
          flag = 1;
          alert("This task is not completed yet!!");
          break;
        }
      }
      if (flag === 1) {
        setTaskList([...taskList]);
      } else {
        setTaskList([...taskList, taskDetail]);
      }
    }
  };

  const Del = (e, id) => {
    setTaskList(taskList.filter((t) => t.id !== id));
  };

  const completed = (e, id) => {
    const element = taskList.findIndex((elem) => elem.id === id);
    const newTaskList = [...taskList];

    //edit our element
    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true
    };

    setTaskList(newTaskList);
  };

  return (
    <div className="todo">
      <input
        name="text"
        id="text"
        placeholder="Add Task"
        type="text"
        onChange={(e) => handleChange(e)}
      />
      <button className="add-btn" onClick={(e) => Add(e)}>
        Add
      </button>
      <br />
      {taskList !== [] ? (
        <ul>
          {taskList.map((t) => (
            <div>
              <li className={t.isCompleted ? "crossText" : "listitem"}>
                {t.value}
                <button
                  className="completed"
                  onClick={(e) => completed(e, t.id)}
                >
                  completed
                </button>
                <button className="delete" onClick={(e) => Del(e, t.id)}>
                  Del
                </button>
              </li>
              <br />
            </div>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Todo;
