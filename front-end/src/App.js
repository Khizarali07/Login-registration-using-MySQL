import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [fname,setfname] = useState("");
  const [lname,setlname] = useState("");
  const [email,setemail] = useState("");
  const [username,setusername] = useState("");
  const [pass,setpass] = useState("");

  const [user,setUser] = useState("");
  const [password,setPassword] = useState("");

  function handleSubmit1 (event){
    event.preventDefault();
    axios.post('http://localhost:3000/register',{fname,lname,email,username,pass});
  }
  function handleSubmit2 (event){
    event.preventDefault();
    axios.post('http://localhost:3000/login',{user,password});
  }
  return (
  <>
  <div id='body'>
  <div id='option'>
    <div id='opt1' onClick={login}>Login</div>
    <div id='opt2' onClick={register}>Registration</div>
  </div>

  <div id='box1'>
    <form onSubmit={handleSubmit1}>
      <fieldset id='form1'>
        <label className='one'>
        <p>Enter your first name :</p><input type='text' className='input' value={fname} onChange={e=> setfname(e.target.value)}/>
        </label>
        <label className='one'>
        <p>Enter your last name :</p><input type='text' className='input' value={lname} onChange={e=> setlname(e.target.value)}/>
        </label>
        <label className='one'>
        <p>Enter your Email :</p><input type='email' className='input' value={email} onChange={e=> setemail(e.target.value)}/>
        </label>
        <label className='one'>
        <p>Enter your User-Name :</p><input type='text' className='input' value={username} onChange={e=> setusername(e.target.value)}/>
        </label>
        <label className='one'>
        <p>Enter your password :</p><input type='password' className='input' value={pass} onChange={e=> setpass(e.target.value)}/>
        </label>
        <label className='one'>
        <input type='submit' id='input'/>
        </label>
      </fieldset>
    </form>
  </div>

  <div id='box2'>
    <form onSubmit={handleSubmit2}>
      <fieldset id='form2'>
        <label className='one'>
        <p>Enter your User-Name :</p><input type='text' className='input' value={user} onChange={e=> setUser(e.target.value)}/>
        </label>
        <label className='one'>
        <p>Enter your password :</p><input type='password' className='input' value={password} onChange={e=> setPassword(e.target.value)}/>
        </label>
        <label className='one'>
        <input type='submit' id='input'/>
        </label>
      </fieldset>
    </form>
    </div>
  </div>
  </>
  );
}

export default App;

function login (){
  let x = document.getElementById("box1");
  let y = document.getElementById("box2");
  y.style.display='contents';
  x.style.display='none';
}
function register (){
  let x = document.getElementById("box1");
  let y = document.getElementById("box2");
  x.style.display='contents';
  y.style.display='none';
}