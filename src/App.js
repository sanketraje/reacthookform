import React from "react";
import './App.css';
import {useForm} from 'react-hook-form';

function App() {
  const {register, handleSubmit, errors} = useForm();

  const onSubmit=(data)=>{
   console.log(data)
  }

  return (
    <center>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Email" name="email" ref={register} /><br></br><br/>
      <input type="password" placeholder="Password" name="pass" ref={register({required:true})} /><br></br><br/>
      {errors.pass && <p>Password is invalid</p>}
      <input type="submit" />
    </form>
    </center>

  );
}

export default App;
