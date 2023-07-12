import useFetch from "./useFetch";
import DeleteNote from "./DeleteNote";
import { useParams } from "react-router";

const NoteDetails = () => {
    const { id } = useParams();
    const { data: notes, error, isPending } = useFetch('http://localhost:8000/notes/' + id);

    return ( 
        <div className="note-details">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {notes && (
                <article>
                    <h2>{notes.title}</h2>
                    <div>{notes.body}</div>
                </article>
            )}
            <DeleteNote />
        </div>
     );
}
 
export default NoteDetails;