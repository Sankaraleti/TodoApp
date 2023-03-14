import React, { useState } from "react";
import Table from "./Table.jsx";
import UserProfile from "./UserProfile.jsx";

const ListTodos = () => {
  const [id, setId] = useState("");
  const [todoValues, setTodoValues] = useState("");
  // console.log(id);
  return (
    <div className="Todo-container">
      <div className="todos">
        <Table setId={setId} setTodoValues={setTodoValues} />
      </div>
      <div className="user-profile">
        {id > 0 && <UserProfile id={id} todoValues={todoValues} />}
      </div>
    </div>
  );
};

export default ListTodos;
