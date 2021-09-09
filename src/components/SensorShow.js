import React, { useState, useEffect } from 'react'
import firebase from '../utils/firebase'
import Sensor from './Sensor'

function SensorList({mode}) {

    const [sensorList, setSensorList] = useState();

    useEffect(() => {
        const sensorRef = firebase.database().ref('Senior/'+mode);

        sensorRef.on('value', (snapshot) => {
            const sensors = snapshot.val();
            const sensorList = [];
            for (let id in sensors) {
                sensorList.push({ id, ...sensors[id] });
            }
            setSensorList(sensorList);
        })
    }, [])

    return (
        <div>
            { sensorList 
            ? sensorList.map((sensor, index) => <Sensor sensor={sensor} key={index} /> )
            : ""}
        </div>
    )
}

export default SensorList