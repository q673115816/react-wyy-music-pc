import React, {useState} from 'react';
import {useQuery} from "react-query";
import {get} from "@/api/request";

const fetchTodo = async () => {
  return await get('http://localhost:1234/')
}

export default () => {
  const { data } = useQuery('todo', fetchTodo)

  return (
    <div>
      <button type={"button"}>send</button>
      <div>hello world!</div>
    </div>
  )
}
