import React from 'react'
import "../App.css"
import { MdClose } from 'react-icons/md'

const Formtable = ({handleSubmit,handleOnChange,handleclose,rest}) => {
  return (
    <div className="addContainer">
            <form onSubmit={handleSubmit}>
            <div className="close-btn" onClick={handleclose}><MdClose/></div>
              <label htmlFor="name">Title : </label>
              <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.name}/>
              <label htmlFor="body">Body : </label>
              <input type="text" id="body" name="body" onChange={handleOnChange} value={rest.body}/>

              <button className="btn">Submit</button>
            </form>
    </div>
  )
}

export default Formtable