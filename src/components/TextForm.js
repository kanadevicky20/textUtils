import React, { useState } from 'react'

export default function TextForm(props) {

  const [text, setText]=useState('');
  
  const changeUpCase=()=>{
   console.log(text);
   let newText=text.toUpperCase();
   setText(newText);   
  }
  const changeLowCase=()=>{
    setText(text.toLowerCase());
  }
  const clearText=()=>{
    setText('');
  }
  const copyText=()=>{
    var text = document.getElementById('mybox');
   text.select();
   navigator.clipboard.writeText(text.value)
   alert("Text Copied...");
   
  }


  const handleChange=(event)=>{
    // console.log("onChanged..."); 
    setText(event.target.value);    
  }

  return (<>
    <div>
        <h2>{props.heading}</h2>
<div className="my box mb-3" >
  {/* <label for="exampleFormControlTextarea1" className="form-label">Text Area..</label> */}
  <textarea className="form-control" value={text} onChange={handleChange} id="mybox" rows="3" placeholder='Enter Text Here...'></textarea>
</div>
<button className='btn-primary mx-2' onClick={changeUpCase}>Uper-Case</button>
<button className='btn-primary mx-2' onClick={changeLowCase}>Lowr-Case</button>
<button className='btn-primary mx-2' onClick={clearText}>Clear-Text</button>
<button className='btn-primary mx-2' onClick={copyText}>Copy-Text</button>

    </div>
    <div className='mb-3'>
      <h2>Your Text Summary...</h2>
      <h6>No. of Character in - {text.length} and Words - {text.split(/\s+/).length} in "{text}"</h6>
    </div>
    <div>
    </div>
    </>
  )
}
