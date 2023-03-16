import React,{useState,useEffect,useRef} from "react"

function TodoForms(props){
    const [input,setInput]=useState(props.edit?props.edit.value:'');

    const inputRef=useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    })

    const handleChange=e=>{
        setInput(e.target.value);
    }

    const handleSubmit=e=>{
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text:input
        });

        setInput('');
    };
    return(
        <form className="todo-form" onSubmit={handleSubmit}>
           {props.edit ? (<><input type="text" name="text" placeholder="Update your item" value={input} className="todo-input edit" onChange={handleChange} ref={inputRef} />
            <button className="todo-button edit">Update</button></>
       ):(    <> <input type="text" name="text" placeholder="Add a todo" value={input} className="todo-input" onChange={handleChange} ref={inputRef} />
       <button className="todo-button">Add todo</button></>
  )}
           
       
            </form>
    )
}
export default TodoForms