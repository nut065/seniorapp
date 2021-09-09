import React, { useState, useEffect } from 'react';
import firebase from '../utils/firebase';
import { Line } from 'react-chartjs-2';

const LineChartMonth = () => {

    const [sensorList, setSensorList] = useState();

    useEffect(() => {
        const sensorRef = firebase.database().ref('sensor').limitToLast(30);

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

    const dateData = sensorList?sensorList.map((val) => val.sensor.date):'';
    const tempData = sensorList?sensorList.map((val) => val.sensor.temperature):'';
    const humidData = sensorList?sensorList.map((val) => val.sensor.humid):'';
    const ecData = sensorList?sensorList.map((val) => val.sensor.ec/10):'';

    return <div className="lglass">
            <Line 
                data={{
                    labels: dateData,
                    datasets: [{
                        type: 'line',
                        label: 'อุณหภูมิ',
                        data: tempData,
                        fill: false,
                        borderColor: '#FCD34D',
                        tension: 0.1
                    }, {
                        type: 'line',
                        label: 'ความชื้น',
                        data: humidData,
                        fill: false,
                        borderColor: '#A5B4FC',
                        tension: 0.1
                    }, {
                        type: 'line',
                        label: 'ความเค็ม',
                        data: ecData,
                        fill: false,
                        borderColor: '#6EE7B7',
                        tension: 0.1
                    }]
                }}
                options={{ devicePixelRatio: 1 }}
            />
        </div>
}

export default LineChartMonth