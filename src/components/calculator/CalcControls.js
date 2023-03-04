import classes from "../../sass/calculator/Calculator.module.scss";
import CalcKey from "./CalcKey";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {calculatorActions} from "../../store/store";

const CalcControls = () => {
    const calcDispatch = useDispatch();
  const addHandler = (value) =>{

  }
  const subtactHandler = (value) => {

  }
  const multiplyHandler = (value) => {

  }
  const divisionHandler = (value) => {

  }
  const equalsHandler = () => {

  }
  const delHandler = () => {
    calcDispatch(calculatorActions.deleteDigitAction())
  }
  const resetHandler = () => {
    calcDispatch(calculatorActions.clearAction())
  }
  return (
      <div className={classes.calculator__controls}>
      {/*  buttons here  */}
          <CalcKey>7</CalcKey>
          <CalcKey>8</CalcKey>
          <CalcKey>9</CalcKey>
          <CalcKey calcType={'SPECIAL'} calcAction={delHandler}>DEL</CalcKey>
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
          <CalcKey calcType={'SPECIAL'} calcAction={resetHandler} calcDataset={'reset'}>reset</CalcKey>
          <CalcKey calcType={'RESULT'} calcAction={equalsHandler} calcDataset={'euqals'}>=</CalcKey>
      </div>
  )
}
export default CalcControls;