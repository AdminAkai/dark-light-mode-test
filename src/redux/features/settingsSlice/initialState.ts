export enum Mode { 
  DARK = "DARK", 
  LIGHT = "LIGHT" 
}

interface ISettingsInitialState {
  mode: Mode
}

const initialState: ISettingsInitialState = {
  mode: Mode.DARK
}

export default initialState;
