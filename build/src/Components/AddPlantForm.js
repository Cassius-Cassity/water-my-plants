import React, { useState } from 'react';
import axios from 'axios';

export default function AddPlantForm(){
    const [form, setForm] = useState({
        nickname:'',
        species:'',
        h2oFrequency:'',
        image:null
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    const onSubmit = () => {
        axios.post(`https://plant-water-tracker.herokuapp.com/api/plants`, form)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log({ err })
            })
    }
    const handleChange = (e) => {
        console.log(e.target.value)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return(
        <div className='addplant'>
            <form onSubmit={handleSubmit}>
                <label>Plant name
                    <input 
                        type='text'
                        name='nickname'
                        onChange={handleChange}
                        value={form.nickname}
                        />
                </label>
                <label>species
                    <input
                        type='text'
                        name='species'
                        onChange={handleChange}
                        value={form.species}
                        />
                </label>
                <label>Water Frequency
                    <input 
                        type='number'
                        name='h2oFrequency'
                        onChange={handleChange}
                        value={form.h2oFrequency}
                        />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}