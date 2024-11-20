import React, { useState , useRef} from 'react';
import emailjs from '@emailjs/browser'
import './JoinUser.css';

function JoinUser({ onBack, onsubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        age: '',
        bodyWeight: '',
        height: '',
        goal: 'Gain'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const formRef = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("formDATA: ", formData);
            const response = await fetch('http://localhost:3000/fitclub/registerUser', {
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
            else {
                const data = await response.json();
                console.log('User registered successfully:', data);
                onsubmit();
                emailjs.sendForm('service_4tunhj4', 'template_x40sxmi', formRef.current, '4_hy3Kw313djaLigE')
                    .then((result) => {
                        console.log('Email sent successfully:', result.text);
                        formRef.current.reset();
                    }, (error) => {
                        console.error('Failed to send email:', error);
                    });
                return data; // Optionally return data if needed
            }


        } catch (error) {
            console.error('Error registering user:', error.message);
            throw error;
        }
    };

    return (
        <div className='Form-container' id='form-container'>
            <button className="btn btn-back" onClick={onBack}>Back</button>
            <span>Register</span>
            <form className="joinuser-form" onSubmit={handleSubmit}>
                <label htmlFor='name'>Username:</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Enter your name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Enter your email address'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor='password'>Password:</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Enter your password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <label htmlFor='age'>Age:</label>
                <input
                    type='number'
                    id='age'
                    name='age'
                    placeholder='Enter your age'
                    value={formData.age}
                    onChange={handleChange}
                    required
                />

                <label htmlFor='bodyweight'>Body Weight:</label>
                <input
                    type='number'
                    id='bodyWeight'
                    name='bodyWeight'
                    placeholder='Enter your body weight'
                    value={formData.bodyWeight}
                    onChange={handleChange}
                    required
                />

                <label htmlFor='height'>Height:</label>
                <input 
                    type='number'
                    id='height'
                    name='height'
                    placeholder='Enter your height'
                    value={formData.height}
                    onChange={handleChange}
                    required
                />

                <label htmlFor='goal'>Goal:</label>
                <select
                    name='goal'
                    id='goal'
                    value={formData.goal}
                    onChange={handleChange}
                    required
                >
                    <option value='Gain'>Gain</option>
                    <option value='Maintain'>Maintain</option>
                    <option value='Lose'>Lose</option>
                </select>

                <button type='submit' className="btn btn-f" >Join</button>
            </form>
        </div>
    );
}

export default JoinUser;
