import {useState} from "react"

const WorkoutForm = ()=>{
    const [title, setTtitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const workout = {title, load, reps}

        const response = await fetch('/api/workouts',{
            method: "POST", 
            body: JSON.stringify(workout),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTtitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log('workout added', json)
        }


    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Workout</h3>

            <label>Excersize Title:</label>
            <input
            type="text"
            onChange={(e) => setTtitle(e.target.value)}
            value = {title}
            />

            <label>Load in kg:</label>
            <input
            type="text"
            onChange={(e) => setLoad(e.target.value)}
            value = {load}
            />

            <label>Reps:</label>
            <input
            type="text"
            onChange={(e) => setReps(e.target.value)}
            value = {reps}
            />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}

        </form>
    )
}
export default WorkoutForm