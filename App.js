
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import {default as theme} from "./constants/COLORS.json";
import { FeatherIconsPack } from './constants/feather-icons';
import { MaterialIconsPack } from './constants/material-icons';
import { IconRegistry } from '@ui-kitten/components';
import Navigation from './navigation';


export default () => (
  <>
    <IconRegistry icons={[FeatherIconsPack, MaterialIconsPack]} />
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <Navigation />
    </ApplicationProvider>
  </>
);