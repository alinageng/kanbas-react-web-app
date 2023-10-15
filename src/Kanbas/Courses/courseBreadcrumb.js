import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useLocation, useParams } from "react-router-dom";
import db from "../../Kanbas/Database";
import "./index.css";

function CourseBreadcrumb() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);

    const { pathname } = useLocation();
    const parts = pathname.split('/');
    const location = parts[parts.length - 1];

    return (
        <div 
            className="wd-course-breadcrumb"
        >
            {/* <FontAwesomeIcon icon={faGripLines} className="icon" / > */}
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb pt-3">
                <li className="breadcrumb-item">
                    {course._id}
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    {location}
                </li>
                </ol>
            </nav>        
        </div>
    )
}

export default CourseBreadcrumb;