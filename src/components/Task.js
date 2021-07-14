import React, { useState } from  'react';

const Task = (props) => {
    const { task, index, list, setList } = props;


    const onClick = () => {
        setList(() => {
            return list.filter(task => list.indexOf(task) !== index)
        });
    }

    const onChange = e => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    };


    return(
        <div>
            <h4>{task.name}</h4>
            <div>
                <label htmlFor="checkbox"> Completed? </label>
                <input onChange={onChange} type="checkbox" name="" check="{task.isComplete}"></input>
                <button className="btn btn-sm btn-danger" onClick={onClick}> X </button>
            </div>

        </div>

    );
}

export default Task