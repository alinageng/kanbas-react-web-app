import { Link } from "react-router-dom";
import db from "../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import courseImage from "../../img/course_img.jpeg";


function Dashboard() {
  const courses = db.courses;
  return (
    <div className="wd-width-100">
        <div className="m-3">
            <h1 className="">Dashboard </h1>
            <hr />
            <div className="m-3 wd-courses">
                <h2>Published Courses</h2>
                <hr/>
                <div className="row">
                    {courses.map((course) => (
                        <div className="col mt-2">
                            <div className="card wd-course-card">
                            <img src={courseImage} className="card-img-top" alt="Course Image" />
                            <div className="card-body">
                                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                                    <h5 className="card-title">{course._id} {course.name}</h5>
                                    <p className="card-text mb-1 text-secondary">
                                        {course._id}.{course.number}<br />
                                        {course.startDate} to {course.endDate}
                                    </p>
                                </Link>
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