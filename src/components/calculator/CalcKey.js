import classes from "../../sass/calculator/Calculator.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {calculatorActions} from "../../store/store";
const CalcKey = (props) => {
  const calcDispatch = useDispatch();
  const themeName = useSelector(state => state.theme.themeName);
  const performAction =() =>{
    props.calcAction();
  }
  const enterDigit = () =>{
    calcDispatch(calculatorActions.appendDigit(props.children));
  }
  let keyClasses= classes.calculator__controls__key;
  if (props.calcType === 'SPECIAL'){
    keyClasses = `${classes['calculator__controls__key--special']} ${classes.calculator__controls__key}`;
  }

  return (
      <button data-theme={themeName} data-key={props.calcDataset} onClick={props.calcType !== undefined ? performAction : enterDigit} className={keyClasses}>{props.children}</button>
  )
}
export default CalcKey;