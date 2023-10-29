import {Link} from "react-router-dom";
import db from "../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import courseImage from "../../img/course_img.jpeg";
import {useState} from "react";


function Dashboard({ courses, course, setCourse, addNewCourse,
                     deleteCourse, updateCourse }
) {
  return (
    <div className="wd-width-100">
      <div className="m-3">
        <h1 className="">Dashboard </h1>
        <hr/>
        <div className="m-3 wd-courses">
          <h2>Published Courses</h2>
          <hr/>
          <h5>Course</h5>
          <input value={course.name} className="form-control"
                 onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
          <input value={course.number} className="form-control"
                 onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
          <input value={course.startDate} className="form-control" type="date"
                 onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
          <input value={course.endDate} className="form-control" type="date"
                 onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />

          <div className="row">
            <div className="col float-end">
              <button className="btn btn-success" onClick={addNewCourse}>Add</button>
              <button className="btn btn-primary" onClick={updateCourse} >
                Update
              </button>
            </div>
          </div>
          <div className="row">
            {courses.map((course) => (
              <div className="col mt-2">
                <div className="card wd-course-card">
                  <img src={courseImage} className="card-img-top" alt="Course Image"/>
                  <div className="card-body">
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                      <h5 className="card-title">{course._id} {course.name}</h5>
                      <p className="card-text mb-1 text-secondary">
                        {course._id}.{course.number}<br/>
                        {course.startDate} to {course.endDate}
                      </p>
                    </Link>
                    <div className="">
                      <button className="btn btn-warning"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}>
                        Edit
                      </button>
                      <button className="btn btn-danger"
                              onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
            }
          </div>
        </div>
      </div>
    </div>

  );
}

export default Dashboard;