import { useParams } from "react-router";
import db from '../../Database';
import { BsDot, BsFill5CircleFill } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";


function ToDo() {

    return (
        <div className="px-3">
            <div className="row">
                <div class="col-1">
                  <BsFill5CircleFill className="text-danger"/>
                </div>
                <div class="col">
                    <text class="text-danger">Grade A1</text><br />
                    <text class="text-dark small"
                        >100 points<BsDot />Sep 18 at
                        11:59pm</text
                    >
                </div>
                <div class="col-1">
                  <LiaTimesSolid />
                </div>
            </div> 
            <div className="row">
                <div class="col-1">
                  <BsFill5CircleFill className="text-danger"/>
                </div>
                <div class="col">
                    <text class="text-danger">Grade A2</text><br />
                    <text class="text-dark small"
                        >100 points<BsDot />Oct 2 at
                        11:59pm</text
                    >
                </div>
                <div class="col-1">
                  <LiaTimesSolid />
                </div>
            </div> 
        </div>
    )
    

}

export default ToDo;



