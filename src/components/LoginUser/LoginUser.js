import React, { useState } from 'react'
import './LoginUser.css'

function LoginUser({ onBack, onsubmit }) {
  
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const storeUserIntoLocalStorage = async () => {
    try{
      const response = await fetch(`http://localhost:3000/fitclub/getRegisteredUsers/${formData.name}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if(!response.ok){
        const errorData = await response.json();
        alert("Error: " + errorData.message);
      }
      else{
        const data = await response.json();
        console.log('User fetched successfully for local storage:', data);
        localStorage.setItem('user', JSON.stringify(data));
      }
    }
    catch(error){
      console.error('Error storing user:', error.message);
      alert('Error storing user: ' + error.message);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Formdata: ",formData);
      const response = await fetch('http://localhost:3000/fitclub/loginUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert("Error: " + errorData.message);
      }
      else{
        const data = await response.json();
        console.log('User Login successfully:', data);
        storeUserIntoLocalStorage();
        onsubmit();
        //return data; // Optionally return data if needed
      }
      

    } catch (error) {
      console.error('Error registering user:', error.message);
      alert('Error logging in user: ' + error.message);
    }
  };

  return (
    <div className='LoginForm-container' id='loginform-container'>
      <button className="btn btn-loginback" onClick={onBack}>Back</button>
      <span>Login</span>
      <form action="" className="loginuser-form" onSubmit={handleSubmit}>
        <label htmlFor='name'>Username:</label>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Enter your Name'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Enter your Password'
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type='submit' className="btn btn-loginform">Login</button>
      </form>
    </div>
  )
}

export default LoginUser
