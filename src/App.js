import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HoneyContainer from "./components/HoneyContainer";
import NewCakeContainer from "./components/NewCakeContainer";

  

function App() {
  return (
    <Provider store={store}> 
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <HoneyContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
