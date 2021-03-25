import { React, useState } from 'react';


const AddTask = ({ onAdd }) => {

    const [text, setFilm] = useState('');
    // const [day, setDate] = useState({});
    const [reminder, setReminder] = useState(true);
    const [rating, setRating] = useState('');
    const [duratation, setDuratation] = useState('');
    const [type, setType] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        if (!(text && rating && duratation && type)) {
            alert('Please add text')
            return
        }
        // setDate({ currentTime: new Date().toLocaleString() })

        onAdd({ text, rating, duratation, type, reminder })

        setFilm('');
        setRating('');
        setDuratation('');
        //setDate('');
        setType('');
        setReminder(false);
    }
    return (
        <div>
            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Film</label>
                    <input type='text' placeholder='addFilm' value={text} onChange={(e) => setFilm(e.target.value)}></input>
                </div>
                <div className='form-control'>
                    <label>Rating</label>
                    <input type='text' placeholder='addRation' value={rating} onChange={(e) => setRating(e.target.value)}></input>
                </div>
                <div className='form-control'>
                    <label>Duratation</label>
                    <input type='text' placeholder='addDuratation' value={duratation} onChange={(e) => setDuratation(e.target.value)}></input>
                </div>
                <div className='form-control'>
                    <label>Type of movie</label>
                    <input type='text' placeholder='add type of movie' value={type} onChange={(e) => setType(e.target.value)}></input>
                </div>
                <div className='form-control form-control-check'>
                    <label>Set reminder</label>
                    <input type='checkbox' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} checked={reminder}></input>
                </div>
                {/* <div className='form-control'>
                    <label>Time and day</label>
                    <input type='text' placeholder='add time and day' value={day} onChange={(e) => setDate(e.target.value)}></input>
                </div> */}
                <input type='submit' className='btn btn-block' value='Save task'></input>
            </form>
        </div>
    )
}

export default AddTask
