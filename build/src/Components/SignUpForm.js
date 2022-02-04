import React, { useState } from 'react';
import axios from 'axios';

function SignUpForm(){
    const [form, setForm] = useState({
        username: '',
        password: '',
        phoneNumber: ''
      });

    

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        });
      };

    const onSubmit = () => {
        axios.post(`https://plant-water-tracker.herokuapp.com/api/users`, form)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log({ err })
            })
    }


      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
      };



    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username
                    <input 
                        name="username" 
                        type='text' 
                        onChange={handleChange}
                        value={form.username}
                    />
                </label>
                <label>Password
                    <input
                        name='password'
                        type='password'
                        onChange={handleChange}
                        value={form.password}
                    />
                </label>
                <label>Phone Number
                    <input
                        name='phoneNumber'
                        type='tel'
                        onChange={handleChange}
                        value={form.phoneNumber}
                    />
                </label>
                <button>submit</button>
            </form>
        </div>
    )
}

export default SignUpForm;