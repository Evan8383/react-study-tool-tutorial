import { useState } from "react"
import { useParams } from "react-router"
import { useNavigate } from 'react-router-dom'

const DeleteNote = () => {

    const { id } = useParams();
    const [deleteNote, setDelete] = useState(false)
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        const deleteData = async () => {
            const response = await fetch('http://localhost:8000/notes/' + id,{
                method: 'DELETE',
            })
            console.log('note deleted')
            setDelete(true)
        }
        deleteData()
        .catch(err => {
            console.log(err.message)
        })
        navigate('/')
    }

    return ( 
        <button className="delete" onClick={handleClick}>Delete Note</button>
     );
}
 
export default DeleteNote;