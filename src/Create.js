import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const note = { title, body };

        setIsPending(true);

        const postData = async () => {
            const response = await fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify(note)
            })
            console.log('new note added')
            setIsPending(false)
            navigate('/')
        }
        postData()
        .catch(err => {
            console.log(err.message)
        })
    }

    return ( 
        <div className="create">
            <h2>Create a New Note</h2>
            <form onSubmit={handleSubmit}>
                <label>Note Title:</label>
                <input 
                    type="text" 
                    required
                    value = { title }
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Note Title:</label>
                <textarea 
                    required
                    value = { body }
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                {!isPending && <button>Add Note</button>}
                {isPending && <button disabled>Saving Note...</button>}
            </form>
        </div>
     );
}
 
export default Create;