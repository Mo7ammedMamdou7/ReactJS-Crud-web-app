import React from 'react';
import './Form.css';

const Form = (props) => {
    const {handelChange , addCourse , current} = props;
    return(
        <div>
            <form onSubmit={addCourse}>
                <input type="text" value={current} placeholder="Type your course name" onChange={handelChange}/>
                <button type="submit">Add Course</button>
            </form>
        </div>
    )
}

export default Form;