import React ,{useState} from "react";
import './App.css'

const App=()=>{
  const [result,setResult]=useState("");
  const clickhandler=(e)=>{
    setResult(result.concat(e.target.value))
  }
  const clear=()=>{
    setResult("");
  }
  const res=()=>{
    setResult(eval(result).toString())
  }
  

  const back=()=>{
    setResult(result.slice(0, -1));

  }



  return(
    <div className="calc">
      <input type="text" placeholder="0" id="answer" value={result}/>
      <input type="button" value="9" className="button" onClick={clickhandler}/>
      <input type="button" value="8"className="button" onClick={clickhandler}/>
      <input type="button" value="7"className="button" onClick={clickhandler}/>
      <input type="button" value="6"className="button" onClick={clickhandler}/>
      <input type="button" value="5"className="button" onClick={clickhandler}/>
      <input type="button" value="4"className="button" onClick={clickhandler}/>
      <input type="button" value="3"className="button" onClick={clickhandler}/>
      <input type="button" value="2"className="button" onClick={clickhandler}/>
      <input type="button" value="1"className="button" onClick={clickhandler}/>
      <input type="button" value="0"className="button" onClick={clickhandler}/>

      <input type="button" value="."className="button" onClick={clickhandler}/>
      <input type="button" value="+"className="button" onClick={clickhandler}/>
      <input type="button" value="-"className="button" onClick={clickhandler}/>
      <input type="button" value="*"className="button" onClick={clickhandler}/>
      <input type="button" value="/"className="button" onClick={clickhandler}/>
      <input type="button" value="%"className="button" onClick={clickhandler}/>
      <input type="button" value="clear"className="button button1" onClick={clear}/>
      <input type="button" value="="className="button button1" onClick={res}/>
      <input type="button" value="BACK"className="button button1" onClick={back}/>
      



    </div>
  )
}

export default App;