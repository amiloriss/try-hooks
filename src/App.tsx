import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/rootReducer";

const App = () => {
  const carsSelector = useSelector((store: RootState) => store.cars);

  return (
    <div>
      <ul>
        {carsSelector.map((element) => {
          const { id, brand, color } = element;
          return (
            <li
              key={id}
              style={{
                border: "1px solid black",
                marginBottom: "5px",
                padding: "10px",
              }}
            >
              brand is {brand} <br />
              color is {color}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
