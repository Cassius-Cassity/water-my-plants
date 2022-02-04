import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AddPlantForm from './AddPlantForm';


function PlantList(){
    const [plantList, setPlantList] = useState([])

    useEffect(() => {
        axios.get('https://plant-water-tracker.herokuapp.com/api/plants')
            .then(response => {
                setPlantList(response.data)
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    return(
        <div className='plant-list'>
            {plantList.map(plant => (
                <div className='plant-card' key={plant.plant_id}>
                    <h2>{plant.nickname}</h2>
                    <p>{plant.species}</p>
                    <p>{plant.h2oFrequency}</p>
                </div>
            ))}
            <AddPlantForm/>
        </div>
    )
}

export default PlantList;