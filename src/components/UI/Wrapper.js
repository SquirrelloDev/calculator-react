import classes from "../../sass/Wrapper.module.scss";
import {useSelector} from "react-redux";

const Wrapper = ({children}) => {
  const themeName = useSelector(state => state.theme.themeName);
  return <div data-theme={themeName} className={classes.wrapper}>{children}</div>
}
export default Wrapper;