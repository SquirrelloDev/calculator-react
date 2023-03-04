import classes from "../../sass/calculator/Calculator.module.scss";
import {useSelector} from "react-redux";

const CalcScreen = () => {
    const themeName = useSelector(state => state.theme.themeName);
    const currentScreenValue = useSelector(state => state.calculator.currentScreenValue);
  return (
      <div data-theme={themeName} className={classes.calculator__screen}>
          <p>{currentScreenValue}</p>
      </div>
  )
}
export default CalcScreen;