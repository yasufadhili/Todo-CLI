import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Text } from 'react-native';

export default function Main() {
  return (
    <PaperProvider>
      <Text>Hello</Text>
    </PaperProvider>
  );
}