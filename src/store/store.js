import {configureStore, createSlice} from "@reduxjs/toolkit";

const themeSlice = createSlice({initialState: {themeName: 'dark'}, name:'theme', reducers:{
        toggleTheme(state, action){
            switch (action.payload.themeIndex){
                case 0:
                    state.themeName = 'dark';
                    break;
                case 1:
                    state.themeName = 'light';
                    break;
                case 2:
                    state.themeName = 'cyber';
                    break;
                default:
                    state.themeName = 'dark';
            }
        }
    }
})
const calculatorSlice = createSlice({name: 'calculator', initialState: {currentScreenValue: '0', memoryValues: [], action: null, isResult: false}, reducers:{
    appendDigit(state,action){
        if(state.currentScreenValue.length >= 9) return;
        if(action.payload === '.' && state.currentScreenValue.includes('.')) return;
        if(state.currentScreenValue[0] === '0' && action.payload === '.' ){
            state.currentScreenValue += '.';
            return;
        }
        if(state.currentScreenValue[0] === '0' && state.currentScreenValue[1] !== '.'){
            state.currentScreenValue = action.payload;
            return
        }
        if(state.isResult){
            state.currentScreenValue = action.payload;
            state.isResult = false;
            return;
        }

        state.currentScreenValue += action.payload;
    },
    setAction(state, action){
        state.action = action.payload.action
        state.memoryValues.push(parseFloat(state.currentScreenValue));
        state.currentScreenValue = '0';
    },
    equalsAction(state, action){
        state.memoryValues.push(parseFloat(state.currentScreenValue));
        switch (state.action){
            case '+':
                state.currentScreenValue = state.memoryValues.reduce((previousValue, currentValue) => {
                    return previousValue + currentValue
                }).toFixed(4)
                break;
            case '-':
                state.currentScreenValue = state.memoryValues.reduce((previousValue, currentValue) => {
                    return previousValue - currentValue
                }).toFixed(4)
                break;
            case "*":
                state.currentScreenValue = state.memoryValues.reduce((previousValue, currentValue) => {
                    return previousValue * currentValue
                }).toFixed(4)
                break;
            case "/":
                state.currentScreenValue = state.memoryValues.reduce((previousValue, currentValue) => {
                    return previousValue / currentValue
                }).toFixed(4)
                break;
            default:
                throw new Error('No operator provided');
        }
        state.isResult = true;
        state.memoryValues.splice(0);
    },
    deleteDigitAction(state){
        if(state.currentScreenValue.length === 1){
            state.currentScreenValue = '0';
            return;
        }
        state.currentScreenValue = state.currentScreenValue.slice(0, -1)
    },
    clearAction(state){
        console.log(state.memoryValues);
        state.memoryValues.splice(0);
        state.currentScreenValue = '0';

    }

    }})
const store = configureStore({reducer: {
    theme: themeSlice.reducer,
    calculator: calculatorSlice.reducer
}})
export const themeActions = themeSlice.actions;
export const calculatorActions = calculatorSlice.actions;
export default store;