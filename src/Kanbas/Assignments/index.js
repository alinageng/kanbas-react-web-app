import React from "react";
import {Link, useParams} from "react-router-dom";
import AssignmentButtons from "./AssignmentButtons";
import {LuGripVertical} from "react-icons/lu";
import {AiOutlineCaretDown, AiOutlinePlus} from "react-icons/ai";
import {FaEllipsisV} from "react-icons/fa";
import {HiOutlinePencil, HiCheckCircle} from "react-icons/hi";
import {BsFillTrashFill} from "react-icons/bs";
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import {deleteAssignment, setAssignment, updateAssignment} from "./assignmentsReducer";


function Assignments() {
  const {courseId} = useParams();

  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);



  return (
    <div className="p-3">
      <h2>Assignments for course {courseId}</h2>
      <AssignmentButtons courseId={courseId}/>
      <hr/>
      <div className="wd-assignments-list">
        <div className="list-group">
          <div className="list-group-item active">
            <div class="row">
              <div class="col d-flex align-items-center">
                <LuGripVertical/>
                <AiOutlineCaretDown/>
                <h6>Assignments</h6>
              </div>
              <div class="col">
                <div class="float-end">
                  <button
                    type="submit"
                    class="btn wd-40-total rounded-pill"
                  >
                    40% of Total
                  </button>
                  <button type="submit" class="btn p-0">
                    <AiOutlinePlus/>
                  </button>
                  <button type="submit" class="btn p-0">
                    <FaEllipsisV/>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {courseAssignments.map((assignment, index) => (
            <div className="list-group-item">
              <div className="row">
                <div className="col-1 align-items-center">
                  <LuGripVertical/>
                  <HiOutlinePencil className="text-success"/>
                </div>
                <div className="col">
                  <Link
                    key={assignment._id}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    onClick={() => dispatch(setAssignment(assignment))}>
                    A{index + 1} - {assignment.title}
                  </Link>
                </div>
                <div className="col-2">
                  <button className="btn btn-link" onClick={() =>
                    dispatch(deleteAssignment(assignment._id))
                  }>
                    <BsFillTrashFill className="text-danger"/>
                  </button>
                  <HiCheckCircle className="text-success"/>
                  <FaEllipsisV/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Assignments;