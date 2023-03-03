import Switcher from "./Switcher";
import classes from "../../sass/TopControls.module.scss";

function ThemeSwitcher() {
    return <div className={classes.header__theme}>
        <span>theme</span>
        <Switcher/>
    </div>;
}

const topControls = () => {
  return (
      <div className={classes.header}>
          <h1>calc</h1>
          <ThemeSwitcher/>
      </div>
  )
}
export default topControls;