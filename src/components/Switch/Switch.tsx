import { FC, useState } from "react";
import "./Switch.css";
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { selectMode } from 'src/redux/features/settingsSlice/selectors';
import { Mode } from 'src/redux/features/settingsSlice/initialState';
import { setMode } from 'src/redux/features/settingsSlice';

const Switch: FC = () => {
  const dispatch = useAppDispatch()

  const mode = useAppSelector(selectMode)
  const [isToggled, setIsToggled] = useState<boolean>(mode === Mode.DARK);

  const onToggle = (): void => {
    setIsToggled(!isToggled);
    if (mode === Mode.DARK) {
      dispatch(setMode(Mode.LIGHT))
    } else {
      dispatch(setMode(Mode.DARK))
    }
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}
export default Switch;