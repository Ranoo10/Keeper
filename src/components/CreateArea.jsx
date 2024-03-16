import React,{ useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@material-ui/core/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props){
    const [isExpanded, setExpanded]=useState(false);
    const [note, setNote]=useState({
        title:"",
        content:""
    });
    function handleChange(event){
        const {name,value}=event.target;
    
        setNote(prevNote=>{
            return {
                ...prevNote,
                [name]:value
            };
        });
    } 
    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })

        event.preventDefault();

    }
    function expand(){
        setExpanded(true);
    }
    return(
        <div>
            <form className="create-note">
            {isExpanded ? 
                <input name="title" 
                placeholder="Title" 
                 onChange={handleChange}  
                 value={note.title} 
                /> : null
            }
                <textarea 
                name="content" 
                placeholder="Take a Note.." 
                rows={isExpanded ? 3 : 1}
                value={note.content}
                onChange={handleChange}
                onClick={expand} 
                />
                <Zoom in={isExpanded}>
                <Fab onClick={submitNote}><AddCircleIcon /></Fab>
                </Zoom>
            </form>
        </div>
    )
}
export default CreateArea;