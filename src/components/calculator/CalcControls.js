import classes from "../../sass/calculator/Calculator.module.scss";
import CalcKey from "./CalcKey";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {calculatorActions} from "../../store/store";

const CalcControls = () => {
    const calcDispatch = useDispatch();
    const themeName = useSelector(state => state.theme.themeName);
  const addHandler = () =>{
    calcDispatch(calculatorActions.setAction({action: '+'}))
  }
  const subtactHandler = () => {
    calcDispatch(calculatorActions.setAction({action: '-'}))
  }
  const multiplyHandler = () => {
    calcDispatch(calculatorActions.setAction({action: '*'}))
  }
  const divisionHandler = () => {
    calcDispatch(calculatorActions.setAction({action: '/'}))
  }
  const equalsHandler = () => {
    calcDispatch(calculatorActions.equalsAction());
  }
  const delHandler = () => {
    calcDispatch(calculatorActions.deleteDigitAction())
  }
  const resetHandler = () => {
    calcDispatch(calculatorActions.clearAction())
  }
  return (
      <div data-theme={themeName} className={classes.calculator__controls}>
      {/*  buttons here  */}
          <CalcKey>7</CalcKey>
          <CalcKey>8</CalcKey>
          <CalcKey>9</CalcKey>
          <CalcKey calcType={'SPECIAL'} calcAction={delHandler}>DEL</CalcKey>
          <CalcKey>4</CalcKey>
          <CalcKey>5</CalcKey>
          <CalcKey>6</CalcKey>
          <CalcKey calcType={'action'} calcAction={addHandler}>+</CalcKey>
          <CalcKey>1</CalcKey>
          <CalcKey>2</CalcKey>
          <CalcKey>3</CalcKey>
          <CalcKey calcType={'action'} calcAction={subtactHandler}>-</CalcKey>
          <CalcKey>.</CalcKey>
          <CalcKey>0</CalcKey>
          <CalcKey calcType={'action'} calcAction={divisionHandler}>/</CalcKey>
          <CalcKey calcType={'action'} calcAction={multiplyHandler}>x</CalcKey>
          <CalcKey calcType={'SPECIAL'} calcAction={resetHandler} calcDataset={'reset'}>reset</CalcKey>
          <CalcKey calcType={'RESULT'} calcAction={equalsHandler} calcDataset={'euqals'}>=</CalcKey>
      </div>
  )
}
export default CalcControls;