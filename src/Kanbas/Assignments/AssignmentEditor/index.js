import React from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import db from "../../Database";
import {useSelector, useDispatch} from "react-redux";
import {
  addAssignment,
  updateAssignment,
  setAssignment, setDefaultAssignment,
} from "../assignmentsReducer";
import {updateModule} from "../../Courses/Modules/modulesReducers";


function AssignmentEditor() {
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const {courseId, assignmentId} = useParams();
  const navigate = useNavigate();

  const handleSave = () => {
    if (assignmentId === "Editor") {
      console.log("creating new assignment")
      dispatch(addAssignment({...assignment, course: courseId}))
    }
    else {
      console.log("updating existing assignment")
      dispatch(updateAssignment(assignment))
      console.log("set assignemnt to defautl: ", assignment)
    }
    dispatch(setDefaultAssignment())
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const handleCancel = () => {
    dispatch(setDefaultAssignment())
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };


  return (
    <div>
      <h2>Assignment Name</h2>
      <input value={assignment.title}
             className="form-control mb-2"
             onChange={(e) =>
               dispatch(setAssignment({...assignment, title: e.target.value}))
             }/>
      <textarea value={assignment.description}
                className="form-control mb-2"
                onChange={(e) =>
                  dispatch(setAssignment({...assignment, description: e.target.value}))
                }/>
      <div className="row mt-4 mb-4">
        <div className="col-3">
          <div className="float-end">
            <label htmlFor="points">Points</label>
          </div>
        </div>
        <div className="col-8">
          <input
            type="number"
            id="points"
            className="form-control"
            defaultValue="100"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-3">
          <div className="float-end">
            <label htmlFor="assign-to">Assign</label>
          </div>
        </div>
        <div className="col-8">
          <ul className="list-group">
            <li className="list-group-item border-bottom-0">
              <b>Due</b>
            </li>
            <li className="list-group-item border-bottom-0">
              <input
                type="date"
                className="form-control"
                value={assignment.dueDate}
                onChange={(e) =>
                  dispatch(setAssignment({...assignment, dueDate: e.target.value}))
                }/>
            </li>
            <li className="list-group-item border-bottom-0">
              <div className="row">
                <div className="col">
                  <b>Available from</b>
                </div>
                <div className="col">
                  <b>Until</b>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-6">
                  <input
                    type="date"
                    className="form-control"
                    value={assignment.availableFrom}
                    onChange={(e) =>
                      dispatch(setAssignment({...assignment, availableFrom: e.target.value}))
                    }/>
                </div>
                <div className="col-6">
                  <input type="date"
                         className="form-control"
                         value={assignment.until}
                         onChange={(e) =>
                           dispatch(setAssignment({...assignment, until: e.target.value}))
                         }/>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr/>
      <div className="float-end">
        <button onClick={handleCancel} className="btn btn-danger me-2">
          Cancel
        </button>
        <button onClick={handleSave} className="btn btn-success me-2">
          Save
        </button>
      </div>
    </div>
  );
}

export default AssignmentEditor;