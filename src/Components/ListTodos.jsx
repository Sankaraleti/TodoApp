import React from "react";

import Table from "./Table.jsx";
const ListTodos = () => {
  // const data = [];
  // const [todos, setTodos] = useState("");
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then(response => response.json())
  //     .then(data => setTodos(data));
  //   console.log(todos);
  // }, [todos]);
  return (
    <div className="Todo-container">
      <div className="todos">
        <Table />
      </div>
      <div className="user-profile">
        <h1>user profile goes here </h1>
      </div>
    </div>
  );
};

export default ListTodos;
