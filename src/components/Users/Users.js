import React from "react";
import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch("https://randomuser.me/api?results=5");
    const data = await res.json();
    setUsers(data);
  };
  return <div></div>;
}

export default Users;
