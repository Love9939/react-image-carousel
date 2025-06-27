import { useEffect, useState } from "react";

const useFetch = () => {
  const [users, setUsers] = useState("");
  

  const userInfo = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = data.json();
    console.log(json);
    setUsers(json);
    
  };
  useEffect(() => {
    userInfo();
  }, []);
  return { users };
};

export default useFetch;
