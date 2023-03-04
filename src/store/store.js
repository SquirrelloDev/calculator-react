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
const calculatorSlice = createSlice({name: 'calculator', initialState: {currentScreenValue: '0', memoryValues: [], action: null}, reducers:{
    appendDigit(state,action){
        if(state.currentScreenValue.length >= 9) return;
        if(action.payload === '.' && state.currentScreenValue.includes('.')) return;
        if(state.currentScreenValue[0] === '0'){
            state.currentScreenValue = action.payload;
            return;
        }
        state.currentScreenValue += action.payload;
    },
    addAction(state, action){
        state.action = action.payload.action
        state.memoryValues.push(action.payload.value);
    },
    subtractAction(state, action){

    },
    multiplyAction(state, action){

    },
    divideAction(state, action){

    },
    equalsAction(state, action){

    },
    deleteDigitAction(state){
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