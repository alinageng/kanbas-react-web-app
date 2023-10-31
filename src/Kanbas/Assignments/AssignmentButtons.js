import {AiOutlinePlus} from 'react-icons/ai';
import {FaEllipsisV} from 'react-icons/fa';
import {Link} from "react-router-dom";

function AssignmentButtons({courseId}) {
  return (
    <div className="row">
      <div className="col">
        <input
          type="text"
          class="form-control w-50"
          placeholder="Search for Assignments"
        />
      </div>
      <div className="col">
        <div class="float-end">
          <button type="submit" class="btn btn-light">
            <AiOutlinePlus/>
            Group
          </button>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments/Editor/`}
                className="btn btn-danger wd-white-color">
            <AiOutlinePlus/>
            Assignment
          </Link>
          <button type="submit" class="btn btn-light">
            <FaEllipsisV/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AssignmentButtons;