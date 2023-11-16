import {Navigate, Route, Routes, useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CourseNavigation from "../CourseNavigation";
import CourseBreadcrumb from "./courseBreadcrumb";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import Grades from "./Grades";


function Courses({ courses }) {
  // TODO should be in client.js
  const URL = `${process.env.REACT_APP_API_BASE}/courses`;
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);


  return (
    <div>
      <div>
        <CourseBreadcrumb course={course}/>
        <CourseNavigation course={course}/>
        <div
            className="overflow-y-scroll position-fixed bottom-0 end-0"
            style={{
              left: "280px",
              top: "50px",
            }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor />}
              />
              <Route path="Grades" element={<Grades />} />
            </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;