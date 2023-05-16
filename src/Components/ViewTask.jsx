import React, { useEffect, useState, useTransition } from "react";
import { redirect, useParams } from "react-router-dom";

const ViewTask = () => {
  const [api, setApi] = useState();
  const [inputValue, setInputValue] = useState();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/todo/${id}`);
        const data = await response.json();

        setApi(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const deleteTask = async () => {
    try {
      const response = await fetch(`http://localhost:5000/todo/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      });
      const data = await response.json();

      setApi(data);
    } catch (err) {
      console.log(err);
    }
  };

  const onClick = () => {};

  const editTask = async () => {
    try {
      const response = await fetch(`http://localhost:5000/todo/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ task: inputValue }),
      });
      const data = await response.json();

      setApi(data);
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <p>{api?.task}</p>
      <p>{api?.date}</p>
      <button onClick={onClick}>delete</button>
      <form onSubmit={editTask}>
        <input type="text" onChange={onChange} />
        <button type="submit">edit</button>
      </form>
    </div>
  );
};

export default ViewTask;
