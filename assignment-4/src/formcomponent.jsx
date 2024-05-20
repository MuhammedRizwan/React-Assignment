import React,{useState,useRef} from 'react'

const Formcomponent = () => {
    const [inputValue,setinputvalue]=useState('');
    const [isValid,setIsValid]=useState(true);
    const inputRef=useRef();
    const nameRegex=/^[a-zA-z\s]+$/;

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(!nameRegex.test(inputValue)){
            setIsValid(false);
            return;
        }
        if(!nameRegex.test(inputRef.current?.value)){
            setIsValid(false);
            return;
        }
        console.log("Controlled input values :",inputValue);
        console.log("uncontrolled input value :",inputRef.current.value);
    }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name :</label>
        <input type="text" ref={inputRef} id='name' value={inputValue} onChange={(e)=>setinputvalue(e.target.value)}
        style={{borderColor:isValid?'green':'red',}}/>
        <br />
        <input type="submit" value="submit" />
    </form>
  )
}

export default Formcomponent
