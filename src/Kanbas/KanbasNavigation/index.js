import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTachometerAlt, faBook, faCalendarWeek, faInbox, faClock, faSpider, faArrowRight, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import './index.css';

function KanbasNavigation() {
  const links = [
    {name: "Account", icon: faUser}, 
    {name: "Dashboard", icon: faTachometerAlt},
    {name: "Courses", icon: faBook},
    {name: "Calender", icon: faCalendarWeek},
    {name: "Inbox", icon: faInbox},
    {name: "History", icon: faClock},
    {name: "Studio", icon: faSpider},
    {name: "Commons", icon: faArrowRight},
    {name: "Help", icon: faQuestionCircle}]

  const { pathname } = useLocation();
  return (
    <div className="wd-kanbas-navigation">
        <div className="list-group" style={{ width: 80 }}>
            <img
                src="../../img/neu_logo.png"
                width="80"
                alt="Northeastern Uni. Logo"
            />
            {links.map((link, index) => (
            <Link
            key={index}
            to={`/Kanbas/${link.name}`}
            className={`list-group-item ${pathname.includes(link.name) && "active"} ${link.name === 'Account' && "account"}`}>
                <div className="link">
                    <FontAwesomeIcon icon={link.icon} className="icon" / ><br />
                    {link.name}
                </div>
            </Link>
        ))}
        </div>
    </div>
  );
}
export default KanbasNavigation;