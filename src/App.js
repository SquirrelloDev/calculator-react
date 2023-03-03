import './sass/index.scss'
import Wrapper from "./components/UI/Wrapper";
import TopControls from "./components/UI/TopControls";
import Calculator from "./components/calculator/Calculator";
function App() {
  return (
      <>
        <Wrapper>
            <TopControls/>
            <Calculator/>
        </Wrapper>
      </>
  );
}

export default App;
