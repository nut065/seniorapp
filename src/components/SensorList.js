import React, { useState, useEffect } from 'react';
import firebase from '../utils/firebase';
import Sensor from './Sensor';

const SensorList = () => {

    const [sensorList, setSensorList] = useState();

    useEffect(() => {
        const sensorRef = firebase.database().ref('sensor').limitToLast(1);

        sensorRef.on('value', (snapshot) => {
            const sensors = snapshot.val();
            const sensorList = [];
            for (let id in sensors) {
                const newData = sensors[id].dataset.split('/');
                const sensor ={
                    temperature: newData[0],
                    humid: newData[1],
                    ec: newData[2],
                    rain: newData[3],
                    date: newData[4],
                }

                sensorList.push({ id, sensor });
            }
            setSensorList(sensorList);
        })
    }, [])

    return (
        <div>
            { sensorList ? sensorList.map((val, index) => <Sensor sensor={val.sensor} key={index} /> ): "" }
        </div>
    )
}

export default SensorList