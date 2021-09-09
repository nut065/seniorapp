import React, { useState, useEffect } from 'react';

const Sensor = ({sensor}) => {

    const [sta,setSta] = useState();

    useEffect(() => {

        if(sensor.ec <= 1024 && sensor.ec > 768){
            setSta("ปกติ");
        }else if(sensor.ec <= 768 && sensor.ec > 512){
            setSta("ค่อนข้างเค็ม");
        }else if(sensor.ec <= 512 && sensor.ec > 0){
            setSta("เค็มเกินไป");
        }

    }, [sensor])

    return (
        <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
            <ul className="grid grid-cols-3 gap-4">
                <div className="rounded-lg text-white bg-yellow-300">
                    <div className="text-center m-4">
                        <strong className="text-3xl">
                        {sensor.temperature}
                        </strong> °C
                    </div>
                    <div className="text-center bg-yellow-400 w-full">
                        <small className="text-lg">อุณหภูมิ</small>
                    </div>
                </div>

                <div className="rounded-lg text-white bg-indigo-300">
                    <div className="text-center m-4">
                        <strong className="text-3xl">
                        {sensor.humid}
                        </strong>
                    </div>
                    <div className="text-center bg-indigo-400 w-full">
                        <small className="text-lg">ความชื้น</small>
                    </div>
                </div>

                <div className="rounded-lg text-white bg-green-300">
                    <div className="text-center m-4">
                        <strong className="text-3xl">
                        {sensor.ec/10}
                        </strong>
                    </div>
                    <div className="text-center bg-green-400 w-full">
                        <small className="text-lg">เค็ม</small>
                    </div>
                </div>
            </ul>
            <ul className="grid grid-cols-2 gap-4">
                <li className="flex rounded-lg">
                <button className="w-full flex items-center justify-center rounded-lg text-md font-medium py-4 glass text-white">
                    สถานะฝน : {sensor.rain}
                </button>
                </li>

                <li className="flex rounded-lg">
                <button className="w-full flex items-center justify-center rounded-lg text-md font-medium py-4 glass text-white">
                    สถานะความเค็มปัจจุบัน : {sta}
                </button>
                </li>
            </ul>
        </section>
    )
}

export default Sensor
