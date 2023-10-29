import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import React from 'react';


function CourseNavigation({ course }) {
  const links = ["Home", "Modules", "Assignments", "Grades"];
  const { pathname } = useLocation();
  return (
    <div className="wd-account-navigation">
      <div className="list-group" style={{ width: 150 }}>
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/Courses/${course._id}/${link}`}
            className={`list-group-item ${pathname.includes(link) && "active"} ${link}`}>
            {link}
          </Link>
        ))}
    </div>
    </div>
    
  );
}


export default CourseNavigation;
