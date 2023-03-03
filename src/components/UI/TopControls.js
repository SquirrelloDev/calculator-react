import Switcher from "./Switcher";

function ThemeSwitcher() {
    return <div>
        <span>theme</span>
        <Switcher/>
    </div>;
}

const topControls = () => {
  return (
      <div>
          <p>calc</p>
          <ThemeSwitcher/>
      </div>
  )
}
export default topControls;