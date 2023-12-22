import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const ExampleComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={{ backgroundColor: theme.backgroundColor }}>
      <Text style={{ color: theme.textColor }}>Hello, themed world!</Text>
      {/* Other themed components */}
    </View>
  );
};

export default ExampleComponent;
