
import './inputForm.css'
import { useRef } from 'react';
const InputForm = (props)=>{
    const title = useRef()
    const text = useRef()
    const date = useRef()
    const addMovie = ()=>{
        props.onAddMovie({
            title: title.current.value,
            openingText : text.current.value,
            releaseDate : date.current.value
        })
      
    }
    return (
        <div className='formContainer'>
            <label>Title</label>
            <input type={'text'} ref={title}/>
            <label>Opening Text</label>
            <input type={'text'} ref={text}/>
            <label>Release Date</label>
            <input type={'text'} ref={date}/>
            <button onClick={addMovie}>Add Movie</button>
        </div>
    );
}
export default InputForm