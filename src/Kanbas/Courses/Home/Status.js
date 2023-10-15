import { FaFileImport } from 'react-icons/fa';
import { MdOutlineLabelImportant } from 'react-icons/md';
import { LuLifeBuoy } from 'react-icons/lu';
import { BsBarChartFill } from 'react-icons/bs';
import { AiOutlineBell } from 'react-icons/ai';
import { CiBullhorn } from 'react-icons/ci';
import ToDo from './ToDo';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function Status() {
    const buttons = [
        {name: "Import Existing Content", icon: <FaFileImport/>}, 
        {name: "Import from Commons", icon: <MdOutlineLabelImportant/>},
        {name: "Choose Home Page", icon: <LuLifeBuoy/>},
        {name: "View Course Stream", icon: <BsBarChartFill/>},
        {name: "New Announcement", icon: <CiBullhorn/>},
        {name: "New Analytics", icon: <BsBarChartFill/>},
        {name: "View Course Notifications", icon: <AiOutlineBell/>}]

    return (
        <div>
            <div className="list-group">
                {buttons.map((link, index) => {
                    return(
                        <li class="list-group-item rounded bg-light border mb-1">
                        {link.icon}
                        {link.name}
                        </li>
                    )
                })}
            </div>
            <div>
                <h6>To Do</h6>
                <hr/>
                <ToDo />
            </div>
        </div>

    )
}

export default Status;