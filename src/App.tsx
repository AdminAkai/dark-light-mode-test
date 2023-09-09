import { ThemeProvider } from 'styled-components';

import Landing from 'src/containers/Landing/Landing';

import { Mode } from 'src/redux/features/settingsSlice/initialState';
import { selectMode } from 'src/redux/features/settingsSlice/selectors';
import { useAppSelector } from 'src/redux/store';

import { darkTheme, lightTheme } from 'src/theme';

function App() {
  const mode = useAppSelector(selectMode)

  const isDarkMode = mode === Mode.DARK

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Landing />
    </ThemeProvider>
  );
}

export default App;