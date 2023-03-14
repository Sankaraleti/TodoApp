import React from "react";
import MaterialTable from "material-table";

const Table = () => {
  const columns = [
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Status", field: "status" },
    { title: "Action" }
  ];
  const data = [{ name: "sankar", email: "sankar@gmail.com" }];
  return (
    <>
      <MaterialTable columns={columns} data={data} title="Todos" />
    </>
  );
};
export default Table;
