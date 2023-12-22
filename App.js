
import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import {default as theme} from "./constants/COLORS.json";
import { FeatherIconsPack } from './constants/feather-icons';
import { MaterialIconsPack } from './constants/material-icons';
import { IconRegistry } from '@ui-kitten/components';
import Navigation from './navigation';
import { ThemeContext } from './context/ThemeContext';
import WelcomeScreen from './screens/WelcomeScreen';
import { PaperProvider } from 'react-native-paper';


const App = () => {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  }

  return(
    <>
      <PaperProvider>
        <IconRegistry icons={[FeatherIconsPack, MaterialIconsPack]} />
        <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ApplicationProvider {...eva} theme={eva[theme]}>
          <WelcomeScreen />
        </ApplicationProvider>
        </ThemeContext.Provider>
      </PaperProvider>
    </>
  );
};

export default App;
