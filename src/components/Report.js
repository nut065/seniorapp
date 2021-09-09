import React, { useState, useEffect } from 'react';
import firebase from '../utils/firebase';

const Report = () => {

    const [sensorList, setSensorList] = useState();

    useEffect(() => {
        const sensorRef = firebase.database().ref('sensor');

        sensorRef.on('value', (snapshot) => {
            const sensors = snapshot.val();
            const sensorList = [];
            for (let id in sensors) {
                const newData = sensors[id].dataset.split('/');
                let sta = "";

                if(newData[2] <= 1024 && newData[2] > 768){
                    sta = "ปกติ";
                }else if(newData[2] <= 768 && newData[2] > 512){
                    sta = "ค่อนข้างเค็ม";
                }else if(newData[2] <= 512 && newData[2] > 0){
                    sta = "เค็มเกินไป";
                }
                const sensor ={
                    temperature: newData[0],
                    humid: newData[1],
                    ec: newData[2],
                    rain: newData[3],
                    date: newData[4],
                    status: sta
                }

                sensorList.push({ id, sensor });
            }
            setSensorList(sensorList);
        })
    }, [])

    // const PrintReport = () => {
    //     window.print();
    // }

    return (
    <div className="glass">
        {/* <button className="w-full items-center rounded-md bg-indigo-400 text-white text-lg py-2" onClick={PrintReport}>
            ปริ้นท์
        </button><br/><br/> */}
        <table className="w-full text-sm font-medium py-4 rounded-lg">
            <thead>
                <tr className="text-white text-xl" style={{height:50}}>
                    <th>เวลาที่วัด</th>
                    <th>อุณหภูมิ</th>
                    <th>ความชื้น</th>
                    <th>ความเค็ม</th>
                    <th>สถานะความเค็ม</th>
                    <th>ฝน</th>
                </tr>
            </thead>
            <tbody>
            {sensorList?sensorList.map((val,index) => 
                <tr className="text-center text-white" style={{height:50}}>
                    <td>{val.sensor.date}</td>
                    <td>{val.sensor.temperature} °C</td>
                    <td>{val.sensor.humid}</td>
                    <td>{val.sensor.ec}</td>
                    <td>{val.sensor.status}</td>
                    <td>{val.sensor.rain}</td>
                </tr>
            ):''}
            </tbody>
        </table>
    </div>
    )
}

export default Report