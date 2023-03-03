import classes from "../../sass/calculator/Calculator.module.scss";
import CalcKey from "./CalcKey";

const CalcControls = () => {
  const addHandler = () =>{

  }
  const subtactHandler = () => {

  }
  const multiplyHandler = () => {

  }
  const divisionHandler = () => {

  }
  const equalsHandler = () => {

  }
  return (
      <div className={classes.calculator__controls}>
      {/*  buttons here  */}
          <CalcKey>7</CalcKey>
          <CalcKey>8</CalcKey>
          <CalcKey>9</CalcKey>
          <CalcKey calcType={'SPECIAL'}>DEL</CalcKey>
          <CalcKey>4</CalcKey>
          <CalcKey>5</CalcKey>
          <CalcKey>6</CalcKey>
          <CalcKey >+</CalcKey>
          <CalcKey>1</CalcKey>
          <CalcKey>2</CalcKey>
          <CalcKey>3</CalcKey>
          <CalcKey>-</CalcKey>
          <CalcKey>.</CalcKey>
          <CalcKey>0</CalcKey>
          <CalcKey>/</CalcKey>
          <CalcKey>x</CalcKey>
          <CalcKey calcType={'SPECIAL'} calcAction={'RESET'} calcDataset={'reset'}>reset</CalcKey>
          <CalcKey calcType={'RESULT'} calcAction={'EQUALS'} calcDataset={'euqals'}>=</CalcKey>
      </div>
  )
}
export default CalcControls;