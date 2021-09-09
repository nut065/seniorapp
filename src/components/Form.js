import React, { useState } from 'react'
import firebase from '../utils/firebase'

function Form() {

    const [title, setTitle] = useState('');

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    }

    const createSensor = () => {
        const sensorRef = firebase.database().ref('Senior/sensor');
        const sensor = {
            title,
            complete: false
        }

        sensorRef.push(sensor)
    }

    return (
        <div>
            <input type="text" onChange={handleOnChange} value={title} />
            <button className="add-btn" onClick={createSensor}>Add Sensor</button>
        </div>
    )
}

export default Form
