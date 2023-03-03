import './sass/index.scss'
import Wrapper from "./components/UI/Wrapper";
import TopControls from "./components/UI/TopControls";
import Calculator from "./components/calculator/Calculator";
import {Provider} from "react-redux";
import store from "./store/store";
function App() {
  return (
      <Provider store={store}>
        <Wrapper>
            <TopControls/>
            <Calculator/>
        </Wrapper>
      </Provider>
  );
}

export default App;
