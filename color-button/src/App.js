import "./App.css";
import { useState } from "react";

const PRIMARY_COLOR = "red";
const SECONDARY_COLOR = "blue";
const DISABLED_COLOR = "gray";

function App() {
  const [color, setColor] = useState(SECONDARY_COLOR);
  const [bgColor, setBgColor] = useState(PRIMARY_COLOR);
  const [disabled, setDisabled] = useState(false);

  const onClickHandler = () => {
    if (color === SECONDARY_COLOR) {
      setColor(PRIMARY_COLOR);
      setBgColor(SECONDARY_COLOR);
      return;
    }

    setColor(SECONDARY_COLOR);
    setBgColor(PRIMARY_COLOR);
  };

  const onChangeHandler = (e) => {
    setDisabled(e.target.checked);

    if (e.target.checked) {
      setBgColor(DISABLED_COLOR);
      return;
    }

    if (color === SECONDARY_COLOR) {
      setBgColor(PRIMARY_COLOR);
      return;
    }

    if (color === PRIMARY_COLOR) {
      setBgColor(SECONDARY_COLOR);
      return;
    }
  };

  return (
    <div>
      <button
        onClick={onClickHandler}
        style={{ backgroundColor: bgColor }}
        disabled={disabled}
      >
        Change to {color}
      </button>
      <input
        id="disable-button-checkbox"
        type="checkbox"
        onChange={onChangeHandler}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
