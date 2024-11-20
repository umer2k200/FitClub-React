import React, {useState, useEffect} from 'react';
import './MyAccount.css'

function MyAccount({onBack}) {
  const storedUser = localStorage.getItem('user');
  const initialFormData = {
    name: '',
    email: '',
    password: '',
    age: '',
    bodyWeight: '',
    height: '',
    goal: 'Gain'
  };
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (storedUser && storedUser.length>0) {
      const user = JSON.parse(storedUser)[0];
      setFormData(prevFormData => ({
        ...prevFormData,
        name: user.name,
        email: user.email,
        password: user.password,
        age: user.age,
        bodyWeight: user.bodyWeight,
        height: user.height,
        goal: user.goal
      }));
    }
  }, [storedUser]);

  const handleChange = (e) => {
    console.log("formdata in myaccount: ",formData);
    console.log("formdata in localstorage: ",localStorage.getItem('user'));
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await fetch(`http://localhost:3000/fitclub/updateUser/${formData.name}`, {
        method: 'PUT',
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
        console.log('User updated successfully:', data);
        alert("Details updated successfully! Now you can go back.");
        localStorage.setItem('user',JSON.stringify(data));
        console.log("updated local storage: ",localStorage.getItem('user'));
        //return data; // Optionally return data if needed
      }
    } catch (error) {
      console.error('Error updating user:', error.message);
      alert('Error updating user: ' + error.message);
    }
  };



  return (
    <div className='Myacocunt'>
      <div className='Myaccount-container' id='myaccount-container'>
        <button className="btn btn-back" onClick={onBack}>Back</button>
        <span>My Account</span>
        <form className="myaccount-form" onSubmit={handleSubmit}>
          <label htmlFor='name'>Username:</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder={formData.name ? formData.name : 'Enter your name'}
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder={formData.email? formData.email : 'Enter your email address'}
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder={formData.password ? formData.password : 'Enter your password'}
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label htmlFor='age'>Age:</label>
          <input
            type='number'
            id='age'
            name='age'
            placeholder={formData.age? formData.age : 'Enter your age'}
            value={formData.age}
            onChange={handleChange}
            required
          />

          <label htmlFor='bodyweight'>Body Weight:</label>
          <input
            type='number'
            id='bodyWeight'
            name='bodyWeight'
            placeholder={formData.bodyWeight? formData.bodyWeight : 'Enter your body weight'}
            value={formData.bodyWeight}
            onChange={handleChange}
            required
          />

          <label htmlFor='height'>Height:</label>
          <input
            type='number'
            id='height'
            name='height'
            placeholder={formData.height? formData.height : 'Enter your height'}
            value={formData.height}
            onChange={handleChange}
            required
          />

          <label htmlFor='goal'>Goal:</label>
          <select
            name='goal'
            id='goal'
            required
            value={formData.goal}
            onChange={handleChange}
          >
            <option value='Gain'>Gain</option>
            <option value='Maintain'>Maintain</option>
            <option value='Lose'>Lose</option>
          </select>

          {/* <label htmlFor="plan_joined">Your Plan</label>
          <div className="Plan_joined"></div>

          <label htmlFor="program_subscribed">Your Program</label>
          <div className="Program_subscribed"></div> */}

          <button type='submit' className="btn btn-myaccount">Update Details</button>
        </form>
      </div>
    </div>
  )
}

export default MyAccount
