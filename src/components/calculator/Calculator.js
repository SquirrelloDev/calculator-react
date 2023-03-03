import CalcScreen from "./CalcScreen";
import CalcControls from "./CalcControls";
import classes from "../../sass/calculator/Calculator.module.scss";

const Calculator = () => {

  return (
      <div className={classes.calculator}>
          <CalcScreen/>
          <CalcControls/>
      </div>
  )
}
export default Calculator;