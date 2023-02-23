import { useState } from 'react';
import './inputForm.css'
const InputForm = ()=>{
    const [title,setTitle]=useState('')
    const [text,setText]=useState('')
    const [date,setDate]=useState('')
    const titleHandler = (e)=>{
        
        setTitle(e.target.value)
    }
    const textHandler = (e)=>{
        setText(e.target.value)
    }
    const dateHandler = (e)=>{
        setDate(e.target.value)
    }
    const addMovie = ()=>{
        console.log({
            Title: title,
            Opening_Text : text,
            Release_Date : date
        })
    }
    return (
        <div className='formContainer'>
            <label>Title</label>
            <input type={'text'} value={title} onChange={titleHandler}/>
            <label>Opening Text</label>
            <input type={'text'} value={text} onChange={textHandler}/>
            <label>Release Date</label>
            <input type={'text'} value={date} onChange={dateHandler}/>
            <button onClick={addMovie}>Add Movie</button>
        </div>
    );
}
export default InputForm