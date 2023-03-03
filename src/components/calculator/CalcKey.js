import classes from "../../sass/calculator/Calculator.module.scss";
const CalcKey = (props) => {
  let keyClasses= classes.calculator__controls__key;
  if (props.calcType === 'SPECIAL'){
    keyClasses = `${classes['calculator__controls__key--special']} ${classes.calculator__controls__key}`;
  }
  else {
  }
  const showDataAttribute =() =>{
  }
  return (
      <button data-key={props.calcDataset} onClick={showDataAttribute} className={keyClasses}>{props.children}</button>
  )
}
export default CalcKey;