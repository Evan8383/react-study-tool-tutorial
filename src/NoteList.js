const NoteList = ({ notes, title }) => {
    // const notes = props.notes;
    // const title = props.title;

    return ( 
        <div className="note-list">
            <h2>{ title }</h2>
            {notes.map((note) => (
                <div className="note-preview" key={note.id}>
                    <h2>{ note.title }</h2>
                    <p>{ note.body }</p>
                    <p>Note by: {note.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default NoteList;