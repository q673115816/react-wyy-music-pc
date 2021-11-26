import React, { memo, useState } from "react";
import { useQuery } from "react-query";
import { get } from "@/api/request";
import axios from "axios";

const sleep = (delay = 3000) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay);
  });

const fetchTodo = async () => {
  await sleep();
  return await fetch(
    "http://localhost:3000/login/status?timestamp=1631862644619",
    { mode: "cors" }
  ).then((res) => res.json());
};

export default memo(() => {
  console.log("Love");
  const { data, isLoading, status, isError, isSuccess } = useQuery(
    "todo",
    fetchTodo
  );
  console.log(data);
  return (
    <div>
      <button type={"button"}>send</button>
      {isLoading && <div>loading</div>}
      {isSuccess && <div>hello world!</div>}
    </div>
  );
});
