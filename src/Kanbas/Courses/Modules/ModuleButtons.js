import { FaEllipsisV } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";

function ModuleButtons() {

    return (
        <div >
            <button type="submit" class="btn btn-light">
                Collapse All
            </button>
            <button type="submit" class="btn btn-light">
                View Progress
            </button>
            <button
                class="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                <AiOutlineCheckCircle className="text text-success"/>
                Publish All
            </button>
            <button type="submit" className="btn btn-danger">
                <i class="fas fa-plus"></i>
                Module
            </button>
            <button type="submit" className="btn btn-light">
                <FaEllipsisV />
            </button>
      </div>
    )
}

export default ModuleButtons;