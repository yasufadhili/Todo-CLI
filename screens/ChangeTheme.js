import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { ThemeContext } from '../context/ThemeContext';

export const WelcomeScreen = ({ navigation }) => {

  const navigateSignin = () => {
    navigation.navigate('SigninScreen');
  };

  const themeContext = useContext(ThemeContext);

  const switchTheme = () => {
    themeContext.toggleTheme
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button style={{ marginVertical: 4 }} onPress={navigateSignin}>OPEN Signin</Button>
        <Button style={{ marginVertical: 4 }} onPress={switchTheme}>TOGGLE THEME</Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});