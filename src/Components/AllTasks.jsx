import React, { useEffect, useState } from "react";
import Create from "./Create";
import { Link } from "react-router-dom";
import ViewTask from "./ViewTask";

const AllTasks = () => {
  const [task, setTask] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/todo");
        const data = await response.json();

        setTask(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {task?.map((task) => (
        <div key={task._id}>
          <p>{task.task}</p>
          <p>{task.date}</p>
          <Link to={task._id}>
            <p>view</p>
          </Link>
        </div>
      ))}
      <Create setTask={setTask} task={task} />
    </div>
  );
};

export default AllTasks;
