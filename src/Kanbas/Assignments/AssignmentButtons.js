import { AiOutlinePlus } from 'react-icons/ai';
import { FaEllipsisV } from 'react-icons/fa';

function AssignmentButtons() {
    return (
        <div className="row">
            <div className="col">
            <input
                type="text"
                class="form-control w-50"
                placeholder="Search for Assignments"
            />
            </div>
            <div className="col">
                <div class="float-end">
                    <button type="submit" class="btn btn-light">
                        <AiOutlinePlus />
                        Group
                    </button>
                    <button
                        type="submit"
                        class="btn btn-danger wd-white-color"
                    >
                        <AiOutlinePlus />
                        Assignment
                    </button>
                    <button type="submit" class="btn btn-light">
                        <FaEllipsisV />
                    </button>
                </div>
            </div>
        </div>
    )

}

export default AssignmentButtons;