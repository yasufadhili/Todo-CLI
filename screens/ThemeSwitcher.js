import React, { useContext } from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggle = (value) => {
    toggleTheme(value);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Switch
        value={theme === darkTheme}
        onValueChange={handleToggle}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={theme === darkTheme ? '#f5dd4b' : '#f4f3f4'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default ThemeSwitcher;
