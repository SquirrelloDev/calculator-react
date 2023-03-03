import {configureStore, createSlice} from "@reduxjs/toolkit";
import calculator from "../components/calculator/Calculator";
const themeSlice = createSlice({initialState: {themeName: 'dark'}, name:'theme', reducers:{
        toggleTheme(state, action){
            console.log(action.payload.themeIndex);
            switch (action.payload.themeIndex){
                case 0:
                    state.themeName = 'dark';
                    break;
                case 1:
                    state.themeName = 'light';
                    break;
                case 2:
                    state.themeName = 'cyber'
                    break;
            }

        }
    }
})
const calculatorSlice = createSlice({name: 'calculator', initialState: {value: 0}, reducers:{
    addAction(state, action){

    },
    subtractAction(state, action){

    },
    multiplyAction(state, action){

    },
    divideAction(state, action){

    },
    equalsAction(state, action){

    },
    deleteDigitAction(state, actions){

    },
    clearAction(state){

    }

    }})
const store = configureStore({reducer: {
    theme: themeSlice.reducer
}})
export const themeActions = themeSlice.actions;
export const calculatorActions = calculatorSlice.actions;
export default store;