import React, { useState } from "react";
import AppLayout from "../components/Layout";
import AppTable from "../components/Table";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "4",
    name: "White Joe",
    age: 48,
    address: "London Square Time",
    tags: ["Smart", "Childern"],
  },
  {
    key: "5",
    name: "Joliender",
    age: 58,
    address: "London",
    tags: ["Smart", "Childern"],
  },
  {
    key: "6",
    name: "Andrei",
    age: 35,
    address: "London Usa",
    tags: ["Smart", "Childern"],
  },
];

const Users = () => {
  const [page, setPage] = useState(0);
  const paginatedArray = () => {
    let arr = [];
    let chunk = 1;
    for (var i = 0; i < data.length; i += chunk) {
      arr.push(data.slice(i, i + chunk));
    }
    console.log(arr);
    return arr;
  };
  //single data rendering paginatio logic
  //   for (var i = 0; i < data.length; i++) {
  //     let temp = [];
  //     for (var j = 0; j < 1; j++) {
  //       temp.push(data[i]);
  //     }
  //     arr.push(temp);
  //   }
  //   return arr;
  // };
  return (
    <>
      <AppLayout>
        <h1>Users</h1>;
        <AppTable data={paginatedArray()[page]} />
        <div>
          {paginatedArray().map((v, i) => (
            <button onClick={() => setPage(i)} key={i}>
              {i + 1}
            </button>
          ))}
        </div>
      </AppLayout>
      <div>
        <h1>Hello</h1>
      </div>
    </>
  );
};

export default Users;
