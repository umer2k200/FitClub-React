// import React from 'react'
// import './Feedback.css'
// function Feedback() {
//     return (
//         <div className='Form-container' id='form-container'>
//             <span>FEEDBACK</span>
//             <form action="" className="feedback-form">
//                 <input type='text' name='user_name' placeholder='Enter your Name' required />
//                 <input type='email' name='user_email' placeholder='Enter you Email address' required />
//                 <button type='submit' className="btn btn-f">Join Now</button>
//             </form>
//         </div>
//     )
// }

// export default Feedback
// feedback.js
// feedback.js
import React from 'react';
import './Feedback.css';

function Feedback() {
    return (
        <div className='Form-container' id='form-container'>
            <span>FEEDBACK</span>
            <form action="" className="feedback-form">
                <label htmlFor='user_name'>Name:</label>
                <input type='text' id='user_name' name='user_name' placeholder='Enter your Name' required />
                
                <label htmlFor='user_email'>Email:</label>
                <input type='email' id='user_email' name='user_email' placeholder='Enter your Email address' required />
                
                <label htmlFor='message'>Message:</label>
                <textarea id='message' name='message' placeholder='Enter your message' required />
                
                <label htmlFor='rating'>Rating:</label>
                <input type='number' id='rating' name='rating' placeholder='0' min='1' max='5' required />
                
                <button type='submit' className="btn btn-f">Submit</button>
            </form>
        </div>
    );
}

export default Feedback;

