import ModuleButtons from "../Modules/ModuleButtons";
import ModuleList from "../Modules/ModuleList";
import Status from "./Status";
import 'bootstrap/dist/css/bootstrap.min.css'; 


function Home() {
  return (
    <div className="row">
      <div className="col-9">
        <ModuleButtons />
        <hr/>
        <ModuleList />
      </div>
      <div className="col-3 p-3">
        <Status/>
      </div>
    </div>
  );
}
export default Home;