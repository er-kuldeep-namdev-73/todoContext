import React, { useState,useContext } from 'react'
import { Button, Input, MenuItem, Select } from '@mui/material'
import { v4 as uuid } from 'uuid';
import { contextApi } from '../App';

const TodoForm = () => {

  const { todoData, setTodoData,copyTodoData,setCopyTodoData } = useContext(contextApi)

  const [formData, setFormData] = useState({
    title: "",
    priority: "select",
    status: false
  })
  const [valid, setValid] = useState(false)
  let id = uuid()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, id: id })
    setCopyTodoData({...copyTodoData,[e.target.name]:e.target.value,id:id})
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (formData.priority === "select") {
      setValid(true)
      return;
    }
    else {
      setTodoData([...todoData, formData])
      setCopyTodoData([...copyTodoData,formData])
    }
    setFormData({
      title: "",
      priority: "select",
      status: false
    })
    e.target.reset();
    setValid(false)
  }

  return (
    <div className='w-50'>
      <form className='form-control w-50 m-5 p-3 bg-light' onSubmit={handleSubmitForm}>
        <label>Add TodoName* :- </label>
        <Input type='text' placeholder='Enter todo Name' className='w-100 my-3' name="title" onChange={(e) => handleChange(e)} required />
        <label>Priority* :- </label>
        <Select className='w-100 mb-3' value={formData.priority} defaultValue={"select"} onChange={handleChange} name="priority" title="Please Select this field">
          <MenuItem value={"select"} disabled>--Please Select Priority---</MenuItem>
          <MenuItem className='text-danger' value={"high"}>High</MenuItem>
          <MenuItem className='text-warning' value={"medium"}>Medium</MenuItem>
          <MenuItem className='text-success' value={"low"}>Low</MenuItem>
        </Select>
        {valid && <p style={{color:"red"}}>Please Select Priority</p>}
        <Button variant='contained' className='w-100' color='success' type="submit">Add Item</Button>
      </form>
    </div>
  )
}

export default TodoForm;