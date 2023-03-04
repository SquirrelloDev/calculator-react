import classes from "../../sass/calculator/Calculator.module.scss";
import {useSelector} from "react-redux";

const CalcScreen = () => {
    const currentScreenValue = useSelector(state => state.calculator.currentScreenValue);
  return (
      <div className={classes.calculator__screen}>
          <p>{currentScreenValue}</p>
      </div>
  )
}
export default CalcScreen;