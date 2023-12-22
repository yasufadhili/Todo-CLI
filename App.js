
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import {default as theme} from "./constants/COLORS.json";
import { FeatherIconsPack } from './constants/feather-icons';
import { MaterialIconsPack } from './constants/material-icons';
import { IconRegistry } from '@ui-kitten/components';

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
  </Layout>
);

export default () => (
  <>
    <IconRegistry icons={[FeatherIconsPack, MaterialIconsPack]} />
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <HomeScreen />
    </ApplicationProvider>
  </>
);