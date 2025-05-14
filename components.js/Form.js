import { useState } from "react";

function MyForm() {
//   const [name, setName] = useState("");
//   const [age, setage] = useState("");
//   const [email, setemail] = useState("");

     const[inputs,setInputs]=useState({phone:"+91",email:"gmail.com",country:"india",about:"i am a student"});

  function handleSubmit(e) {
    e.preventDefault();
    console.log('form submitted!');
    // console.log('current state', name,age,email);
    console.log('current state', inputs);
  }

  function handlechange(e){
    const name=e.target.name
    const value=e.target.value

    setInputs((previousState)=>{return{...previousState,[name]:value}})
  }

  return (
    <form onSubmit={handleSubmit}>
      
      <label> Enter your name:<input type="text" name="name" onChange={handlechange}/></label><br/>
       <label> Enter your age:<input type="text" name="age"  onChange={handlechange}/></label><br/>
       <label> Enter your email:<input type="text" name="email" onChange={handlechange}value={inputs.email}/></label><br/>
       <label> Enter your phone no:<input type="text" name="phone" onChange={handlechange} value={inputs.phone}/></label><br/>
       <label> Enter your country name:
     <select name="country" onChange={handlechange} value={inputs.country}>
        <option value="">select</option>
        <option value="australia">australia</option>
        <option value="india">india</option>
        <option value="united states">united states</option>
     </select></label>
     <label> Enter about you:<textarea name="about"value={inputs.about} onChange={handlechange}>i am a student</textarea></label><br/>
       
       <input type="submit" value="submit Form" />
    
    </form>
  );
}

export default MyForm;
