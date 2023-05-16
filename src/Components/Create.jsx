import React, { useEffect, useState } from "react";

const Create = ({ task, setTask }) => {
  const [inputValue, setInputValue] = useState();
  const [api, setApi] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/todo");
  //       const data = await response.json();

  //       setApi(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const sendData = async () => {
    try {
      const response = await fetch("http://localhost:5000/todo", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ task: inputValue }),
      });
      const data = await response.json();

      setTask([data, ...task]);

      setApi(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    sendData();
    setInputValue("");
  };

  const onChange = (e) => {
    const input = e.target.value;
    setInputValue(input);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={inputValue} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
