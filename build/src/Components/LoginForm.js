import React, {useState} from 'react';
import axios from 'axios';

function LoginForm() {
    const [form, setForm] = useState({
        username: '',
        password: '',
        phone: ''
      });

    

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/login', form)
            .then((res) => {
                console.log(res);
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
                        name='phone'
                        type='tel'
                        onChange={handleChange}
                        value={form.phone}
                    />
                </label>
                <button type="submit">submit</button>
            </form>
        </div>
    )
};

export default LoginForm;