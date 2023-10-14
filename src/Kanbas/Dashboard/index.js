import { Link } from "react-router-dom";
import db from "../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import courseImage from "../../img/course_img.jpeg";


function Dashboard() {
  const courses = db.courses;
  return (
        <div className="m-3 wd-width-100">
            <h1 className="">Dashboard</h1>
            <hr />
            <div className="col">
                {courses.map((course) => (
                    <div className="card">
                        <img src={courseImage} alt="Course Image" />
                        <div className="card-body">
                            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                                <h5 class="card-title">{course._id} {course.name}</h5>
                                <p class="card-text mb-1 text-secondary">
                                    {course._id}.{course.number}<br />
                                    {course.startDate} to {course.endDate}
                                </p>
                            </Link>
                        </div>     
                    </div>                  
                ))
                }
            </div>
        </div>
    
  );
}
export default Dashboard;