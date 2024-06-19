import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import Chart from "../Component/Chart";
import Swal from "sweetalert2";
import Navbar from "../Component/Navbar";
const Calendar = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [newTaskDateTime, setNewTaskDateTime] = useState("");
    const [isAlarmPlaying, setIsAlarmPlaying] = useState(false);
    const [alarmTaskIndex, setAlarmTaskIndex] = useState(null);
    const [snoozeTime, setSnoozeTime] = useState(null);
    const audioRef = useRef(null);
    const [snoozeTimeInput, setSnoozeTimeInput] = useState("");
    const [showSnoozeTimeInput, setShowSnoozeTimeInput] = useState(false);
    const Baseurl=import.meta.env.VITE_API_BASE_URL;
    const [bundle,setBundle] = useState({
        complete:0,
        remove:0,
        swap:0
    })

    useEffect(() => {
        const timer = setInterval(() => {
            checkTasksDue();
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [tasks]);

    const addTask = async () => {
        if (newTask.trim() !== "" && newTaskDateTime.trim() !== "") {
            try {
                const response = await axios.post(`${Baseurl}/api/users/addmedicine`, { task: newTask, dateTime: newTaskDateTime },{
                    headers: {
                        'auth-token': `${localStorage.getItem('auth-token')}`,
                        'Content-Type': 'application/json',
                    },});
                setTasks(response.data.updated_user.addmedicine);
                const taskData = response.data.updated_user.task;
                
                setBundle({
                  complete: taskData.complete,
                  remove: taskData.remove,
                  swap: taskData.snooze,
                });
                console.log('bundle',bundle);
            } catch (err) {
                console.log(err);
            }
            setNewTask("");
            setNewTaskDateTime("");
        }
}

    const removeTask = async (index,task) => {
        const audio = audioRef.current;
        audio.pause();
        audio.currentTime = 0;
        try {
            console.log('delete');
            console.log(index);
            const response = await axios.delete(`${Baseurl}/api/users/deletemedicine/${index}/${task}`,{
                headers: {
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },});
            console.log(response.data);
            setTasks(response.data.user.addmedicine);
            const taskData = response.data.user.task;
            setBundle({
              complete: taskData.complete,
              remove: taskData.remove,
              swap: taskData.snooze,
            });
        } catch (err) {
            console.log(err);
        }


    };

    const snoozeTask = (index) => {
        setSnoozeTimeInput(tasks[index].dateTime);
        setShowSnoozeTimeInput(true);
        setAlarmTaskIndex(index);
    };

    const checkTasksDue = () => {
        const now = new Date().getTime();

        for (let i = 0; i < tasks.length; i++) {
            const taskDateTime = new Date(tasks[i].dateTime).getTime();

            if (now >= taskDateTime) {
                if (!isAlarmPlaying) {
                    playSound();
                    setIsAlarmPlaying(true);
                    setAlarmTaskIndex(i);
                    break; // Break the loop after the first alarm
                }
            }
        }

        if (snoozeTime && now >= snoozeTime) {
            playSound();
            setIsAlarmPlaying(true);
            setSnoozeTime(null); // Reset snooze time
        }
    };
    const fetchData = async () => {
        try {
            // Ensure the URL is correctly constructed
            const url = `${Baseurl}/api/users/getmedicine`;
            console.log('Fetching data from:', url);
    
            const response = await axios.get(url, {
                headers: {
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json',
                },
            });
            
            console.log(response.data);
            setTasks(response.data.addmedicine);
            
            const taskData = response.data.task;
            setBundle({
                complete: taskData.complete,
                remove: taskData.remove,
                swap: taskData.snooze,
            });
        } catch (err) {
            console.error('Error in getmedicine frontend side', err);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, [])
    const playSound = () => {
        const audio = audioRef.current;
        audio.play();
    };

    // const stopAlarm = () => {
    //     const audio = audioRef.current;
    //     audio.pause();
    //     audio.currentTime = 0;
    //     setIsAlarmPlaying(false);

    //     if (alarmTaskIndex !== null) {
    //         removeTask(alarmTaskIndex);
    //         setAlarmTaskIndex(null);
    //     }
    // };

    const snoozeAlarm = async() => {
        const newSnoozeTime = new Date(snoozeTimeInput).getTime();
        setSnoozeTime(newSnoozeTime);
        setShowSnoozeTimeInput(false);
        const audio = audioRef.current;
        audio.pause();
        audio.currentTime = 0;
        try {
            const response = await axios.put(`${Baseurl}/api/users/updatemedicine`, {index:alarmTaskIndex, dateTime: snoozeTimeInput},{
                headers: {
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },});
            setTasks(response.data.updated_user.addmedicine);
        } catch (err) {
            console.log(err);
        }
        setIsAlarmPlaying(false); // Stop the alarm after snoozing
    };

    return (

        <div className="bg-green-100 h-screen">
            <Navbar/>
            <div className="medicalnote flex flex-col items-center p-12 ">
                <div className="input-container flex flex-col space-y-2  justify-between items-center mb-5 w-3/4">
                    <div className="flex">
                    <input
                        type="text"
                        placeholder="New task"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className="w-3/4 p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="datetime-local"
                        value={newTaskDateTime}
                        onChange={(e) => setNewTaskDateTime(e.target.value)}
                        className="w-1/4 p-2 border border-gray-300 rounded"
                    /></div>
                    <button
                        onClick={addTask}
                        className="p-2 bg-green-blue w-44 font-bold text-white rounded hover:bg-green-800 transition duration-300"
                    >
                        Add
                    </button>
                </div>
                <ul className="task-list w-3/4">
                    {tasks.map((task, index) => (
                        <li
                            key={index}
                            className=" flex justify-between items-center border border-gray-300 p-2 mb-2 bg-white rounded"
                        >
                            <div className="flex flex-col rounded">
                                <span>
                                    {task.text}
                                </span>
                                <span className="">{task.dateTime}</span>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => removeTask(index,"c")}
                                    className="bg-red-400 px-2 py-1 rounded text-white font-bold w-24"
                                >
                                    Complete
                                </button>
                                {isAlarmPlaying && alarmTaskIndex === index ? (
                                    <div>
                                        <button
                                            onClick={() => snoozeTask(index)}
                                            className="bg-red-400 px-2 py-1 rounded text-white font-bold w-24"
                                        >
                                            Snooze
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => removeTask(index,"r")}
                                        className="bg-red-400 px-2 py-1 rounded text-white font-bold w-240"
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
                {showSnoozeTimeInput && (
                    <div className="flex space-x-2 justify-center items-center">
                        <input
                            type="datetime-local"
                            value={snoozeTimeInput}
                            onChange={(e) => setSnoozeTimeInput(e.target.value)}
                            className="w-3/4 p-2 border border-gray-300 rounded mb-2"
                        />
                        <button
                            onClick={snoozeAlarm}
                            className="w-44 p-2 bg-green-blue font-bold text-white rounded hover:bg-green-800 transition duration-300"
                        >
                            Snooze Alarm
                        </button>
                    </div>
                )}
                <audio ref={audioRef} src="alarm.mp3" preload="auto" />
            </div>
            <div className="p-12">
            <Chart complete={bundle.complete} remove={bundle.remove} swap={bundle.swap} />
            </div>
            
        </div>
    );
}

export default Calendar;