import {useSetData} from "../hooks/useSetData";
import {UsersComp} from "./users/UsersComp";

function App() {
  const {value, status, click, change, target} = useSetData();

  return (
    <div className="App">
        <UsersComp />
        {target && <h1 data-testid={"main-title"}>{target}</h1>}
        { value != null && <div>Not null value</div> }

        {status &&
            <div data-testid={"status-block"}>Status active</div>
        }

        <h1>Hello World</h1>

        <button
            data-testid={"status-btn"}
            onClick={click}
        >
            Click
        </button>

        <input
            data-testid={"input-target"}
            type={"text"}
            placeholder={"Write here"}
            onChange={change}
            value={target}
        />
    </div>
  );
}

export default App;
