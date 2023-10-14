import ModuleButtons from "../Modules/ModuleButtons";
import ModuleList from "../Modules/ModuleList";
import Status from "./Status";

function Home() {
  return (
    <div className="row">
      <div className="col-10">
        <ModuleButtons />
        <hr/>
        <ModuleList />
      </div>
      <div className="col-2">
        <Status/>
      </div>
    </div>
  );
}
export default Home;