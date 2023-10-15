import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../Database";
import AssignmentButtons from "./AssignmentButtons";
import { LuGripVertical } from "react-icons/lu";
import { AiOutlineCaretDown, AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";
import { HiOutlinePencil, HiCheckCircle } from "react-icons/hi";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="p-3">
      <h2>Assignments for course {courseId}</h2>
      <AssignmentButtons />
      <hr/>
      <div className="list-group">
        <div className="list-group-item active">
            <div class="row">
                <div class="col d-flex align-items-center">
                    <LuGripVertical />
                    <AiOutlineCaretDown />
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
                        <AiOutlinePlus />
                        </button>
                        <button type="submit" class="btn p-0">
                            <FaEllipsisV />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {courseAssignments.map((assignment) => (
            <div className="list-group-item">
                <div className="row">
                    <div className="col-1 align-items-center">
                        <LuGripVertical />
                        <HiOutlinePencil />
                    </div>
                    <div className="col">
                        <Link
                            key={assignment._id}
                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                            className="list-group-item">
                            {assignment.title}
                        </Link>
                    </div>  
                    <div className="col-1">
                        <HiCheckCircle />
                        <FaEllipsisV />
                    </div>      
                </div>    
                
            </div>
        ))}
      </div>
    </div>
  );
}
export default Assignments;