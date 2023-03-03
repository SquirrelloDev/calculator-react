import classes from "../../sass/Switch/Switch.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {themeActions} from "../../store/store";
let currentIndex = 0;
const Switcher = () => {
    const themeName = useSelector(state => state.theme.themeName);
    const themeDispatch = useDispatch();
    const changeThemeHandler = () => {
        if (currentIndex >= 2){
            currentIndex = 0;
        }
        else {
            currentIndex++;
        }
        themeDispatch(themeActions.toggleTheme({themeIndex: currentIndex}))
    }
  return (
      <div className={classes.switch}>
        <div className={classes.switch__numbers}><span>1</span><span>2</span><span>3</span></div>
        <div className={classes.switch__bg}>
          <button data-theme={themeName} onClick={changeThemeHandler} className={classes.switch__bg__btn}></button>
        </div>
      </div>
  )
}
export default Switcher;