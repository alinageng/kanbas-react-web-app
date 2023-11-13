import KanbasNavigation from "./KanbasNavigation";
import {Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import React from 'react';
import {useState, useEffect} from "react";
import store from "./store";
import {Provider} from "react-redux";
import axios from 'axios';


function Kanbas() {
  const URL = "http://localhost:4000/api/courses";
  const defaultCourse = {
    name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  };
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState(defaultCourse);


  // creates new course with id of the time of creation instead of the one provided input box
  const addCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses(
      currentCourses => [response.data, ...currentCourses]);
    setCourse({ defaultCourse });
  };
  const deleteCourse = async (_id) => {
    const response = await axios.delete(
      `${URL}/${_id}`
    );
    setCourses(courses.filter(
      (c) => c._id !== _id));
  };

  const updateCourse = async () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        }
        return c;
      })
    );
    setCourse(defaultCourse);
  };


  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);


  return (
    <Provider store={store}>

      <div className="d-flex">
        <div>
          <KanbasNavigation/>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard"/>}/>
            <Route path="Account" element={<h1>Account</h1>}/>
            <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>}/>
            <Route path="Dashboard" element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}/>}
            />
          </Routes>
        </div>
      </div>
    </Provider>

  );
}

export default Kanbas;