import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";

const Table = ({ setId, setTodoValues }) => {
  const [todos, setTodos] = useState([]);
  const clickHandle = row => {
    setId(row.userId);
    setTodoValues({ id: row.id, title: row.title });
  };
  const columns = [
    { title: "ToDo_ID", field: "id" },
    { title: "Title", field: "title" },
    {
      title: "Status",
      field: "completed"
    },
    {
      title: "Action",
      render: row => (
        <button className="profileBtn" onClick={() => clickHandle(row)}>
          view profile
        </button>
      )
    }
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => setTodos(data));
  }, [todos]);
  return (
    <>
      <MaterialTable
        columns={columns}
        data={todos}
        title="Todos"
        options={{
          pagging: false
        }}
      />
    </>
  );
};
export default Table;
