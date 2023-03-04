import classes from "../../sass/calculator/Calculator.module.scss";
import {useDispatch} from "react-redux";
import {calculatorActions} from "../../store/store";
const CalcKey = (props) => {
  const calcDispatch = useDispatch();
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
      <button data-key={props.calcDataset} onClick={props.calcType !== undefined ? performAction : enterDigit} className={keyClasses}>{props.children}</button>
  )
}
export default CalcKey;