import Switcher from "./Switcher";
import classes from "../../sass/TopControls.module.scss";
import {useSelector} from "react-redux";

const TopControls = () => {
    const themeName = useSelector(state => state.theme.themeName);
    return (
        <div className={classes.header}>
            <h1 data-theme={themeName}>calc</h1>
            <ThemeSwitcher/>
        </div>
    )
}
function ThemeSwitcher() {
    const themeName = useSelector(state => state.theme.themeName);
    return <div data-theme={themeName} className={classes.header__theme}>
        <span>theme</span>
        <Switcher/>
    </div>;
}


export default TopControls;