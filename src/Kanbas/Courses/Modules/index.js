import ModuleList from "./ModuleList";
import 'bootstrap';
import ModuleButtons from "./ModuleButtons";

function Modules() {
  return (
    <div className="p-3">
      <ModuleButtons />
      <hr/>
      <ModuleList />
    </div>
  );
}
export default Modules;
