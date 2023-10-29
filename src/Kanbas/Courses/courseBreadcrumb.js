import {  useLocation } from "react-router-dom";
import "./index.css";

function CourseBreadcrumb({course}) {

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