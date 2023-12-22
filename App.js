import * as React from 'react';

import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import PaymentScreen from './screens/PaymentScreen';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    secondary: 'yellow',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <PaymentScreen />
    </PaperProvider>
  );
}
