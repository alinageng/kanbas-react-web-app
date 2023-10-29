import { useSelector } from "react-redux";

function HelloRedux() {
  //   const [message, setMessage] = useState("Hello Redux");
  const { message } = useSelector((state) => state.helloReducer);
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}

export default HelloRedux;