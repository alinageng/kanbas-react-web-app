import { Link } from "react-router-dom";
import db from "../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


function Dashboard() {
  const courses = db.courses;
  return (
        <div className="m-3 wd-width-100">
            <h1 className="">Dashboard</h1>
            <hr />
            <div className="list-group">
                {courses.map((course) => (
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                    {course.name}
                </Link>
                ))}
            </div>
        </div>
    
  );
}
export default Dashboard;