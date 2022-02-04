import React, {useState} from 'react';
import axios from 'axios';


function LoginForm() {
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

      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://plant-water-tracker.herokuapp.com/api/users`, form)
            .then((res) => {
                localStorage.setItem("authToken", res.data.token)
                console.log(res)
            })
            .catch((err) => {
                console.log({ err })
            })
      };
    

    return (
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
};

export default LoginForm;