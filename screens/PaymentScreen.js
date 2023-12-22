import * as React from 'react';
import { useTheme } from 'react-native-paper';
import { View } from 'react-native';

export default function PaymentScreen() {
  const theme = useTheme();
  
  return <View style={{ backgroundColor: theme.colors.primary, flex: 1 }} />;
}
