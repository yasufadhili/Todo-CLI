
import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import {default as theme} from "./constants/COLORS.json";
import { FeatherIconsPack } from './constants/feather-icons';
import { MaterialIconsPack } from './constants/material-icons';
import { IconRegistry } from '@ui-kitten/components';
import Navigation from './navigation';
import { ThemeContext } from './context/ThemeContext';


export default () => {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  }

  return(
    <>
      <IconRegistry icons={[FeatherIconsPack, MaterialIconsPack]} />
      <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ApplicationProvider {...eva} theme={eva[theme]}>
        <Navigation />
      </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
};