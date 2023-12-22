import React, { createContext, useState, useEffect } from 'react';
import { Appearance } from 'react-native';
import lightTheme from '../constants/THEMES';
import darkTheme from '../constants/THEMES';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const storeThemePreference = async (selectedTheme) => {
    try {
      await AsyncStorage.setItem('themePreference', selectedTheme);
    } catch (error) {
      console.error('Error storing theme preference:', error);
    }
  };

  const getStoredThemePreference = async () => {
    try {
      const storedTheme = await AsyncStorage.getItem('themePreference');
      if (storedTheme !== null) {
        return storedTheme;
      }
      return Appearance.getColorScheme();
    } catch (error) {
      console.error('Error getting stored theme preference:', error);
    }
  };

  useEffect(() => {
    getStoredThemePreference().then((storedTheme) => {
      const selectedTheme = storedTheme === 'dark' ? darkTheme : lightTheme;
      setTheme(selectedTheme);
    });
  }, []);

  const toggleTheme = (value) => {
    const selectedTheme = value ? darkTheme : lightTheme;
    setTheme(selectedTheme);
    storeThemePreference(value ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
