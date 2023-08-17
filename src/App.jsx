import React, { createContext, useEffect, useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TodoForm from './components/TodoForm';
import Show from './components/Show';
export const contextApi = createContext()

const App = () => {

  const [todoData, setTodoData] = useState([])
  const [copyTodoData,setCopyTodoData] = useState([])

  useEffect(()=>{
    let localData=JSON.parse(localStorage.getItem("todoData"))
    if(localData){
      setTodoData(localData)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todoData",JSON.stringify(todoData))
  },[todoData])

  return (
    <>
      <contextApi.Provider value={{ todoData, setTodoData,copyTodoData,setCopyTodoData }}>
        <TodoForm />
        <Show />
      </contextApi.Provider>
    </>
  )
}

export default App