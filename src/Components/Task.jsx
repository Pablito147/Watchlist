import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
    const [date, setDate] = useState((new Date().toLocaleDateString()));


    return (
        <div className='table-container'>
            <table className='table'>
                <tbody>
                    <tr className='table-movie-titles'>
                        <th>Film</th>
                        <th>Rating</th>
                        <th>Duratation</th>
                        <th>Type</th>
                        <th>Date and time</th>
                    </tr>
                    <tr className='table-movie-values'>
                        <td>{task.text}</td>
                        <td>{task.rating}</td>
                        <td>{task.duratation}</td>
                        <td>{task.type}</td>
                        <td>{date}</td>
                    </tr>
                </tbody>
            </table>
            <h3><FaTimes style={{ color: 'red', cursor: 'pointer', marginTop: '32px', fontSize: '20px', marginLeft: "5px" }} onClick={() => onDelete(task.id)} /></h3>
        </div>
    )
}

export default Task
