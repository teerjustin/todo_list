import React, { useState } from  'react';

const Input = (props) => {
    console.log(props);
    const { list, setList } = props;
    let task = {
        name:"",
        isComplete: false,
    }

    const onChange = e => {
        task.name = e.target.value;
    }

    const onClick = e => {
        setList([...list, task]);
        e.target.value = "";
        task = "";
    };

    return(
        <div className = "container">
            <input onChange={onChange} type="text" name="task"></input>
            <button className="btn btn-primary btn-block" onClick={onClick}> Add Task</button>
        </div>

    );
}


export default Input