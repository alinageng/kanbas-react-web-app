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
            // style={{
            // left: "80px",
            // top: "0px",
            // }}
        >
            <FontAwesomeIcon icon={faGripLines} className="icon" / >
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb pt-3">
                <li class="breadcrumb-item">
                    {course._id}
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                    {location}
                </li>
                </ol>
            </nav>        
        </div>
    )
}

export default CourseBreadcrumb;