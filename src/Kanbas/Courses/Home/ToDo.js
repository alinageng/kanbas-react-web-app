import { useParams } from "react-router";
import db from '../../Database';

function ToDo() {
    const { courseId } = useParams();
    const assignments = db.assignments;

    return (
        <div>
            <ul></ul>
            
        </div>
    )
    


}

export default ToDo;



